"use client";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import servedClientsDark from "@/public/animations/home/dark-mode/250k-served-clients.json";
import millionPaidUpCapitalDark from "@/public/animations/home/dark-mode/$300-million-paid-up-capital.json";
import millionDailyTradesDark from "@/public/animations/home/dark-mode/$7-million-daily-trades.json";
import introducingBrokersDark from "@/public/animations/home/dark-mode/5000-introducing-brokers.json";
import servedClientsLight from "@/public/animations/home/light-mode/250k-served-clients.json";
import millionPaidUpCapitalLight from "@/public/animations/home/light-mode/$300-million-paid-up-capital.json";
import millionDailyTradesLight from "@/public/animations/home/light-mode/$7-million-daily-trades.json";
import introducingBrokersLight from "@/public/animations/home/light-mode/5,000-introducing-brokers.json";
import Lottie from "lottie-react";
import { useTheme } from "next-themes";

const HomeStats = () => {
  const { theme } = useTheme();
  const locale = useLocale();
  const t = useTranslations("home.stats");

  const stats = [
    {
      iconDark: servedClientsDark,
      iconLight: servedClientsLight,
      value: t("stat1.value1"),
      label: t("stat1.title"),
    },
    {
      iconDark: millionPaidUpCapitalDark,
      iconLight: millionPaidUpCapitalLight,
      value: t("stat2.value1"),
      label: t("stat2.title"),
    },
    {
      iconDark: millionDailyTradesDark,
      iconLight: millionDailyTradesLight,
      value: t("stat4.value1"),
      label: t("stat4.title"),
    },
    {
      iconDark: introducingBrokersDark,
      iconLight: introducingBrokersLight,
      value: t("stat3.value1"),
      label: t("stat3.title"),
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark pt-10 pb-16 sm:pb-28">
      <div className="container mx-auto">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-tl lg:dark:divide-tl-dark ${
            locale === "ar" ||
            locale === "ku" ||
            locale === "ps" ||
            locale === "fa"
              ? "lg:divide-x-reverse"
              : ""
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center gap-1 sm:gap-2 lg:justify-center sm:ps-8 md:ps-14 lg:ps-0 mb-5 ${
                index >= 2 ? "mb-0" : "mb-6"
              } lg:mb-0`}
            >
              <div>
                <Lottie
                  animationData={
                    theme === "dark" ? stat.iconDark : stat.iconLight
                  }
                  loop={true}
                  style={{ width: "52px", height: "52px" }}
                />
              </div>
              <div>
                <p className="text-tm dark:text-tm-dark font-semibold text-base sm:text-2xl lg:text-xl xl:text-2xl mb-0">
                  {stat.value}
                </p>
                <p className="text-ts dark:text-ts-dark font-semibold text-xs sm:text-base lg:text-base xl:text-lg mb-0">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
