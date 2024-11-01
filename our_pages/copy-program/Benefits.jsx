"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const Benefits = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram.benefits");

  const benefits = [
    {
      title1: t("title1_part1"),
      title2: t("title1_part2"),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Real-Time+Trading.svg",
    },
    {
      title1: t("title2_part1"),
      title2: t("title2_part2"),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Diversify+Portfolio.svg",
    },
    {
      title1: t("title3_part1"),
      title2: t("title3_part2"),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Automte+and+save+time.svg",
    },
    {
      title1: t("title4_part1"),
      title2: t("title4_part2"),
      description: t("description4"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/7+Customer+Support.svg",
    },
    {
      title1: t("title5_part1"),
      title2: t("title5_part2"),
      description: t("description5"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/globe.svg",
    },
  ];

  return (
    <div className="bg-[#000000]">
      <div className="container flex flex-col mb-10">
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#ffffff] text-center hidden sm:block">
            {t("main_title1")} <br className="hidden sm:block" />
            <span className="text-[#FED100] inline-block mt-2">
              {t("main_title2")}
            </span>
          </h2>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#ffffff] text-center block sm:hidden">
            {t("main_title1")}
            <span className="text-[#FED100]">{t("main_title2")}</span>
          </h2>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[32%] bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#FED100] flex flex-col gap-3"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title1}</h3>
                  <h3 className="text-xl font-semibold text-[#ffffff]">
                    {benefit.title2}
                  </h3>
                </div>
                <div className="w-16 h-16 border-2 border-[#222222] bg-[#1D1D1D] rounded-lg flex items-center justify-center">
                  <Image
                    src={benefit.icon}
                    alt="image"
                    width="40"
                    height="200"
                  />
                </div>
              </div>
              <p className="text-[#c6c6c6] text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
