import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const ParticipateDraw = () => {
  const locale = useLocale();
  const t = useTranslations("ramadanOffer.participateDrawer");

  const steps = [
    {
      step: t("step1"),
      title: t("title1"),
      description: t("description1"),
    },
    {
      step: t("step2"),
      title: t("title2"),
      description: t("description2"),
    },
    {
      step: t("step3"),
      title: t("title3"),
      description: t("description3"),
    },
    {
      step: t("step4"),
      title: t("title4"),
      description: t("description4"),
    },
  ];

  return (
    <div className="bg-[#000000] pb-14 md:pb-24 relative">
      <div className="container">
        {locale !== "ar" && (
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center mb-8 sm:mb-10">
            {t("main_title1")}
            <span className="text-[#FED100]">{t("main_title2")}</span>
          </h2>
        )}
        {locale === "ar" && (
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100] text-center mb-8 sm:mb-10">
            {t("main_title1")}
            <span className="text-[#ffffff]">{t("main_title3")}</span>
            {t("main_title2")}
          </h2>
        )}
        <div
          className="relative bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/background-steps-mobile.webp)] sm:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/steps-background.webp)] bg-cover bg-center px-8 md:px-16 h-[970px] sm:h-[500px] lg:h-[330px] rounded-[20px] flex items-center"
          // style={{
          //   backgroundImage:
          //     "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/steps-background.webp')",
          // }}
        >
          {/* Left Candle */}
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/left-candle-steps.svg"
            alt="Left Candle"
            width={200}
            height={200}
            className={`absolute top-0 w-[26%] sm:w-[16%] lg:w-[10%] ${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "right-[-10px] sm:right-[-12px] md:right-[9px] lg:right-[18px]"
                : "left-[-10px] sm:left-[-12px] md:left-[9px] lg:left-[18px]"
            }`}
          />
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#111111] rounded-[16px] px-8 py-6 ">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`px-0 md:px-3 py-6 md:py-4 ${
                  index !== steps.length - 1
                    ? "border-b-2 border-b-[#1D1D1D] sm:border-b-0 sm:border-e-2 sm:border-e-[#1D1D1D]"
                    : ""
                }`}
              >
                <span className="text-[#ffffff] text-sm font-medium flex items-center gap-1">
                  <GoDotFill className="text-[#FED100]" /> {item.step}
                </span>
                <h3 className="text-xl font-semibold text-[#ffffff] mt-2">
                  {item.title}
                </h3>
                <p className="text-[#C6C6C6] text-[15px] mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#111111] rounded-[16px] px-8 py-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`px-0 md:px-3 py-6 md:py-4 ${
                  index !== steps.length - 1
                    ? "border-b-2 border-b-[#1D1D1D] sm:border-b-0 sm:border-e-2 sm:border-e-[#1D1D1D]"
                    : ""
                } ${index === 1 ? "sm:border-e-0" : ""}`}
              >
                <span className="text-[#ffffff] text-sm font-medium flex items-center gap-1">
                  <GoDotFill className="text-[#FED100]" /> {item.step}
                </span>
                <h3 className="text-xl font-semibold text-[#ffffff] mt-2">
                  {item.title}
                </h3>
                <p className="text-[#C6C6C6] text-[15px] mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Candle */}
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/right-candle-steps.svg"
            alt="Right Candle"
            width={200}
            height={200}
            className={`absolute top-0 w-[26%] sm:w-[16%] lg:w-[10%] ${
              locale === "ar" ||
              locale === "ps" ||
              locale === "ku" ||
              locale === "fa"
                ? "left-[-11px] md:left-[8px]"
                : "right-[-11px] md:right-[8px]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ParticipateDraw;
