"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { RiArrowRightUpLine } from "react-icons/ri";
import { RiArrowLeftUpLine } from "react-icons/ri";

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
    <div className="bg-[#000000] pb-16 sm:pb-16">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center mb-10">
          {t("widgetCards.title1")}{" "}
          <span className="text-[#FED100]">{t("widgetCards.title2")}</span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[#ffffff]">
        {widgetData.map((widget) => (
          <div
            key={widget.id}
            className="bg-[#111111] border-2 border-[#1D1D1D] rounded-lg p-5 lg:p-4 xl:p-5 cursor-pointer hover:border-[#333333] transition-all duration-500 ease-in-out group"
            onMouseEnter={() => setHovered(widget.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <a href={widget.link} target="_blank">
              <div>
                <p className="text-lg lg:text-base xl:text-lg text-[#FED100] pr-[30px]">
                  {widget.title1}
                </p>
              </div>
              <a
                href={widget.link}
                target="_blank"
                className="py-3 w-full block font-semibold text-center custom-button text-sm mt-3 group-hover:bg-[#fff]"
                style={{ borderRadius: "8px" }}
              >
                {t("widgetCards.btnTxt")}
                {locale === "ar" || locale === "fa" || locale === "ku" ? (
                  <RiArrowLeftUpLine
                    className={`text-lg inline-block mr-1 text-[#111111] transition-transform duration-500 ease-in-out ${
                      hovered === widget.id ? "rotate-[-45deg]" : ""
                    }`}
                  />
                ) : (
                  <RiArrowRightUpLine
                    className={`text-lg inline-block ml-1 text-[#111111] transition-transform duration-500 ease-in-out ${
                      hovered === widget.id ? "rotate-45" : ""
                    }`}
                  />
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
