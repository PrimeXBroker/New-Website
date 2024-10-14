import React from "react";
import { createTranslator } from "next-intl";
import Script from "next/script";
import AcademyWrapper from "@/our_pages/education/academy/AcademyWrapper";

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
          url:
            locale === "ar"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/academy/20240805-171521.png"
              : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/banner_img.webp",
          width: 1200,
          height: 630,
          alt: t("academy.metaData.title"),
        },
      ],
    },
  };
}

const Academy = () => {
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
