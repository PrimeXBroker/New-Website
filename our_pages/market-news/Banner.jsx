import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("marketNews.hero");

  return (
    <section className="bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/background.jpg')]  bg-cover bg-no-repeat">
      <div className="container flex flex-col md:flex-row justify-around items-center py-12 lg:md:text-left text-center md:h-[50vh]">
        <div className="md:w-[40%]">
          <h1
            className={`text-primary text-3xl lg:text:4xl xl:text-6xl font-semibold mb-8 ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            {t("title")}
          </h1>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/market-news-banner.webp"
            width="350"
            height="500"
            alt="banner Image"
            className="md:w-[300px] lg:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
