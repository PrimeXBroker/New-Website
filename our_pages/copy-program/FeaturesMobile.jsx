"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import fullControlOverRisk from "@/public/animations/social-trading/full-control-over-risk.json";
import copyMultipleExperts from "@/public/animations/social-trading/copy-multiple-experts.json";
import copyByPercentage from "@/public/animations/social-trading/copy-by-percentage.json";
import startInvestingEasily from "@/public/animations/social-trading/start-investing-easily.json";
import accessDetailedPrime from "@/public/animations/social-trading/access-detailed-prime.json";
import Lottie from "lottie-react";

const FeaturesMobile = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("copyProgram.features");

  const featuresDataTop = [
    {
      icon: fullControlOverRisk,
      text: t("feature1"),
      alt: "Risk Management Icon",
    },
    {
      icon: copyMultipleExperts,
      text: t("feature2"),
      alt: "Copy Multiple Experts Icon",
    },
    {
      icon: copyByPercentage,
      text: t("feature3"),
      alt: "Percentage or Fixed Lot Icon",
    },
    {
      icon: startInvestingEasily,
      text: t("feature4"),
      alt: "Investing Icon",
    },
    {
      icon: accessDetailedPrime,
      text: t("feature5"),
      alt: "Account Stats Icon",
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark text-ts dark:text-ts-dark pt-16 sm:pt-28">
      <div className="container mx-auto">
        <div className="bg-cc dark:bg-cc-dark rounded-[20px] md:pt-12">
          <div className="flex flex-col md:flex-row items-center justify-center mb-6 flex-wrap">
            {featuresDataTop.map((feature, index) => (
              <>
                <div
                  key={index}
                  className={`md:flex flex-row items-center gap-4 md:px-6 xl:px-12 group mb-12 hidden ${
                    index === 1 || index === 3
                      ? locale === "ar" || locale === "ps" || locale === "ku"
                        ? "border-r-2 border-e1 dark:border-e1-dark"
                        : "border-l-2 border-e1 dark:border-e1-dark"
                      : ""
                  }`}
                >
                  <div className="p-3 bg-e1 dark:border-e1-dark rounded-lg flex items-center justify-center h-16 w-16">
                    <Lottie animationData={feature.icon} loop={true} />
                  </div>
                  <p className="text-base font-medium w-52">{feature.text}</p>
                </div>
                <div
                  key={index}
                  className={`flex flex-row items-center gap-4 md:px-6 xl:px-12 group py-8 md:hidden ${
                    index !== 4
                      ? "border-b-2 border-e1 dark:border-e1-dark"
                      : ""
                  }`}
                >
                  <div className="p-3 bg-e1 dark:border-e1-dark rounded-lg flex items-center justify-center h-16 w-16">
                    <Lottie animationData={feature.icon} loop={true} />
                  </div>
                  <p className="text-base font-medium w-52">{feature.text}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesMobile;
