"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const LiquiditySolutions = () => {
  const locale = useLocale();
  const t = useTranslations("liquidity.liquiditySolutions");

  const solutions = [
    {
      title: t("title1"),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/Chain.svg",
    },
    {
      title: t("title2"),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/Chart.svg",
    },
    {
      title: t("title3"),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/HandShake.svg",
    },
    {
      title: t("title4"),
      description: t("description4"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/SpeedoMeter.svg",
    },
  ];

  return (
    <div className="bg-[#000000] py-12 sm:py-20">
      <div className="container mb-7">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#ffffff]">
          {t("main_title1")}{" "}
          <span className="text-primary">{t("main_title2")} </span>
        </h2>
        <h2 className="text-2xl md:text-4xl font-semibold text-[#ffffff]">
          {t("main_title3")}
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2 transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 group"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold group-hover:text-primary">
                {solution.title}
              </h3>
              <img
                src={solution.icon}
                alt={solution.title}
                className="w-12 h-12"
              />
            </div>
            <p className="text-[#c6c6c6] mt-2">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiquiditySolutions;
