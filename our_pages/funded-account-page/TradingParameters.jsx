"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { FiAlertTriangle } from "react-icons/fi";

const rulesData = [
  {
    number: "01",
    titleKey: "rule1Title",
    descKey: "rule1Desc",
  },
  {
    number: "02",
    titleKey: "rule2Title",
    descKey: "rule2Desc",
  },
  {
    number: "03",
    titleKey: "rule3Title",
    descKey: "rule3Desc",
  },
  {
    number: "04",
    titleKey: "rule4Title",
    descKey: "rule4Desc",
  },
  {
    number: "05",
    titleKey: "rule5Title",
    descKey: "rule5Desc",
  },
];

const TradingParameters = () => {
  const t = useTranslations("fundedAccountPage.tradingParameters");

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-36">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-pcp dark:border-pcp-dark bg-pcp/[0.0784] dark:bg-pcp-dark/[0.0784] mb-5">
            <span className="w-2 h-2 rounded-full bg-pcp dark:bg-pcp-dark inline-block"></span>
            <span className="text-pcp dark:text-pcp-dark text-xs sm:text-sm font-semibold tracking-wider uppercase">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center uppercase">
            {t("title")}
          </h2>
        </div>
        <div className="divide-y divide-e1 dark:divide-e1-dark">
          {rulesData.map((rule, index) => (
            <div
              key={index}
              className="py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
            >
              <span className="text-2xl sm:text-3xl font-semibold text-pcp dark:text-pcp-dark shrink-0">
                {rule.number}
              </span>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl text-tm dark:text-tm-dark font-semibold mb-1">
                  {t(rule.titleKey)}
                </h3>
                <p className="text-ts dark:text-ts-dark text-sm sm:text-base font-medium">
                  {t(rule.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:mt-12 bg-cc dark:bg-cc-dark rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-rb dark:bg-rb-dark flex items-center justify-center shrink-0">
            <FiAlertTriangle className="w-5 h-5 text-rc dark:text-rc-dark" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-base sm:text-lg font-semibold text-tm dark:text-tm-dark uppercase tracking-wider mb-1">
              {t("warningTitle")}
            </h4>
            <p className="text-ts dark:text-ts-dark text-xs sm:text-sm font-medium">
              {t("warningDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingParameters;
