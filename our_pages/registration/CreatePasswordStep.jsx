"use client";
import React, { useState, useEffect } from "react";
import {
  MdOutlineVisibilityOff,
  MdOutlineVisibility,
  MdOutlineContentCopy,
} from "react-icons/md";
import { LuCheck } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useLocale, useTranslations } from "next-intl";
import { Spinner } from "@nextui-org/react";

export default function CreatePasswordStep({
  handleNext,
  handleBack,
  setFormData,
  formData,
  sendEmail,
}) {
  const locale = useLocale();
  const t = useTranslations("registration.createPassword");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showCriteria, setShowCriteria] = useState(false);
  const [copied, setCopied] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const copyToClipboard = () => {
    if (formData?.password?.first) {
      navigator.clipboard.writeText(formData?.password?.first).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
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
    handleChange(shuffledPassword);
  };

  const handleChange = (pass) => {
    setFormData({
      ...formData,
      password: { first: pass, second: pass },
    });
    if (pass.trim() !== "") {
      setPasswordError("");
    }
  };

  const criteria = [
    {
      text: t("password_criteria_1"),
      valid: /(?=.*[a-z])(?=.*[A-Z])/.test(formData?.password?.first),
    },
    {
      text: t("password_criteria_2"),
      valid: /\d/.test(formData?.password?.first),
    },
    {
      text: t("password_criteria_3"),
      valid: formData?.password?.first?.length >= 8,
    },
  ];

  useEffect(() => {
    setShowCriteria(formData?.password?.first?.length > 0);
  }, [formData?.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData?.password?.first || formData.password.first.trim() === "") {
      setPasswordError("Password is required");
      return;
    }
    setPasswordError("");
    setLoading(true);
    try {
      await sendEmail(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
        {t("password_label")}
      </label>
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="relative w-full">
          <input
            id="passwordInput"
            type={passwordVisible ? "text" : "password"}
            placeholder={t("password_label")}
            value={formData?.password?.first}
            onChange={(e) => handleChange(e.target.value)}
            className={`appearance-none mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
          />
          {passwordError && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {passwordError}
            </p>
          )}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute end-5 top-1/2 transform -translate-y-1/2 mt-1"
          >
            {passwordVisible ? (
              <MdOutlineVisibility className="text-ts dark:text-ts-dark text-xl sm:text-2xl" />
            ) : (
              <MdOutlineVisibilityOff className="text-ts dark:text-ts-dark text-xl sm:text-2xl" />
            )}
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={copyToClipboard}
            className={`flex items-center justify-center border-1 rounded-md sm:rounded-lg p-4 mt-1 ${
              copied
                ? "border border-gc dark:border-gc-dark bg-gb dark:bg-gb-dark"
                : "border border-e2 dark:border-e2-dark bg-cc dark:bg-cc-dark"
            }`}
          >
            {copied ? (
              <LuCheck className="text-gc dark:text-gc-dark text-xl sm:text-2xl" />
            ) : (
              <MdOutlineContentCopy className="text-ts dark:text-ts-dark text-xl sm:text-2xl" />
            )}
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={generateRandomPassword}
        className={`text-tm dark:text-tm-dark hover:text-pcp dark:hover:text-pcp-dark font-semibold text-sm sm:text-base ${
          !showCriteria
            ? "xs:mb-[15px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[33px]"
            : ""
        }`}
      >
        {t("random_password")}
      </button>
      {showCriteria && (
        <div className="flex flex-wrap gap-2 my-4 sm:my-6">
          {criteria.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-2 py-1 rounded-sm ${
                item.valid
                  ? "text-gc dark:text-gc-dark bg-gb dark:bg-gb-dark"
                  : "text-rc dark:text-rc-dark bg-rb dark:bg-rb-dark"
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
      <div className="flex items-start">
        <input
          type="checkbox"
          id="terms"
          className="terms-checkbox hidden"
          defaultChecked
        />
        <label
          htmlFor="terms"
          className="terms-label flex items-start cursor-pointer"
        >
          <span className="terms-custom-checkbox w-7 h-4 sm:w-6 sm:h-5 me-2 sm:me-3 mt-1"></span>
          <span className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base">
            {t("agreement")}
          </span>
        </label>
      </div>
      <div className="mt-8">
        <button
          onClick={handleBack}
          className="bg-cc dark:bg-cc-dark border border-e2 dark:border-e2-dark rounded-md sm:rounded-md px-5 py-4 text-tm dark:text-tm-dark text-base sm:text-xl font-semibold w-full"
        >
          {t("back_button")}
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex justify-center items-center gap-3 bg-pcp dark:bg-pcp-dark border border-pcp dark:border-pcp-dark rounded-md sm:rounded-md px-5 py-4 text-nb dark:text-nb-dark text-base sm:text-xl font-semibold w-full mt-3"
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
