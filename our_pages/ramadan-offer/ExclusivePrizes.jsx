import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const ExclusivePrizes = () => {
  const locale = useLocale();
  const t = useTranslations("ramadanOffer.exclusivePrize");

  const prizes = [
    {
      title: t("title1"),
      name: t("name1"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/hp-laptop.webp",
    },
    {
      title: t("title2"),
      name: t("name2"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/iphone-16-pro.webp",
    },
    {
      title: t("name3"),
      name: "Samsung Galaxy S25",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/samsung-galaxy-s25.webp",
    },
  ];

  return (
    <div className="bg-[#000000] py-24">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center">
          <span className="text-[#FED100]">{t("main_title1")}</span>
          {t("main_title2")}
        </h2>
        <div className="mt-10 flex justify-center gap-6">
          {prizes.map((prize, index) => (
            <div key={index} className="w-1/3 text-center">
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
                <h3 className="absolute top-16 px-5 mt-2 text-2xl font-medium text-[#ffffff]">
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
