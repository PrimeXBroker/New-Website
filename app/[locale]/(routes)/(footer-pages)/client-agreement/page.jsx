import ClientAgreementPage from "@/our_pages/footer-pages/client-agreement/ClientAgreementPage";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/client-agreement`;

  return {
    title: t("footer.clientAgreement.metaData.title"),
    description: t("footer.clientAgreement.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.clientAgreement.metaData.title"),
      description: t("footer.clientAgreement.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/client-agreement/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("footer.clientAgreement.metaData.title"),
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
            href={`https://www.primexcapital.com/${item.url}/client-agreement`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <ClientAgreementPage />
    </>
  );
};

export default page;
