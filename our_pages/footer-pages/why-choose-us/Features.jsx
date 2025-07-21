"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import trustedGlobalBrand from "@/public/animations/why-choose-us/trusted-global-brand.json";
import lightningFastTradeExecution from "@/public/animations/why-choose-us/lightning-fast-trade-execution.json";
import trailblazingTechnology from "@/public/animations/why-choose-us/trailblazing-technology.json";
import dedicatedMultilingualSupport from "@/public/animations/why-choose-us/dedicated-multilingual-support.json";
import lucrativePartnership from "@/public/animations/why-choose-us/lucrative-partnership-programs.json";
import securityOfFunds from "@/public/animations/why-choose-us/security-of-funds.json";
import multiAssetPortfolio from "@/public/animations/why-choose-us/multi-asset-portfolio.json";
import instantWithdrawals from "@/public/animations/why-choose-us/instant-withdrawals.json";
import Lottie from "lottie-react";

const Features = () => {
  const { theme } = useTheme();
  const t = useTranslations("whyChooseUs.features");

  const features = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      icon: trustedGlobalBrand,
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      description: t("description2"),
      icon: lightningFastTradeExecution,
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      icon: trailblazingTechnology,
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      description: t("description4"),
      icon: dedicatedMultilingualSupport,
    },
    {
      title: t("title5"),
      title1: t("title5_1"),
      description: t("description5"),
      icon: lucrativePartnership,
    },
    {
      title: t("title6"),
      title1: t("title6_1"),
      description: t("description6"),
      icon: securityOfFunds,
    },
    {
      title: t("title7"),
      title1: t("title7_1"),
      description: t("description7"),
      icon: multiAssetPortfolio,
    },
    {
      title: t("title8"),
      title1: t("title8_1"),
      description: t("description8"),
      icon: instantWithdrawals,
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
          {t("main_title1")}
          <span className="text-pcp dark:text-pcp-dark">
            {t("main_title2")}
          </span>
        </h2>
        <p className="text-ts dark:text-ts-dark text-center sm:w-[90%] md:w-[80%] mx-auto mt-3">
          {t("description")}
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-cc dark:bg-cc-dark p-6 rounded-lg text-pcp dark:text-pcp-dark flex flex-col gap-2 "
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <h3 className="text-xl font-semibold text-tm dark:text-tm-dark">
                  {feature.title1}
                </h3>
              </div>
              <div className="w-14 h-14 bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-lg flex items-center justify-center">
                <Lottie
                  animationData={feature.icon}
                  loop={true}
                  style={{ width: "52px", height: "52px" }}
                />
              </div>
            </div>
            <p className="text-ts dark:text-ts-dark mt-2 text-sm sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
