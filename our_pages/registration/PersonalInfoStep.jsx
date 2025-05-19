"use client";
import React, { useEffect, useState } from "react";
import CustomSelectDropdown from "./CustomSelectDropdown";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import moment from "moment-timezone";
import { Country, City } from "country-state-city";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function PersonalInfoStep({
  handleNext,
  handleBack,
  setFormData,
  formData,
}) {
  const locale = useLocale();
  const userTimeZone = moment.tz.guess();

  const t = useTranslations("registration.personalInfoStep");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedCity, setSelectedCity] = useState("");
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
    { label: "Kurdish", value: "ku" },
    { label: "Español", value: "es" },
    { label: "Pashto", value: "ps" },
  ];

  useEffect(() => {
    const countryList = Country.getAllCountries().map((country) => ({
      label: country.name,
      value: country.isoCode,
      isoCode: country.isoCode.toUpperCase(),
      flag: `https://flagcdn.com/w40/${country.isoCode.toLowerCase()}.png`,
    }));
    console.log(countryList, "countryList");
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
        <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium mb-1 sm:mb-2">
          {t("birthday_label")}
        </label>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
              setErrors((prev) => ({ ...prev, birthDate: "" }));
            }}
            openTo="year"
            views={["year", "month", "day"]}
          />
        </LocalizationProvider>
        {errors?.birthDate && (
          <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
            {errors?.birthDate}
          </p>
        )}
      </div>
      <div className="md:flex w-full justify-between sm:mb-3">
        <div className="w-full md:w-[49%]  mb-3 sm:mb-0">
          <CustomSelectDropdown
            label={t("country_label")}
            options={countries}
            selected={selectedCountry}
            onChange={(value) => {
              setSelectedCountry(value);
              setErrors((prev) => ({ ...prev, country: "" }));
            }}
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
            label={t("city_label")}
            options={cities}
            selected={selectedCity}
            onChange={(value) => {
              setSelectedCity(value);
              setErrors((prev) => ({ ...prev, city: "" }));
            }}
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
          onChange={(value) => {
            setSelectedLanguage(value);
            setErrors((prev) => ({ ...prev, language: "" }));
          }}
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
