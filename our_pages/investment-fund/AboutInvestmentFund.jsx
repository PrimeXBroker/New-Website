"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const AboutInvestmentFund = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("investmentFunds.about");
  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6 hidden md:block">
            <div className="">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/About+Image.png"
                width="100"
                height="100"
                alt="About Image"
                className={`w-full sm:w-[80%]`}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="mt-4 text-center md:text-start">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-tm dark:text-tm-dark">
                {t("title_part1")} <br />
                <span className="text-pcp dark:text-pcp-dark inline-block mt-1">
                  {t("title_part2")}{" "}
                </span>
              </h2>
              <p
                className={`text-ts dark:text-ts-dark mt-6 w-full sm:w-[90%] md:w-[80%] mx-auto md:mx-0 ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                {t("description")}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 block md:hidden mt-5 md:mt-0">
            <div className="flex justify-center md:justify-start">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/About+Image.png"
                width="100"
                height="100"
                alt="About Image"
                className={`w-full sm:w-[80%]`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInvestmentFund;
