import PrimeXAppWrapper from "@/our_pages/primex-capital-app/PrimeXAppWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/app`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/app`;

  return {
    title: t("primeXTradingApp.metaData.title"),
    description: t("primeXTradingApp.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("primeXTradingApp.metaData.title"),
      description: t("primeXTradingApp.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/Hero+Image.webp",
          width: 1200,
          height: 630,
          alt: t("primeXTradingApp.metaData.title"),
        },
      ],
    },
  };
}

const page = ({ params: { locale } }) => {
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
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
            <link
              key={item.lng}
              rel="canonical"
              href={`https://www.primexcapital.com/${item.url}/app`}
            />
          ))}
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
            <link
              key={item.lng}
              rel="alternate"
              href={`https://www.primexcapital.com/${item.url}/app`}
              hreflang={item.lng}
            />
          ))}
      </head>
      <PrimeXAppWrapper />
    </>
  );
};

export default page;
