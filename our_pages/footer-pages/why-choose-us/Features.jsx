"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("whyChooseUs.features");

  const features = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Trusted++Global+Brand.svg",
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Lightning-Fast++Trade+Execution.svg",
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Trailblazing++Technology.svg",
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      description: t("description4"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/7+Dedicated++Multilingual+Support.svg",
    },
    {
      title: t("title5"),
      title1: t("title5_1"),
      description: t("description5"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Lucrative++Partnership+Programs.svg",
    },
    {
      title: t("title6"),
      title1: t("title6_1"),
      description: t("description6"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Security++of+Funds.svg",
    },
    {
      title: t("title7"),
      title1: t("title7_1"),
      description: t("description7"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Multi-Asset++Portfolio.svg",
    },
    {
      title: t("title8"),
      title1: t("title8_1"),
      description: t("description8"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Instant++Withdrawals.svg",
    },
  ];

  return (
    <div className="bg-[#000000] py-16 sm:py-28">
      <div className="container mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center">
          {t("main_title1")}
          <span className="text-[#FED100]">{t("main_title2")}</span>
        </h2>
        <p className="text-[#c6c6c6] text-center sm:w-[90%] md:w-[80%] mx-auto mt-3">
          {t("description")}
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] hover:border-[#FED100] text-[#FED100] flex flex-col gap-2 "
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <h3 className="text-xl font-semibold text-[#ffffff]">
                  {feature.title1}
                </h3>
              </div>
              <div className="w-14 h-14 border-2 border-[#222222] bg-[#1D1D1D] rounded-lg flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[32px]"
                />
              </div>
            </div>
            <p className="text-[#c6c6c6] mt-2 text-sm sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
