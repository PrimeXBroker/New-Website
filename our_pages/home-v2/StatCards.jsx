"use client";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import React from "react";

const StatCards = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("home.stats");

  const stats = [
    {
      value: t("stat1.value1"),
      label: t("stat1.title"),
    },
    {
      value: t("stat2.value1"),
      label: t("stat2.title"),
    },
    {
      value: t("stat4.value1"),
      label: t("stat4.title"),
    },
    {
      value: t("stat3.value1"),
      label: t("stat3.title"),
    },
  ];

  const leftLaurelDark =
    "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Left+laurel+Branch.png";
  const rightLaurelDark =
    "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Right+laurel+Branch.png";
  const leftLaurelLight =
    "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Left.svg";
  const rightLaurelLight =
    "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Right.svg";

  return (
    <div className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container">
        <div className="flex items-center justify-between">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-5 w-full">
              <img
                src={
                  theme === "dark"
                    ? locale === "ar" ||
                      locale === "ps" ||
                      locale === "ku" ||
                      locale === "fa"
                      ? rightLaurelDark
                      : leftLaurelDark
                    : locale === "ar" ||
                        locale === "ps" ||
                        locale === "ku" ||
                        locale === "fa"
                      ? rightLaurelLight
                      : leftLaurelLight
                }
                alt="Laurel Left"
                className="w-[34px] h-auto object-contain"
              />
              <div className="text-center flex flex-col justify-center min-w-[120px]">
                <span className="text-tm dark:text-tm-dark font-bold text-lg">
                  {stat.value}
                </span>
                <span className="text-ts dark:text-ts-dark font-semibold text-lg">
                  {stat.label}
                </span>
              </div>
              <img
                src={
                  theme === "dark"
                    ? locale === "ar" ||
                      locale === "ps" ||
                      locale === "ku" ||
                      locale === "fa"
                      ? leftLaurelDark
                      : rightLaurelDark
                    : locale === "ar" ||
                        locale === "ps" ||
                        locale === "ku" ||
                        locale === "fa"
                      ? leftLaurelLight
                      : rightLaurelLight
                }
                alt="Laurel Right"
                className="w-[34px] h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatCards;
