import LocalDepositorWrapper from "@/our_pages/local-depositor/LocalDepositorWrapper";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/local-depositor`;

  return {
    title: t("localDepositor.metaData.title"),
    description: t("localDepositor.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale,
      url,
      title: t("localDepositor.metaData.title"),
      description: t("localDepositor.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/hero.webp",
          width: 1200,
          height: 630,
          alt: t("localDepositor.metaData.title"),
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
            href={`https://www.primexcapital.com/${item.url}/local-depositor`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <LocalDepositorWrapper />
    </>
  );
};

export default page;
