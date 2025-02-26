"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const TermsCondition = () => {
  const locale = useLocale();
  const t = useTranslations("ramadanOffer.terms");

  return (
    <section className="bg-[#000000] py-14 sm:py-24">
      <div className="container">
        <div className="bg-[#111111] border-2 border-[#1D1D1D] rounded-[20px] flex p-10 flex-col md:flex-row">
          <div className="lg:w-[70%] w-full mb-5 md:mb-0">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] mb-3 ${
                locale === "ar" || locale === "fa" || locale === "kd"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {t("title")}
            </h2>
            <p
              className={` text-[#c6c6c6] text-sm sm:text-base ${
                locale === "ar" || locale === "fa" || locale === "kd"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {t("desc_part_1")}
            </p>
          </div>
          <div className="w-full lg:w-[30%] flex justify-center md:justify-end items-center">
            <button className="custom-button py-[16px] px-[46px]">
              <a
                href=""
                target="_blank"
                className="text-[#111111] font-semibold"
              >
                {t("title")}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsCondition;
