"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import lucrativeCommissions from "@/public/animations/ib-program/lucrative-commissions.json";
import advancedTradingPlatform from "@/public/animations/ib-program/advanced-trading-platform.json";
import comprehensiveMarketingSupport from "@/public/animations/ib-program/comprehensive-marketing-support.json";
import dedicatedIbSupportTeam from "@/public/animations/ib-program/dedicated-ib-support-team.json";
import flexiblePayoutOptions from "@/public/animations/ib-program/flexible-payout-options.json";
import transparentReporting from "@/public/animations/ib-program/transparent-reporting.json";
import Lottie from "lottie-react";

const PartnerFeatures = () => {
  const { theme } = useTheme();
  const t = useTranslations("ibProgram.partnerBenefits");

  const benefits = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      icon: lucrativeCommissions,
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      description: t("description2"),
      icon: advancedTradingPlatform,
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      icon: comprehensiveMarketingSupport,
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      description: t("description4"),
      icon: dedicatedIbSupportTeam,
    },
    {
      title: t("title5"),
      title1: t("title5_1"),
      description: t("description5"),
      icon: flexiblePayoutOptions,
    },
    {
      title: t("title6"),
      title1: t("title6_1"),
      description: t("description6"),
      icon: transparentReporting,
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pcp dark:text-pcp-dark text-center">
          {t("main_title1")}
          <span className="text-tm dark:text-tm-dark">{t("main_title2")} </span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-cc dark:bg-cc-dark p-6 rounded-xl text-pcp dark:text-pcp-dark flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <h3 className="text-xl font-semibold text-tm dark:text-tm-dark">
                  {benefit.title1}
                </h3>
              </div>
              <div className="w-14 h-14 bg-e1 dark:bg-e1-dark rounded-lg flex items-center justify-center">
                <Lottie
                  animationData={benefit.icon}
                  loop={true}
                  style={{ width: "52px", height: "52px" }}
                />
              </div>
            </div>
            <p className="text-ts dark:text-ts-dark mt-2 text-sm sm:text-base">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerFeatures;
