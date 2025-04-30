"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const locale = useLocale();
  const t = useTranslations("home.hero");

  return (
    <section className="bg-p dark:bg-p-dark pt-14 sm:pt-16 md:pt-20">
      <div className="container pt-12">
        <div className="grid grid-cols-12">
          <div className="col-span-12 relative">
            <div
              className={`md:absolute md:w-[60%] ${
                locale === "es" || locale === "ps" ? "lg:pt-0" : "lg:pt-5"
              }`}
            >
              <h1 className="text-tm dark:text-tm-dark text-4xl sm:text-5xl md:text-4xl lg:text-[52px] font-bold xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-center sm:text-start">
                {t("title1")}
                <span className="text-pcp dark:text-pcp-dark">
                  {t("title2")}
                </span>
                <br className="hidden sm:block" />
                {t("title3")}
              </h1>
              <p className="text-ts dark:text-ts-dark font-medium text-lg sm:text-xl md:text-base lg:text-xl mb-0 mt-3 text-center sm:text-start">
                {t("desc")}
              </p>
              <div
                className={`flex gap-5 ${
                  locale === "es" || locale === "ps"
                    ? " mt-6 md:mt-3 lg:mt-3"
                    : " mt-6 lg:mt-8"
                }`}
              >
                <CustomYellowButton
                  onClick={() => window.open(getRegisterUrl(locale))}
                  title={t("btnTxt1")}
                  className="py-5 px-9 md:py-4 md:px-7 lg:py-5 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center"
                />
              </div>
            </div>
            <Image
              unoptimized={true}
              width="100"
              height="100"
              src={
                locale === "ar" || locale === "ku" || locale === "ps"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/home-banner-ar-desktop.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/home-hero-desktop-en.webp"
              }
              alt="Logo Image"
              className="w-full hidden md:block"
            />
            <div
              className={`absolute bottom-6 lg:bottom-10 hidden md:block ${
                locale === "ar" || locale === "ku" || locale === "ps"
                  ? "md:left-6 lg:left-10"
                  : "md:right-6 lg:right-10"
              }`}
            >
              <h2 className="text-nw dark:text-nw-dark md:text-2xl lg:text-3xl font-semibold">
                {t("imgTxt1")} <br />
                {t("imgTxt2")}
              </h2>
            </div>
            <Image
              unoptimized={true}
              width="100"
              height="100"
              src={
                locale === "ar" || locale === "ku" || locale === "ps"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/home-banner-ar-mbl.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/home-hero-mobile-en.webp"
              }
              alt="Logo Image"
              className="w-full md:hidden mt-8"
            />
            <div
              className={`absolute bottom-2 sm:bottom-3 md:hidden ${
                locale === "ar" || locale === "ku" || locale === "ps"
                  ? "right-4"
                  : "left-4"
              }`}
            >
              <h2 className="text-nw dark:text-nw-dark text-xs sm:text-2xl font-semibold">
                {t("imgTxt1")} <br />
                {t("imgTxt2")}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
