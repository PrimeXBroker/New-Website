import Banner from "@/our_pages/market-news/Banner";
import React from "react";
import MarketNews from "@/our_pages/market-news/MarketNews";
import { getLocale } from "next-intl/server";
import { getNews } from "@/actions/news";

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
      {/* <Banner news={news?.slice(0, 6)} /> */}
      <div className="pt-28 bg-[#000000]">
        <MarketNews news={news} totalPages={totalPages} lang={lang} />
      </div>
    </>
  );
};

export default page;
