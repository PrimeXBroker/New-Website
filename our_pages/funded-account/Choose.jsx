"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Choose = () => {
  const locale = useLocale();
  const t = useTranslations("fundedAccount.choose");

  const solutions = [
    {
      title: (
        <>
          {t("title1")} <br />
          <span className="text-[#FED100]"> {t("title1_1")}</span>
        </>
      ),
      description: t("description1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/Trusted+Brand++Worldwide.svg",
    },
    {
      title: (
        <>
          {t("title2")}
          <br />
          <span className="text-[#FED100]"> {t("title2_1")}</span>
        </>
      ),
      description: t("description2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/Trade+with++Match+Trader.svg",
    },
    {
      title: (
        <>
          {t("title3")} <br />
          <span className="text-[#FED100]"> {t("title3_1")}</span>
        </>
      ),
      description: t("description3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/Spreads++from+0.1+Pips.svg",
    },
    {
      title: (
        <>
          {t("title4")} <br />
          <span className="text-[#FED100]"> {t("title4_1")}</span>
        </>
      ),
      description: t("description4"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/High++Leverage.svg",
    },
    {
      title: (
        <>
          {t("title5")} <br />
          <span className="text-[#FED100]"> {t("title5_1")}</span>
        </>
      ),
      description: t("description5"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/No++Trading+Limits.svg",
    },
    {
      title: (
        <>
          {t("title6")} <br />
          <span className="text-[#FED100]"> {t("title6_1")}</span>
        </>
      ),
      description: t("description6"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/24+7++Customer+Support.svg",
    },
  ];

  return (
    <div className="bg-[#000000] py-12 sm:py-20">
      <div className="container">
        <div className="flex flex-col mb-10">
          <h2 className="text-4xl font-semibold text-[#ffffff] text-center">
            {t("main_title1")}
            <span className="text-[#FED100] inline-block mt-2">
              {t("main_title2")}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-[#111111] p-7 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2"
            >
              <div className="flex justify-between items-center gap-3">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  {solution.title}
                </h3>
                <img
                  src={solution.icon}
                  alt={solution.title}
                  className="w-14 md:w-16 h-14 md:h-16 p-3 border-[#222222] bg-[#1D1D1D] rounded-lg self-start"
                />
              </div>
              <p className="text-[#c6c6c6] text-base md:text-base lg:text-xl mt-2">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
