"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import TradingOpportunitiesWidget from "@/our_pages/home/NewTradingOpportunitiesWidget";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useRouter } from "next/navigation";

const TradingOpportunities = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("home.tradingOpportunities");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-[#000000] pt-12">
      <div className="container">
        <div className="bg-[#111111] text-[#ffffff] border-2 border-[#1d1d1d] py-8 px-4 md:px-14 rounded-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center md:text-start">
              {t("title1")}{" "}
              <span className="text-[#FED100]">{t("title2")}</span>{" "}
              {t("title3")}
            </h2>
          </div>
          <div className="md:w-1/2 flex flex-col md:items-start space-y-4">
            <p className="text-[#c6c6c6] py-4 text-center md:text-start">
              {t("description")}
            </p>
            <button
              onClick={handleClick}
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
