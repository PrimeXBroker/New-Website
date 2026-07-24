import StocksPage from "@/our_pages/products/stocks/StocksPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/stocks`;

  return {
    title: t("stocksProduct.metaData.title"),
    description: t("stocksProduct.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/stocks",
        ar: "https://www.primexcapital.com/ar/stocks",
        ku: "https://www.primexcapital.com/ku/stocks",
        es: "https://www.primexcapital.com/es/stocks",
        ps: "https://www.primexcapital.com/ps/stocks",
        pt: "https://www.primexcapital.com/pt/stocks",
        fa: "https://www.primexcapital.com/fa/stocks",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("stocksProduct.metaData.title"),
      description: t("stocksProduct.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/stock/Stocks.webp",
          width: 1200,
          height: 630,
          alt: t("stocksProduct.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <StocksPage />;
};

export default page;
