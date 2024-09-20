import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Logo from "@/public/images/logos/primex-logo.webp";

const Benefits = () => {
  const locale = useLocale();
  const t = useTranslations("liquidity.benefits");
  return (
    <div className="relative h-[550px] sm:h-[500px] flex justify-end items-center liquidity-bg">
      <div className="absolute h-[600px] liquidity"></div>
      <div className="relative max-w-4xl mx-auto flex flex-wrap justify-center sm:justify-between gap-y-6 text-center text-white z-10">
        <div className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg  w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl opacity-90 hover:text-primary">
          {t("benefit_1")}
        </div>
        <div className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl opacity-90 hover:text-primary">
          {t("benefit_2")}
        </div>
        <div className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl opacity-90 hover:text-primary">
          {t("benefit_3")}
        </div>
        <div className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl opacity-90 hover:text-primary">
          {t("benefit_4")}
        </div>
        <div className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl opacity-90 hover:text-primary">
          {t("benefit_5")}
        </div>
        <div className="bg-[#1a1a1a] py-4 px-6 rounded-lg shadow-lg w-[95%] sm:w-[45%] mx-auto text-lg sm:text-xl opacity-90 hover:text-primary">
          {t("benefit_6")}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
