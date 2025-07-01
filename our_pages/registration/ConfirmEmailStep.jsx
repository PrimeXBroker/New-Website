"use client";
import { Spinner } from "@nextui-org/react";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function ConfirmEmailStep({ handleBack, sendEmail, formData }) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("registration.confirmEmailStep");
  const [timer, setTimer] = useState(59);
  const [value, setValue] = useState("");
  const [showResendButton, setShowResendButton] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleResend = async () => {
    setTimer(59);
    setShowResendButton(false);
    setCodeError(false);
    await sendEmail();
  };
  // console.log(formData?.token, "formData?.token");

  const handleEmail = async () => {
    setLoading(true);
    const config = {
      method: "post",
      url: "https://my.primexcapital.com/client-api/registration/confirmation-by-token?version=1.0.0",
      data: { token: formData?.token, pin: value },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      const response = await axios(config);

      if (response?.data?.result) {
        console.log("successfully registered");
        router.push(`/${locale}/registration/success`);
      } else {
        setCodeError(true);
      }
    } catch (error) {
      console.log(error, "email error");
      setCodeError(true);
    } finally {
      setLoading(false);
    }
  };
  // console.log(value, "value");

  return (
    <div>
      <p className="text-ts dark:text-ts-dark font-medium text-base sm:text-lg mb-5 sm:mb-6">
        {t("instructions")}
      </p>
      <div>
        <div className="flex justify-between gap-x-2">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setCodeError(false);
            }}
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
          onClick={handleEmail}
          disabled={loading}
          className="flex justify-center items-center gap-3 bg-pcp dark:bg-pcp-dark border border-pcp dark:border-pcp-dark rounded-md sm:rounded-lg px-5 py-4 text-nb dark:text-nb-dark sm:text-xl font-semibold w-full mt-3"
        >
          {loading ? (
            <>
              {t("verify_code_button")}
              <Spinner variant="spinner" color="default" size="sm" />
            </>
          ) : (
            t("verify_code_button")
          )}
        </button>
      </div>
      <p className="text-ts dark:text-ts-dark text-xs font-normal text-center mb-0 mt-4 sm:px-5">
        {t("risk_warning")}
      </p>
    </div>
  );
}
