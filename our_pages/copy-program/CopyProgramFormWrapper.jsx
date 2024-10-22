import React from "react";
import { useLocale, useTranslations } from "next-intl";
import CopyProgramForm from "./CopyProgramForm";

const CopyProgramFormWrapper = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram.copyProgramForm");
  return (
    <section className="bg-[#000000] pb-8 sm:pb-20">
      <div className="container grid grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-6 mb-7 lg:mb-0 text-center lg:text-start">
          <div className="">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
              {t("main_title1")} <br className="hidden lg:block" />
              <span className="text-[#ffffff] inline-block my-1 lg:my-3">
                {t("main_title2")}
              </span>
              <br />
              <span className="text-[#FED100] inline-block mb-1 lg:mb-3">
                {t("main_title3")}
              </span>
              <br className="hidden lg:block" />
              <span
                className={`text-[#FED100] inline-block ${
                  locale === "ar" ? "mr-2 lg:mr-0" : "ml-2 lg:ml-0"
                }`}
              >
                {t("main_title4")}
              </span>
            </h2>
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
