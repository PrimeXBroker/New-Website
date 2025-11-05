import React from "react";
import MarketNews from "@/our_pages/market-news/MarketNews";
import { getLocale } from "next-intl/server";
import { getNews } from "@/actions/news";
import Hero from "@/our_pages/market-news/Hero";
import Testimonials from "@/our_pages/home/Testimonials";
import { createTranslator } from "next-intl";
import ClientReviews from "@/components/common/ClientReviews";
import MarketNewsBanner from "@/our_pages/MarketNewsBanner";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/market-news`;

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
  const lang =
    locale === "ar"
      ? "news"
      : locale === "pt"
      ? "market-news-pt"
      : locale === "fa"
      ? "market-news-fa"
      : "all";

  // news
  const response = await getNews(page, lang, locale);
  if (response?.success) {
    news = response?.result.data;
    totalPages = response?.result.pagination.totalPages;
  }

  const hreflangLocales = [
    { lng: "en", url: "en" },
    { lng: "ar", url: "ar" },
    { lng: "ku", url: "ku" },
    { lng: "es", url: "es" },
    { lng: "ps", url: "ps" },
    { lng: "pt", url: "pt" },
  ];

  return (
    <>
      <head>
        {hreflangLocales.map((item) => (
          <link
            key={item.lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${item.url}/market-news`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <Hero />
      <MarketNewsBanner news={news?.slice(0, 5)} />
      <MarketNews news={news} totalPages={totalPages} lang={lang} />
      <div className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
        <ClientReviews />
      </div>
    </>
  );
};

export default page;
