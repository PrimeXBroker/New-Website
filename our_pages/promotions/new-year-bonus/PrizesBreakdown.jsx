"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PrizesBreakdown = () => {
  const t = useTranslations("newYearBonus.bonusPrizeBreakdown");

  const cards = [
    {
      count: "1.",
      title: t("step1"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-year-bonus/Register+%26+Verify.png",
      description: t("step1_desc"),
    },
    {
      count: "2.",
      title: t("step2"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-year-bonus/Get+Bonus.png",
      description: t("step2_desc"),
    },
    {
      count: "3.",
      title: t("step3"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-year-bonus/Trade.png",
      description: t("step3_desc"),
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-cc dark:bg-cc-dark rounded-2xl p-6 h-full`}
            >
              <div className="flex justify-center items-center bg-e2 dark:bg-e2-dark h-[290px] rounded-xl mb-8">
                <Image
                  unoptimized={true}
                  src={card.imageSrc}
                  width="100"
                  height="100"
                  alt={card.title}
                  className="w-[60%] md:w-[70%] h-auto"
                />
              </div>
              <div className="text-start">
                <h3 className="text-tm dark:text-tm-dark text-xl sm:text-2xl md:text-xl lg:text-2xl font-semibold">
                  {card.count} {card.title}
                </h3>
                <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base md:text-sm lg:text-base mb-0 mt-4">
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

export default PrizesBreakdown;
