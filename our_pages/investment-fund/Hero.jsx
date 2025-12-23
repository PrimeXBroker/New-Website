"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("investmentFunds.hero");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-28 sm:pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center md:py-10 lg:py-0">
          <div className="col-span-12 md:col-span-6 text-center md:text-start">
            <div
              className={`text-tm dark:text-tm-dark font-normal capitalize text-sm sm:text-xl md:text-base lg:text-lg`}
            >
              {t("subtitle")}
            </div>
            <h1 className="text-pcp dark:text-pcp-dark font-semibold text-4xl lg:text-5xl my-3">
              {t("title_1")}
            </h1>
            <h2 className="text-tm dark:text-tm-dark font-semibold text-4xl lg:text-5xl my-3">
              {t("title_2")}
            </h2>
            <p
              className={`font-normal text-base sm:text-lg text-ts dark:text-ts-dark`}
            >
              {t("description")}
            </p>
            <div className="mt-6">
              <CustomYellowButton
                title={t("btnTxt")}
                onClick={handleClick}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full md:w-auto justify-between sm:justify-center"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 mt-6 md:mt-0">
            <div className="flex justify-center md:justify-end">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/investment-hero.png"
                width="100"
                height="100"
                alt="Hero Image"
                className={`w-full sm:w-[80%] h-full`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
