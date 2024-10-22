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
          <h2 className="text-2xl md:text-4xl font-semibold text-[#ffffff] text-center">
            {t("main_title1")} <br />
            <span className="text-primary inline-block mt-2">
              {t("main_title2")}
            </span>
          </h2>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between gap-6 mb-6">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div
              key={index}
              className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] hover:border-[#FED100] text-[#ffffff] flex justify-between items-center gap-3 w-[32%]"
            >
              <div className="w-[85%]">
                <h3 className="text-xl font-semibold text-[#ffffff]">
                  {benefit.title1}{" "}
                  <span className="text-[#FED100]">{benefit.title2}</span>
                </h3>
                <p className="text-[#c6c6c6] mt-2 text-sm sm:text-[15px]">
                  {benefit.description}
                </p>
              </div>
              <div className="bg-[#1D1D1D] border-2 border-[#222222] w-14 h-14 flex justify-center items-center rounded-lg">
                <Image src={benefit.icon} alt="image" width="34" height="200" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6">
          {benefits.slice(3, 5).map((benefit, index) => (
            <div
              key={index}
              className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] hover:border-[#FED100] text-[#ffffff] flex justify-between items-center gap-3 w-[32%]"
            >
              <div className="w-[85%]">
                <h3 className="text-xl font-bold text-[#ffffff]">
                  {benefit.title1}{" "}
                  <span className="text-[#FED100]">{benefit.title2}</span>
                </h3>
                <p className="text-[#c6c6c6] mt-2 text-sm sm:text-[15px]">
                  {benefit.description}
                </p>
              </div>
              <div className="bg-[#1D1D1D] border-2 border-[#222222] w-14 h-14 flex justify-center items-center rounded-lg">
                <Image src={benefit.icon} alt="image" width="34" height="200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
