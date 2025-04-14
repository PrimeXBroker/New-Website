"use client";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import {
  BsArrowUpLeftCircleFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";

const GetStarted = () => {
  const t = useTranslations("footer");
  const b = useTranslations("spreadPage.getStarted");
  const locale = useLocale();
  return (
    <section className=" bg-[#000000] relative z-0 overflow-hidden pb-16 sm:pb-28">
      <div className="container">
        <div className="flex p-10 flex-col lg:flex-row rounded-xl bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/spread/get-started-cta.webp)]">
          <div className="lg:w-[60%]">
            <h1
              className={`sectionHeading text-xl text-black font-semibold ${
                locale === "ar" || locale === "fa" || locale === "kd"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {t("getStarted.get_started_title")}
            </h1>
            <p
              className={`sectionPara text-black ${
                locale === "ar" || locale === "fa" || locale === "kd"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {t("getStarted.get_started_desc_1")}
              {t("getStarted.get_started_desc_2")}
            </p>
          </div>
          <div className="w-full lg:w-[40%] gap-4 flex flex-col md:flex-row justify-center lg:justify-end items-center mt-5 lg:mt-0">
            <button
              onClick={() => window.open(getRegisterUrl(locale))}
              className="custom-button-brown px-6 py-4 rounded-[12px] w-full lg:w-auto flex items-center justify-center gap-3 font-semibold "
            >
              {b("btn1Txt")}
              {locale === "ar" || locale === "kd" ? (
                <BsArrowUpLeftCircleFill />
              ) : (
                <BsArrowUpRightCircleFill />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
