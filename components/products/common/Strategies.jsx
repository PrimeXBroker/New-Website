"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const Strategies = () => {
  const locale = useLocale();
  const t = useTranslations("productsPageCommon.strategies");

  const strategies = [
    {
      title: t("title1"),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Research+Companies.svg",
    },
    {
      title: t("title2"),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Diversify+Instruments.svg",
    },
    {
      title: t("title3"),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Stay+Updated.svg",
    },
  ];

  return (
    <div className="bg-[#000000] pt-16 sm:pt-28 pb-6 sm:pb-16">
      <div className="container grid grid-cols-12 mb-10">
        <div className="col-span-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center">
            {t("main_title1")}
            <span className="text-[#FED100]">{t("main_title2")} </span>
          </h2>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex justify-between items-center group hover:border-[#FED100]"
          >
            <div className="w-[80%]">
              <h3 className="text-xl font-bold group-hover:text-[#FED100]">
                {strategy.title}
              </h3>
              <p className="text-[#c6c6c6] mt-2 text-[15px]">
                {strategy.description}
              </p>
            </div>
            <div
              className={`bg-[#1D1D1D] border-2 border-[#222222] w-14 h-14 flex justify-center items-center rounded-lg`}
            >
              <Image
                src={strategy.icon}
                alt={strategy.title}
                width="34"
                height="200"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategies;
