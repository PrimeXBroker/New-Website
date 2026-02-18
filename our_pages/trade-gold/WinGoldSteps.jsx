"use client";
import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";

const WinGoldSteps = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("trdaeGold.goldRushSteps");
  const s = useTranslations("ramadanOffer.participateDrawer");

  const steps = [
    {
      step: s("step1"),
      title: t("step1"),
      description: t("step1_desc"),
    },
    {
      step: s("step2"),
      title: t("step2"),
      description: t("step2_desc"),
    },
    {
      step: s("step3"),
      title: t("step3"),
      description: t("step3_desc"),
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark py-16 sm:py-28 relative">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <div className="text-center md:text-center mb-10">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
              {t("title1")}
              <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
            </h2>
          </div>
        </div>
        <div
          className={`relative ${theme === "dark" ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/background-steps-mobile.webp)]" : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/trade-gold-win-gold-steps-ligh-mbl.png)]"} ${theme === "dark" ? "sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/steps-background.webp)]" : "sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/trade-gold-win-gold-steps-light.png)]"} bg-cover bg-center px-8 md:px-16 h-[970px] sm:h-[500px] lg:h-[330px] rounded-[20px] flex items-center`}
        >
          <Image
            src={
              theme === "dark"
                ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/trade-gold-candle-left-dark.png"
                : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/trade-gold-candle-left-light.png"
            }
            alt="Left Candle"
            width={200}
            height={200}
            className={`absolute top-0 w-[26%] sm:w-[16%] lg:w-[10%] ${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "right-[-10px] sm:right-[-12px] md:right-[9px] lg:right-[18px]"
                : "left-[-10px] sm:left-[-12px] md:left-[9px] lg:left-[18px]"
            }`}
          />
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-cc dark:bg-cc-dark rounded-[16px] px-12 py-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`px-0 md:px-3 py-6 md:py-4 ${
                  index !== steps.length - 1
                    ? "border-b-2 border-b-e1 dark:border-b-e1-dark sm:border-b-0 sm:border-e-2 sm:border-e-e1 dark:border-e1-dark"
                    : ""
                }`}
              >
                <span className="text-tm dark:text-tm-dark text-sm font-medium flex items-center gap-1">
                  <GoDotFill className="text-pcp dark:text-pcp-dark" />{" "}
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-tm dark:text-tm-dark mt-2">
                  {item.title}
                </h3>
                <p className="text-tm dark:text-tm-dark text-[15px] mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-cc dark:bg-cc-dark rounded-[16px] px-8 py-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`px-0 md:px-3 py-6 md:py-4 ${
                  index !== steps.length - 1
                    ? "border-b-2 order-b-e1 dark:border-b-e1-dark sm:border-b-0 sm:border-e-2 sm:border-e-e1 dark:border-e1-dark"
                    : ""
                } ${index === 1 ? "sm:border-e-0" : ""}`}
              >
                <span className="text-tm dark:text-tm-dark text-sm font-medium flex items-center gap-1">
                  <GoDotFill className="text-pcp dark:text-pcp-dark" />{" "}
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-tm dark:text-tm-dark mt-2">
                  {item.title}
                </h3>
                <p className="text-tm dark:text-tm-dark text-[15px] mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <Image
            src={
              theme === "dark"
                ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/trade-gold-candle-right-dark.png"
                : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/trade-gold-candle-right-light.png"
            }
            alt="Right Candle"
            width={200}
            height={200}
            className={`absolute top-0 w-[26%] sm:w-[16%] lg:w-[10%] ${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "left-[-11px] md:left-[8px]"
                : "right-[-11px] md:right-[8px]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default WinGoldSteps;
