"use client";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import React from "react";

const AppFeatures = () => {
  const t = useTranslations("primeXTradingApp.appBenefits");
  const { theme } = useTheme();

  const features = [
    {
      title: t("title1"),
      title1: t("title1_1"),
      description: t("description1"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/Account++Management+Dark+Mode.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/Account++Management+Light+Mode.svg",
    },
    {
      title: t("title2"),
      title1: t("title2_1"),
      title2: t("title2_2"),
      description: t("description2"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/Deposits+and++Withdrawals+Dark+Mode.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/Deposits+and++Withdrawals+Light+Mode.svg",
    },
    {
      title: t("title3"),
      title1: t("title3_1"),
      description: t("description3"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/24+7++Expert+Support+Dark+Mode.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/24+7++Expert+Support+Light+Mode.svg",
    },
    {
      title: t("title4"),
      title1: t("title4_1"),
      description: t("description4"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/Advanced++Security+Access+Dark+Mode.svg",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/Advanced++Security+Access+Light+Mode.svg",
    },
  ];

  return (
    <div className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
          {t("main_title1")}
          <span className="text-pcp dark:text-pcp-dark">
            {t("main_title2")}
          </span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-cc dark:bg-cc-dark p-6 rounded-xl text-tm dark:text-tm-dark flex flex-col gap-2 "
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">
                  <span className="text-pcp dark:text-pcp-dark">
                    {feature.title}
                  </span>
                  {feature.title2 && <span>{feature.title2}</span>}
                </h3>
                <h3 className="text-xl font-semibold text-pcp dark:text-pcp-dark">
                  {feature.title1}
                </h3>
              </div>
              <div className="w-14 h-14 bg-e1 dark:bg-e1-dark rounded-lg flex items-center justify-center">
                <img
                  src={theme === "dark" ? feature.iconDark : feature.iconLight}
                  alt={feature.title}
                  className="w-[32px]"
                />
              </div>
            </div>
            <p className="text-ts dark:text-ts-dark mt-2 text-sm sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppFeatures;
