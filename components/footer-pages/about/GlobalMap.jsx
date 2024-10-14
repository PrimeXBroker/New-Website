import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const GlobalMap = () => {
  const locale = useLocale();
  const t = useTranslations("about.globalMap");

  return (
    <section className="relative h-[250px] sm:h-[340px] md:h-[400px] lg:h-[500px] bg-[#000000] about-bg-main">
      <div className="container mx-auto h-full relative flex justify-center items-center">
        <div
          className={`absolute top-[22%] flex items-center gap-2 ${
            locale === "ar" || locale === "fa" || locale === "kur"
              ? "right-[65%] sm:right-[59%]"
              : "left-[65%] sm:left-[59%]"
          }`}
        >
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Location+Map+Icon.svg"
            alt="Location Map Icon"
            width={19}
            height={19}
            className="rounded-full w-[16px] sm:w-[19px]"
          />
          <span className="px-2 py-1 bg-[#FED100] text-[#111111] text-xs sm:text-sm font-bold rounded">
            {t("country1")}
          </span>
        </div>
        <div
          className={`absolute top-[46%] sm:top-[54%] flex items-center gap-2 ${
            locale === "ar" || locale === "fa" || locale === "kur"
              ? "right-[50%]"
              : "left-[50%]"
          }`}
        >
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/new-about/Location+Map+Icon.svg"
            alt="Location Map Icon"
            width={19}
            height={19}
            className="rounded-full w-[16px] sm:w-[19px]"
          />
          <span className="px-2 py-1 bg-[#FED100] text-[#111111] text-xs sm:text-sm font-bold rounded">
            {t("country2")}
          </span>
        </div>
        <div
          className={`absolute bottom-10  ${
            locale === "ar" || locale === "fa" || locale === "kur"
              ? "right-5 md:right-10"
              : "left-5 md:left-10"
          }`}
        >
          <h2 className="text-[#ffffff] text-xl sm:text-3xl lg:text-4xl font-semibold sm:mb-2">
            {t("title1")}
            <br />
          </h2>
          <h2 className="text-[#ffffff] text-xl sm:text-3xl lg:text-4xl font-semibold">
            <span className="text-[#FED100]">{t("title2")}</span>
            {t("title3")}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;
