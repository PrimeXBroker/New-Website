"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import researchCompanies from "@/public/animations/products/research-companies.json";
import diversifyInvestments from "@/public/animations/products/diversify-investments.json";
import stayUpdated from "@/public/animations/products/stay-updated.json";
import Lottie from "lottie-react";

const Strategies = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("productsPageCommon.strategies");

  const strategies = [
    {
      title: t("title1"),
      description: t("description1"),
      icon: researchCompanies,
    },
    {
      title: t("title2"),
      description: t("description2"),
      icon: diversifyInvestments,
    },
    {
      title: t("title3"),
      description: t("description3"),
      icon: stayUpdated,
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container grid grid-cols-12 mb-10">
        <div className="col-span-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
            {t("main_title1")}
            <span className="text-pcp dark:text-pcp-dark">
              {t("main_title2")}
            </span>
          </h2>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="bg-cc dark:bg-cc-dark p-6 rounded-lg text-tm dark:text-tm-dark flex justify-between items-center"
          >
            <div className="w-[80%]">
              <h3 className="text-xl font-semibold">{strategy.title}</h3>
              <p className="text-ts dark:text-ts-dark mt-2 text-[15px]">
                {strategy.description}
              </p>
            </div>
            <div
              className={`bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 w-14 h-14 flex justify-center items-center rounded-lg`}
            >
              <Lottie
                animationData={strategy.icon}
                loop={true}
                style={{ width: "52px", height: "52px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategies;
