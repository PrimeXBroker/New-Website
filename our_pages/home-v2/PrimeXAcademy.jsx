"use client";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const PrimeXAcademy = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("home.primeXAcademy");
  const [hovered, setHovered] = useState(null);

  const academyContent = [
    {
      id: 1,
      imageDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/primex-academy/dark/Free+Webinars.png",
      imageLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/primex-academy/light/Free+Webinars.png",
      altText: "Webinar",
      title: t("academy_card_1_title_1"),
      description: t("academy_card_1_desc_1"),
      link: `/${locale}/webinars`,
    },
    {
      id: 2,
      imageDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/primex-academy/dark/Daily+Market+Updates.png",
      imageLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/primex-academy/light/Daily+Market+Updates.png",
      altText: "Market Updates",
      title: t("academy_card_2_title_1"),
      description: t("academy_card_2_desc_1"),
      link: `/${locale}/market-news`,
    },
    {
      id: 3,
      imageDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/primex-academy/dark/Expert+Market+Analysis.png",
      imageLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/primex-academy/light/Expert+Market+Analysis.png",
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
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              className="bg-cc dark:bg-cc-dark rounded-xl px-2 pt-2 pb-6 border-2 border-cc dark:border-cc-dark hover:border-tl dark:hover:border-tl-dark group transition-all duration-500 ease-in-out cursor-pointer"
            >
              <div className="rounded-lg">
                <Image
                  unoptimized={true}
                  src={theme === "dark" ? item.imageDark : item.imageLight}
                  alt={item.altText}
                  width={100}
                  height={100}
                  className="w-full h-auto rounded-lg"
                />
              </div>
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
