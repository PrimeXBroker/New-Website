import WhyChooseUsWrapper from "@/our_pages/footer-pages/why-choose-us/WhyChooseUsWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/why-choose-us`;

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

const page = () => {
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
        {hreflangLocales.map((item) => (
          <link
            key={item.lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${item.url}/why-choose-us`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <WhyChooseUsWrapper />
    </>
  );
};

export default page;
