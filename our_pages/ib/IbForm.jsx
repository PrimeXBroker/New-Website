import React from "react";
import Form from "./Form";
import { useTranslations, useLocale } from "next-intl";

const IbForm = () => {
  const locale = useLocale();
  const t = useTranslations("ibProgram.ibForm");
  return (
    <section className="bg-[#000000] py-10">
      <div className="container grid grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-6 mb-7 lg:mb-0">
          <div className="bg-[#1D1D1D] inline-block px-[20px] py-[6px] rounded-full mb-5">
            <h3 className="text-[#FED100] text-sm">
              Registration:{" "}
              <span className="text-[#ffffff]">IB Partnership Program</span>
            </h3>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
            {t("main_title1")}
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
            <span className="text-[#FED100]"> {t("main_title2")}</span>
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff]  mb-2">
            {t("main_title3")}
            <span className="text-[#FED100] mb-2"> {t("main_title4")}</span>
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff]">
            {t("main_title5")}
            <span className="text-[#FED100] mb-2"> {t("main_title6")}</span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default IbForm;
