"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Benefits = () => {
  const t = useTranslations("localDepositor.benefits");
  console.log(t("main_title"), "t");

  const benefits = [
    {
      title: t("title1"),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/images/speed.svg",
    },
    {
      title: t("title2"),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/images/no-fees.svg",
    },
    {
      title: t("title3"),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/images/ease-of-use.svg",
    },
  ];

  return (
    <div className="bg-[#000000] py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center">
          {t("main_title")}
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#FED100] flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
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

export default Benefits;
