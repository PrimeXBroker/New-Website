"use client";
import CustomWhiteButton from "@/components/common/CustomWhiteButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const SpreadMatter = () => {
  const locale = useLocale();
  const t = useTranslations("spreadPage.spreadMatters");

  return (
    <section className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark">
      <div className="container mx-auto">
        <div className="bg-cc dark:bg-cc-dark grid grid-cols-1 lg:grid-cols-12 px-4 pt-14 sm:px-10 sm:pt-10 pb-10 items-center rounded-2xl">
          <div className="col-span-1 lg:col-span-8 mb-6 lg:mb-0 text-center lg:text-start">
            <h2 className="text-3xl sm:text-[42px] font-bold text-tm dark:text-tm-dark mb-4">
              {t("title1")}
              <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
            </h2>
            <p className="text-lg md:text-2xl mb-4 text-ts dark:text-ts-dark font-semibold">
              {t("subtitle")}
            </p>
            <p className="text-base text-tm dark:text-tm-dark">
              {t("description")}
            </p>
            <div className="flex justify-center lg:justify-start">
              <CustomWhiteButton
                title={t("btnTxt")}
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center mt-5"
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="flex justify-center lg:justify-end">
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/spread/spread-matter.png"
                alt="Spread Matters"
                className={`sm:w-[80%] h-auto`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpreadMatter;
