"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";

const WidgetCards = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram");
  const [hovered, setHovered] = useState(null);

  const widgetData = [
    {
      id: 1,
      title1: t("bestPerformanceWidget.title1"),
      link: `/${locale}/best-by-performance-all-time`,
    },
    {
      id: 2,
      title1: t("bestMonthWidget.title1"),
      link: `/${locale}/best-by-performance-this-month`,
    },
    {
      id: 3,
      title1: t("lowestDDWidget.title1"),
      link: `/${locale}/lowest-by-drawdown-and-risk`,
    },
    {
      id: 4,
      title1: t("hightProvidersWidget.title1"),
      link: `/${locale}/top-ranked-by-investors-number`,
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center mb-10">
          {t("widgetCards.title1")}{" "}
          <span className="text-pcp dark:text-pcp-dark">
            {t("widgetCards.title2")}
          </span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-tm dark:text-tm-dark">
        {widgetData.map((widget) => (
          <div
            key={widget.id}
            className="bg-cc dark:bg-cc-dark border-2 border-cc dark:border-cc-dark rounded-lg p-5 lg:p-4 xl:p-5 cursor-pointer hover:border-e1 hover:dark:border-e1-dark transition-all duration-500 ease-in-out group"
            onMouseEnter={() => setHovered(widget.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <a href={widget.link} target="_blank">
              <div>
                <p className="text-lg lg:text-base xl:text-lg text-tm dark:text-tm-dark pr-[30px]">
                  {widget.title1}
                </p>
              </div>
              <a
                href={widget.link}
                target="_blank"
                className={`py-3 mt-3 w-full transition-colors duration-300 ease-in-out rounded-lg font-bold flex items-center justify-center gap-3 group bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark group`}
                style={{ borderRadius: "8px" }}
              >
                {t("widgetCards.btnTxt")}
                {locale === "ar" ||
                locale === "ku" ||
                locale === "ps" ||
                locale === "fa" ? (
                  <div
                    className={`w-[16px] h-[16px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
                  >
                    <FiArrowUpLeft className="transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] text-pcp dark:text-pcp-dark text-xs" />
                  </div>
                ) : (
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
                  >
                    <FiArrowUpRight className="transition-transform duration-500 ease-in-out group-hover:rotate-[45deg] text-pcp dark:text-pcp-dark text-xs" />
                  </div>
                )}
              </a>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidgetCards;
