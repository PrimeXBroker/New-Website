import Banner from "@/our_pages/market-news/Banner";
import React from "react";
import MarketNews from "@/our_pages/market-news/MarketNews";
import { getLocale } from "next-intl/server";
import { getNews } from "@/actions/news";
import Hero from "@/our_pages/market-news/Hero";
import Testimonials from "@/our_pages/home/Testimonials";

const page = async ({ params }) => {
  const { marketNews, slugEn, slugAr } = params;
  const locale = await getLocale();
  const page = 1;

  const formattedTitle = marketNews
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  let totalPages,
    news = [];
  const lang = locale === "ar" ? slugAr : slugEn;

  // news
  const response = await getNews(page, lang, locale);
  if (response?.success) {
    news = response?.result.data;
    totalPages = response?.result.pagination.totalPages;
  }

  return (
    <>
      <Hero />
      {(locale === "en" || locale === "ar") && (
        <>
          <Banner news={news?.slice(0, 5)} />
          <MarketNews news={news} totalPages={totalPages} lang={lang} />
        </>
      )}
      <div className="pb-10 bg-[#000000]">
        <Testimonials />
      </div>
    </>
  );
};

export default page;
