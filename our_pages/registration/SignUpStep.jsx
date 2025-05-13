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
          <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
            {t("first_name_label")}
            <input
              type="text"
              placeholder={t("first_name_placeholder")}
              className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
            />
          </label>
          {error && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {t("error_message")}
            </p>
          )}
        </div>
        <div className="w-full sm:w-[49%]">
          <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
            {t("last_name_label")}
            <input
              type="text"
              placeholder={t("last_name_placeholder")}
              className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
            />
          </label>
          {error && (
            <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
              {t("error_message")}
            </p>
          )}
        </div>
      </div>
      <div className="w-full sm:mb-3">
        <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
          {t("email_label")}
          <input
            type="email"
            placeholder={t("email_placeholder")}
            className={`appearance-none mb-3 sm:mb-0 mt-1 sm:mt-2 font-medium border border-e2 dark:border-e2-dark focus:border-tm dark:focus:border-tm-dark rounded-md sm:rounded-lg w-full p-4 text-tm dark:text-tm-dark placeholder:text-ts dark:placeholder:text-ts-dark bg-cc dark:bg-cc-dark focus:outline-none text-sm sm:text-base`}
          />
        </label>
        {error && (
          <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
            {t("error_message")}
          </p>
        )}
      </div>
      <div className="w-full mb-3" dir="ltr">
        <label className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
          {t("phone_number_label")}
          <PhoneNumberInput />
        </label>
        {error && (
          <p className="text-rc dark:text-rc-dark font-medium text-sm mt-1">
            {t("error_message")}
          </p>
        )}
      </div>
      <div className="mt-8">
        <button className="bg-cc dark:bg-cc-dark border border-e2 dark:border-e2-dark rounded-md sm:rounded-lg px-5 py-4 text-tm dark:text-tm-dark text-base sm:text-xl font-semibold w-full">
          {t("sign_in_button")}
        </button>
        <button
          onClick={handleNext}
          className="bg-pcp dark:bg-pcp-dark border border-pcp dark:border-pcp-dark rounded-md sm:rounded-lg px-5 py-4 text-cb dark:text-nb-dark text-base sm:text-xl font-semibold w-full mt-3"
        >
          {t("continue_button")}
        </button>
      </div>
      <p className="text-ts dark:text-ts-dark text-xs font-normal text-center mb-0 mt-4 sm:px-5">
        {t("risk_warning")}
      </p>
    </form>
  );
}
