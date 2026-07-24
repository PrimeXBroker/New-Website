import MetalsPage from "@/our_pages/products/metals/MetalsPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/metals`;

  return {
    title: t("metalsProduct.metaData.title"),
    description: t("metalsProduct.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/metals",
        ar: "https://www.primexcapital.com/ar/metals",
        ku: "https://www.primexcapital.com/ku/metals",
        es: "https://www.primexcapital.com/es/metals",
        ps: "https://www.primexcapital.com/ps/metals",
        pt: "https://www.primexcapital.com/pt/metals",
        fa: "https://www.primexcapital.com/fa/metals",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("metalsProduct.metaData.title"),
      description: t("metalsProduct.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/metals/Metals.webp",
          width: 1200,
          height: 630,
          alt: t("metalsProduct.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <MetalsPage />;
};

export default page;
