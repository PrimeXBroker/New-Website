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
  return (
    <>
      <WebinarsWrapper />
    </>
  );
};

export default page;
