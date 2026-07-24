import CommoditiesPage from "@/our_pages/products/commodities/CommoditiesPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/commodities`;

  return {
    title: t("commoditiesProduct.metaData.title"),
    description: t("commoditiesProduct.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/commodities",
        ar: "https://www.primexcapital.com/ar/commodities",
        ku: "https://www.primexcapital.com/ku/commodities",
        es: "https://www.primexcapital.com/es/commodities",
        ps: "https://www.primexcapital.com/ps/commodities",
        pt: "https://www.primexcapital.com/pt/commodities",
        fa: "https://www.primexcapital.com/fa/commodities",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("commoditiesProduct.metaData.title"),
      description: t("commoditiesProduct.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/commodities/Commodities.webp",
          width: 1200,
          height: 630,
          alt: t("commoditiesProduct.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <CommoditiesPage />;
};

export default page;
