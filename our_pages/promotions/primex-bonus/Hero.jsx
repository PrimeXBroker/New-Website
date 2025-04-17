import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const t = useTranslations("bonusPage.bonusHero");

  return (
    <section className="bg-[#030303] pt-28">
      <div className="container">
        <div className="bg-[#1A1A1A] rounded-2xl">
          <div className="grid grid-cols-12 items-center h-[600px]">
            <div className="col-span-6 ps-12">
              <div className="text-[#F9F9F9] font-normal text-xl uppercase">
                {t("hero_subtitle")}
              </div>
              <h1 className="text-[#F9F9F9] font-semibold text-5xl leading-tight my-3 uppercase">
                {t("hero_title")}
              </h1>
              <p className="text-[#F9F9F9] font-normal text-xl uppercase mb-8">
                {t("hero_description")}
              </p>
              <div className="lg:mt-3 flex justify-center md:justify-start">
                <button className="px-12 py-4 font-semibold w-auto text-lg !rounded-lg flex items-center justify-center gap-3 custom-button-yellow-white">
                  {t("btnTxt")}
                </button>
              </div>
            </div>
            <div className="col-span-6 bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/trading-bg.svg)] bg-center bg-cover bg-no-repeat">
              <div className="flex justify-center">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/images/bonus-hero.png"
                  width="100"
                  height="100"
                  alt="Bonus Hero"
                  className="w-[80%]"
                />
              </div>
              <div className="pe-10 mt-4">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
