import React from "react";
import { useLocale, useTranslations } from "next-intl";
import CopyProgramForm from "./CopyProgramForm";

const CopyProgramFormWrapper = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram.copyProgramForm");
  return (
    <section className="py-6">
      <div
        className="container grid grid-cols-12 items-center"
        dir={
          locale === "ar" || locale === "fa" || locale === "kur" ? "rtl" : "ltr"
        }
      >
        <div className="col-span-12 lg:col-span-6 mb-7 lg:mb-0 text-center lg:text-start">
          <div className="">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-[#ffffff] mb-2">
              {t("main_title1")} <br className="hidden lg:block" />
              <span className="text-[#FED100] inline-block my-1 lg:my-2">
                {t("main_title2")}
              </span>
            </h2>
            <p className="text-[#c6c6c6] text-sm sm:text-base md:text-xl sm:w-[80%] mx-auto lg:mx-0">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <CopyProgramForm />
        </div>
      </div>
    </section>
  );
};

export default CopyProgramFormWrapper;
