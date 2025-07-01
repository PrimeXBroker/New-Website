import ProviderAgreementPage from "@/our_pages/footer-pages/provider-agreement/ProviderAgreementPage";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/provider-agreement`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/provider-agreement`;

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
              href={`https://www.primexcapital.com/${item.url}/provider-agreement`}
            />
          ))}
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
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
