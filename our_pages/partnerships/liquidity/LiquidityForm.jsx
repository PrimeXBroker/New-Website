import React from "react";
import Form from "./Form";
import { useTranslations, useLocale } from "next-intl";

const LiquidityForm = () => {
  const locale = useLocale();
  const t = useTranslations("liquidity.liquidityForm");
  return (
    <section className="bg-[#000000]">
      <div className="container grid grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-6 mb-7 lg:mb-0">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
            {t("main_title1")}
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
            <span className="text-primary"> {t("main_title2")}</span>{" "}
            {t("main_title3")}
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#ffffff]">
            {t("main_title4")}
            <span className="text-primary mb-2"> {t("main_title5")}</span>
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default LiquidityForm;
