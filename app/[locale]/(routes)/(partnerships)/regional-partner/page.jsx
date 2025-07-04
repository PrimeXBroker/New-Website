import RegionalPartnershipWrapper from "@/our_pages/partnerships/regional-partnership/RegionalPartnershipWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/regional-partner`;

  return {
    title: t("regionalPartnership.metaData.title"),
    description: t("regionalPartnership.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("regionalPartnership.metaData.title"),
      description: t("regionalPartnership.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Regional+page+Hero+image.webp",
          width: 1200,
          height: 630,
          alt: t("regionalPartnership.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  const hreflangLocales = [
    { lng: "en", url: "en" },
    { lng: "ar", url: "ar" },
    { lng: "ku", url: "ku" },
    { lng: "es", url: "es" },
    { lng: "ps", url: "ps" },
  ];
  return (
    <>
      <head>
        {hreflangLocales.map((item) => (
          <link
            key={item.lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${item.url}/regional-partner`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <RegionalPartnershipWrapper />
    </>
  );
};

export default page;
