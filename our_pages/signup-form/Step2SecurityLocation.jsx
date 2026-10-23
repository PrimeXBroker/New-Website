"use client";
import React from "react";
import CustomSelectDropdown from "./CustomSelectDropdown";
import { useLocale, useTranslations } from "next-intl";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export default function Step2SecurityLocation({
  formData,
  updateFormData,
  onNext,
  onPrev,
  countries,
  cities,
  errors,
}) {
  const locale = useLocale();
  const t = useTranslations("signUpForm.securityLocation");

  const languageOptions = [
    { label: t("languages.english"), value: "en" },
    { label: t("languages.arabic"), value: "ar" },
    { label: t("languages.kurdish"), value: "ku" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const days = Array.from({ length: 31 }, (_, i) => {
    const val = String(i + 1);
    return { label: val, value: val };
  });

  const months = [
    { label: t("months.january"), value: "01" },
    { label: t("months.february"), value: "02" },
    { label: t("months.march"), value: "03" },
    { label: t("months.april"), value: "04" },
    { label: t("months.may"), value: "05" },
    { label: t("months.june"), value: "06" },
    { label: t("months.july"), value: "07" },
    { label: t("months.august"), value: "08" },
    { label: t("months.september"), value: "09" },
    { label: t("months.october"), value: "10" },
    { label: t("months.november"), value: "11" },
    { label: t("months.december"), value: "12" },
  ];

  const currentYear = new Date().getFullYear();
  const youngestAllowedYear = currentYear - 18;
  const oldestYear = 1920;
  const years = Array.from(
    { length: youngestAllowedYear - oldestYear + 1 },
    (_, i) => {
      const y = String(youngestAllowedYear - i);
      return { label: y, value: y };
    },
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="!mb-6">
        <h2 className="text-lg font-semibold text-tm dark:text-tm-dark">
          {t("title")}
        </h2>
        <p className="text-sm font-medium text-ts dark:text-ts-dark mt-[7px]">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="w-full">
          <CustomSelectDropdown
            label={t("day_label")}
            options={days}
            selected={formData.day}
            onChange={(value) => updateFormData({ day: value })}
            searchInput={false}
            flag={false}
          />
        </div>
        <div className="w-full">
          <CustomSelectDropdown
            label={t("month_label")}
            options={months}
            selected={formData.month}
            onChange={(value) => updateFormData({ month: value })}
            searchInput={false}
            flag={false}
          />
        </div>
        <div className="w-full">
          <CustomSelectDropdown
            label={t("year_label")}
            options={years}
            selected={formData.year}
            onChange={(value) => updateFormData({ year: value })}
            searchInput={false}
            flag={false}
          />
        </div>
      </div>
      {errors?.birthDate && (
        <p className="text-rc dark:text-rc-dark text-xs mt-1">
          {errors.birthDate}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <CustomSelectDropdown
            label={t("country_label")}
            options={countries}
            selected={formData?.country}
            onChange={(value) => updateFormData({ country: value })}
            searchInput={true}
            flag={true}
          />
          {errors?.country && (
            <p className="text-rc dark:text-rc-dark text-xs mt-1">
              {errors.country}
            </p>
          )}
        </div>
        <div className="w-full">
          <CustomSelectDropdown
            label={t("city_label")}
            options={cities}
            selected={formData?.city}
            onChange={(value) => updateFormData({ city: value })}
            searchInput={true}
            flag={false}
          />
          {errors?.city && (
            <p className="text-rc dark:text-rc-dark text-xs mt-1">
              {errors.city}
            </p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <CustomSelectDropdown
          label={t("language_label")}
          options={languageOptions}
          selected={formData?.language}
          onChange={(value) => updateFormData({ language: value })}
          searchInput={false}
          flag={false}
        />
        {errors?.language && (
          <p className="text-rc dark:text-rc-dark text-xs mt-1">
            {errors.language}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="transition-colors duration-300 ease-in-out rounded-lg flex items-center gap-3 group bg-transparent border border-e2 dark:border-e2-dark text-tm dark:text-tm-dark py-3 px-4 text-sm sm:text-base w-auto justify-between sm:justify-center"
        >
          {["ar", "ku", "ps", "fa"].includes(locale) ? (
            <HiOutlineArrowRight className="transition-transform duration-500 ease-in-out group-hover:translate-x-1.5 text-tm dark:text-tm-dark text-xl" />
          ) : (
            <HiOutlineArrowLeft className="transition-transform duration-500 ease-in-out group-hover:-translate-x-1.5 text-tm dark:text-tm-dark text-xl" />
          )}
          {t("previous_button")}
        </button>
        <button
          type="submit"
          className="transition-colors duration-300 ease-in-out rounded-lg flex items-center gap-3 group bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark py-3 px-5 text-sm sm:text-base w-auto justify-between sm:justify-center"
        >
          {t("next_button")}
          {["ar", "ku", "ps", "fa"].includes(locale) ? (
            <HiOutlineArrowLeft className="transition-transform duration-500 ease-in-out group-hover:-translate-x-1.5 text-nb dark:text-nb-dark text-xl" />
          ) : (
            <HiOutlineArrowRight className="transition-transform duration-500 ease-in-out group-hover:translate-x-1.5 text-nb dark:text-nb-dark text-xl" />
          )}
        </button>
      </div>
    </form>
  );
}
