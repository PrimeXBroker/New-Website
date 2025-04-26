"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";

const Features = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("copyProgram.features");

  const featuresDataTop = [
    {
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Full+Control+Over+Risk+Management.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/Full+Control+Over+Risk+Management.svg",
      text: t("feature1"),
      alt: "Risk Management Icon",
    },
    {
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Copy+Multiple+Experts+Simultaneously.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/Copy+Multiple+Experts+Simultaneously.svg",
      text: t("feature2"),
      alt: "Copy Multiple Experts Icon",
    },
    {
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Copy+by+Percentage+or+Fixed+Lot.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/Copy+by+Percentage+or+Fixed+Lot.svg",
      text: t("feature3"),
      alt: "Percentage or Fixed Lot Icon",
    },
  ];

  const featuresDataBottom = [
    {
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Start+Investing+Easily+From+%24100.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/Start+Investing+Easily+From+%24100.svg",
      text: t("feature4"),
      alt: "Investing Icon",
    },
    {
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Access+Detailed+Prime+Trader+Account+Stats.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/Access+Detailed+Prime+Trader+Account+Stats.svg",
      text: t("feature5"),
      alt: "Account Stats Icon",
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark text-ts dark:text-ts-dark pt-16 sm:pt-28">
      <div className="container mx-auto">
        <div className="bg-cc dark:bg-cc-dark rounded-[20px] py-12">
          <div className="flex items-center justify-center mb-6">
            {featuresDataTop.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 md:px-6 xl:px-12 group ${
                  index !== 0
                    ? locale === "ar" || locale === "ps" || locale === "ku"
                      ? "border-r-2 border-e1 dark:border-e1-dark"
                      : "border-l-2 border-e1 dark:border-e1-dark"
                    : ""
                }`}
              >
                <div className="p-3 bg-e1 dark:bg-e1-dark rounded-lg flex items-center justify-center h-16 w-16">
                  <Image
                    src={
                      theme === "dark" ? feature.iconDark : feature.iconLight
                    }
                    alt={feature.alt}
                    width="40"
                    height="200"
                  />
                </div>
                <p className="text-base font-medium w-52">{feature.text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-12">
            {featuresDataBottom.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 px-12 group ${
                  index !== 0
                    ? locale === "ar" || locale === "ps" || locale === "ku"
                      ? "border-r-2 border-e1 dark:border-e1-dark"
                      : "border-l-2 border-e1 dark:border-e1-dark"
                    : ""
                }`}
              >
                <div className="p-3 bg-e1 dark:bg-e1-dark rounded-lg flex items-center justify-center h-16 w-16">
                  <Image
                    src={
                      theme === "dark" ? feature.iconDark : feature.iconLight
                    }
                    alt={feature.alt}
                    width="40"
                    height="200"
                  />
                </div>
                <p className="text-base font-medium w-52">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
