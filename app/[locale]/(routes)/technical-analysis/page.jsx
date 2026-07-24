import React from "react";
import ExpertAnalysisWrapper from "@/our_pages/expert-analysis/ExpertAnalysisWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/technical-analysis`;

  return {
    title: t("knowledgeHubTechnical.metaData.title"),
    description: t("knowledgeHubTechnical.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/technical-analysis",
        ar: "https://www.primexcapital.com/ar/technical-analysis",
        ku: "https://www.primexcapital.com/ku/technical-analysis",
        es: "https://www.primexcapital.com/es/technical-analysis",
        ps: "https://www.primexcapital.com/ps/technical-analysis",
        pt: "https://www.primexcapital.com/pt/technical-analysis",
        fa: "https://www.primexcapital.com/fa/technical-analysis",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("knowledgeHubTechnical.metaData.title"),
      description: t("knowledgeHubTechnical.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/knowledge-hub/economic-calender/technical.webp",
          width: 1200,
          height: 630,
          alt: t("knowledgeHubTechnical.metaData.title"),
        },
      ],
    },
  };
}

const pages = () => {
  return <ExpertAnalysisWrapper />;
};

export default pages;
