"use client";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const RewardAutomatically = () => {
  const { theme } = useTheme();
  const t = useTranslations("cashback.rewardAutomatically");

  return (
    <section className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container mx-auto">
        <div className="bg-cc dark:bg-cc-dark grid grid-cols-1 p-5 sm:p-10 items-center rounded-2xl relative overflow-hidden">
          <div className=" text-center">
            <div className="flex items-center justify-center mx-auto gap-2 bg-[#f5f5f5] dark:bg-white dark:bg-opacity-[0.12] w-fit px-3 py-[6px] rounded-lg mb-[10px] border-[0.7px] border-[#f5f5f5] dark:border-white dark:border-opacity-[0.15]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/second+section+chip+icon.svg"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/light/second+section+chip+icon.svg"
                }
                width="16"
                height="16"
                alt="badge"
                className="w-[24px] h-auto"
              />
              <p className="text-tm dark:text-tm-dark font-medium text-sm text-start">
                {t("badgeText")}
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-tm dark:text-tm-dark my-4 xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              {t("title1")}
              <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
              {t("title3")}
              <br className="hidden lg:block" />
              {t("title4")}
              <span className="text-pcp dark:text-pcp-dark">{t("title5")}</span>
            </h2>
            <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base mb-0">
              {t("description")}
            </p>
          </div>
          <div className="absolute -top-7 end-10 pointer-events-none select-none">
            <Image
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/X+Right+Trade+as+usual+and+receive+your++reward+automatically!.svg"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/light/right+x+section+Trade+as+usual+and+receive+your++reward+automatically!.png"
              }
              alt="X background"
              width={140}
              height={159}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-8 -start-14 pointer-events-none select-none">
            <Image
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/X+Left+Trade+as+usual+and+receive+your++reward+automatically!.svg"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/light/left+x+section+Trade+as+usual+and+receive+your++reward+automatically!.png"
              }
              alt="X background"
              width={194}
              height={221}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardAutomatically;
