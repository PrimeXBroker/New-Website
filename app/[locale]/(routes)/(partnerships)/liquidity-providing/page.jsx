import React from "react";
import { createTranslator } from "next-intl";
import LiquidityWrapper from "@/our_pages/partnerships/liquidity/LiquidityWrapper";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/liquidity-providing`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/liquidity-providing`;

  return {
    title: t("liquidity.metaData.title"),
    description: t("liquidity.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("liquidity.metaData.title"),
      description: t("liquidity.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/liquidity/hero-animation.png",
          width: 1200,
          height: 630,
          alt: t("liquidity.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <LiquidityWrapper />;
};

export default page;
