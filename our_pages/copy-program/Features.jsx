"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import fullControlOverRisk from "@/public/animations/social-trading/full-control-over-risk.json";
import copyMultipleExperts from "@/public/animations/social-trading/copy-multiple-experts.json";
import copyByPercentage from "@/public/animations/social-trading/copy-by-percentage-or-fixed-lot.json";
import startInvestingEasily from "@/public/animations/social-trading/start-investing-easily.json";
import accessDetailedPrime from "@/public/animations/social-trading/access-detailed-prime.json";
import Lottie from "lottie-react";

const Features = () => {
  const locale = useLocale();
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
  ];

  const featuresDataBottom = [
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
        <div className="bg-cc dark:bg-cc-dark rounded-[20px] py-12">
          <div className="flex items-center justify-center mb-6">
            {featuresDataTop.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 md:px-6 xl:px-12 group ${
                  index !== 0
                    ? locale === "ar" ||
                      locale === "ps" ||
                      locale === "ku" ||
                      locale === "fa"
                      ? "border-r-2 border-e1 dark:border-e1-dark"
                      : "border-l-2 border-e1 dark:border-e1-dark"
                    : ""
                }`}
              >
                <div className="p-3 bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-lg flex items-center justify-center h-16 w-16">
                  <Lottie
                    animationData={feature.icon}
                    loop={true}
                    style={{ width: "52px", height: "52px" }}
                  />
                </div>
                <p className="text-base font-medium w-52">{feature.text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-12">
            {featuresDataBottom.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 px-12 group ${
                  index !== 0
                    ? locale === "ar" ||
                      locale === "ps" ||
                      locale === "ku" ||
                      locale === "fa"
                      ? "border-r-2 border-e1 dark:border-e1-dark"
                      : "border-l-2 border-e1 dark:border-e1-dark"
                    : ""
                }`}
              >
                <div className="p-3 bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-lg flex items-center justify-center h-16 w-16">
                  <Lottie
                    animationData={feature.icon}
                    loop={true}
                    style={{ width: "52px", height: "52px" }}
                  />
                </div>
                <p className="text-base font-medium w-52">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
