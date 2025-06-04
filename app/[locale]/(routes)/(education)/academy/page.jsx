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
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/academy`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/academy`;
  return {
    title: t("academy.metaData.title"),
    description: t("academy.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("academy.metaData.title"),
      description: t("academy.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/Academy+Hero+New.webp",
          width: 1200,
          height: 630,
          alt: t("academy.metaData.title"),
        },
      ],
    },
  };
}

const Academy = async () => {
  const locale = await getLocale();
  const marketNews = locale === "ar" ? "news" : "all";
  const response = await getNews(1, marketNews, locale);
  let marketNewsBlogs = [],
    marketNewsPages = 1;
  if (response?.success) {
    marketNewsBlogs = response?.result.data;
    marketNewsPages = response?.result.pagination.totalPages;
  }
  const startingGateway =
    locale === "ar" ? "starting-gateway-ar" : "starting-gateway-en";
  const res = await getNews(1, startingGateway, locale);
  let startingGatewayBlogs = [],
    startingGatewayPages = 1;
  if (res?.success) {
    startingGatewayBlogs = res?.result.data;
    startingGatewayPages = res?.result.pagination.totalPages;
  }

  return (
    <>
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

export default Academy;
