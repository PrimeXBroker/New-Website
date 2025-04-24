"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowLeftUpLine, RiArrowRightUpLine } from "react-icons/ri";

const PrimexAcademy = () => {
  const locale = useLocale();
  const t = useTranslations("home.academy");
  const [hovered, setHovered] = useState(null);

  const academyContent = [
    {
      id: 1,
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/academy-free-webinars.webp",
      altText: "Webinar",
      title: t("academy_card_1_title_1"),
      description: t("academy_card_1_desc_1"),
      link: `/${locale}/webinars`,
    },
    {
      id: 2,
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/academy-daily-market-updates.webp",
      altText: "Market Updates",
      title: t("academy_card_2_title_1"),
      description: t("academy_card_2_desc_1"),
      link: `/${locale}/market-news`,
    },
    {
      id: 3,
      imageSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/academy-expert-market-analysis.webp",
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
              className="bg-cc dark:bg-cc-dark rounded-xl p-6 border-2 border-cc dark:border-cc-dark hover:border-tl dark:hover:border-tl-dark group transition-all duration-500 ease-in-out cursor-pointer"
            >
              <div className="rounded-lg">
                <Image
                  unoptimized={true}
                  src={item.imageSrc}
                  alt={item.altText}
                  width={100}
                  height={100}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex items-center gap-3 mt-6 mb-2">
                <h3 className="text-xl font-semibold text-tm dark:text-tm-dark">
                  {item.title}
                </h3>
                <Link href={item.link}>
                  <div className="w-[28px] h-[28px] rounded-[5.73px] bg-e1 dark:bg-e1-dark flex justify-center items-center group-hover:bg-tm dark:group-hover:bg-tm-dark transition-all duration-500 ease-in-out">
                    {locale === "ar" || locale === "fa" || locale === "ku" ? (
                      <RiArrowLeftUpLine
                        className={`text-lg transition-transform duration-500 ease-in-out ${
                          hovered === item.id
                            ? "rotate-[-45deg] text-p dark:text-p-dark"
                            : "text-ts dark:text-ts-dark"
                        }`}
                      />
                    ) : (
                      <RiArrowRightUpLine
                        className={`text-lg transition-transform duration-500 ease-in-out ${
                          hovered === item.id
                            ? "rotate-45 text-p dark:text-p-dark"
                            : "text-ts dark:text-ts-dark"
                        }`}
                      />
                    )}
                  </div>
                </Link>
              </div>
              <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrimexAcademy;
