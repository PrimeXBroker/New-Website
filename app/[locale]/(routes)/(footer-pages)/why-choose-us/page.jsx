import WhyChooseUsWrapper from "@/our_pages/footer-pages/why-choose-us/WhyChooseUsWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/why-choose-us`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/why-choose-us`;

  return {
    title: t("whyChooseUs.metaData.title"),
    description: t("whyChooseUs.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("whyChooseUs.metaData.title"),
      description: t("whyChooseUs.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Hero+Image+WHy+Choose+PrimeX.webp",
          width: 1200,
          height: 630,
          alt: t("whyChooseUs.metaData.title"),
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
              href={`https://www.primexcapital.com/${item.url}/why-choose-us`}
            />
          ))}
      </head>
      <WhyChooseUsWrapper />
    </>
  );
};

export default page;
