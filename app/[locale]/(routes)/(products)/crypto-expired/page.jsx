import CryptoPage from "@/our_pages/products/crypto/CryptoPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/crypto`;

  return {
    title: t("cryptoProduct.metaData.title"),
    description: t("cryptoProduct.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/crypto",
        ar: "https://www.primexcapital.com/ar/crypto",
        ku: "https://www.primexcapital.com/ku/crypto",
        es: "https://www.primexcapital.com/es/crypto",
        ps: "https://www.primexcapital.com/ps/crypto",
        pt: "https://www.primexcapital.com/pt/crypto",
        fa: "https://www.primexcapital.com/fa/crypto",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("cryptoProduct.metaData.title"),
      description: t("cryptoProduct.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/crypto/Crypto.webp",
          width: 1200,
          height: 630,
          alt: t("cryptoProduct.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <CryptoPage />;
};

export default page;
