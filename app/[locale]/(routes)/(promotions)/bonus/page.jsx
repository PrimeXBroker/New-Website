import BonusWrapper from "@/our_pages/promotions/primex-bonus/BonusWrapper";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/bonus`;

  return {
    title: t("bonusPage.metaData.title"),
    description: t("bonusPage.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("bonusPage.metaData.title"),
      description: t("bonusPage.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/icons/bonus-50-banner.webp",
          width: 1200,
          height: 630,
          alt: t("bonusPage.metaData.title"),
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
            href={`https://www.primexcapital.com/${item.url}/bonus`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <BonusWrapper />
    </>
  );
};

export default page;
