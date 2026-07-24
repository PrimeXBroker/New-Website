import ForexPage from "@/our_pages/products/forex/ForexPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/fx-cfds`;

  return {
    title: t("forexProduct.metaData.title"),
    description: t("forexProduct.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/fx-cfds",
        ar: "https://www.primexcapital.com/ar/fx-cfds",
        ku: "https://www.primexcapital.com/ku/fx-cfds",
        es: "https://www.primexcapital.com/es/fx-cfds",
        ps: "https://www.primexcapital.com/ps/fx-cfds",
        pt: "https://www.primexcapital.com/pt/fx-cfds",
        fa: "https://www.primexcapital.com/fa/fx-cfds",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("forexProduct.metaData.title"),
      description: t("forexProduct.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/forex/Forex.webp",
          width: 1200,
          height: 630,
          alt: t("forexProduct.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <ForexPage />;
};

export default page;
