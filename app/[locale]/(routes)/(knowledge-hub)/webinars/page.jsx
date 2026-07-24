import WebinarsWrapper from "@/our_pages/knowledge-hub/webinars/WebinarsWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/webinars`;

  return {
    title: t("knowledgeHubWebinars.metaData.title"),
    description: t("knowledgeHubWebinars.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/webinars",
        ar: "https://www.primexcapital.com/ar/webinars",
        ku: "https://www.primexcapital.com/ku/webinars",
        es: "https://www.primexcapital.com/es/webinars",
        ps: "https://www.primexcapital.com/ps/webinars",
        pt: "https://www.primexcapital.com/pt/webinars",
        fa: "https://www.primexcapital.com/fa/webinars",
      },
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
  return <WebinarsWrapper />;
};

export default page;
