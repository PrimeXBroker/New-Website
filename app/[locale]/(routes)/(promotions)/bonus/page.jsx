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
          url:
            locale === "ar"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/50%25+Hero+Page+photo(AR).png"
              : locale === "es"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/50%25+Hero+Page+photo(ES).png"
              : locale === "fa"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/50%25+Hero+Page+photo(Farsi).png"
              : locale === "ku"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/50%25+Hero+Page+photo(KR).png"
              : locale === "ps"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/50%25+Hero+Page+photo(PS).png"
              : locale === "pt"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/50%25+Hero+Page+photo(PT).png"
              : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/50%25+Hero+Page+photo(EN).png",

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
    { lng: "pt", url: "pt" },
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
