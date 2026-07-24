import RegionalPartnershipWrapper from "@/our_pages/partnerships/regional-partnership/RegionalPartnershipWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/regional-partner`;

  return {
    title: t("regionalPartnership.metaData.title"),
    description: t("regionalPartnership.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/regional-partner",
        ar: "https://www.primexcapital.com/ar/regional-partner",
        ku: "https://www.primexcapital.com/ku/regional-partner",
        es: "https://www.primexcapital.com/es/regional-partner",
        ps: "https://www.primexcapital.com/ps/regional-partner",
        pt: "https://www.primexcapital.com/pt/regional-partner",
        fa: "https://www.primexcapital.com/fa/regional-partner",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("regionalPartnership.metaData.title"),
      description: t("regionalPartnership.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Regional+page+Hero+image.webp",
          width: 1200,
          height: 630,
          alt: t("regionalPartnership.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <RegionalPartnershipWrapper />;
};

export default page;
