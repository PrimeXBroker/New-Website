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

export default function CreatePasswordStep({ handleNext, handleBack }) {
  const locale = useLocale();
  const t = useTranslations("registration.createPassword");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [showCriteria, setShowCriteria] = useState(false);
  const [copied, setCopied] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
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

    setPassword(shuffledPassword);
  };

  const criteria = [
    {
      text: t("password_criteria_1"),
      valid: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
    },
    {
      text: t("password_criteria_2"),
      valid: /\d/.test(password),
    },
    {
      text: t("password_criteria_3"),
      valid: password.length >= 8,
    },
    {
      text: t("password_criteria_4"),
      valid: /^[a-zA-Z0-9]*$/.test(password),
    },
  ];

  useEffect(() => {
    setShowCriteria(password.length > 0);
  }, [password]);

  return (
    <form>
      <label className="text-cts dark:text-cts-dark text-xs sm:text-sm font-medium">
        {t("password_label")}
      </label>
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="relative w-full">
          <input
            id="passwordInput"
            type={passwordVisible ? "text" : "password"}
            placeholder={t("password_label")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`appearance-none mt-1 sm:mt-2 font-medium border border-ce2 dark:border-ce2-dark focus:border-ctm dark:focus:border-ctm-dark rounded-md sm:rounded-lg w-full p-4 text-ctm dark:text-ctm-dark placeholder:text-cts dark:placeholder:text-cts-dark bg-ce1 dark:bg-ce1-dark focus:outline-none text-sm sm:text-base`}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 mt-1"
          >
            {passwordVisible ? (
              <MdOutlineVisibility className="text-cts dark:text-cts-dark text-xl sm:text-2xl" />
            ) : (
              <MdOutlineVisibilityOff className="text-cts dark:text-cts-dark text-xl sm:text-2xl" />
            )}
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={copyToClipboard}
            className={`flex items-center justify-center border-1 rounded-md sm:rounded-lg p-4 mt-1 ${
              copied
                ? "border border-cgc dark:border-cgc-dark bg-cgb dark:bg-cgb-dark"
                : "border border-ce2 dark:border-ce2-dark bg-ce1 dark:bg-ce1-dark"
            }`}
          >
            {copied ? (
              <LuCheck className="text-cgc dark:text-cgc-dark text-xl sm:text-2xl" />
            ) : (
              <MdOutlineContentCopy className="text-cts dark:text-cts-dark text-xl sm:text-2xl" />
            )}
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={generateRandomPassword}
        className={`text-ctm dark:text-ctm-dark hover:text-cpc dark:hover:text-cpc-dark font-semibold text-sm sm:text-base ${
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
                  ? "text-cgc dark:text-cgc-dark bg-cgb dark:bg-cgb-dark"
                  : "text-crc dark:text-crc-dark bg-crb dark:bg-crb-dark"
              }`}
              style={{ width: "auto" }}
            >
              {item.valid ? (
                <LuCheck className="flex-shrink-0 mr-1 text-xs sm:text-sm" />
              ) : (
                <RxCross2 className="flex-shrink-0 mr-1 text-xs sm:text-sm" />
              )}
              <span className="text-xs sm:text-sm font-medium leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-start">
        <input type="checkbox" id="terms" className="terms-checkbox hidden" />
        <label
          htmlFor="terms"
          className="terms-label flex items-start cursor-pointer"
        >
          <span className="terms-custom-checkbox w-7 h-4 sm:w-6 sm:h-5 mr-2 sm:mr-3 mt-1"></span>
          <span className="text-cts dark:text-cts-dark font-medium text-sm sm:text-base">
            {t("agreement")}
          </span>
        </label>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mt-8">
        <button
          onClick={handleBack}
          className="bg-ce1 dark:bg-ce1-dark rounded-md sm:rounded-md px-5 py-4 text-ctm dark:text-ctm-dark text-base sm:text-xl font-semibold w-full sm:w-1/2"
        >
          {t("back_button")}
        </button>
        <button
          onClick={handleNext}
          className="bg-cpc dark:bg-cpc-dark rounded-md sm:rounded-md px-5 py-4 text-cnb dark:text-cnb-dark text-base sm:text-xl font-semibold w-full sm:w-1/2"
        >
          {t("continue_button")}
        </button>
      </div>
      <p className="text-cts dark:text-cts-dark text-xs font-normal text-center mb-0 mt-5 sm:px-5">
        {t("risk_warning")}
      </p>
    </form>
  );
}
