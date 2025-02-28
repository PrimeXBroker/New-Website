import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const ExclusivePrizes = () => {
  const locale = useLocale();
  const t = useTranslations("ramadanOffer.exclusivePrize");

  const prizes = [
    {
      title: t("title2"),
      name: t("name2"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/iphone-16-pro.webp",
    },
    {
      title: t("title3"),
      name: t("name3"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/samsung-galaxy-s25.webp",
    },
    {
      title: t("title1"),
      name: t("name1"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/hp-laptop.webp",
    },
  ];

  return (
    <div className="bg-[#000000] py-14 md:py-24">
      <div className="container">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center">
          <span className="text-[#FED100]">{t("main_title1")}</span>
          <br className="sm:hidden" />
          {t("main_title2")}
        </h2>
        <div className="mt-8 sm:mt-10 flex xs:flex-col sm:flex-wrap md:flex-nowrap md:flex-row justify-center gap-6">
          {prizes.map((prize, index) => (
            <div key={index} className="w-full sm:w-[48%] md:w-1/3 text-center">
              <div className="relative">
                <Image
                  unoptimized={true}
                  width="120"
                  height="120"
                  src={prize.image}
                  alt={prize.name}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute top-2 p-5">
                  <div className="bg-[#ffffff] text-[#111111] text-sm font-semibold px-3 py-2 rounded">
                    {prize.title}
                  </div>
                </div>
                <h3 className="absolute top-16 px-5 mt-2 text-2xl md:text-lg lg:text-2xl font-medium text-[#ffffff] text-start">
                  {prize.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusivePrizes;
