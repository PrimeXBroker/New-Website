"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const PrizeDistribution = () => {
  const locale = useLocale();
  const t = useTranslations("competitions.prizeDistribution");
  const d = useTranslations("competitions.hero");

  const prizes = [
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/competitions/1st.png",
      alt: "First Place",
      place: t("first_place_title"),
      amount: t("first_place_amount"),
    },
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/competitions/2nd.png",
      alt: "Second Place",
      place: t("second_place_title"),
      amount: t("second_place_amount"),
    },
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/competitions/3rd.png",
      alt: "Third Place",
      place: t("third_place_title"),
      amount: t("third_place_amount"),
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark">
            <span className="text-pcp dark:text-pcp-dark">
              {t("title_part1")}
            </span>
            {t("title_part2")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[540px] mx-auto text-ts dark:text-ts-dark">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="relative bg-cc dark:bg-cc-dark rounded-2xl p-6 mb-6 md:mb-0"
            >
              <h3 className="text-pcp dark:text-pcp-dark font-semibold text-xl mb-1">
                {prize.place}
              </h3>
              <p className="text-tm dark:text-tm-dark font-medium text-lg">
                {prize.amount}
              </p>
              <div className="absolute top-[-28px] end-8">
                <Image
                  src={prize.src}
                  alt={prize.alt}
                  width={70}
                  height={100}
                  className="w-[55px] sm:w-[70px] h-auto"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex items-center justify-between bg-cc dark:bg-cc-dark rounded-2xl p-6">
          <div>
            <h3 className="text-pcp dark:text-pcp-dark font-semibold text-xl mb-1">
              {t("fourth_place_title")}
            </h3>
            <p className="text-tm dark:text-tm-dark font-medium text-lg">
              {t("fourth_place_amount")}
            </p>
          </div>
          <div>
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/competitions/4th+to+10th.png"
              alt="4th to 10th"
              width={56}
              height={90}
              className="w-[46px] h-auto object-contain"
            />
          </div>
        </div>
        <p
          className={`text-ts dark:text-ts-dark text-sm sm:text-base text-center w-full sm:w-[90%] lg:w-[80%] mx-auto mt-6`}
        >
          {d("description2")}
        </p>
        {locale === "ar" && (
          <p
            className={`text-ts dark:text-ts-dark text-sm sm:text-base text-center w-full sm:w-[90%] lg:w-[80%] mx-auto mt-1`}
          >
            {d("description3")}
          </p>
        )}
      </div>
    </section>
  );
};

export default PrizeDistribution;
