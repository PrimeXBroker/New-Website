"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const PartnerFeatures = () => {
  const locale = useLocale();
  const t = useTranslations("ibProgram.partnerBenefits");

  const benefits = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Lucrative+Commissions.svg",
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Advanced+Trading+Platform.svg",
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Comprehensive+Marketing+Support.svg",
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      description: t("description4"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Dedicated+IB+Support+Team.svg",
    },
    {
      title: t("title5"),
      title1: t("title5_1"),
      description: t("description5"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Flexible+Payout+Options.svg",
    },
    {
      title: t("title6"),
      title1: t("title6_1"),
      description: t("description6"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Transparent+Reporting.svg",
    },
  ];

  return (
    <div className="bg-[#000000] py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center">
          {t("main_title1")}
          <span className="text-[#FED100]">{t("main_title2")} </span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#FED100] flex flex-col gap-2 hover:scale-105 transition-all duration-500 ease-in-out group"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <h3 className="text-xl font-bold text-[#ffffff]">
                  {benefit.title1}
                </h3>
              </div>
              <div className="w-12 h-12 borer-2 border-[#222222] bg-[#1D1D1D] group-hover:bg-[#FED100] rounded-lg flex items-center justify-center">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-[32px]"
                />
              </div>
            </div>
            <p className="text-[#c6c6c6] mt-2 text-sm sm:text-base">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerFeatures;
