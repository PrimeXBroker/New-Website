import BonusWrapper from "@/our_pages/promotions/primex-bonus/BonusWrapper";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/bonus`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/bonus`;
  return {
    title: t("bonusPage.metaData.title"),
    description: t("bonusPage.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("bonusPage.metaData.title"),
      description: t("bonusPage.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/primex-50-bonus-hero.png",
          width: 1200,
          height: 630,
          alt: t("bonusPage.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <BonusWrapper />;
};

export default page;
