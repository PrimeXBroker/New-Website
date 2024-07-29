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
      img: "/images/forex1.webp",
    },
    {
      title: i("instruments_3_h"),
      img: "/images/commodities.webp",
    },
    {
      title: i("instruments_1_h"),
      img: "/images/metals.webp",
    },
    {
      title: i("instruments_2_h"),
      img: "/images/indices.webp",
    },
  ];
  return (
    <section className="bg-secondary my-20">
      <div className="container flex flex-col md:flex-row py-20 items-center px-10 xl:px-3">
        <div className="sm:w-[100%] md:w-[35%] lg:w-[30%] xl:w-[25%] mb-14 md:mb-0">
          <h2
            className={`text-4xl text-white font-normal ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {t("title1")} <br />
            {t("title2")}
          </h2>
        </div>
        <div className="sm:w-[100%] md:w-[65%] lg:w-[70%] xl:w-[75%] flex flex-col md:flex-row justify-center md:justify-end items-center gap-10 md:gap-6 lg:gap-12 xl:gap-20">
          {instrumentsContent.map((inst, index) => {
            return (
              <div
                className="instrument-box flex flex-col justify-center items-center group"
                key={index}
              >
                <div className="w-32 sm-w-24 md:w-20 lg:w-24 xl:w-28 h-32 sm-h-24 md:h-20 lg:h-24 xl:h-28 rounded-full bg-primary group-hover:bg-accent flex justify-center items-center">
                  <Image
                    src={inst.img}
                    width="58"
                    height="58"
                    alt="img"
                    className="w-[58px ]sm:w-[48px] md:w-[42px] lg:w-[48px] xl:w-[58px] [h-58px] sm:h-[48px] md:h-[42px] lg:h-[48px] xl:h-[58px]"
                  />
                </div>
                <h3 className="lg:text-xl xl-text-2xl text-white group-hover:text-primary font-semibold text-center mt-2">
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
