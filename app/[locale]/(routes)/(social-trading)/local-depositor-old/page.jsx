import LocalDepositorWrapper from "@/our_pages/local-depositor-old/LocalDepositorWrapper";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/local-depositor-old`;

  return {
    title: t("localDepositor.metaData.title"),
    description: t("localDepositor.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/local-depositor-old",
        ar: "https://www.primexcapital.com/ar/local-depositor-old",
        ku: "https://www.primexcapital.com/ku/local-depositor-old",
        es: "https://www.primexcapital.com/es/local-depositor-old",
        ps: "https://www.primexcapital.com/ps/local-depositor-old",
        pt: "https://www.primexcapital.com/pt/local-depositor-old",
        fa: "https://www.primexcapital.com/fa/local-depositor-old",
      },
    },
    openGraph: {
      type: "website",
      locale,
      url,
      title: t("localDepositor.metaData.title"),
      description: t("localDepositor.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/hero.webp",
          width: 1200,
          height: 630,
          alt: t("localDepositor.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <LocalDepositorWrapper />;
};

export default page;
