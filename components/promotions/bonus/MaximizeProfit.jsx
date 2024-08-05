import RegButton from "@/components/RegButton";
import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

const MaximizeProfit = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.maximize");

  const customStyle = {
    btnColor: "secondary",
    txtColor1: "text-primary",
    txtColor2: "text-secondary",
    txtColor3: "text-secondary",
    borderColor: "border-transparent",
  };

  return (
    <section className="container">
      <div className="grid grid-cols-12 justify-center items-center">
        <div
          className={`col-span-12 lg:col-span-5 ${
            locale === "ar"
              ? "text-center lg:text-right"
              : "text-center lg:text-left"
          }`}
        >
          <div className={`inline-block bg-primary px-5 py-3 rounded-xl`}>
            <h2
              className={`sectionHeading text-4xl lg:text-5xl mb-0 ${
                locale === "ar"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("maximize_title_1")}
            </h2>
          </div>
          <h2
            className={`sectionHeading text-4xl lg:text-5xl mt-3 mb-5 ${
              locale === "ar"
                ? "text-center lg:text-right"
                : "text-center lg:text-left"
            }`}
          >
            {t("maximize_title_2")}
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col items-center mt-10 lg:mt-0 mb-14 lg:mb-0">
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/bonus-maximize.webp"
            width="400"
            height="400"
            alt="img"
            className="w-[70%] sm:w-[50%] lg:w-[60%] h-auto"
          />
        </div>
        <div
          className={`col-span-12 lg:col-span-3 ${
            locale === "ar"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
        >
          <div
            className={`${
              locale === "ar"
                ? "text-center lg:text-right"
                : "text-center lg:text-left"
            }`}
          >
            <RegButton customStyle={customStyle} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaximizeProfit;
