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
          className={`text-[#c6c6c6] w-[95%] mx-auto md:mx-0 pt-8 pb-10 text-sm sm:text-base ${
            locale === "ar" || locale === "fa" || locale === "kd"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
          style={{ letterSpacing: "0.7px" }}
        >
          {h("description2")}
        </p>
        <Explore />
        <PaymentMethods />
        <Benefits />
      </div>
    </div>
  );
};

export default LocalDepositorWrapper;
