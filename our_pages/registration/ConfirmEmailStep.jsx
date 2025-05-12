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
      <p className="text-cts dark:text-cts-dark font-medium text-base sm:text-lg mb-5 sm:mb-6">
        {t("instructions")}
      </p>
      <div>
        <div className="flex justify-between gap-x-2">
          <input
            type="text"
            placeholder={t("code_placeholder")}
            className={`appearance-none font-medium border border-ce2 dark:border-ce2-dark focus:border-ctm dark:focus:border-ctm-dark rounded-md sm:rounded-lg w-full p-4 text-ctm dark:text-ctm-dark placeholder:text-cts dark:placeholder:text-cts-dark bg-ce1 dark:bg-ce1-dark focus:outline-none text-sm sm:text-base`}
          />
        </div>
        {codeError && (
          <p className="text-crc dark:text-crc-dark font-medium text-base mt-2">
            {t("code_error_message")}
          </p>
        )}
      </div>
      {showResendButton ? (
        <button
          type="button"
          onClick={handleResend}
          className="text-ctm dark:text-ctm-dark font-semibold text-base text-center mt-2 p-4 w-full"
        >
          {t("resend_button")}
        </button>
      ) : (
        <div className="text-cts dark:text-cts-dark font-semibold text-sm sm:text-base text-center mt-2 p-4 w-full">
          {t("timer_text")} 00:{timer.toString().padStart(2, "0")}
        </div>
      )}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mt-8">
        <button
          onClick={handleBack}
          className="bg-ce1 dark:bg-ce1-dark rounded-md sm:rounded-lg px-5 py-4 text-ctm dark:text-ctm-dark sm:text-xl font-semibold w-full sm:w-1/2"
        >
          {t("back_button")}
        </button>
        <button
          onClick={handleNext}
          className="bg-cpc dark:bg-cpc-dark rounded-md sm:rounded-lg px-5 py-4 text-cnb dark:text-cnb-dark sm:text-xl font-semibold w-full sm:w-1/2"
        >
          {t("verify_code_button")}
        </button>
      </div>
      <p className="text-cts dark:text-cts-dark text-xs font-normal text-center mb-0 mt-5 sm:px-5">
        {t("risk_warning")}
      </p>
    </div>
  );
}
