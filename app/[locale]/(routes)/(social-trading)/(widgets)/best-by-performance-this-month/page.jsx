import BestMonthWrapper from "@/our_pages/copy-program/Widgets/best-month/BestMonthWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/best-by-performance-this-month`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/best-by-performance-this-month`;

  return {
    title: t("copyProgram.bestMonthWidget.metaData.title"),
    description: t("copyProgram.bestMonthWidget.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("copyProgram.bestMonthWidget.metaData.title"),
      description: t("copyProgram.bestMonthWidget.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/Best-By-Performance-This-Month.webp",
          width: 1200,
          height: 630,
          alt: t("copyProgram.bestMonthWidget.metaData.title"),
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
              href={`https://www.primexcapital.com/${item.url}/best-by-performance-this-month`}
            />
          ))}
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
            <link
              key={item.lng}
              rel="alternate"
              href={`https://www.primexcapital.com/${item.url}/best-by-performance-this-month`}
              hreflang={item.lng}
            />
          ))}
      </head>
      <BestMonthWrapper />
    </>
  );
};

export default page;
