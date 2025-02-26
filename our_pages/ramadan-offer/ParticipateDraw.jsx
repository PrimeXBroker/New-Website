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
    <div className="bg-[#000000] pb-24 relative">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center mb-10">
          {t("main_title1")}
          <span className="text-[#FED100]">{t("main_title2")}</span>
        </h2>
        <div
          className="relative bg-cover bg-center px-16 h-[330px] rounded-[20px] flex items-center"
          style={{
            backgroundImage:
              "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/steps-background.webp')",
          }}
        >
          {/* Left Candle */}
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/left-candle-steps.svg"
            alt="Left Candle"
            width={200}
            height={200}
            className="absolute left-[18px] top-0 w-[10%] hidden sm:block"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-[#111111] rounded-[16px] px-8 py-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`px-3 py-4 ${
                  index !== steps.length - 1
                    ? "border-e-2 border-e-[#1D1D1D]"
                    : ""
                }`}
              >
                <span className="text-[#ffffff] text-sm font-medium flex items-center gap-1">
                  <GoDotFill className="text-[#FED100]" /> {item.step}
                </span>
                <h3 className="text-xl font-semibold text-[#ffffff] mt-2">
                  {item.title}
                </h3>
                <p className="text-[#C6C6C6] text-base mt-2">
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
            className="absolute right-[8px] top-0 w-[10%] hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
};

export default ParticipateDraw;
