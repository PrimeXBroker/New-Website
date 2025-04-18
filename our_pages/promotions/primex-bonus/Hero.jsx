"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
// import CountdownTimer from "./CountdownTimer";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";

const Hero = () => {
  const locale = useLocale();
  const t = useTranslations("bonusPage.bonusHero");

  return (
    <section className="bg-[#030303] pt-24 sm:pt-28">
      <div className="container">
        <div className="bg-[#1A1A1A] rounded-2xl py-8 sm:py-10 md:py-0">
          <div className="grid grid-cols-12 items-center md:py-10 lg:py-0 lg:h-[600px]">
            <div className="col-span-12 md:col-span-6 ps-3 pe-3 sm:ps-12 sm:pe-12 md:pe-0 text-center md:text-start">
              <div className="text-[#F9F9F9] font-normal text-sm sm:text-xl md:text-base lg:text-xl uppercase">
                {t("hero_subtitle")}
              </div>
              <h1 className="text-[#F9F9F9] font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight my-3 uppercase">
                {t("hero_title")}
              </h1>
              <p className="text-[#F9F9F9] font-normal text-base sm:text-lg lg:text-xl uppercase mb-8">
                {t("hero_description")}
              </p>
              <div className="lg:mt-3 flex justify-center md:justify-start">
                <button
                  onClick={() => window.open(getRegisterUrl(locale))}
                  className="px-12 py-4 font-semibold w-full md:w-auto text-lg !rounded-lg flex items-center justify-center gap-3 custom-button-yellow-white"
                >
                  {t("btnTxt")}
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mt-6 md:mt-0 bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/trading-bg.svg)] bg-center bg-cover bg-no-repeat">
              <div className="flex justify-center">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/bonus-50-banner.webp"
                  width="100"
                  height="100"
                  alt="Bonus Hero"
                  className="w-full"
                />
              </div>
              {/* <div className="pe-3 ps-3 sm:pe-12 sm:ps-12 md:ps-0 mt-6 md:mt-4">
                <CountdownTimer />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
