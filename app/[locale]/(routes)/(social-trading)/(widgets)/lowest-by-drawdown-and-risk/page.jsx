import LowestDDWrapper from "@/our_pages/copy-program/Widgets/lowest-DD/LowestDDWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/lowest-by-drawdown-and-risk`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/lowest-by-drawdown-and-risk`;

  return {
    title: t("copyProgram.lowestDDWidget.metaData.title"),
    description: t("copyProgram.lowestDDWidget.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("copyProgram.lowestDDWidget.metaData.title"),
      description: t("copyProgram.lowestDDWidget.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/Lowest-By-Drawdown-and-Risk.webp",
          width: 1200,
          height: 630,
          alt: t("copyProgram.lowestDDWidget.metaData.title"),
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
              href={`https://www.primexcapital.com/${item.url}/lowest-by-drawdown-and-risk`}
            />
          ))}
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
            <link
              key={item.lng}
              rel="alternate"
              href={`https://www.primexcapital.com/${item.url}/lowest-by-drawdown-and-risk`}
              hreflang={item.lng}
            />
          ))}
      </head>
      <LowestDDWrapper />
    </>
  );
};

export default page;
