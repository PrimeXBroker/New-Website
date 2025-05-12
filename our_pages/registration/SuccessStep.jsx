"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SuccessStep() {
  const locale = useLocale();
  const t = useTranslations("registration.successStep");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  return (
    <div className="bg-cp dark:bg-cp-dark sm:p-8 rounded-3xl lg:w-[584px] mx-auto text-center lg:mt-5 sm:mb-28 lg:mb-0">
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
        <h2 className="text-ctm dark:text-ctm-dark font-semibold text-lg sm:text-2xl mt-6 mb-10">
          {t("success_message")}
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-5">
        <button className="flex justify-center items-center gap-3 p-4 sm:p-5 bg-cpc dark:bg-cpc-dark text-cnb dark:text-cnb-dark rounded-md sm:rounded-lg w-full sm:w-1/2 font-semibold text-base sm:text-xl">
          <Image
            unoptimized={true}
            width="18"
            height="18"
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Verification+Icon+Signup+Done+Screen.svg"
            alt="Success"
            className="w-[24px] h-[24px]"
          />
          {t("verification_button_text")}
        </button>
        <button className="flex justify-center items-center gap-3 p-4 sm:p-5 bg-cpc dark:bg-cpc-dark text-cnb dark:text-cnb-dark rounded-md sm:rounded-lg w-full sm:w-1/2 font-semibold text-base sm:text-xl">
          <Image
            unoptimized={true}
            width="18"
            height="18"
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/Deposit+Icon+Signup+Done+Screen.svg"
            alt="Success"
            className="w-[24px] h-[24px]"
          />
          {t("deposit_button_text")}
        </button>
      </div>
      <div>
        <button className="p-4 sm:p-5 bg-ctm dark:bg-ctm-dark text-cp dark:text-cp-dark rounded-md sm:rounded-lg font-semibold text-base sm:text-xl w-full">
          {t("go_to_dashboard_button")}
        </button>
        <p className="p-4 text-sm sm:text-base font-semibold text-cts dark:text-cts-dark">
          {t("redirect_message")} {countdown} {t("redirect_message_second")}
        </p>
      </div>
    </div>
  );
}
