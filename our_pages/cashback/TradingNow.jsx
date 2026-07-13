"use client";
import CustomWhiteButton from "@/components/common/CustomWhiteButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const TradingNow = () => {
  const { theme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("cashback.tradingNow");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container mx-auto">
        <div className="bg-cc dark:bg-cc-dark grid grid-cols-1 lg:grid-cols-12 px-4 pt-14 sm:px-10 sm:pt-10 items-end rounded-2xl">
          <div className="col-span-1 lg:col-span-7 mb-6 lg:mb-10 text-center lg:text-start">
            <h2 className="text-3xl sm:text-4xl font-bold text-tm dark:text-tm-dark mb-4 xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              {t("title1")}
              <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
              {t("title3")}
              <br className="hidden xl:block" />
              {t("title4")}
              <span className="text-pcp dark:text-pcp-dark">{t("title5")}</span>
            </h2>
            <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base mb-0">
              {t("description")}
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="mt-6 flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <CustomWhiteButton
                  title={t("btn_txt")}
                  onClick={handleClick}
                  className="py-4 px-7 w-full md:w-auto text-base justify-between md:justify-center"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5 mt-6 lg:mt-0">
            <div className="flex justify-center lg:justify-end">
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/Bottom+CTA+Graphic.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/light/Bottom+CTA+graphic.png"
                }
                alt="Trading Now"
                className={`w-full h-auto`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingNow;
