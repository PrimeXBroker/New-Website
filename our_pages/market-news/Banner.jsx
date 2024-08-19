import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const Banner = ({ title }) => {
  const locale = useLocale();
  const t = useTranslations("marketNews.hero");

  const getBackgroundClass = () => {
    switch (title) {
      case "Market News":
        return locale === "ar"
          ? "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/market-new-mbl.webp')] md:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/market-news-ar.webp')]"
          : "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/market-new-mbl.webp')] md:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/market-news.webp')]";
      case "Starting Gateway":
        return locale === "ar"
          ? "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/starting-gateway-mbl.webp')] md:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/starting-gateway-ar.webp')]"
          : "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/starting-gateway-mbl.webp')] md:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/starting-gateway.webp')]";
      case "Press Release":
        return locale === "ar"
          ? "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/market-new-mbl.webp')] md:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/market-news-ar.webp')]"
          : "bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/market-new-mbl.webp')] md:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/market-news.webp')]";
      default:
        return "";
    }
  };

  const getTitle = () => {
    switch (title) {
      case "Market News":
        return locale === "ar" ? "أخبار السوق" : "Market News";
      case "Starting Gateway":
        return locale === "ar" ? "بوابتك للبداية" : "Starting Gateway";
      case "Press Release":
        return locale === "ar" ? "بيان صحفي" : "Press Release";
      default:
        return title;
    }
  };

  const backgroundClass = getBackgroundClass();
  const displayTitle = getTitle();

  return (
    <section
      className={`bg-cover bg-no-repeat bg-center md:bg-center ${backgroundClass}`}
    >
      <div className="container flex flex-col md:flex-row justify-start items-center py-12 lg:md:text-left text-center h-[50vh]">
        <div className="w-[60%]">
          <h1
            className={`text-white text-3xl md:text:4xl xl:text-6xl font-semibold mb-8 ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {displayTitle}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
