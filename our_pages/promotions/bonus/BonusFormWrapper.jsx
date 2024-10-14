import React from "react";
import { useTranslations, useLocale } from "next-intl";
import BonusForm from "./BonusForm";

const BonusFormWrapper = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.form");

  return (
    <section className="bg-[#000000] py-10">
      <div className="container grid grid-cols-12 items-center">
        <div
          className={`col-span-12 lg:col-span-6 mb-7 lg:mb-0 text-center lg:text-start block lg:hidden`}
        >
          {/* <div className="bg-[#1D1D1D] inline-block px-[20px] py-[6px] rounded-full mb-5">
            <h3 className="text-[#FED100] text-sm">
              {t("tag1")}
              <span className="text-[#ffffff]">{t("tag2")}</span>
            </h3>
          </div> */}
          <div className="">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] md:mb-2">
              {t("title1")}
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff]">
              <span className="text-[#FED100]"> {t("title2")}</span>
            </h2>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <BonusForm />
        </div>
        <div
          className={`col-span-12 lg:col-span-6 mb-7 lg:mb-0 text-center lg:text-start ${
            locale === "ar" || locale === "fa" || locale === "kur"
              ? "mr-20"
              : "ml-20"
          }`}
        >
          {/* <div className="bg-[#1D1D1D] inline-block px-[20px] py-[6px] rounded-full mb-5">
            <h3 className="text-[#FED100] text-sm">
              {t("tag1")}
              <span className="text-[#ffffff]">{t("tag2")}</span>
            </h3>
          </div> */}
          <div className="hidden lg:block">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
              {t("title1")}
            </h2>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] ">
              <span className="text-[#FED100]"> {t("title2")}</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusFormWrapper;
