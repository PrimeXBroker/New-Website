"use client";
import React, { useState, useEffect } from "react";
import { FiCheck } from "react-icons/fi";
import Step1BasicInfo from "./Step1BasicInfo";
import Step2SecurityLocation from "./Step2SecurityLocation";
import Step3EntitySetup from "./Step3EntitySetup";
import * as csc from "countrycitystatejson";
import axios from "axios";
import { phoneOptions } from "@/utils/data";
import RegistrationModal from "./RegistrationModal";
import { useLocale, useTranslations } from "next-intl";
import { getRegistrationTrackingData } from "@/utilities/registrationTracking";
import { getLoginUrl } from "@/utilities/getLoginUrl";

const REGISTRATION_URL =
  "https://my.primexcapital.com/client-api/registration?version=1.0.0";
const SEND_PIN_URL =
  "https://my.primexcapital.com/client-api/registration/send-pin-by-token?version=1.0.0";
const JSON_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
const REQUEST_TIMEOUT = 30000;
const EMAIL_REGEX = /\S+@\S+\.\S+/;
const EMAIL_EXISTS_REGEX = /already|exist|registered|duplicate/i;

const STEPS = [1, 2, 3];
const STEP_FIELDS = {
  1: ["firstName", "lastName", "email", "phone"],
  2: ["birthDate", "country", "city", "language"],
  3: ["password"],
};
const EMPTY_ERRORS = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: "",
  country: "",
  city: "",
  language: "",
  password: "",
};

