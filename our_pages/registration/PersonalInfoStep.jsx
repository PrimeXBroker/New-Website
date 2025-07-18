"use client";
import React, { useEffect, useState } from "react";
import CustomSelectDropdown from "./CustomSelectDropdown";
import { useLocale, useTranslations } from "next-intl";
import axios from "axios";
import moment from "moment-timezone";
import { Country, City } from "country-state-city";
import StaticViewDatePicker from "./StaticViewDatePicker";
import { Spinner } from "@nextui-org/react";

export default function PersonalInfoStep({
  handleNext,
  handleBack,
  setFormData,
  formData,
}) {
  const locale = useLocale();
  const userTimeZone = moment.tz.guess();

  const t = useTranslations("registration.personalInfoStep");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const [errors, setErrors] = useState({
    birthDate: "",
    country: "",
    city: "",
    language: "",
  });
  const [loading, setLoading] = useState(false);

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
    setCountries(countryList);
  }, []);

  useEffect(() => {
    if (!formData?.country) return;

    const cityList = City.getCitiesOfCountry(formData?.country?.value).map(
      (city) => ({
        label: city.name,
        value: city.name,
      })
    );

    setCities(cityList);
    setFormData({ ...formData, city: "" });
  }, [formData?.country]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorsList = {};
    if (!formData?.birthDate) errorsList.birthDate = "Please Select DOB";
    if (!formData?.country) errorsList.country = "Please Select Country";
    if (!formData?.city) errorsList.city = "Please Select City";
    if (!formData?.language) errorsList.language = "Please Select Language";

    setErrors(errorsList);

    if (Object.keys(errorsList).length === 0) {
      setLoading(true);
      const birthDateObj =
        formData.birthDate instanceof Date
          ? formData.birthDate
          : new Date(formData.birthDate);

      const data = {
        ...formData,
        country: formData?.country?.value,
        birthDate: {
          year: birthDateObj.getFullYear(),
          month: birthDateObj.getMonth() + 1,
          day: birthDateObj.getDate(),
        },
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
          handleNext(3);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mb-3">
        <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
          {t("birthday_label")}
        </label>
        <StaticViewDatePicker
          selectedDate={formData?.birthDate}
          onChange={(date) => {
            setFormData({ ...formData, birthDate: date });
            setErrors((prev) => ({ ...prev, birthDate: "" }));
          }}
          placeholder={t("birthday_placeholder")}
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
            label={t("country_label")}
            options={countries}
            selected={formData?.country}
            onChange={(value) => {
              setFormData({ ...formData, country: value });
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
            selected={formData?.city}
            onChange={(value) => {
              setFormData({ ...formData, city: value });
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
          selected={formData?.language}
          onChange={(value) => {
            setFormData({ ...formData, language: value });
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
          disabled={loading}
          className="flex justify-center items-center gap-3 bg-pcp dark:bg-pcp-dark border border-pcp dark:border-pcp-dark rounded-md sm:rounded-lg px-5 py-4 text-nb dark:text-nb-dark text-base sm:text-xl font-semibold w-full mt-3"
        >
          {loading ? (
            <>
              {t("continue_button")}{" "}
              <Spinner variant="spinner" color="default" size="sm" />
            </>
          ) : (
            t("continue_button")
          )}
        </button>
      </div>
      <p className="text-ts dark:text-ts-dark text-xs font-normal text-center mb-0 mt-4 sm:px-5">
        {t("risk_warning")}
      </p>
    </form>
  );
}
