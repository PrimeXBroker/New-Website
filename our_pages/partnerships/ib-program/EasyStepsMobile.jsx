"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const EasyStepsMobile = () => {
  const { theme } = useTheme();
  const t = useTranslations("ibProgram.easySteps");

  const benefits = [
    {
      title: t("step2_title"),
      description: t("step2_desc"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Register.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Register.svg",
      count: t("step1_count"),
    },
    {
      title: t("step1_title"),
      description: t("step1_desc"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Promote.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Promote.svg",
      count: t("step2_count"),
    },
    {
      title: t("step3_title"),
      description: t("step3_desc"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Earn.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/Earn.svg",
      count: t("step3_count"),
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
          {t("title1")}
          <span className="text-pcp dark:text-pcp-dark">{t("title2")} </span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-cc dark:bg-cc-dark p-6 rounded-lg text-pcp dark:text-pcp-dark flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                    {benefit.count}
                  </span>
                  {benefit.title}
                </h3>
              </div>
              <div className="w-12 h-12 bg-e1 dark:bg-e1-dark rounded-lg flex items-center justify-center">
                <img
                  src={theme === "dark" ? benefit.iconDark : benefit.iconLight}
                  alt={benefit.title}
                  className="w-[32px]"
                />
              </div>
            </div>
            <p className="text-tm dark:text-tm-dark mt-2 text-sm sm:text-base">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EasyStepsMobile;
