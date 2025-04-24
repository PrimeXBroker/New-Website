import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const HomeStats = () => {
  const locale = useLocale();
  const t = useTranslations("home.stats");

  const stats = [
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/250k-Served-Clients.svg",
      value: t("stat1.value1"),
      label: t("stat1.title"),
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/%24300-Million-Paid-up-Capital.svg",
      value: t("stat2.value1"),
      label: t("stat2.title"),
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/%247-Million-Daily-Trades.svg",
      value: t("stat4.value1"),
      label: t("stat4.title"),
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/5%2C000-Introducing-Brokers.svg",
      value: t("stat3.value1"),
      label: t("stat3.title"),
    },
  ];

  return (
    <section className="bg-p dark:bg-p-dark pt-10 pb-16 sm:pb-28">
      <div className="container mx-auto">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-tl lg:dark:divide-tl-dark ${
            locale === "ar" || locale === "ku" ? "lg:divide-x-reverse" : ""
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center gap-1 sm:gap-2 lg:justify-center sm:ps-8 md:ps-14 lg:ps-0 mb-5 ${
                index >= 2 ? "mb-0" : "mb-6"
              } lg:mb-0`}
            >
              <div>
                <Image
                  unoptimized={true}
                  width="100"
                  height="100"
                  src={stat.icon}
                  alt="Logo Image"
                  className="w-[37px] h-[36px] sm:w-full sm:h-full"
                />
              </div>
              <div>
                <p className="text-tm dark:text-tm-dark font-semibold text-base sm:text-2xl lg:text-xl xl:text-2xl mb-0">
                  {stat.value}
                </p>
                <p className="text-ts dark:text-ts-dark font-semibold text-xs sm:text-base lg:text-base xl:text-lg mb-0">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
