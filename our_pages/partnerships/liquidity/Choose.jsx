"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const Choose = () => {
  const locale = useLocale();
  const t = useTranslations("liquidity.choose");

  const solutions = [
    {
      title: t("title1"),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/Global.svg",
    },
    {
      title: t("title2"),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/Price.svg",
    },
    {
      title: t("title3"),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/fast.svg",
    },
    {
      title: t("title4"),
      description: t("description4"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/Drop.svg",
    },
    {
      title: t("title5"),
      description: t("description5"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/Robust.svg",
    },
    {
      title: t("title6"),
      description: t("description6"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/Shopping.svg",
    },
  ];

  return (
    <div className="bg-[#000000] py-12 sm:py-20">
      <div className="container grid grid-cols-12 mb-7">
        <div className="col-span-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#ffffff]">
            {t("main_title1")}
            <span className="text-primary">{t("main_title2")} </span>
          </h2>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex justify-between items-center gap-4"
          >
            <div className="">
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p className="text-[#c6c6c6] mt-2">{solution.description}</p>
            </div>
            <img
              src={solution.icon}
              alt={solution.title}
              className="w-12 h-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
