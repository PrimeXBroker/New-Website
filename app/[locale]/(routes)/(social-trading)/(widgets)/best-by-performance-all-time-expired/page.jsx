import BestPerformanceWrapper from "@/our_pages/copy-program/Widgets/best-performance/BestPerformanceWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/best-by-performance-all-time`;

  return {
    title: t("copyProgram.bestPerformanceWidget.metaData.title"),
    description: t("copyProgram.bestPerformanceWidget.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/best-by-performance-all-time",
        ar: "https://www.primexcapital.com/ar/best-by-performance-all-time",
        ku: "https://www.primexcapital.com/ku/best-by-performance-all-time",
        es: "https://www.primexcapital.com/es/best-by-performance-all-time",
        ps: "https://www.primexcapital.com/ps/best-by-performance-all-time",
        pt: "https://www.primexcapital.com/pt/best-by-performance-all-time",
        fa: "https://www.primexcapital.com/fa/best-by-performance-all-time",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("copyProgram.bestPerformanceWidget.metaData.title"),
      description: t("copyProgram.bestPerformanceWidget.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/Best-By-Performance-All-Time.webp",
          width: 1200,
          height: 630,
          alt: t("copyProgram.bestPerformanceWidget.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  const hreflangLocales = [
    { lng: "en", url: "en" },
    { lng: "ar", url: "ar" },
    { lng: "ku", url: "ku" },
    { lng: "es", url: "es" },
    { lng: "ps", url: "ps" },
    { lng: "pt", url: "pt" },
    { lng: "fa", url: "fa" },
  ];
  return <BestPerformanceWrapper />;
};

export default page;
