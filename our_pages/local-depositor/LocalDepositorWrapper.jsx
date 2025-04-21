import React from "react";
import Banner from "./Banner";
import DepositorSection1 from "./DepositorSection1";
import { useLocale, useTranslations } from "next-intl";
import Benefits from "./Benefits";
import PaymentMethods from "./PaymentMethods";
import Explore from "./Explore";

const LocalDepositorWrapper = () => {
  const locale = useLocale();
  const h = useTranslations("localDepositor.section1");

  return (
    <div className="bg-[#000000]">
      <div className="container">
        <Banner />
        <DepositorSection1 />
        <p
          className={`text-[#ffffff] text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold my-5 ${
            locale === "ar" || locale === "fa" || locale === "ku"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
          style={{ letterSpacing: "0.7px" }}
        >
          {h("description2")}
        </p>
        <PaymentMethods />
        <Benefits />
        <Explore />
      </div>
    </div>
  );
};

export default LocalDepositorWrapper;
