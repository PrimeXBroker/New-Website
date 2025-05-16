"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdCalendar } from "react-icons/io";
import CustomSelectDropdown from "./CustomSelectDropdown";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import moment from "moment-timezone";
import { Country, City } from "country-state-city";

export default function PersonalInfoStep({
  handleNext,
  handleBack,
  setFormData,
  formData,
}) {
  const locale = useLocale();
  const userTimeZone = moment.tz.guess();

  const t = useTranslations("registration.personalInfoStep");
  const [selectedDate, setSelectedDate] = useState(null);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedCity, setSelectedCity] = useState("");
  // const [selectedCountry, setSelectedCountry] = useState("");
  // const [selectedCity, setSelectedCity] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [errors, setErrors] = useState({
    birthDate: "",
    country: "",
    city: "",
    language: "",
  });

  const languageOptions = [
    { label: "English", value: "en" },
    { label: "Arabic", value: "ar" },
  ];

  // const cityOptions = [
  //   { label: "Abu Dhabi", value: "Abu Dhabi" },
  //   { label: "Ajmān", value: "Ajmān" },
  //   { label: "Al Ain", value: "Al Ain" },
  //   { label: "Al Awdah", value: "Al Awdah" },
  // ];

  // const countryOptions = [
  //   {
  //     label: "Afghanistan",
  //     value: "AF",
  //     flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Samoa+Am%C3%A9ricaines.svg",
  //   },
  //   {
  //     label: "Albanie",
  //     value: "AL",
  //     flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Albanie.svg",
  //   },
  //   {
  //     label: "Algérie",
  //     value: "DZ",
  //     flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Alg%C3%A9rie.svg",
  //   },
  //   {
  //     label: "Samoa Américaines",
  //     value: "AS",
  //     flag: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Afghanistan.svg",
  //   },
  // ];

  useEffect(() => {
    const countryList = Country.getAllCountries().map((country) => ({
      label: country.name,
      value: country.isoCode,
      flag: country.flag,
      // flag: `https://flagcdn.com/w40/${country.isoCode.toLowerCase()}.png`, // Use CDN for flags÷
    }));

    setCountries(countryList);
  }, []);

  useEffect(() => {
    if (!selectedCountry) return;

    const cityList = City.getCitiesOfCountry(selectedCountry?.value).map(
      (city) => ({
        label: city.name,
        value: city.name,
      })
    );
    console.log(cityList, "selectedCountry");

    setCities(cityList);
    setSelectedCity("");
  }, [selectedCountry]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation logic
    const errorsList = {};
    if (!selectedDate) errorsList.birthDate = "Please Select DOB";
    if (!selectedCountry) errorsList.country = "Please Select Country";
    if (!selectedCity) errorsList.city = "Please Select City";
    if (!selectedLanguage) errorsList.language = "Please Select Language";

    setErrors(errorsList);

    if (Object.keys(errorsList).length === 0) {
      const data = {
        ...formData,
        country: selectedCountry.value,
        city: selectedCity,
        language: selectedLanguage,
        birthDate: moment(selectedDate).tz(userTimeZone).format("YYYY-MM-DD"),
        password: { first: "", second: "" },
      };
      console.log(data, "data");

      const config = {
        method: "put",
        url: "https://my.primexcapital.com/client-api/registration?version=1.0.0",
        data,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      try {
        const response = await axios(config);
      } catch (error) {
        console.log(error, "error");

        const apiErrors = error?.response?.data?.errors.children;
        const country = apiErrors.country.errors?.join(", ") || "";
        const city = apiErrors.city.errors?.join(", ") || "";
        const email = apiErrors.email.errors?.join(", ") || "";
        const birthDate = apiErrors.birthDate.errors?.join(", ") || "";

        if (country || city || email || birthDate) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            country,
            city,
            email,
            birthDate,
          }));
        } else {
          handleNext();
        }
      }
      setFormData(data);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
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
        {errors?.birthDate && (
          <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
            {errors?.birthDate}
          </p>
        )}
      </div>
      <div className="md:flex w-full justify-between sm:mb-3">
        <div className="w-full md:w-[49%]  mb-3 sm:mb-0">
          <CustomSelectDropdown
            label="Select Country"
            options={countries}
            selected={selectedCountry}
            onChange={setSelectedCountry}
            searchInput={true}
            flag={true}
          />
          {errors?.country && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {errors?.country}
            </p>
          )}
        </div>
        <div className="w-full md:w-[49%]  mb-3 sm:mb-0">
          <CustomSelectDropdown
            label="Select City"
            options={cities}
            selected={selectedCity}
            onChange={setSelectedCity}
            searchInput={true}
            flag={false}
          />
          {errors?.city && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {errors?.city}
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
        {errors?.language && (
          <p className="text-rc dark:text-rc-dark font-medium text-sm mt-2">
            {errors?.language}
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
          type="submit"
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
