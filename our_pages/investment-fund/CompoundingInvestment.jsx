"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const CompoundingInvestment = () => {
  const locale = useLocale();
  const t = useTranslations("investmentFunds.compoundingInvestment");

  const features = [t("feature1"), t("feature2"), t("feature3"), t("feature4")];

  return (
    <section className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark">
      <div className="container">
        <div className="w-full mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
            {t("main_title1")}
            <span className="text-pcp dark:text-pcp-dark inline-block mt-2">
              {t("main_title2")}
            </span>
          </h2>
        </div>
        <div className="bg-cc dark:bg-cc-dark rounded-2xl px-4 py-6 sm:px-10 sm:py-10">
          <div>
            <h3 className="text-pcp dark:text-pcp-dark font-semibold text-[20px] sm:text-[26px] leading-tight! mb-4">
              {t("card1_title_part1")}
              <span className="text-tm dark:text-tm-dark">
                {t("card1_title_part2")}
              </span>
            </h3>
            <p className="text-ts dark:text-ts-dark font-medium text-base">
              {t("card1_description1")}
            </p>
          </div>
          <div className="grid grid-cols-12 mt-8 sm:gap-x-8">
            <div className="col-span-12 lg:col-span-6 mb-8 lg:mb-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/compount-placehlder-large.png"
                width="100"
                height="100"
                alt="Compound Investment Placeholder"
                className="w-full h-auto"
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <p className="text-ts dark:text-ts-dark font-medium text-base">
                {t("card1_description2")}
              </p>
            </div>
          </div>
          <div className="mt-14 lg:mt-16">
            <h3 className="text-tm dark:text-tm-dark font-semibold text-[20px] sm:text-[26px] leading-tight! mb-4">
              {t("card2_title_part1")}
              <span className="text-pcp dark:text-pcp-dark">
                {t("card2_title_part2")}
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-12 mt-8 sm:gap-x-8">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-ts dark:text-ts-dark font-medium text-base">
                {t("card2_description1")}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6 mt-8 lg:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/compount-placehlder-small.png"
                width="100"
                height="100"
                alt="Compound Investment Placeholder"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="mt-14 lg:mt-16">
            <h3 className="text-tm dark:text-tm-dark font-semibold text-[20px] sm:text-[26px] leading-tight! mb-4">
              {t("card3_title")}
            </h3>
          </div>
          <div className="col-span-12 mt-8">
            <div className="flex flex-wrap gap-3">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center bg-e1 dark:bg-e1-dark border border-e2 dark:border-e2-dark rounded-lg p-[6px]"
                >
                  <div className="flex items-center justify-center w-7 h-7 bg-e2 dark:bg-e2-dark rounded-md me-2 text-sm">
                    ✔
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-tm dark:text-tm-dark whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompoundingInvestment;
