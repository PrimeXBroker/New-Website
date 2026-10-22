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
import { useTranslations } from "next-intl";

export default function SignUpForm() {
  const t = useTranslations("signUpForm");
  const [currentStep, setCurrentStep] = useState(1);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState("success");

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
  };

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    setModalState("success");
    setIsModalOpen(true);
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
            <h1 className="text-3xl text-tm dark:text-tm-dark">
              {t("title")}
            </h1>
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
            />
          )}

          {currentStep === 3 && (
            <Step3EntitySetup
              formData={formData}
              updateFormData={updateFormData}
              onPrev={handlePrev}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        stateType={modalState}
        email={formData.email}
        onPrimaryAction={() => {
          alert("Primary action clicked!");
          setIsModalOpen(false);
        }}
        onSecondaryAction={() => {
          alert("Secondary action clicked!");
          setIsModalOpen(false);
        }}
      />
    </section>
  );
}
