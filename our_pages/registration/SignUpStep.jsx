"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import PhoneNumberInput from "./PhoneNumberInput";
import apiRequest from "@/utils/apiRequest";
import { phoneOptions } from "@/utils/data";
import axios from "axios";

export default function SignUpStep({ handleNext, setFormData, formData }) {
  const locale = useLocale();
  const t = useTranslations("registration.signUpStep");
  const [selectedPhone, setSelectedPhone] = useState(phoneOptions[0]);
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateForm = () => {
    const newError = { firstName: "", lastName: "", email: "", phone: "" };

    if (!formData.firstName) newError.firstName = "First Name is required";
    if (!formData.lastName) newError.lastName = "Last Name is required";
    if (!formData.email) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Please enter a valid email";
    }
    if (!formData.phone) newError.phone = "Phone Number is required";

    setError(newError);

    // Check if there are any errors
    return Object.values(newError).every((val) => !val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // try {
      const data = {
        firstName: formData?.firstName,
        lastName: formData?.lastName,
        email: formData?.email,
        phone: `${selectedPhone?.code}${formData?.phone}`,
      };
      const config = {
        method: "put",
        url: "https://my.primexcapital.com/client-api/registration?version=1.0.0",
        data: data,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      try {
        await axios(config);
      } catch (error) {
        const apiErrors = error?.response?.data?.errors.children;
        const firstName = apiErrors.firstName.errors?.join(", ") || "";
        const lastName = apiErrors.lastName.errors?.join(", ") || "";
        const email = apiErrors.email.errors?.join(", ") || "";
        const phone = apiErrors.phone.errors?.join(", ") || "";

        if (firstName || lastName || email || phone) {
          setError((prevErrors) => ({
            ...prevErrors,
            firstName,
            lastName,
            email,
            phone,
          }));
        } else {
          setFormData({
            ...data,
            fullName: `${data?.firstName} ${data.lastName}`,
            phone: `${selectedPhone?.code}${formData?.phone}`,
          });
          handleNext();
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sm:flex w-full justify-between sm:mb-3">
        <div className="w-full sm:w-[49%]">
          <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
            {t("first_name_label")}
            <input
              type="text"
              placeholder={t("first_name_placeholder")}
              className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </label>
          {error?.firstName && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {error?.firstName}
            </p>
          )}
        </div>
        <div className="w-full sm:w-[49%]">
          <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
            {t("last_name_label")}
            <input
              type="text"
              placeholder={t("last_name_placeholder")}
              className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </label>
          {error?.lastName && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {error?.lastName}
            </p>
          )}
        </div>
      </div>
      <div className="w-full sm:mb-3">
        <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
          {t("email_label")}
          <input
            type="email"
            placeholder={t("email_placeholder")}
            className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </label>
        {error?.email && (
          <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
            {error?.email}
          </p>
        )}
      </div>
      <div className="w-full mb-3" dir="ltr">
        <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
          {t("phone_number_label")}
          <PhoneNumberInput
            value={formData.phone}
            handleInputChange={handleInputChange}
            setSelectedPhone={setSelectedPhone}
            selectedPhone={selectedPhone}
          />
        </label>
        {error?.phone && (
          <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
            {error?.phone}
          </p>
        )}
      </div>
      <div className="mt-8">
        <button className="bg-cc dark:bg-cc-dark border border-e2 dark:border-e2-dark rounded-md sm:rounded-lg px-5 py-4 text-tm dark:text-tm-dark text-base sm:text-xl font-semibold w-full">
          {t("sign_in_button")}
        </button>
        <button
          type="submit"
          className="bg-pcp dark:bg-pcp-dark border border-pcp dark:border-pcp-dark rounded-md sm:rounded-lg px-5 py-4 text-cb dark:text-nb-dark text-base sm:text-xl font-semibold w-full mt-3"
        >
          {t("continue_button")}
        </button>
      </div>
      <p className="text-ts dark:text-ts-dark text-xs font-normal text-center mb-0 mt-4 sm:px-5">
        {t("risk_warning")}
      </p>
    </form>
  );
}
