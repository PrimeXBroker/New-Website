import BestMonthWrapper from "@/our_pages/copy-program/Widgets/best-month/BestMonthWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/best-by-performance-this-month`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/best-by-performance-this-month`;

  return {
    title: t("copyProgram.bestMonthWidget.metaData.title"),
    description: t("copyProgram.bestMonthWidget.metaData.description"),
    alternates: {
      canonical: url,
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
  return <BestMonthWrapper />;
};

export default page;
