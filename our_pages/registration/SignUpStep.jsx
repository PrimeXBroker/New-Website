"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import PhoneNumberInput from "./PhoneNumberInput";

export default function SignUpStep({ handleNext }) {
  const locale = useLocale();
  const t = useTranslations("registration.signUpStep");
  const [error, setError] = useState(false);

  return (
    <form>
      <div className="sm:flex w-full justify-between sm:mb-3">
        <div className="w-full sm:w-[49%]">
          <label className="text-cts dark:text-cts-dark text-xs sm:text-sm font-medium">
            {t("first_name_label")}
            <input
              type="text"
              placeholder={t("first_name_placeholder")}
              className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-ce2 dark:border-ce2-dark focus:border-ctm dark:focus:border-ctm-dark rounded-md sm:rounded-lg w-full p-4 text-ctm dark:text-ctm-dark placeholder:text-cts dark:placeholder:text-cts-dark bg-ce1 dark:bg-ce1-dark focus:outline-none text-sm sm:text-base`}
            />
          </label>
          {error && (
            <p className="text-crc dark:text-crc-dark font-medium text-sm mt-2">
              {t("error_message")}
            </p>
          )}
        </div>
        <div className="w-full sm:w-[49%]">
          <label className="text-cts dark:text-cts-dark text-xs sm:text-sm font-medium">
            {t("last_name_label")}
            <input
              type="text"
              placeholder={t("last_name_placeholder")}
              className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-ce2 dark:border-ce2-dark focus:border-ctm dark:focus:border-ctm-dark rounded-md sm:rounded-lg w-full p-4 text-ctm dark:text-ctm-dark placeholder:text-cts dark:placeholder:text-cts-dark bg-ce1 dark:bg-ce1-dark focus:outline-none text-sm sm:text-base`}
            />
          </label>
          {error && (
            <p className="text-crc dark:text-crc-dark font-medium text-sm mt-2">
              {t("error_message")}
            </p>
          )}
        </div>
      </div>
      <div className="w-full sm:mb-3">
        <label className="text-cts dark:text-cts-dark text-xs sm:text-sm font-medium">
          {t("email_label")}
          <input
            type="email"
            placeholder={t("email_placeholder")}
            className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-ce2 dark:border-ce2-dark focus:border-ctm dark:focus:border-ctm-dark rounded-md sm:rounded-lg w-full p-4 text-ctm dark:text-ctm-dark placeholder:text-cts dark:placeholder:text-cts-dark bg-ce1 dark:bg-ce1-dark focus:outline-none text-sm sm:text-base`}
          />
        </label>
        {error && (
          <p className="text-crc dark:text-crc-dark font-medium text-sm mt-2">
            {t("error_message")}
          </p>
        )}
      </div>
      <div className="w-full mb-3">
        <label className="text-cts dark:text-cts-dark text-xs sm:text-sm font-medium">
          {t("phone_number_label")}
          <PhoneNumberInput />
        </label>
        {error && (
          <p className="text-crc dark:text-crc-dark font-medium text-xs sm:text-sm mt-1 sm:mt-2">
            {t("error_message")}
          </p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mt-8">
        <button
          onClick={handleNext}
          className="bg-cpc dark:bg-cpc-dark rounded-md sm:rounded-lg px-5 py-4 text-cnb dark:text-cnb-dark text-base sm:text-xl font-semibold w-full sm:w-1/2"
        >
          {t("continue_button")}
        </button>
        <button className="bg-ce1 dark:bg-ce1-dark rounded-md sm:rounded-lg px-5 py-4 text-ctm dark:text-ctm-dark text-base sm:text-xl font-semibold w-full sm:w-1/2">
          {t("sign_in_button")}
        </button>
      </div>
      <p className="text-cts dark:text-cts-dark text-xs font-normal text-center mb-0 mt-5 sm:px-5">
        {t("risk_warning")}
      </p>
    </form>
  );
}
