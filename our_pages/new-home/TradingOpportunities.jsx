"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import TradingOpportunitiesWidget from "@/components/new-home/NewTradingOpportunitiesWidget";

const TradingOpportunities = () => {
  const locale = useLocale();
  const t = useTranslations("newHomePage.tradingOpportunities");

  return (
    <section className="bg-[#000000] pt-12">
      <div className="container">
        <div className="bg-[#111111] text-[#ffffff] border-2 border-[#1d1d1d] py-8 px-4 md:px-14 rounded-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              {t("title1")}{" "}
              <span className="text-[#FED100]">{t("title2")}</span>{" "}
              {t("title3")}
            </h2>
          </div>
          <div className="md:w-1/2 flex flex-col md:items-start space-y-4">
            <p className="text-[#c6c6c6] py-4">{t("description")}</p>
            <button
              onClick={() =>
                window.open(
                  `${
                    locale === "ar"
                      ? "https://client.primexbroker.com/ar/register"
                      : "https://client.primexbroker.com/en/register"
                  }`
                )
              }
              className="py-[18px] px-[48px] font-semibold custom-button"
            >
              {t("btnTxt")}
            </button>
          </div>
        </div>
      </div>
      <TradingOpportunitiesWidget />
    </section>
  );
};

export default TradingOpportunities;
