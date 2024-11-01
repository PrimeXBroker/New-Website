"use client";
import React from "react";
import { useTranslations } from "next-intl";

const EasyStepsMobile = () => {
  const t = useTranslations("ibProgram.easySteps");

  const benefits = [
    {
      title: t("step1_title"),
      description: t("step1_desc"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Register.svg",
    },
    {
      title: t("step2_title"),
      description: t("step2_desc"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Earn.svg",
    },
    {
      title: t("step3_title"),
      description: t("step3_desc"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Promote.svg",
    },
  ];

  return (
    <div className="bg-[#000000] py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center">
          {t("title1")}
          <span className="text-[#FED100]">{t("title2")} </span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#FED100] flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <div className="w-12 h-12 borer-2 border-[#222222] bg-[#1D1D1D] rounded-lg flex items-center justify-center">
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

export default EasyStepsMobile;
