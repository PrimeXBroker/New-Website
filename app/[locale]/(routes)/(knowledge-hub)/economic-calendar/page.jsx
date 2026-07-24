import EconomicCalenderWrapper from "@/our_pages/knowledge-hub/economic-calender/EconomicCalenderWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/economic-calendar`;

  return {
    title: t("economicCalender.metaData.title"),
    description: t("economicCalender.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/economic-calendar",
        ar: "https://www.primexcapital.com/ar/economic-calendar",
        ku: "https://www.primexcapital.com/ku/economic-calendar",
        es: "https://www.primexcapital.com/es/economic-calendar",
        ps: "https://www.primexcapital.com/ps/economic-calendar",
        pt: "https://www.primexcapital.com/pt/economic-calendar",
        fa: "https://www.primexcapital.com/fa/economic-calendar",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("economicCalender.metaData.title"),
      description: t("economicCalender.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/knowledge-hub/economic-calender/economic-calendar-hero.webp",
          width: 1200,
          height: 630,
          alt: t("economicCalender.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <EconomicCalenderWrapper />;
};

export default page;
