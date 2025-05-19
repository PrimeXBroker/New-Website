"use client";
import { getLoginUrl } from "@/utilities/getLoginUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SuccessStep() {
  const locale = useLocale();
  const t = useTranslations("registration.successStep");
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      window.location.href = getLoginUrl(locale);
    }
  }, [countdown]);

  return (
    <div
      className={
        "sm:col-span-2 sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/registration-success-bg.webp)] sm:bg-cover lg:h-screen flex justify-center items-center"
      }
    >
      <div className="bg-cc dark:bg-cc-dark sm:p-8 rounded-3xl lg:w-[584px] mx-auto text-center lg:mt-8">
        <div className="mb-6">
          <div className="flex justify-center items-center">
            <Image
              unoptimized={true}
              width="18"
              height="18"
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Tick+Icon+Signup+Done+Screen.svg"
              alt="Success"
              className="w-[80px] h-[80px]"
            />
          </div>
          <h2 className="text-tm dark:text-tm-dark font-semibold text-lg sm:text-2xl mt-6">
            {t("success_message")}
          </h2>
        </div>
        <div>
          <button
            onClick={() => window.open(getLoginUrl(locale))}
            className="p-4 sm:p-5 bg-tm dark:bg-tm-dark text-p dark:text-p-dark rounded-md sm:rounded-lg font-semibold text-base sm:text-xl w-full"
          >
            {t("go_to_dashboard_button")}
          </button>
          <p className="p-4 text-sm sm:text-base font-semibold text-ts dark:text-ts-dark">
            {t("redirect_message")} {countdown} {t("redirect_message_second")}
          </p>
        </div>
      </div>
    </div>
  );
}
