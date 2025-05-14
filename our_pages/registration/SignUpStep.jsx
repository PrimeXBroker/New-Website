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
        ...formData,
        phone: `${selectedPhone?.code}${formData?.phone}`,
      };
      console.log(data, "data");
      const config = {
        method: "put",
        url: "https://my.primexcapital.com/client-api/registration?version=1.0.0",
        data: {
          firstName: "Mehtab",
          lastName: "Kazmi",
          email: "mehtabkazmi5@gmail.com",
          phone: "+93453453563",
          birthDate: "",
          country: "",
          city: "",
          language: "",
          password: {
            first: "",
            second: "",
          },
          token: "",
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      console.log("Request Config:", config);

      axios(config)
        .then((response) => {
          console.log("Response:", response);
        })
        .catch((error) => {
          if (error.response) {
            console.log("Response Error:", error.response.data);
          } else if (error.request) {
            console.log("Request Error:", error.request);
          } else {
            console.log("General Error:", error.message);
          }
        });
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
              {t("error_message")}
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
              {t("error_message")}
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
            {t("error_message")}
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
            {t("error_message")}
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
