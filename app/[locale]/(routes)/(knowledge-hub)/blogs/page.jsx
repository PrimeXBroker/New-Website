import React from "react";
import { createTranslator } from "next-intl";
import Script from "next/script";
import AcademyWrapper from "@/our_pages/education/academy/AcademyWrapper";
import { getNews } from "@/actions/news";
import { getLocale } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/blogs`;

  return {
    title: t("knowledgeHubBlogs.metaData.title"),
    description: t("knowledgeHubBlogs.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("knowledgeHubBlogs.metaData.title"),
      description: t("knowledgeHubBlogs.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/knowledge-hub/economic-calender/blogs-image.webp",
          width: 1200,
          height: 630,
          alt: t("knowledgeHubBlogs.metaData.title"),
        },
      ],
    },
  };
}

const page = async () => {
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
            href={`https://www.primexcapital.com/${item.url}/blogs`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.primexcapital.com/en",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Education",
                item: "https://www.primexcapital.com/en/education",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Academy",
                item: "https://www.primexcapital.com/en/academy",
              },
            ],
          }),
        }}
      />
      <AcademyWrapper />
    </>
  );
};

export default page;
