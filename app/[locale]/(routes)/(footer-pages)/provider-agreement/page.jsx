import ProviderAgreementPage from "@/our_pages/footer-pages/provider-agreement/ProviderAgreementPage";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/provider-agreement`;

  return {
    title: t("footer.providerAgreement.metaData.title"),
    description: t("footer.providerAgreement.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.providerAgreement.metaData.title"),
      description: t("footer.providerAgreement.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/provider-meta.webp",
          width: 1200,
          height: 630,
          alt: t("footer.providerAgreement.metaData.title"),
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
            href={`https://www.primexcapital.com/${item.url}/provider-agreement`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <ProviderAgreementPage />
    </>
  );
};

export default page;
