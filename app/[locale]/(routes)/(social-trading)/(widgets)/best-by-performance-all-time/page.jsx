import BestPerformanceWrapper from "@/our_pages/copy-program/Widgets/best-performance/BestPerformanceWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/best-by-performance-all-time`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/best-by-performance-all-time`;

  return {
    title: t("copyProgram.bestPerformanceWidget.metaData.title"),
    description: t("copyProgram.bestPerformanceWidget.metaData.description"),
    alternates: {
      canonical: url,
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
  return <BestPerformanceWrapper />;
};

export default page;
