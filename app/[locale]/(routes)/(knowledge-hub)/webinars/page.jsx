import WebinarsWrapper from "@/our_pages/knowledge-hub/webinars/WebinarsWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/webinars`;

  return {
    title: t("knowledgeHubWebinars.metaData.title"),
    description: t("knowledgeHubWebinars.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("knowledgeHubWebinars.metaData.title"),
      description: t("knowledgeHubWebinars.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/Academy+Hero+New.webp",
          width: 1200,
          height: 630,
          alt: t("knowledgeHubWebinars.metaData.title"),
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
    { lng: "fa", url: "fa" },
  ];
  return (
    <>
      <head>
        {hreflangLocales.map((item) => (
          <link
            key={item.lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${item.url}/webinars`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <WebinarsWrapper />
    </>
  );
};

export default page;
