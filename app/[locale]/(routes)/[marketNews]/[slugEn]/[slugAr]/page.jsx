import Banner from "@/our_pages/market-news/Banner";
import React from "react";
import MarketNews from "@/our_pages/market-news/MarketNews";
import { getLocale } from "next-intl/server";
import { getNews } from "@/actions/news";
import Hero from "@/our_pages/market-news/Hero";
import Testimonials from "@/our_pages/home/Testimonials";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/market-news/all/news`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/market-news/all/news`;
  return {
    title: t("knowledgeHubMarketNews.metaData.title"),
    description: t("knowledgeHubMarketNews.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("knowledgeHubMarketNews.metaData.title"),
      description: t("knowledgeHubMarketNews.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/knowledge-hub/economic-calender/market-news.webp",
          width: 1200,
          height: 630,
          alt: t("knowledgeHubMarketNews.metaData.title"),
        },
      ],
    },
  };
}

const page = async ({ params }) => {
  const { slugEn, slugAr } = params;
  const locale = await getLocale();
  const page = 1;

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
      <div className="pb-10 sm:pb-14 bg-[#000000]">
        <Testimonials />
      </div>
    </>
  );
};

export default page;
