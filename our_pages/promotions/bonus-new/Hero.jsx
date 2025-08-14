"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
// import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("newBonusPage.bonusHero");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-24 sm:pt-28">
      <div className="container">
        <div className="bg-cc dark:bg-cc-dark rounded-2xl py-8 sm:py-10 md:py-0">
          <div className="grid grid-cols-12 items-center md:py-10 lg:py-0 lg:h-[600px]">
            <div className="col-span-12 md:col-span-6 ps-3 pe-3 sm:ps-12 sm:pe-12 md:pe-0 text-center md:text-start">
              <div className="text-tm dark:text-tm-dark font-normal text-sm sm:text-xl md:text-base lg:text-xl uppercase">
                {t("hero_subtitle")}
              </div>
              <h1 className="text-tm dark:text-tm-dark font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight my-3 uppercase">
                {t("hero_title")}
              </h1>
              <p className="text-tm dark:text-tm-dark font-normal text-base sm:text-lg lg:text-xl uppercase mb-8">
                {t("hero_description")}
              </p>
              <div className="lg:mt-3 flex justify-center md:justify-start">
                <CustomYellowButton
                  title={t("btnTxt")}
                  onClick={handleClick}
                  className="px-12 py-4 text-lg w-full sm:w-auto justify-between sm:justify-center"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mt-6 md:mt-0 bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/trading-bg.svg)] bg-center bg-cover bg-no-repeat">
              <div className="flex justify-center">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/cover-new.png"
                  width="100"
                  height="100"
                  alt="Bonus Hero"
                  className="w-[84%]"
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
