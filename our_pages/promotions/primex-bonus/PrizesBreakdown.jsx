"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PrizesBreakdown = () => {
  const t = useTranslations("bonusPage.bonusPrizeBreakdown");

  const cards = [
    {
      title: t("step1"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/Benefits+Icon+1.svg",
    },
    {
      title: t("step2"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/Benefits+Icon+2.svg",
    },
    {
      title: t("step3"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/Benefits+Icon+3.svg",
    },
    {
      title: t("step4"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/Benefits+Icon+4.svg",
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <p className="text-sm sm:text-lg lg:text-xl mb-3 text-pcp dark:text-pcp-dark uppercase">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark uppercase">
            {t("title")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 text-ts dark:text-ts-dark">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-cc dark:bg-cc-dark px-6 py-6 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center`}
            >
              <div className="w-full sm:w-[40%] flex items-center mb-4 sm:mb-0">
                <Image
                  unoptimized={true}
                  src={card.imageSrc}
                  width="100"
                  height="100"
                  alt={card.title}
                  className="w-[85%] h-full"
                />
              </div>
              <div className="w-full text-center sm:text-start">
                <h3 className="text-tm dark:text-tm-dark text-lg sm:text-xl md:text-lg lg:text-xl font-semibold">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrizesBreakdown;
