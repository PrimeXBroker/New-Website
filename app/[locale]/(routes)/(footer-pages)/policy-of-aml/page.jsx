import AMLPolicyPage from "@/our_pages/footer-pages/policy-of-aml/AMLPolicyPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/policy-of-aml`;

  return {
    title: t("footer.amlPolicy.metaData.title"),
    description: t("footer.amlPolicy.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.amlPolicy.metaData.title"),
      description: t("footer.amlPolicy.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/risk/aml-rule.webp",
          width: 1200,
          height: 630,
          alt: t("footer.amlPolicy.metaData.title"),
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
  ];
  return (
    <>
      <head>
        {hreflangLocales.map((item) => (
          <link
            key={item.lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${item.url}/policy-of-aml`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <AMLPolicyPage />
    </>
  );
};

export default page;
