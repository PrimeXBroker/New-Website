"use client";
import React, { useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiCopy, FiRefreshCw, FiCheck } from "react-icons/fi";
import CustomSelectDropdown from "./CustomSelectDropdown";
import { LuUserRoundCheck, LuCheck } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useLocale, useTranslations } from "next-intl";
import { Spinner } from "@nextui-org/react";

export default function Step3EntitySetup({
  formData,
  updateFormData,
  onPrev,
  onSubmit,
  errors,
  isSubmitting,
}) {
  const locale = useLocale();
  const t = useTranslations("signUpForm.entitySetup");
  const t2 = useTranslations("registration.createPassword");

  const entityOptions = [
    { label: t("entities.lucia"), value: "lucia" },
    { label: t("entities.mauritius"), value: "mauritius" },
  ];
  const [showPassword, setShowPassword] = useState(false);
  const [showCriteria, setShowCriteria] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    updateFormData({ [e.target.name]: value });
  };

  const handlePasswordChange = (pass) => {
    updateFormData({ password: pass });
  };

  const generateRandomPassword = () => {
    const minLength = 10;
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    let password =
      lowercase[Math.floor(Math.random() * lowercase.length)] +
      uppercase[Math.floor(Math.random() * uppercase.length)] +
      numbers[Math.floor(Math.random() * numbers.length)];

    const allOptions = lowercase + uppercase + numbers;

    for (let i = password.length; i < minLength; i++) {
      password += allOptions[Math.floor(Math.random() * allOptions.length)];
    }

    const shuffledPassword = password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
    handlePasswordChange(shuffledPassword);
  };

  const copyToClipboard = () => {
    if (formData?.password) {
      navigator.clipboard.writeText(formData.password).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const password = formData.password || "";
  const isStrongPassword =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[^A-Za-z0-9]/.test(password);

  const criteria = [
    {
      text: t2("password_criteria_1"),
      valid: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
    },
    {
      text: t2("password_criteria_2"),
      valid: /\d/.test(password),
    },
    {
      text: t2("password_criteria_3"),
      valid: password.length >= 8,
    },
  ];

  useEffect(() => {
    setShowCriteria(password.length > 0);
  }, [password]);

  return (
    <form onSubmit={handleFinalSubmit} className="space-y-4" noValidate>
      <div className="!mb-6">
        <h2 className="text-lg font-semibold text-tm dark:text-tm-dark">
          {t("title")}
        </h2>
        <p className="text-sm font-medium text-ts dark:text-ts-dark mt-[7px]">
          {t("description")}
        </p>
      </div>
      <div className="space-y-2">
        <CustomSelectDropdown
          label={t("entity_label")}
          options={entityOptions}
          selected={formData?.entity}
          onChange={(value) => updateFormData({ entity: value })}
          searchInput={false}
          flag={false}
        />
      </div>
      <div className="space-y-2">
        <label className="block text-xs sm:text-[13px] text-ts dark:text-ts-dark">
          {t("password_label")}
        </label>
        <div className="flex gap-1 sm:gap-2">
          <div className="relative flex-1">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder={t("password_placeholder")}
              value={formData.password || ""}
              onChange={handleChange}
              className="appearance-none w-full bg-p dark:bg-p-dark border border-e1 dark:border-e1-dark rounded-lg px-4 py-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts text-sm sm:text-[15px] font-medium focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="bg-p dark:bg-p-dark border border-e1 dark:border-e1-dark p-4 rounded-lg text-ts dark:text-ts-dark"
          >
            {showPassword ? (
              <FiEyeOff className="w-4 h-4" />
            ) : (
              <FiEye className="w-4 h-4" />
            )}
          </button>
          <button
            type="button"
            onClick={copyToClipboard}
            className={`p-4 rounded-lg ${
              copied
                ? "border border-gc dark:border-gc-dark bg-gb dark:bg-gb-dark text-gc dark:text-gc-dark"
                : "bg-p dark:bg-p-dark border border-e1 dark:border-e1-dark text-ts dark:text-ts-dark"
            }`}
          >
            {copied ? (
              <LuCheck className="w-4 h-4 text-gc dark:text-gc-dark" />
            ) : (
              <FiCopy className="w-4 h-4" />
            )}
          </button>
        </div>
        {errors?.password && (
          <p className="text-rc dark:text-rc-dark text-xs mt-1">
            {errors.password}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 text-xs pt-2 sm:pt-1 pb-1">
          <button
            type="button"
            onClick={generateRandomPassword}
            className="flex items-center gap-2 text-tm dark:text-tm-dark underline hover:text-pcp dark:hover:text-pcp-dark transition-all duration-500 ease-in-out"
          >
            <FiRefreshCw className="w-3.5 h-3.5" />
            <span>{t("generate_password")}</span>
          </button>
          <div
            className={`flex items-center gap-1 font-medium transition-colors duration-300 ${
              isStrongPassword
                ? "text-gc dark:text-gc-dark"
                : "text-ts dark:text-ts-dark"
            }`}
          >
            <FiCheck
              className={`w-3.5 h-3.5 ${
                isStrongPassword
                  ? "text-gc dark:text-gc-dark"
                  : "text-ts dark:text-ts-dark"
              }`}
            />
            <span>{t("strong_password")}</span>
          </div>
        </div>
        {showCriteria && (
          <div className="flex flex-wrap gap-2 my-4 sm:my-6">
            {criteria.map((item, index) => (
              <div
                key={index}
                className={`flex items-center px-2 py-1 rounded-sm ${
                  item.valid
                    ? "text-gc-dark bg-gb-dark"
                    : "text-rc-dark bg-rb-dark"
                }`}
                style={{ width: "auto" }}
              >
                {item.valid ? (
                  <LuCheck className="flex-shrink-0 me-1 text-xs sm:text-sm" />
                ) : (
                  <RxCross2 className="flex-shrink-0 me-1 text-xs sm:text-sm" />
                )}
                <span className="text-xs sm:text-sm font-medium leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        )}
        <p className="text-xs text-ts dark:text-ts-dark font-medium">
          {t("password_hint")}
        </p>
      </div>
      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          required
          aria-invalid={errors?.newsletter ? "true" : "false"}
          checked={formData.newsletter || false}
          onChange={handleChange}
          className={`mt-1 w-4 h-4 accent-pcp dark:accent-pcp-dark rounded bg-transparent border ${errors?.newsletter ? "border-rc-dark dark:border-rc-dark" : "border-e2-dark dark:border-e2-dark"}`}
        />
        <div>
          <label
            htmlFor="newsletter"
            className="text-xs text-ts dark:text-ts-dark font-medium leading-relaxed cursor-pointer"
          >
            {t("newsletter_agreement")}
          </label>
          {errors?.newsletter && (
            <p className="text-rc dark:text-rc-dark text-xs mt-1">
              {errors.newsletter}
            </p>
          )}
        </div>
      </div>
      <div className="bg-transparent border border-e2 dark:border-e2-dark rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LuUserRoundCheck className="text-ts dark:text-ts-dark text-2xl" />
          <div>
            <p className="text-sm font-medium text-tm dark:text-tm-dark mb-[2px]">
              {formData.firstName || formData.lastName
                ? `${formData.firstName} ${formData.lastName}`.trim()
                : t("name_placeholder")}
            </p>
            <p className="text-xs text-ts dark:text-ts-dark font-medium">
              {formData.email || t("email_placeholder")}
            </p>
          </div>
        </div>
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
          disabled={isSubmitting}
          className="transition-colors duration-300 ease-in-out rounded-lg flex items-center gap-3 group bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark py-3 px-5 text-sm sm:text-base w-auto justify-between sm:justify-center"
        >
          {isSubmitting ? (
            <>
              {t("submit_button")}{" "}
              <Spinner variant="spinner" color="default" size="sm" />
            </>
          ) : (
            <>
              {t("submit_button")}
              {["ar", "ku", "ps", "fa"].includes(locale) ? (
                <HiOutlineArrowLeft className="transition-transform duration-500 ease-in-out group-hover:-translate-x-1.5 text-nb dark:text-nb-dark text-xl" />
              ) : (
                <HiOutlineArrowRight className="transition-transform duration-500 ease-in-out group-hover:translate-x-1.5 text-nb dark:text-nb-dark text-xl" />
              )}
            </>
          )}
        </button>
      </div>
    </form>
  );
}
