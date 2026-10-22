"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { FiClock } from "react-icons/fi";
import PhoneNumberInput from "./PhoneNumberInput";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export default function Step1BasicInfo({
  formData,
  updateFormData,
  onNext,
  selectedPhone,
  setSelectedPhone,
  countries,
  errors,
}) {
  const locale = useLocale();
  const t = useTranslations("signUpForm.basicInfo");

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const handlePhoneInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="!mb-6">
        <h2 className="text-lg font-semibold text-tm dark:text-tm-dark">
          {t("title")}
        </h2>
        <p className="text-sm font-medium text-ts dark:text-ts-dark mt-[7px]">
          {t("description")}
        </p>
      </div>
      <div className="space-y-2">
        <label className="block text-xs sm:text-[13px] text-ts dark:text-ts-dark">
          {t("first_name_label")}
        </label>
        <input
          type="text"
          name="firstName"
          required
          placeholder={t("first_name_placeholder")}
          value={formData.firstName || ""}
          onChange={handleChange}
          className="appearance-none w-full bg-p dark:bg-p-dark border border-e1 dark:border-e1-dark rounded-lg px-4 py-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts text-sm sm:text-[15px] font-medium focus:outline-none"
        />
        {errors?.firstName && (
          <p className="text-rc dark:text-rc-dark text-xs mt-1">
            {errors.firstName}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <label className="block text-xs sm:text-[13px] text-ts dark:text-ts-dark">
          {t("last_name_label")}
        </label>
        <input
          type="text"
          name="lastName"
          required
          placeholder={t("last_name_placeholder")}
          value={formData.lastName || ""}
          onChange={handleChange}
          className="appearance-none w-full bg-p dark:bg-p-dark border border-e1 dark:border-e1-dark rounded-lg px-4 py-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts text-sm sm:text-[15px] font-medium focus:outline-none"
        />
        {errors?.lastName && (
          <p className="text-rc dark:text-rc-dark text-xs mt-1">
            {errors.lastName}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <label className="block text-xs sm:text-[13px] text-ts dark:text-ts-dark">
          {t("email_label")}
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder={t("email_placeholder")}
          value={formData.email || ""}
          onChange={handleChange}
          className="appearance-none w-full bg-p dark:bg-p-dark border border-e1 dark:border-e1-dark rounded-lg px-4 py-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts text-sm sm:text-[15px] font-medium focus:outline-none"
        />
        {errors?.email && (
          <p className="text-rc dark:text-rc-dark text-xs mt-1">
            {errors.email}
          </p>
        )}
      </div>
      <div className="space-y-2 relative" dir="ltr">
        <label className="block text-xs sm:text-[13px] text-ts dark:text-ts-dark">
          {t("phone_number_label")}
        </label>
        {selectedPhone && (
          <PhoneNumberInput
            value={formData.phone || ""}
            handleInputChange={handlePhoneInputChange}
            setSelectedPhone={setSelectedPhone}
            selectedPhone={selectedPhone}
            countries={countries}
          />
        )}
        {errors?.phone && (
          <p className="text-rc dark:text-rc-dark text-xs mt-1">
            {errors.phone}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between !mt-7">
        <div className="flex items-center gap-[6px] text-xs text-ts dark:text-ts-dark font-medium">
          <FiClock className="w-4 h-4" />
          <span>{t("time_estimate")}</span>
        </div>
        <button
          type="submit"
          className="transition-colors duration-300 ease-in-out rounded-lg flex items-center gap-2 group bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark py-3 px-5 text-sm sm:text-base w-auto justify-between sm:justify-center"
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
