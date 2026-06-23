"use client";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import freeWebinarsDark from "@/public/animations/home-v2/dark/free-webinars.json";
import freeWebinarsLight from "@/public/animations/home-v2/light/free-webinars.json";
import dailyMarketUpdatesDark from "@/public/animations/home-v2/dark/daily-market-updates.json";
import dailyMarketUpdatesLight from "@/public/animations/home-v2/light/daily-market-updates.json";
import expertMarketAnalysisDark from "@/public/animations/home-v2/dark/expert-market-analysis.json";
import expertMarketAnalysisLight from "@/public/animations/home-v2/light/expert-market-analysis.json";
import LazyLottie from "@/components/common/LazyLottie";

const PrimeXAcademy = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("home.primeXAcademy");

  const academyContent = [
    {
      id: 1,
      imageDark: freeWebinarsDark,
      imageLight: freeWebinarsLight,
      altText: "Webinar",
      title: t("academy_card_1_title_1"),
      description: t("academy_card_1_desc_1"),
      link: `/${locale}/webinars`,
    },
    {
      id: 2,
      imageDark: dailyMarketUpdatesDark,
      imageLight: dailyMarketUpdatesLight,
      altText: "Market Updates",
      title: t("academy_card_2_title_1"),
      description: t("academy_card_2_desc_1"),
      link: `/${locale}/market-news`,
    },
    {
      id: 3,
      imageDark: expertMarketAnalysisDark,
      imageLight: expertMarketAnalysisLight,
      altText: "Expert Analysis",
      title: t("academy_card_3_title_1"),
      description: t("academy_card_3_desc_1"),
      link: `/${locale}/technical-analysis`,
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold">
            <span className="text-tm dark:text-tm-dark">
              {t("academy_title1")}
            </span>
            <br className="block sm:hidden" />
            <span className="text-pcp dark:text-pcp-dark">
              {t("academy_title2")}
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[540px] mx-auto text-ts dark:text-ts-dark">
            {t("academy_desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {academyContent.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="bg-cc dark:bg-cc-dark rounded-xl px-2 pt-2 pb-6 border-2 border-cc dark:border-cc-dark cursor-pointer"
            >
              <LazyLottie
                animationData={
                  theme === "dark" ? item.imageDark : item.imageLight
                }
                loop={true}
              />
              <div className="px-4 mt-4">
                <h3 className="text-xl font-semibold text-tm dark:text-tm-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrimeXAcademy;
