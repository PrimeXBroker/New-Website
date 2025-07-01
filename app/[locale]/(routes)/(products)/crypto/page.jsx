import CryptoPage from "@/our_pages/products/crypto/CryptoPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/crypto`;

  return {
    title: t("cryptoProduct.metaData.title"),
    description: t("cryptoProduct.metaData.description"),
    alternates: {
      canonical: url,
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
  return (
    <>
      <CryptoPage />
    </>
  );
};

export default page;
