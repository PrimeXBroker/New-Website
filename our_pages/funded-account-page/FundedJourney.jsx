"use client";
import React from "react";
import { useTranslations } from "next-intl";

const steps = [
  {
    step: "01",
    titleKey: "step1Title",
    descKey: "step1Desc",
  },
  {
    step: "02",
    titleKey: "step2Title",
    descKey: "step2Desc",
  },
  {
    step: "03",
    titleKey: "step3Title",
    descKey: "step3Desc",
  },
  {
    step: "04",
    titleKey: "step4Title",
    descKey: "step4Desc",
  },
];

const FundedJourney = () => {
  const t = useTranslations("fundedAccountPage.journey");

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-36">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-pcp dark:border-pcp-dark bg-pcp/[0.0784] dark:bg-pcp-dark/[0.0784] mb-5">
            <span className="w-2 h-2 rounded-full bg-pcp dark:bg-pcp-dark inline-block"></span>
            <span className="text-pcp dark:text-pcp-dark text-xs sm:text-sm font-semibold tracking-wider uppercase">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center uppercase">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left relative pr-0 md:pr-6"
            >
              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-12 left-12 -right-12 h-[1px] -translate-y-1/2 bg-pcp dark:bg-pcp-dark"
                />
              )}
              <div className="relative mb-5 w-[60px] h-[60px] sm:w-[96px] sm:h-[96px] md:w-[70px] md:h-[70px] lg:w-[96px] lg:h-[96px] rounded-full border-[2px] border-pcp dark:border-pcp-dark bg-p dark:bg-p-dark flex items-center justify-center shrink-0">
                <span className="text-xl sm:text-3xl md:text-2xl lg:text-3xl text-tm dark:text-tm-dark font-semibold">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl text-tm dark:text-tm-dark font-semibold mb-2">
                {t(item.titleKey)}
              </h3>
              <p className="text-ts dark:text-ts-dark text-sm sm:text-base md:text-sm lg:text-base font-medium">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundedJourney;
