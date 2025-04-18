"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const WhyBonusIconic = () => {
  const locale = useLocale();
  const t = useTranslations("bonusPage.iconicFeatures");

  const iconicFeatures = [
    {
      title1: t("home_feature_1_title1"),
      title2: t("home_feature_1_title2"),
      description: t("home_feature_1_description"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Trusted-Global-Broker.svg",
    },
    {
      title1: t("home_feature_2_title1"),
      title2: t("home_feature_2_title2"),
      description: t("home_feature_2_description"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Lightning-Fast-Trade-Execution.svg",
    },
    {
      title1: t("home_feature_3_title1"),
      title2: t("home_feature_3_title2"),
      description: t("home_feature_3_description"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Trailblazing-Technology.svg",
    },
    {
      title1: t("home_feature_4_title1"),
      title2: t("home_feature_4_title2"),
      description: t("home_feature_4_description"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Dedicated-Multilingual-Support.svg",
    },
    {
      title1: t("home_feature_5_title1"),
      title2: t("home_feature_5_title2"),
      description: t("home_feature_5_description"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Lucrative-Partnership-Programs.svg",
    },
    {
      title1: t("home_feature_6_title1"),
      title2: t("home_feature_6_title2"),
      description: t("home_feature_6_description"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Trailblazing-Technology-1.svg",
    },
    {
      title1: t("home_feature_7_title1"),
      title2: t("home_feature_7_title2"),
      description: t("home_feature_7_description"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Multi-Asset-Portfolio.svg",
    },
    {
      title1: t("home_feature_8_title1"),
      title2: t("home_feature_8_title2"),
      description: t("home_feature_8_description"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Easy-Deposit-Withdrawal.svg",
    },
  ];

  return (
    <div className="bg-[#030303]">
      <div className="container mx-auto">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F9F9F9] uppercase">
            {t("home_heading")}
          </h2>
          {/* <p className="text-sm sm:text-base lg:text-lg mt-2 w-[70%] mx-auto text-[#F9F9F9]">
            {t("home_description")}
          </p> */}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {iconicFeatures.map((benefit, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[32%] bg-[#1A1A1A] p-6 rounded-lg  text-[#F9F9F9] flex flex-col gap-3"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title1}</h3>
                  <h3 className="text-xl font-semibold text-[#F9F9F9]">
                    {benefit.title2}
                  </h3>
                </div>
                <div className="">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title1}
                    width="40"
                    height="40"
                    className="w-[52px] h-[52px]"
                  />
                </div>
              </div>
              <p className="text-[#F9F9F9] text-sm sm:text-base">
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
