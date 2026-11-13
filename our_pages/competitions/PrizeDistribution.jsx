"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PrizeDistribution = () => {
  const t = useTranslations("competitions.prizeDistribution");

  const topPrizes = [
    {
      rank: 2,
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/competitions/medal-2.png",
      alt: "Second Place",
      place: t("second_place_title"),
      amount: t("second_place_amount"),
      isFirst: false,
      orderClass: "order-2 md:order-1",
      heightClass: "md:min-h-[250px]",
      iconSize: "w-[55px] sm:w-[65px]",
    },
    {
      rank: 1,
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/competitions/medal-1.png",
      alt: "First Place",
      place: t("first_place_title"),
      amount: t("first_place_amount"),
      isFirst: true,
      orderClass: "order-1 md:order-2",
      heightClass: "md:min-h-[290px]",
      iconSize: "w-[68px] sm:w-[80px]",
    },
    {
      rank: 3,
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/competitions/medal-3.png",
      alt: "Third Place",
      place: t("third_place_title"),
      amount: t("third_place_amount"),
      isFirst: false,
      orderClass: "order-3 md:order-3",
      heightClass: "md:min-h-[230px]",
      iconSize: "w-[55px] sm:w-[65px]",
    },
  ];

  const leftColumnPrizes = [
    {
      badge: t("rank_4_badge"),
      label: t("place_label"),
      amount: t("rank_4_amount"),
    },
    {
      badge: t("rank_5_badge"),
      label: t("place_label"),
      amount: t("rank_5_amount"),
    },
    {
      badge: t("rank_6_badge"),
      label: t("place_label"),
      amount: t("rank_6_amount"),
    },
    {
      badge: t("rank_7_badge"),
      label: t("place_label"),
      amount: t("rank_7_amount"),
    },
  ];

  const rightColumnPrizes = [
    {
      badge: t("rank_8_badge"),
      label: t("place_label"),
      amount: t("rank_8_amount"),
    },
    {
      badge: t("rank_9_badge"),
      label: t("place_label"),
      amount: t("rank_9_amount"),
    },
    {
      badge: t("rank_10_20_badge"),
      label: t("place_label"),
      amount: t("rank_10_20_amount"),
    },
    {
      badge: t("rank_21_30_badge"),
      label: t("place_label"),
      amount: t("rank_21_30_amount"),
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container">
        <div className="text-center mb-10">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-end mb-6">
          {topPrizes.map((prize) => (
            <div
              key={prize.rank}
              className={`${prize.orderClass} ${prize.heightClass} flex flex-col items-center justify-center text-center bg-cc dark:bg-cc-dark border-2 rounded-xl p-6 sm:p-8 ${
                prize.isFirst
                  ? "border-pcp dark:border-pcp-dark"
                  : "border-cc dark:border-cc-dark"
              }`}
            >
              <div className="mb-4">
                <Image
                  src={prize.src}
                  alt={prize.alt}
                  width={85}
                  height={110}
                  className={`${prize.iconSize} h-auto object-contain mx-auto`}
                />
              </div>
              <h3
                className={`text-pcp dark:text-pcp-dark font-semibold mb-1 ${
                  prize.isFirst
                    ? "text-base sm:text-xl"
                    : "text-base sm:text-lg"
                }`}
              >
                {prize.place}
              </h3>
              <p
                className={`text-tm dark:text-tm-dark font-bold ${
                  prize.isFirst ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                }`}
              >
                {prize.amount}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-cc dark:bg-cc-dark border border-e1 dark:border-e1-dark rounded-xl p-5 sm:p-8">
          <div className="flex items-center justify-between text-xs sm:text-sm text-ts dark:text-ts-dark pb-4">
            <span>{t("table_header_place")}</span>
            <span>{t("table_header_prize")}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <div className="divide-y divide-e1 dark:divide-e1-dark">
              {leftColumnPrizes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="bg-e1 dark:bg-e1-dark text-pcp dark:text-pcp-dark font-semibold text-xs sm:text-sm px-2.5 py-[6px] rounded-md">
                      {item.badge}
                    </span>
                    <span className="text-ts dark:text-ts-dark text-xs sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-tm dark:text-tm-dark font-semibold text-sm sm:text-base">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
            <div className="divide-y divide-e1 dark:divide-e1-dark border-t md:border-t-0 border-e1 dark:border-e1-dark">
              {rightColumnPrizes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3.5"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="bg-e1 dark:bg-e1-dark text-pcp dark:text-pcp-dark font-semibold text-xs sm:text-sm px-2.5 py-[6px] rounded-md">
                      {item.badge}
                    </span>
                    <span className="text-ts dark:text-ts-dark text-xs sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-tm dark:text-tm-dark font-semibold text-sm sm:text-base">
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-e1 dark:border-e1-dark mt-2 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-ts dark:text-ts-dark">
              {t("payout_note")}
            </p>
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-tm dark:text-tm-dark font-bold text-base sm:text-lg">
                {t("total_label")}
              </span>
              <span className="text-pcp dark:text-pcp-dark font-bold text-base sm:text-lg">
                {t("total_amount")}
              </span>
            </div>
          </div>
        </div>
        {/* <p className="text-ts dark:text-ts-dark text-sm sm:text-base text-center w-full sm:w-[90%] lg:w-[86%] mx-auto pt-16 sm:pt-28">
          {t("noteTxt")}
        </p> */}
      </div>
    </section>
  );
};

export default PrizeDistribution;
