import React from "react";
import { useTranslations, useLocale } from "next-intl";

const GetStarted = () => {
  const locale = useLocale();
  const t = useTranslations("newMT5Platform.getStarted");

  return (
    <div className="bg-[#000000] py-6 pt-20">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center">
          {t("main_title1")}
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100] text-center mb-10">
          {t("main_title2")}
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[#ffffff]">
        <div className="flex items-center bg-[#111111] border-2 border-[#1D1D1D]  rounded-lg p-4 group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500">
          <div className="flex-shrink-0 bg-[#1D1D1D] border-2 border-[#222222] text-center rounded-lg text-[#c6c6c6] h-12 w-12 flex items-center justify-center text-2xl font-bold group-hover:text-[#FED100]">
            {t("step1_count")}
          </div>
          <div className={`${locale === "ar" ? "mr-4" : "ml-4"}`}>
            <p className="text-[#FED100]">{t("step1_title1")}</p>
            <p className="">{t("step1_title2")}</p>
          </div>
        </div>
        <div className="flex items-center bg-[#111111] border-2 border-[#1D1D1D] rounded-lg p-4 group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500">
          <div className="flex-shrink-0 bg-[#1D1D1D] border-2 border-[#222222] text-center rounded-lg text-[#c6c6c6] h-12 w-12 flex items-center justify-center text-2xl font-bold group-hover:text-[#FED100]">
            {t("step2_count")}
          </div>
          <div className={`${locale === "ar" ? "mr-4" : "ml-4"}`}>
            <p>{t("step2_title1")}</p>
            <p className="text-[#FED100]">{t("step2_title2")}</p>
          </div>
        </div>
        <div className="flex items-center bg-[#111111] border-2 border-[#1D1D1D] rounded-lg p-4 group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500">
          <div className="flex-shrink-0 bg-[#1D1D1D] border-2 border-[#222222] text-center rounded-lg text-[#c6c6c6] h-12 w-12 flex items-center justify-center text-2xl font-bold group-hover:text-[#FED100]">
            {t("step3_count")}
          </div>
          <div className={`${locale === "ar" ? "mr-4" : "ml-4"}`}>
            <p>{t("step3_title1")}</p>
            <p className="text-[#FED100]">{t("step3_title2")}</p>
          </div>
        </div>
        <div className="flex items-center bg-[#111111] border-2 border-[#1D1D1D] rounded-lg p-4 group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500">
          <div className="flex-shrink-0 bg-[#1D1D1D] border-2 border-[#222222] text-center rounded-lg text-[#c6c6c6] h-12 w-12 flex items-center justify-center text-2xl font-bold group-hover:text-[#FED100]">
            {t("step4_count")}
          </div>
          <div className={`${locale === "ar" ? "mr-4" : "ml-4"}`}>
            <p>{t("step4_title1")}</p>
            <p className="text-[#FED100]">{t("step4_title2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
