import HighProvidersWrapper from "@/our_pages/copy-program/Widgets/high-providers/HighProvidersWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/top-ranked-by-investors-number`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/top-ranked-by-investors-number`;

  return {
    title: t("copyProgram.hightProvidersWidget.metaData.title"),
    description: t("copyProgram.hightProvidersWidget.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("copyProgram.hightProvidersWidget.metaData.title"),
      description: t("copyProgram.hightProvidersWidget.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/Top-Ranked-by-Investors-Number.webp",
          width: 1200,
          height: 630,
          alt: t("copyProgram.hightProvidersWidget.metaData.title"),
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
              href={`https://www.primexcapital.com/${item.url}/top-ranked-by-investors-number`}
            />
          ))}
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
            <link
              key={item.lng}
              rel="alternate"
              href={`https://www.primexcapital.com/${item.url}/top-ranked-by-investors-number`}
              hreflang={item.lng}
            />
          ))}
      </head>
      <HighProvidersWrapper />
    </>
  );
};

export default page;
