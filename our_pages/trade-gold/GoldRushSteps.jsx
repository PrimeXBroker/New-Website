"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const GoldRushSteps = () => {
  const t = useTranslations("trdaeGold.goldRushSteps");

  const cards = [
    {
      step: "1.",
      title: t("step1"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/Deposit.svg",
      description: t("step1_desc"),
    },
    {
      step: "2.",
      title: t("step2"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/Trade+XAU+USD.svg",
      description: t("step2_desc"),
    },
    {
      step: "3.",
      title: t("step3"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/Win+Real+Gold.svg",
      description: t("step3_desc"),
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
            {t("title1")}
            <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
            <br className="hidden md:block" />
            {t("title3")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[540px] mx-auto text-ts dark:text-ts-dark">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-cc dark:bg-cc-dark p-6 rounded-2xl shadow-xl flex flex-col items-center h-full"
            >
              <div className="bg-e1 dark:bg-e1-dark rounded-xl h-64 w-full flex items-center justify-center">
                <Image
                  unoptimized={true}
                  src={card.imageSrc}
                  width="100"
                  height="100"
                  alt={card.title}
                  className="w-[56%]"
                />
              </div>
              <div className="mt-10">
                <h3 className="text-tm dark:text-tm-dark text-xl sm:text-2xl md:text-xl lg:text-2xl font-semibold">
                  {card.step} {card.title}
                </h3>
                <p className="text-ts dark:text-ts-dark mt-4 font-medium text-sm sm:text-base md:text-sm lg:text-base mb-0">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoldRushSteps;
