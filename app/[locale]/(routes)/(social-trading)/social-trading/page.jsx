import CopyProgramWrapper from "@/our_pages/copy-program/CopyProgramWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/social-trading`;

  return {
    title: t("copyProgram.metaData.title"),
    description: t("copyProgram.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("copyProgram.metaData.title"),
      description: t("copyProgram.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/copy-program-hero.webp",
          width: 1200,
          height: 630,
          alt: t("copyProgram.metaData.title"),
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
            href={`https://www.primexcapital.com/${item.url}/social-trading`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <CopyProgramWrapper />
    </>
  );
};

export default page;
