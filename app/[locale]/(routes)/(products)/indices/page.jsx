import IndicesPage from "@/our_pages/products/indices/IndicesPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/indices`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/indices`;

  return {
    title: t("indicesProduct.metaData.title"),
    description: t("indicesProduct.metaData.description"),
    alternates: {
      canonical: url,
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
