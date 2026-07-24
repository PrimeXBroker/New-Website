import IndicesPage from "@/our_pages/products/indices/IndicesPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/indices`;

  return {
    title: t("indicesProduct.metaData.title"),
    description: t("indicesProduct.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/indices",
        ar: "https://www.primexcapital.com/ar/indices",
        ku: "https://www.primexcapital.com/ku/indices",
        es: "https://www.primexcapital.com/es/indices",
        ps: "https://www.primexcapital.com/ps/indices",
        pt: "https://www.primexcapital.com/pt/indices",
        fa: "https://www.primexcapital.com/fa/indices",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("indicesProduct.metaData.title"),
      description: t("indicesProduct.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/indices/Indices.webp",
          width: 1200,
          height: 630,
          alt: t("indicesProduct.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <IndicesPage />;
};

export default page;
