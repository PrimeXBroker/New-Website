"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Register from "./Register";

const RegistrationWrapper = () => {
  const locale = useLocale();
  const p = useTranslations("registration.app");
  const { theme } = useTheme();
  const [step, setStep] = useState(1);
  const t = useTranslations("primeXTradingApp.downloadAppToady");

  return (
    <section className={`bg-p dark:bg-p-dark ${step !== 5 ? "pb-10" : ""}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {step !== 5 && (
          <div className={`hidden lg:block relative`}>
            <Image
              unoptimized={true}
              width="18"
              height="18"
              src={
                locale === "ar" || locale === "ku" || locale === "ps"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/mockup-ar.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/mockup-en.webp"
              }
              alt="Registration Mockup"
              className="w-full"
            />
            <div className="absolute top-1/2 start-16 -translate-y-1/2 bg-white/50 backdrop-blur rounded-xl p-3">
              <p className="text-nb dark:text-nb-dark text-2xl font-bold font-montserrat mb-3 text-center">
                {p("app_title")}
              </p>
              <div className="flex flex-col justify-center lg:justify-start items-center gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.primex.primexmobileapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-e1-dark dark:bg-e1-dark border-1 hover:bg-[#262626] dark:hover:bg-[#262626] border-e1-dark dark:border-e1-dark hover:border-[#333333] dark:hover:border-[#333333] transition-all duration-500 ease-in-out flex items-center justify-center gap-3 sm:gap-0 w-full sm:w-[200px] h-[60px] rounded-lg group"
                >
                  <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/google-play_3128279+1.svg"
                    alt="Google Play"
                    width={32}
                    height={32}
                  />
                  <div
                    className={`text-tm-dark dark:text-tm-dark ${
                      locale === "ar" || locale === "ps" || locale === "ku"
                        ? "mr-3 text-right"
                        : "ml-3 text-left"
                    }`}
                  >
                    <p className="text-xs text-ts-dark dark:text-ts-dark leading-tight">
                      {t("google_play-btn_part1")}
                    </p>
                    <p className="text-lg font-semibold leading-tight">
                      {t("google_play-btn_part2")}
                    </p>
                  </div>
                </a>
                <a
                  href=" https://apps.apple.com/ae/app/primex-online-trading/id6741466188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-e1-dark dark:bg-e1-dark border-1 hover:bg-[#262626] dark:hover:bg-[#262626] border-e1-dark dark:border-e1-dark hover:border-[#333333] dark:hover:border-[#333333] transition-all duration-500 ease-in-out flex items-center justify-center gap-3 sm:gap-0 w-full sm:w-[200px] h-[60px] rounded-lg group"
                >
                  <Image
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/apple_731985+1.svg"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/apple_731985+1.svg"
                    }
                    alt="Apple Store"
                    width={32}
                    height={32}
                  />
                  <div
                    className={`text-tm-dark dark:text-tm-dark ${
                      locale === "ar" || locale === "ps" || locale === "ku"
                        ? "mr-3 text-right"
                        : "ml-3 text-left"
                    }`}
                  >
                    <p className="text-xs text-ts-dark dark:text-ts-dark leading-tight">
                      {t("app_store_btn_part1")}
                    </p>
                    <p className="text-lg font-semibold leading-tight">
                      {t("app_store_btn_part2")}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
        <div
          className={
            step === 5
              ? "sm:col-span-2 sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/registration-success-bg.webp)] sm:bg-cover lg:h-screen"
              : "sm:col-span-1"
          }
        >
          <Register step={step} setStep={setStep} />
        </div>
      </div>
    </section>
  );
};

export default RegistrationWrapper;
