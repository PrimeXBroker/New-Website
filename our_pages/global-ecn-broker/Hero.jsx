"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("ecnBroker.hero");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-20 md:pt-28 lg:pt-36">
      <div className="container">
        <div className="py-8 sm:py-10 md:py-0">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 md:col-span-6 text-center md:text-start">
              <div className="text-pcp dark:text-pcp-dark font-bold uppercase text-lg sm:text-xl md:text-base lg:text-xl xl:text-3xl">
                {t("hero_subtitle")}
              </div>
              <h1 className="text-tm dark:text-tm-dark font-semibold text-4xl lg:text-5xl xl:text-6xl my-3">
                {t("hero_title")}
              </h1>
              <p className="font-normal text-base sm:text-lg md:text-base lg:text-lg text-ts dark:text-ts-dark mb-4 lg:mb-8">
                {t("hero_description")}
              </p>
              <div className="lg:mt-3 flex justify-center md:justify-start">
                <CustomYellowButton
                  title={t("btnTxt")}
                  onClick={handleClick}
                  className="px-5 py-4 text-lg w-full md:w-auto justify-between sm:justify-center"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mt-6 md:mt-0">
              <div className="flex justify-end">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/ecn-hero.webp"
                  width="100"
                  height="100"
                  alt="Hero Image"
                  className="w-full lg:w-[90%] h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
