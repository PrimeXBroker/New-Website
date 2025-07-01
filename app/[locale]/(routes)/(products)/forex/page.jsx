import ForexPage from "@/our_pages/products/forex/ForexPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/forex`;

  return {
    title: t("forexProduct.metaData.title"),
    description: t("forexProduct.metaData.description"),
    alternates: {
      canonical: url,
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
  return (
    <>
      <ForexPage />
    </>
  );
};

export default page;
