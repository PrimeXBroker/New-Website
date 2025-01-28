import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const PromotionApplicable = () => {
  const locale = useLocale();
  const i = useTranslations("gift.instruments");
  const t = useTranslations("bonus.promotion");

  const instrumentsContent = [
    {
      title: i("instruments_0_h"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/forex1.webp",
    },
    {
      title: i("instruments_3_h"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/commodities.webp",
    },
    {
      title: i("instruments_1_h"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/metals.webp",
    },
    {
      title: i("instruments_2_h"),
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/indices.webp",
    },
  ];
  return (
    <section className="bg-[#000000] py-10">
      <div className="container flex flex-col md:flex-row items-center px-10 xl:px-3">
        <div className="sm:w-[100%] md:w-[35%] lg:w-[30%] xl:w-[25%] mb-14 md:mb-0">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff]  md:mb-2 ${
              locale === "ar" || locale === "fa" || locale === "kd"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {t("title1")}
          </h2>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff]  ${
              locale === "ar" || locale === "fa" || locale === "kd"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {t("title2")}
          </h2>
        </div>
        <div className="w-[100%] md:w-[65%] lg:w-[70%] xl:w-[75%] flex flex-wrap md:flex-nowrap flex-row justify-around md:justify-end items-center gap-10 md:gap-6 lg:gap-12 xl:gap-20">
          {instrumentsContent.map((inst, index) => {
            return (
              <div
                className="instrument-box flex flex-col justify-center items-center group"
                key={index}
              >
                <div className="w-24 sm-w-24 md:w-20 lg:w-24 xl:w-28 h-24 sm-h-24 md:h-20 lg:h-24 xl:h-28 rounded-full bg-[#FED100] group-hover:bg-[#c6c6c6] flex justify-center items-center">
                  <Image
                    src={inst.img}
                    width="58"
                    height="58"
                    alt={inst.title}
                    className="w-[44px] sm:w-[58px] md:w-[42px] lg:w-[48px] xl:w-[58px] [h-58px] sm:h-[58px] md:h-[42px] lg:h-[48px] xl:h-[58px]"
                  />
                </div>
                <h3 className="text-base sm:text-xl xl:text-2xl text-[#ffffff] group-hover:text-[#FED100] font-normal text-center mt-3 sm:mt-5 md:mt-2">
                  {inst.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromotionApplicable;
