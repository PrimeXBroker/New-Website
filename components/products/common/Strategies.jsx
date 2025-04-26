"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";

const Strategies = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("productsPageCommon.strategies");

  const strategies = [
    {
      title: t("title1"),
      description: t("description1"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Diversify+Instruments.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/trading-instruments/Research-Companies.svg",
    },
    {
      title: t("title2"),
      description: t("description2"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Research+Companies.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/trading-instruments/Diversify-Investments.svg",
    },
    {
      title: t("title3"),
      description: t("description3"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Stay+Updated.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/trading-instruments/Stay-Updated.svg",
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
              className={`bg-e1 dark:bg-e1-dark w-14 h-14 flex justify-center items-center rounded-lg`}
            >
              <Image
                src={theme === "dark" ? strategy.iconDark : strategy.iconLight}
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