export default function SignUpForm() {
  const t = useTranslations("signUpForm");
  const locale = useLocale();
  const [currentStep, setCurrentStep] = useState(1);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState("success");
  const [errors, setErrors] = useState({ ...EMPTY_ERRORS });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationToken, setRegistrationToken] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    day: null,
    month: null,
    year: null,
    country: null,
    city: null,
    language: { label: "English", value: "en" },
    entity: { label: "PrimeX Capital LTD - ST. Lucia", value: "lucia" },
    password: "",
    newsletter: false,
  });

  useEffect(() => {
    const countriesData = csc.getCountries();
    const countriesList = countriesData.map((countryData) => ({
      label: countryData?.name,
      isoCode: countryData?.shortName,
      code: `+${countryData?.phone || "1"}`,
      flag: `https://flagcdn.com/w40/${countryData?.shortName?.toLowerCase()}.png`,
    }));
    setCountries(countriesList);
    setSelectedPhone(phoneOptions?.[0] ?? countriesList[0]);
    if (countriesList.length > 0 && !formData.country) {
      setFormData((prev) => ({ ...prev, country: countriesList[0] }));
    }
    axios
      .get("https://ipapi.co/country/")
      .then((res) => {
        const userCountryCode = res.data?.trim().toUpperCase();
        const detectedCountry = countriesList.find(
          (c) => c.isoCode === userCountryCode,
        );
        if (detectedCountry) {
          setSelectedPhone(detectedCountry);
          setFormData((prev) => ({ ...prev, country: detectedCountry }));
        }
      })
      .catch((err) => {
        console.warn("Could not detect country:", err);
      });
  }, []);

  useEffect(() => {
    if (!formData?.country?.isoCode) {
      setCities([]);
      return;
    }
    try {
      const states = csc.getStatesByShort(formData.country.isoCode);
      let cityList = [];
      if (Array.isArray(states)) {
        for (const stateName of states) {
          const stateCities = csc.getCities(
            formData.country.isoCode,
            stateName,
          );
          if (Array.isArray(stateCities)) {
            cityList = cityList.concat(
              stateCities.map((city) => ({
                label: typeof city === "object" ? city.name : city,
                value: typeof city === "object" ? city.name : city,
              })),
            );
          }
        }
      }
      const uniqueCities = Array.from(
        new Map(cityList.map((city) => [city.label, city])).values(),
      );
      const sortedCities = uniqueCities.sort((a, b) =>
        a.label.localeCompare(b.label),
      );
      setCities(sortedCities);
      setFormData((prev) => ({ ...prev, city: sortedCities[0] || null }));
    } catch (err) {
      console.error("Error fetching cities:", err);
      setCities([]);
      setFormData((prev) => ({ ...prev, city: null }));
    }
  }, [formData?.country]);
  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
    setErrors((prev) => {
      const next = { ...prev };
      Object.keys(newData).forEach((field) => {
        next[field] = "";
      });
      if ("day" in newData || "month" in newData || "year" in newData) {
        next.birthDate = "";
      }
      return next;
    });
  };

  const getFieldErrors = () => {
    const next = { ...EMPTY_ERRORS };
    const firstName = formData?.firstName?.trim();
    const lastName = formData?.lastName?.trim();
    const email = formData?.email?.trim();

    if (!firstName) next.firstName = t("errors.first_name_required");
    if (!lastName) next.lastName = t("errors.last_name_required");
    if (!email) {
      next.email = t("errors.email_required");
    } else if (!EMAIL_REGEX.test(email)) {
      next.email = t("errors.email_invalid");
    }
    if (!formData?.phone) {
      next.phone = t("errors.phone_required");
    } else if (formData.phone.replace(/\D/g, "").length < 9) {
      next.phone = t("errors.phone_min");
    }
    if (!formData?.day || !formData?.month || !formData?.year) {
      next.birthDate = t("errors.birth_date_required");
    }
    if (!formData?.country) next.country = t("errors.country_required");
    if (!formData?.city) next.city = t("errors.city_required");
    if (!formData?.language) next.language = t("errors.language_required");
    if (!formData?.password) next.password = t("errors.password_required");

    return next;
  };

  const validateStep = (step) => {
    const fieldErrors = getFieldErrors();
    const next = { ...EMPTY_ERRORS };
    STEP_FIELDS[step].forEach((field) => {
      next[field] = fieldErrors[field];
    });
    setErrors(next);
    return !STEP_FIELDS[step].some((field) => fieldErrors[field]);
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) return;
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleApiError = (error) => {
    const apiErrors = error?.response?.data?.errors?.children || {};
    const readFieldError = (field) =>
      Array.isArray(apiErrors?.[field]?.errors)
        ? apiErrors[field].errors.join(", ")
        : "";

    const emailError = readFieldError("email");
    if (EMAIL_EXISTS_REGEX.test(emailError)) {
      setModalState("exists");
      setIsModalOpen(true);
      return;
    }

    const fieldErrors = { ...EMPTY_ERRORS };
    let hasFieldError = false;
    Object.keys(EMPTY_ERRORS).forEach((field) => {
      const message = readFieldError(field);
      if (message) {
        fieldErrors[field] = message;
        hasFieldError = true;
      }
    });

    if (hasFieldError) {
      setErrors(fieldErrors);
      const firstErrorStep = STEPS.find((step) =>
        STEP_FIELDS[step].some((field) => fieldErrors[field]),
      );
      if (firstErrorStep) setCurrentStep(firstErrorStep);
      return;
    }

    const status = error?.response?.status;
    const message = String(
      error?.response?.data?.message || error?.message || "",
    ).toLowerCase();

    if (
      error?.code === "ECONNABORTED" ||
      error?.code === "ETIMEDOUT" ||
      message.includes("timeout")
    ) {
      setModalState("timeout");
    } else if (
      status === 409 ||
      message.includes("already exist") ||
      message.includes("already registered")
    ) {
      setModalState("exists");
    } else {
      setModalState("server_error");
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    const fieldErrors = getFieldErrors();
    setErrors(fieldErrors);
    const firstErrorStep = STEPS.find((step) =>
      STEP_FIELDS[step].some((field) => fieldErrors[field]),
    );
    if (firstErrorStep) {
      setCurrentStep(firstErrorStep);
      return;
    }

    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();

    const data = {
      firstName,
      lastName,
      city: formData?.city?.value ?? formData?.city,
      email: formData.email.trim(),
      phone: `${selectedPhone?.code}${formData?.phone}`,
      country: formData?.country?.isoCode,
      fullName: `${firstName} ${lastName}`.trim(),
      birthDate: {
        year: Number(formData.year),
        month: Number(formData.month),
        day: Number(formData.day),
      },
      password: { first: formData?.password, second: formData?.password },
      ...getRegistrationTrackingData(),
    };

    setIsSubmitting(true);
    try {
      const result = await axios({
        method: "put",
        url: REGISTRATION_URL,
        data,
        headers: JSON_HEADERS,
        timeout: REQUEST_TIMEOUT,
      });

      const token = result?.data?.registrationToken;
      if (!token) {
        setModalState("server_error");
        setIsModalOpen(true);
        return;
      }

      await axios({
        method: "post",
        url: SEND_PIN_URL,
        data: { token },
        headers: JSON_HEADERS,
        timeout: REQUEST_TIMEOUT,
      });

      setRegistrationToken(token);
      setModalState("success");
      setIsModalOpen(true);
    } catch (error) {
      handleApiError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resendVerification = async () => {
    if (!registrationToken) {
      setIsModalOpen(false);
      return;
    }

    try {
      await axios({
        method: "post",
        url: SEND_PIN_URL,
        data: { token: registrationToken },
        headers: JSON_HEADERS,
        timeout: REQUEST_TIMEOUT,
      });
      setIsModalOpen(false);
    } catch (error) {
      const timedOut =
        error?.code === "ECONNABORTED" || error?.code === "ETIMEDOUT";
      setModalState(timedOut ? "timeout" : "server_error");
    }
  };

  const handleModalPrimaryAction = () => {
    if (modalState === "success" || modalState === "exists") {
      window.location.href = getLoginUrl(locale);
      return;
    }

    setIsModalOpen(false);
    if (modalState === "server_error" || modalState === "timeout") {
      handleSubmit();
    }
  };

  const handleModalSecondaryAction = () => {
    if (modalState === "success") {
      resendVerification();
      return;
    }

    if (modalState === "exists") {
      setIsModalOpen(false);
      setErrors({ ...EMPTY_ERRORS });
      updateFormData({ email: "" });
      setCurrentStep(1);
      return;
    }

    if (modalState === "server_error") {
      window.location.href = `/${locale}/contact`;
      return;
    }

    setIsModalOpen(false);
  };

  const steps = [
    { id: 1, title: t("steps.basic_info") },
    { id: 2, title: t("steps.security_location") },
    { id: 3, title: t("steps.entity_setup") },
  ];

  return (
    <section className="bg-p dark:bg-p-dark pt-28 pb-16 sm:pt-28 sm:pb-28">
      <div className="container flex items-center justify-center">
        <div className="w-full md:w-[90%] lg:w-[65%] xl:w-[55%] bg-cc dark:bg-cc-dark border border-e1 dark:border-e1-dark rounded-[20px] px-4 sm:px-6 py-6 md:px-10 md:py-10">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-3xl text-tm dark:text-tm-dark">{t("title")}</h1>
            <span className="text-xs text-ts dark:text-ts-dark bg-transparent border border-e2 dark:border-e2-dark px-4 py-2 rounded-full">
              {t("step_counter", { current: currentStep, total: 3 })}
            </span>
          </div>
          <p className="text-sm font-medium text-ts dark:text-ts-dark">
            {t("subtitle")}
          </p>
          <div className="grid grid-cols-3 gap-3 relative mt-[26px] mb-[14px]">
            {steps.map((step) => {
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;

              return (
                <div key={step.id} className="relative pb-2">
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                        isCompleted
                          ? "bg-gc dark:bg-gc-dark"
                          : isCurrent
                            ? "bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark"
                            : "bg-e1 dark:bg-e1-dark text-ts dark:text-ts-dark"
                      }`}
                    >
                      {isCompleted ? (
                        <FiCheck className="w-3.5 h-3.5 text-p dark:text-p-dark stroke-[3]" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <span
                      className={`text-xs truncate ${
                        isCompleted
                          ? "text-gc dark:text-gc-dark"
                          : isCurrent
                            ? "text-tm dark:text-tm-dark font-semibold"
                            : "text-ts dark:text-ts-dark font-medium"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  <div
                    className={`h-[2px] w-full rounded-full ${
                      isCurrent
                        ? "bg-pcp dark:bg-pcp-dark"
                        : isCompleted
                          ? "bg-e1 dark:bg-e1-dark"
                          : "bg-e1 dark:bg-e1-dark"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {currentStep === 1 && (
            <Step1BasicInfo
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
              selectedPhone={selectedPhone}
              setSelectedPhone={setSelectedPhone}
              countries={countries}
              errors={errors}
            />
          )}

          {currentStep === 2 && (
            <Step2SecurityLocation
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNext}
              onPrev={handlePrev}
              countries={countries}
              cities={cities}
              errors={errors}
            />
          )}

          {currentStep === 3 && (
            <Step3EntitySetup
              formData={formData}
              updateFormData={updateFormData}
              onPrev={handlePrev}
              onSubmit={handleSubmit}
              errors={errors}
              isSubmitting={isSubmitting}
            />
          )}
        </div>
      </div>
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        stateType={modalState}
        email={formData.email}
        onPrimaryAction={handleModalPrimaryAction}
        onSecondaryAction={handleModalSecondaryAction}
      />
    </section>
  );
}
