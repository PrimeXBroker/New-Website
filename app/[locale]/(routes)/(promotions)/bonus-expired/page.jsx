import BonusWrapper from "@/our_pages/promotions/bonus-new/BonusWrapper";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/bonus`;

  return {
    title: t("newBonusPage.metaData.title"),
    description: t("newBonusPage.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("newBonusPage.metaData.title"),
      description: t("newBonusPage.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/cover-new.png",
          width: 1200,
          height: 630,
          alt: t("newBonusPage.metaData.title"),
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
            href={`https://www.primexcapital.com/${item.url}/bonus-new`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <BonusWrapper />
    </>
  );
};

export default page;
