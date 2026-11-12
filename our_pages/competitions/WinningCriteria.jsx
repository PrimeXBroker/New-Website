"use client";
import React from "react";
import { useTranslations } from "next-intl";

const WinningCriteria = () => {
  const t = useTranslations("competitions.winningCriteria");

  const leftColumnItems = [
    {
      number: "01",
      title: t("item1_title"),
      desc: t("item1_desc"),
    },
    {
      number: "02",
      title: t("item2_title"),
      desc: t("item2_desc"),
    },
    {
      number: "03",
      title: t("item3_title"),
      desc: t("item3_desc"),
    },
  ];

  const rightColumnItems = [
    {
      number: "04",
      title: t("item4_title"),
      desc: t("item4_desc"),
    },
    {
      number: "05",
      title: t("item5_title"),
      desc: t("item5_desc"),
    },
    {
      number: "06",
      title: t("item6_title"),
      desc: t("item6_desc"),
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pcp dark:text-pcp-dark text-center mb-10">
          <span className="text-tm dark:text-tm-dark">{t("title_part1")}</span>
          {t("title_part2")}
        </h2>
        <div className="bg-cc dark:bg-cc-dark rounded-xl px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16">
            <div className="divide-y divide-e1 dark:divide-e1-dark">
              {leftColumnItems.map((item, index) => (
                <div
                  key={item.number}
                  className={`flex items-start gap-5 sm:gap-6 ${
                    index === 0
                      ? "pb-6 sm:pb-7"
                      : index === leftColumnItems.length - 1
                        ? "pt-6 sm:pt-7 pb-6 sm:pb-7 lg:pb-0"
                        : "py-6 sm:py-7"
                  }`}
                >
                  <span className="text-2xl sm:text-3xl font-bold text-pcp dark:text-pcp-dark leading-none shrink-0 mt-0.5">
                    {item.number}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-semibold text-tm dark:text-tm-dark leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ts dark:text-ts-dark leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="divide-y divide-e1 dark:divide-e1-dark border-t border-e1 dark:border-e1-dark lg:border-t-0">
              {rightColumnItems.map((item, index) => (
                <div
                  key={item.number}
                  className={`flex items-start gap-5 sm:gap-6 ${
                    index === 0
                      ? "py-6 sm:py-7 lg:pt-0"
                      : index === rightColumnItems.length - 1
                        ? "pt-6 sm:pt-7"
                        : "py-6 sm:py-7"
                  }`}
                >
                  <span className="text-2xl sm:text-3xl font-bold text-pcp dark:text-pcp-dark leading-none shrink-0 mt-0.5">
                    {item.number}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-semibold text-tm dark:text-tm-dark leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ts dark:text-ts-dark leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinningCriteria;
