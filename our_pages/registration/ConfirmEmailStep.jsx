"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

export default function ConfirmEmailStep({ handleNext, handleBack }) {
  const locale = useLocale();
  const t = useTranslations("registration.confirmEmailStep");
  const [timer, setTimer] = useState(59);
  const [showResendButton, setShowResendButton] = useState(false);
  const [codeError, setCodeError] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setShowResendButton(true);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(59);
    setShowResendButton(false);
    setCodeError(false);
  };

  return (
    <div>
      <p className="text-ts dark:text-ts-dark font-medium text-base sm:text-lg mb-5 sm:mb-6">
        {t("instructions")}
      </p>
      <div>
        <div className="flex justify-between gap-x-2">
          <input
            type="text"
            placeholder={t("code_placeholder")}
            className={`appearance-none font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
          />
        </div>
        {codeError && (
          <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
            {t("code_error_message")}
          </p>
        )}
      </div>
      {showResendButton ? (
        <button
          type="button"
          onClick={handleResend}
          className="text-tm dark:text-tm-dark font-semibold text-base text-center mt-2 p-4 w-full"
        >
          {t("resend_button")}
        </button>
      ) : (
        <div className="text-ts dark:text-ts-dark font-semibold text-sm sm:text-base text-center mt-2 p-4 w-full">
          {t("timer_text")} 00:{timer.toString().padStart(2, "0")}
        </div>
      )}
      <div className="mt-8">
        <button
          onClick={handleBack}
          className="bg-cc dark:bg-cc-dark border border-e2 dark:border-e2-dark rounded-md sm:rounded-lg px-5 py-4 text-tm dark:text-tm-dark sm:text-xl font-semibold w-full"
        >
          {t("back_button")}
        </button>
        <button
          onClick={handleNext}
          className="bg-pcp dark:bg-pcp-dark border border-pcp dark:border-pcp-dark rounded-md sm:rounded-lg px-5 py-4 text-nb dark:text-nb-dark sm:text-xl font-semibold w-full mt-3"
        >
          {t("verify_code_button")}
        </button>
      </div>
      <p className="text-ts dark:text-ts-dark text-xs font-normal text-center mb-0 mt-4 sm:px-5">
        {t("risk_warning")}
      </p>
    </div>
  );
}
