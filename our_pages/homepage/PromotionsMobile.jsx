"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiArrowLeftUpLine, RiArrowRightUpLine } from "react-icons/ri";

const PromotionsMobile = () => {
  const locale = useLocale();
  const t = useTranslations("home.promotions");
  const [hovered, setHovered] = useState(null);

  const promotionsData = [
    // {
    //   id: 1,
    //   title: t("promotion1.title"),
    //   description: t("promotion1.desc"),
    //   image:
    //     "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/bonus-promotion.webp",
    //   link: `/${locale}/bonus`,
    // },
    {
      id: 2,
      title: t("promotion2.title"),
      description: t("promotion2.desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/ib-promotion.webp",
      link: `/${locale}/ib-program`,
    },
    {
      id: 3,
      title: t("promotion3.title"),
      description: t("promotion3.desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/social-trading-promotion.webp",
      link: `/${locale}/social-trading`,
    },
    {
      id: 4,
      title: t("promotion4.title"),
      description: t("promotion4.desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/spread-promotion.webp",
      link: `/${locale}/primex-spreads`,
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark sm:hidden">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold">
            <span className="text-tm dark:text-tm-dark">{t("title1")}</span>
            <br className="block sm:hidden" />
            <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[540px] mx-auto text-ts dark:text-ts-dark">
            {t("desc")}
          </p>
        </div>
        {promotionsData.map((promo, index) => (
          <Link
            href={promo.link}
            className={`flex bg-cc dark:bg-cc-dark rounded-xl overflow-hidden items-center gap-5 p-5 ${
              index === promotionsData.length - 1 ? "" : "mb-5"
            } border-2 border-cc dark:border-cc-dark hover:border-tl dark:hover:border-tl-dark group transition-all duration-500 ease-in-out cursor-pointer`}
          >
            <div>
              <Image
                src={promo.image}
                alt={promo.title}
                width={200}
                height={200}
                className="w-[80px] h-[80px] rounded-md"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Link href={promo.link}>
                  <div className="w-[24px] h-[24px] rounded-[5.73px] bg-e1 dark:bg-e1-dark flex justify-center items-center group-hover:bg-tm dark:group-hover:bg-tm-dark transition-all duration-500 ease-in-out">
                    {locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa" ? (
                      <RiArrowLeftUpLine
                        className={`text-base transition-transform duration-500 ease-in-out ${
                          hovered === promo.id
                            ? "rotate-[-45deg] text-p dark:text-p-dark"
                            : "text-ts dark:text-ts-dark"
                        }`}
                      />
                    ) : (
                      <RiArrowRightUpLine
                        className={`text-base transition-transform duration-500 ease-in-out ${
                          hovered === promo.id
                            ? "rotate-45 text-p dark:text-p-dark"
                            : "text-ts dark:text-ts-dark"
                        }`}
                      />
                    )}
                  </div>
                </Link>
              </div>
              <h2 className="text-base font-semibold text-tm dark:text-tm-dark mb-2">
                {promo.title}
              </h2>
              <p className="text-xs text-ts dark:text-ts-dark font-medium">
                {promo.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PromotionsMobile;
