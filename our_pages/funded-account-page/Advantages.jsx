"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { FiStar, FiCheckCircle, FiRefreshCw } from "react-icons/fi";

const advantagesData = [
  {
    icon: FiStar,
    titleKey: "card1Title",
    descKey: "card1Desc",
  },
  {
    icon: FiCheckCircle,
    titleKey: "card2Title",
    descKey: "card2Desc",
  },
  {
    icon: FiRefreshCw,
    titleKey: "card3Title",
    descKey: "card3Desc",
  },
];

const Advantages = () => {
  const t = useTranslations("fundedAccountPage.advantages");

  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-pcp dark:border-pcp-dark bg-pcp/[0.0784] dark:bg-pcp-dark/[0.0784] mb-5">
            <span className="w-2 h-2 rounded-full bg-pcp dark:bg-pcp-dark inline-block"></span>
            <span className="text-pcp dark:text-pcp-dark text-xs sm:text-sm font-semibold tracking-wider uppercase">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantagesData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-cc dark:bg-cc-dark rounded-lg flex flex-col items-start text-left p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-pcp/[0.102] dark:bg-pcp-dark/[0.102] flex items-center justify-center shrink-0 mb-6">
                  <IconComponent className="w-7 h-7 text-pcp dark:text-pcp-dark" />
                </div>
                <h3 className="text-xl text-tm dark:text-tm-dark font-semibold mb-3">
                  {t(item.titleKey)}
                </h3>
                <p className="text-ts dark:text-ts-dark text-sm sm:text-base font-medium">
                  {t(item.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
