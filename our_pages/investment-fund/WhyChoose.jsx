"use client";
import React from "react";
import { useTranslations } from "next-intl";
import structuredInvestmentModel from "@/public/animations/investment-fund/structured-investment-model.json";
import professionalManagement from "@/public/animations/investment-fund/professional-management.json";
import handsFreeInvesting from "@/public/animations/investment-fund/hands-free-investing.json";
import flexibleTransactions from "@/public/animations/investment-fund/flexible-transactions.json";
import fairProfitDistribution from "@/public/animations/investment-fund/fair-profit-distribution.json";
import dedicatedSupport from "@/public/animations/investment-fund/dedicated-support.json";
import Lottie from "lottie-react";

const WhyChoose = () => {
  const t = useTranslations("investmentFunds.whyChoose");

  const benefits = [
    {
      title1: t("title1"),
      title2: t("title1_1"),
      description: t("description1"),
      icon: professionalManagement,
    },
    {
      title1: t("title2"),
      title2: t("title2_1"),
      description: t("description2"),
      icon: flexibleTransactions,
    },
    {
      title1: t("title3"),
      title2: t("title3_1"),
      description: t("description3"),
      icon: structuredInvestmentModel,
    },
    {
      title1: t("title4"),
      title2: t("title4_1"),
      description: t("description4"),
      icon: handsFreeInvesting,
    },
    {
      title1: t("title5"),
      title2: t("title5_1"),
      description: t("description5"),
      icon: dedicatedSupport,
    },
    {
      title1: t("title6"),
      title2: t("title6_1"),
      description: t("description6"),
      icon: fairProfitDistribution,
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark">
      <div className="container flex flex-col mb-10">
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
            {t("main_title1")}
            <span className="text-pcp dark:text-pcp-dark inline-block mt-2">
              {t("main_title2")}
            </span>
          </h2>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[32%] bg-cc dark:bg-cc-dark p-6 rounded-lg text-pcp dark:text-pcp-dark flex flex-col gap-3"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title1}</h3>
                  <h3 className="text-xl font-semibold text-tm dark:text-tm-dark">
                    {benefit.title2}
                  </h3>
                </div>
                <div className="w-16 h-16 bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-lg flex items-center justify-center">
                  <Lottie
                    animationData={benefit.icon}
                    loop={true}
                    style={{ width: "52px", height: "52px" }}
                  />
                </div>
              </div>
              <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
