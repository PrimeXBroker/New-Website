"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const Steps = () => {
  const locale = useLocale();
  const t = useTranslations("investmentFunds.steps");

  const steps = [
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/Step+1.png",
      alt: "Step 1",
      count: t("count1"),
      label: t("step1"),
    },
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/Step+2.png",
      alt: "Step 2",
      count: t("count2"),
      label: t("step2"),
    },
    {
      src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/Step+3.png",
      alt: "Step 3",
      count: t("count3"),
      label: t("step3"),
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-semibold text-tm dark:text-tm-dark text-center mb-10">
          <span className="text-pcp dark:text-pcp-dark">
            {t("title_part1")}
          </span>{" "}
          {t("title_part2")}
        </h2>
        <div className="bg-cc dark:bg-cc-dark rounded-2xl px-10 lg:px-14 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-tm dark:text-tm-dark">
            {steps.map((step, index) => (
              <div key={index} className="group mb-1 sm:mb-2 md:mb-0">
                <Image
                  unoptimized={true}
                  src={step.src}
                  alt={step.alt}
                  width={128}
                  height={128}
                  className="mx-auto w-full h-[260px] rounded-xl"
                />
                <p className="text-ts dark:text-ts-dark font-semibold text-sm sm:text-base mt-4 mb-1">
                  {step.count}
                </p>
                <p className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-semibold">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-ts dark:text-ts-dark text-sm sm:text-base mt-7">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
