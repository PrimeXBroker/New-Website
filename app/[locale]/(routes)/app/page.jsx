import PrimeXAppWrapper from "@/our_pages/primex-capital-app/PrimeXAppWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/app`;

  return {
    title: t("primeXTradingApp.metaData.title"),
    description: t("primeXTradingApp.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/app",
        ar: "https://www.primexcapital.com/ar/app",
        ku: "https://www.primexcapital.com/ku/app",
        es: "https://www.primexcapital.com/es/app",
        ps: "https://www.primexcapital.com/ps/app",
        pt: "https://www.primexcapital.com/pt/app",
        fa: "https://www.primexcapital.com/fa/app",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("primeXTradingApp.metaData.title"),
      description: t("primeXTradingApp.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/Hero+Image.webp",
          width: 1200,
          height: 630,
          alt: t("primeXTradingApp.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <PrimeXAppWrapper />;
};

export default page;
