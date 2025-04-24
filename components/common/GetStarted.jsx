"use client";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import CustomWhiteButton from "./CustomWhiteButton";

const GetStarted = () => {
  const t = useTranslations("footer");
  const locale = useLocale();
  return (
    <section className=" bg-p dark:bg-p-dark relative z-0 overflow-hidden pb-16 sm:pb-28">
      <div className="container">
        <div className="flex p-10 flex-col lg:flex-row rounded-xl bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/spread/get-started-cta.webp)] bg-cover bg-center">
          <div className="lg:w-[60%]">
            <h1
              className={`sectionHeading text-xl text-nb dark:text-nb-dark font-semibold ${
                locale === "ar" || locale === "fa" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {t("getStarted.get_started_title")}
            </h1>
            <p
              className={`sectionPara text-nb dark:text-nb-dark ${
                locale === "ar" || locale === "fa" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {t("getStarted.get_started_desc_1")}
              {t("getStarted.get_started_desc_2")}
            </p>
          </div>
          <div className="w-full lg:w-[40%] gap-4 flex flex-col md:flex-row justify-center lg:justify-end items-center mt-5 lg:mt-0">
            <CustomWhiteButton
              title={t("getStarted.get_started_btn1")}
              onClick={() => window.open(getRegisterUrl(locale))}
              className="py-5 px-9 w-auto tablet-md:text-[12px] laptop-sm:text-[15px] laptop-md:text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
