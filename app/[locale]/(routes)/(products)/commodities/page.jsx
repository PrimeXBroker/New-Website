import CommoditiesPage from "@/our_pages/products/commodities/CommoditiesPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/commodities`;

  return {
    title: t("commoditiesProduct.metaData.title"),
    description: t("commoditiesProduct.metaData.description"),
    alternates: {
      canonical: url,
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
  return (
    <>
      <CommoditiesPage />
    </>
  );
};

export default page;
