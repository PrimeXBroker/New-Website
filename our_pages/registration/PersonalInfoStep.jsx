"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdCalendar } from "react-icons/io";
import CustomSelectDropdown from "./CustomSelectDropdown";
import { useLocale, useTranslations } from "next-intl";

export default function PersonalInfoStep({ handleNext, handleBack }) {
  const locale = useLocale();
  const t = useTranslations("registration.personalInfoStep");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [error, setError] = useState(false);

  const languageOptions = [
    { label: "English", value: "en" },
    { label: "Arabic", value: "ar" },
  ];

  const cityOptions = [
    { label: "Abu Dhabi", value: "Abu Dhabi" },
    { label: "Ajmān", value: "Ajmān" },
    { label: "Al Ain", value: "Al Ain" },
    { label: "Al Awdah", value: "Al Awdah" },
  ];

  const countryOptions = [
    {
      label: "Afghanistan",
      value: "Afghanistan",
      flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Samoa+Am%C3%A9ricaines.svg",
    },
    {
      label: "Albanie",
      value: "Albanie",
      flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Albanie.svg",
    },
    {
      label: "Algérie",
      value: "Algérie",
      flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Alg%C3%A9rie.svg",
    },
    {
      label: "Samoa Américaines",
      value: "Samoa Américaines",
      flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Afghanistan.svg",
    },
  ];

  return (
    <form>
      <div className="flex flex-col mb-3">
        <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
          {t("birthday_label")}
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          customInput={React.createElement(
            React.forwardRef(({ value, onClick }, ref) => (
              <button
                type="button"
                onClick={onClick}
                ref={ref}
                className={`appearance-none text-left flex items-center justify-between mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
              >
                <span
                  className={`${
                    value
                      ? "text-tm dark:text-tm-dark"
                      : "text-ts dark:text-ts-dark"
                  }`}
                >
                  {value || t("birthday_placeholder")}
                </span>
                <IoMdCalendar className="text-ts dark:text-ts-dark text-xl sm:text-2xl" />
              </button>
            ))
          )}
        />
        {error && (
          <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
            {t("error_message")}
          </p>
        )}
      </div>
      <div className="md:flex w-full justify-between sm:mb-3">
        <div className="w-full md:w-[49%] mb-3 sm:mb-0">
          <CustomSelectDropdown
            label={t("country_label")}
            options={countryOptions}
            selected={selectedCountry}
            onChange={setSelectedCountry}
            searchInput={true}
            flag={true}
          />
          {error && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {t("error_message")}
            </p>
          )}
        </div>
        <div className="w-full md:w-[49%] mb-3 sm:mb-0">
          <CustomSelectDropdown
            label={t("city_label")}
            options={cityOptions}
            selected={selectedCity}
            onChange={setSelectedCity}
            searchInput={true}
            flag={false}
          />
          {error && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {t("error_message")}
            </p>
          )}
        </div>
      </div>
      <div className="w-full">
        <CustomSelectDropdown
          label={t("preferred_language_label")}
          options={languageOptions}
          selected={selectedLanguage}
          onChange={setSelectedLanguage}
          searchInput={false}
          flag={false}
        />
        {error && (
          <p className="text-rc dark:text-rc-dark font-medium text-sm mt-2">
            {t("error_message")}
          </p>
        )}
      </div>
      <div className="mt-8">
        <button
          onClick={handleBack}
          className="bg-cc dark:bg-cc-dark border border-e2 dark:border-e2-dark rounded-md sm:rounded-lg px-5 py-4 text-tm dark:text-tm-dark text-base sm:text-xl font-semibold w-full"
        >
          {t("back_button")}
        </button>
        <button
          onClick={handleNext}
          className="bg-pcp dark:bg-pcp-dark border border-pcp dark:border-pcp-dark rounded-md sm:rounded-lg px-5 py-4 text-nb dark:text-nb-dark text-base sm:text-xl font-semibold w-full mt-3"
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
