import EconomicCalenderWrapper from "@/our_pages/knowledge-hub/economic-calender/EconomicCalenderWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/economic-calender`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/economic-calender`;
  return {
    title: t("economicCalender.metaData.title"),
    description: t("economicCalender.metaData.description"),
    alternates: {
      canonical: url,
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

const page = ({ params: { locale } }) => {
  const hreflangLocales = [
    { lng: "en", url: "en" },
    { lng: "ar", url: "ar" },
    { lng: "ku", url: "ku" },
    { lng: "es", url: "es" },
    { lng: "ps", url: "ps" },
  ];

  return (
    <>
      <head>
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
            <link
              key={item.lng}
              rel="canonical"
              href={`https://www.primexcapital.com/${item.url}/economic-calender`}
            />
          ))}
      </head>
      <EconomicCalenderWrapper />
    </>
  );
};

export default page;
