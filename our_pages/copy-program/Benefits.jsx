"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";

const Benefits = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("copyProgram.benefits");

  const benefits = [
    {
      title1: t("title1_part1"),
      title2: t("title1_part2"),
      description: t("description1"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Real-Time+Trading.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/Real-Time+Trading.svg",
    },
    {
      title1: t("title2_part1"),
      title2: t("title2_part2"),
      description: t("description2"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Diversify+Portfolio.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/Diversify+Portfolio.svg",
    },
    {
      title1: t("title3_part1"),
      title2: t("title3_part2"),
      description: t("description3"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Automte+and+save+time.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/Automte+and+save+time.svg",
    },
    {
      title1: t("title4_part1"),
      title2: t("title4_part2"),
      description: t("description4"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/7+Customer+Support.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/24+7+Customer+Support.svg",
    },
    {
      title1: t("title5_part1"),
      title2: t("title5_part2"),
      description: t("description5"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/globe.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/globe.svg",
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark">
      <div className="container flex flex-col mb-10">
        <div className="w-full">
          <h2 className="text-2xl md:text-4xl font-semibold text-tm dark:text-tm-dark text-center hidden sm:block">
            {t("main_title1")} <br className="hidden sm:block" />
            <span className="text-pcp dark:text-pcp-dark inline-block mt-2">
              {t("main_title2")}
            </span>
          </h2>
          <h2 className="text-2xl md:text-4xl font-semibold text-tm dark:text-tm-dark text-center block sm:hidden">
            {t("main_title1")}
            <span className="text-pcp dark:text-pcp-dark">
              {t("main_title2")}
            </span>
          </h2>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[32%] bg-cc dark:bg-cc-dark p-6 rounded-lg text-pcp dark:text-pcp-dark flex flex-col gap-3"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title1}</h3>
                  <h3 className="text-xl font-semibold text-tm dark:text-tm-dark">
                    {benefit.title2}
                  </h3>
                </div>
                <div className="w-16 h-16 bg-e1 dark:bg-e1-dark rounded-lg flex items-center justify-center">
                  <Image
                    src={
                      theme === "dark" ? benefit.iconDark : benefit.iconLight
                    }
                    alt={benefit.title1}
                    width="40"
                    height="200"
                  />
                </div>
              </div>
              <p className="text-ts dark:text-ts-dark text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
