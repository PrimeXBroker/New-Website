import BestMonthWrapper from "@/our_pages/copy-program/Widgets/best-month/BestMonthWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/best-by-performance-this-month`;

  return {
    title: t("copyProgram.bestMonthWidget.metaData.title"),
    description: t("copyProgram.bestMonthWidget.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/best-by-performance-this-month",
        ar: "https://www.primexcapital.com/ar/best-by-performance-this-month",
        ku: "https://www.primexcapital.com/ku/best-by-performance-this-month",
        es: "https://www.primexcapital.com/es/best-by-performance-this-month",
        ps: "https://www.primexcapital.com/ps/best-by-performance-this-month",
        pt: "https://www.primexcapital.com/pt/best-by-performance-this-month",
        fa: "https://www.primexcapital.com/fa/best-by-performance-this-month",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("copyProgram.bestMonthWidget.metaData.title"),
      description: t("copyProgram.bestMonthWidget.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/Best-By-Performance-This-Month.webp",
          width: 1200,
          height: 630,
          alt: t("copyProgram.bestMonthWidget.metaData.title"),
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

  return <BestMonthWrapper />;
};

export default page;
