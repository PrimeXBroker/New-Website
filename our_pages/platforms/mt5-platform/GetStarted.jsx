import React from "react";
import { useTranslations, useLocale } from "next-intl";

const GetStarted = () => {
  const locale = useLocale();
  const t = useTranslations("metaTrader5.getStarted");

  return (
    <div className="bg-p dark:bg-p-dark pb-16 sm:pb-28 pt-11 sm:pt-24">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
          {t("main_title1")}
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pcp dark:text-pcp-dark text-center mb-10">
          {t("main_title2")}
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-tm dark:text-tm-dark">
        <div className="flex items-center bg-cc dark:bg-cc-dark  rounded-lg p-4">
          <div className="flex-shrink-0 bg-e1 dark:bg-e1-dark  text-center rounded-lg text-tm dark:text-tm-dark h-12 w-12 flex items-center justify-center text-2xl font-semibold">
            {t("step1_count")}
          </div>
          <div
            className={`${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "mr-4"
                : "ml-4"
            }`}
          >
            <p className="text-pcp dark:text-pcp-dark">{t("step1_title1")}</p>
            <p className="">{t("step1_title2")}</p>
          </div>
        </div>
        <div className="flex items-center bg-cc dark:bg-cc-dark rounded-lg p-4">
          <div className="flex-shrink-0 bg-e1 dark:bg-e1-dark  text-center rounded-lg text-tm dark:text-tm-dark h-12 w-12 flex items-center justify-center text-2xl font-semibold">
            {t("step2_count")}
          </div>
          <div
            className={`${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "mr-4"
                : "ml-4"
            }`}
          >
            <p>{t("step2_title1")}</p>
            <p className="text-pcp dark:text-pcp-dark">{t("step2_title2")}</p>
          </div>
        </div>
        <div className="flex items-center bg-cc dark:bg-cc-dark rounded-lg p-4">
          <div className="flex-shrink-0 bg-e1 dark:bg-e1-dark  text-center rounded-lg text-tm dark:text-tm-dark h-12 w-12 flex items-center justify-center text-2xl font-semibold">
            {t("step3_count")}
          </div>
          <div
            className={`${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "mr-4"
                : "ml-4"
            }`}
          >
            <p>{t("step3_title1")}</p>
            <p className="text-pcp dark:text-pcp-dark">{t("step3_title2")}</p>
          </div>
        </div>
        <div className="flex items-center bg-cc dark:bg-cc-dark rounded-lg p-4">
          <div className="flex-shrink-0 bg-e1 dark:bg-e1-dark  text-center rounded-lg text-tm dark:text-tm-dark h-12 w-12 flex items-center justify-center text-2xl font-semibold">
            {t("step4_count")}
          </div>
          <div
            className={`${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "mr-4"
                : "ml-4"
            }`}
          >
            <p>{t("step4_title1")}</p>
            <p className="text-pcp dark:text-pcp-dark">{t("step4_title2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
