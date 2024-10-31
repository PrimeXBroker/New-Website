"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const Features = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram.features");

  const featuresDataTop = [
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Full+Control+Over+Risk+Management.svg",
      text: t("feature1"),
      alt: "Risk Management Icon",
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Copy+Multiple+Experts+Simultaneously.svg",
      text: t("feature2"),
      alt: "Copy Multiple Experts Icon",
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Copy+by+Percentage+or+Fixed+Lot.svg",
      text: t("feature3"),
      alt: "Percentage or Fixed Lot Icon",
    },
  ];

  const featuresDataBottom = [
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Start+Investing+Easily+From+%24100.svg",
      text: t("feature4"),
      alt: "Investing Icon",
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Access+Detailed+Prime+Trader+Account+Stats.svg",
      text: t("feature5"),
      alt: "Account Stats Icon",
    },
  ];

  return (
    <div className="bg-[#000000] text-[#c6c6c6] pt-20">
      <div className="container mx-auto">
        <div className="bg-[#111111] border border-[#1D1D1D] rounded-[20px] py-12">
          <div className="flex items-center justify-center mb-6">
            {featuresDataTop.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 md:px-6 xl:px-12 group ${
                  index !== 0
                    ? locale === "ar" || locale === "fa" || locale === "kur"
                      ? "border-r border-[#1D1D1D]"
                      : "border-l border-[#1D1D1D]"
                    : ""
                }`}
              >
                <div className="p-3 bg-[#1D1D1D] rounded-lg flex items-center justify-center h-16 w-16">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    width="40"
                    height="200"
                  />
                </div>
                <p className="text-base font-medium w-52 group-hover:text-[#FED100]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-12">
            {featuresDataBottom.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 px-12 group ${
                  index !== 0
                    ? locale === "ar" || locale === "fa" || locale === "kur"
                      ? "border-r border-[#1D1D1D]"
                      : "border-l border-[#1D1D1D]"
                    : ""
                }`}
              >
                <div className="p-3 bg-[#1D1D1D] rounded-lg flex items-center justify-center h-16 w-16">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    width="40"
                    height="200"
                  />
                </div>
                <p className="text-base font-medium w-52 group-hover:text-[#FED100]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
