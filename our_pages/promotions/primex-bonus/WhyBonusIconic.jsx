"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import trustedGlobalBroker from "@/public/animations/bonus/trusted-global-broker.json";
import lightningFast from "@/public/animations/bonus/lightning-fast-trade-execution.json";
import trailblazingTechnology from "@/public/animations/bonus/trailblazing-technology.json";
import dedicatedMultilingual from "@/public/animations/bonus/dedicated-multilingual-support.json";
import lucrativePartnership from "@/public/animations/bonus/lucrative-partnership-programs.json";
import securityOfFunds from "@/public/animations/bonus/security-of-funds.json";
import multiAssetPortfolio from "@/public/animations/bonus/multi-asset-portfolio.json";
import easyDeposit from "@/public/animations/bonus/easy-deposit-withdrawal.json";
import Lottie from "lottie-react";

const WhyBonusIconic = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("bonusPage.iconicFeatures");

  const iconicFeatures = [
    {
      title1: t("home_feature_1_title1"),
      title2: t("home_feature_1_title2"),
      description: t("home_feature_1_description"),
      icon: trustedGlobalBroker,
    },
    {
      title1: t("home_feature_2_title1"),
      title2: t("home_feature_2_title2"),
      description: t("home_feature_2_description"),
      icon: lightningFast,
    },
    {
      title1: t("home_feature_3_title1"),
      title2: t("home_feature_3_title2"),
      description: t("home_feature_3_description"),
      icon: trailblazingTechnology,
    },
    {
      title1: t("home_feature_4_title1"),
      title2: t("home_feature_4_title2"),
      description: t("home_feature_4_description"),
      icon: dedicatedMultilingual,
    },
    {
      title1: t("home_feature_5_title1"),
      title2: t("home_feature_5_title2"),
      description: t("home_feature_5_description"),
      icon: lucrativePartnership,
    },
    {
      title1: t("home_feature_6_title1"),
      title2: t("home_feature_6_title2"),
      description: t("home_feature_6_description"),
      icon: securityOfFunds,
    },
    {
      title1: t("home_feature_7_title1"),
      title2: t("home_feature_7_title2"),
      description: t("home_feature_7_description"),
      icon: multiAssetPortfolio,
    },
    {
      title1: t("home_feature_8_title1"),
      title2: t("home_feature_8_title2"),
      description: t("home_feature_8_description"),
      icon: easyDeposit,
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark">
      <div className="container mx-auto">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
            {t("home_heading")}
          </h2>
          {/* <p className="text-sm sm:text-base lg:text-lg mt-2 w-[70%] mx-auto text-tm dark:text-tm-dark">
            {t("home_description")}
          </p> */}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {iconicFeatures.map((benefit, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[32%] bg-cc dark:bg-cc-dark p-6 rounded-lg text-tm dark:text-tm-dark flex flex-col gap-3"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title1}</h3>
                  <h3 className="text-xl font-semibold text-tm dark:text-tm-dark">
                    {benefit.title2}
                  </h3>
                </div>
                <div className="">
                  <Lottie
                    animationData={benefit.icon}
                    loop={true}
                    style={{ width: "52px", height: "52px" }}
                  />
                </div>
              </div>
              <p className="text-tm dark:text-tm-dark text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBonusIconic;
