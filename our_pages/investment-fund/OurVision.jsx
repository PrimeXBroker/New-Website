"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const OurVision = () => {
  const locale = useLocale();
  const t = useTranslations("investmentFunds.investmentVision");

  const investmentStages = [
    {
      title: t("stages.title1"),
      description: t("stages.description1"),
    },
    {
      title: t("stages.title2"),
      description: t("stages.description2"),
    },
    {
      title: t("stages.title3"),
      description: t("stages.description3"),
    },
    {
      title: t("stages.title4"),
      description: t("stages.description4"),
    },
  ];

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
            <h3 className="text-tm dark:text-tm-dark font-semibold text-[20px] sm:text-[26px] leading-tight! mb-4">
              {t("card_title_part1")}
              <span className="text-pcp dark:text-pcp-dark">
                {t("card_title_part2")}
              </span>
            </h3>
            <p className="text-ts dark:text-ts-dark font-medium text-base">
              {t("card_description")}
            </p>
          </div>
          <div className="grid grid-cols-12 mt-6 sm:gap-x-8 items-center">
            <div className="col-span-12 lg:col-span-6 xl:col-span-7 mb-6 lg:mb-0 lg:hidden">
              <div className="flex items-center justify-end">
                <Image
                  unoptimized={true}
                  src={
                    locale === "ar"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/investment-vision-ar.png"
                      : locale === "fa"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/investment-vision-fa.png"
                        : locale === "ku"
                          ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/investment-vision-ku.png"
                          : locale === "pt"
                            ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/investment-vision-pt.png"
                            : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/investment-vision-en.png"
                  }
                  width="100"
                  height="100"
                  alt="Investment Vision Image"
                  className={`w-full sm:w-[94%] h-auto`}
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-5">
              <div className="bg-e2 dark:bg-e2-dark p-2 rounded-xl">
                {investmentStages.map((stage, index) => (
                  <div
                    key={index}
                    className="bg-e1 dark:bg-e1-dark rounded-xl p-4 sm:p-6 mb-2 last:mb-0"
                  >
                    <h4 className="text-tm dark:text-tm-dark text-lg font-semibold mb-2">
                      {stage.title}
                    </h4>
                    <p className="text-ts dark:text-ts-dark text-base font-medium leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-7 mt-10 lg:mt-0 hidden lg:block">
              <div className="flex items-center justify-end">
                <Image
                  unoptimized={true}
                  src={
                    locale === "ar"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/investment-vision-ar.png"
                      : locale === "fa"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/investment-vision-fa.png"
                        : locale === "ku"
                          ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/investment-vision-ku.png"
                          : locale === "pt"
                            ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/investment-vision-pt.png"
                            : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/investment-vision-en.png"
                  }
                  width="100"
                  height="100"
                  alt="Investment Vision Image"
                  className={`w-full sm:w-[94%] h-auto`}
                />
              </div>
            </div>
            <div className="col-span-12 mt-6">
              <p className="text-ts dark:text-ts-dark font-medium text-base">
                {t("footer_text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
