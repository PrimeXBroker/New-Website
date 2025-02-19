"use client";
import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { getLoginUrl } from "@/utilities/getLoginUrl";

const MaximizeProfit = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.maximize");

  return (
    <section className="bg-[#000000] pt-10 pb-20">
      <div className="container">
        <div className="grid grid-cols-12 justify-center items-center bg-[#111111] border-2 border-[#1D1D1D] rounded-[20px] px-14 pt-8">
          <div
            className={`col-span-12 lg:col-span-6 ${
              locale === "ar" || locale === "fa" || locale === "kd"
                ? "text-center lg:text-right"
                : "text-center lg:text-left"
            }`}
          >
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100] mb-2 ${
                locale === "ar" || locale === "fa" || locale === "kd"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("maximize_title_1")}
            </h2>
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] ${
                locale === "ar" || locale === "fa" || locale === "kd"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("maximize_title_2")}
            </h2>
            <div
              className={`${
                locale === "ar" || locale === "fa" || locale === "kd"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              <button
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-[16px] px-[32px] sm:px-[46px] font-semibold mt-5 custom-button rounded-xl"
              >
                {t("register_btn")}
              </button>
              <a
                onClick={() => window.open(getLoginUrl(locale))}
                target="_blank"
                className={`text-xs text-[#ffffff] font-normal block mt-2 ${
                  locale === "ar" || locale === "fa" || locale === "kd"
                    ? "text-center lg:text-start"
                    : "text-center lg:text-start"
                }`}
              >
                {t("already-reg")}
                <span className="italic font-semibold">{t("login_here")}</span>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end mt-10 lg:mt-0">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/bonus-maximize.webp"
              width="400"
              height="400"
              alt="Bonus Maximize"
              className="w-full sm:w-[50%] lg:w-[60%] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaximizeProfit;
