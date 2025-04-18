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
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Register.webp",
      description: t("step1_desc"),
    },
    {
      title: t("step2"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Open-Account.webp",
      description: t("step2_desc"),
    },
    {
      title: t("step3"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Deposit.webp",
      description: t("step3_desc"),
    },
    {
      title: t("step4"),
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/Receive-Bonus.webp",
      description: t("step4_desc"),
    },
  ];

  return (
    <div className="bg-[#030303] py-16 sm:py-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-[#F9F9F9] uppercase">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] px-10 md:px-3 lg:px-10 py-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center"
            >
              <div className="w-full sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0">
                <Image
                  unoptimized={true}
                  src={card.imageSrc}
                  width="100"
                  height="100"
                  alt={card.title}
                  className="w-[60%] md:w-[75%] h-full"
                />
              </div>
              <div className="w-full sm:w-2/4 pl-0 sm:ps-4 md:ps-2 lg:ps-4 text-center sm:text-start">
                <h3 className="text-[#F9F9F9] text-xl sm:text-2xl md:text-xl lg:text-2xl font-semibold">
                  {card.title}
                </h3>
                <p className="text-[#F9F9F9] mt-3 sm:mt-5 md:mt-3 lg:mt-5 font-medium text-sm sm:text-base md:text-sm lg:text-base mb-0">
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
