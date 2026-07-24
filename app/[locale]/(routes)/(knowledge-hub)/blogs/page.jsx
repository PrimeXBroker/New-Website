import React from "react";
import { createTranslator } from "next-intl";
import Script from "next/script";
import AcademyWrapper from "@/our_pages/education/academy/AcademyWrapper";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/blogs`;

  return {
    title: t("knowledgeHubBlogs.metaData.title"),
    description: t("knowledgeHubBlogs.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/blogs",
        ar: "https://www.primexcapital.com/ar/blogs",
        ku: "https://www.primexcapital.com/ku/blogs",
        es: "https://www.primexcapital.com/es/blogs",
        ps: "https://www.primexcapital.com/ps/blogs",
        pt: "https://www.primexcapital.com/pt/blogs",
        fa: "https://www.primexcapital.com/fa/blogs",
      },
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

export default page;
