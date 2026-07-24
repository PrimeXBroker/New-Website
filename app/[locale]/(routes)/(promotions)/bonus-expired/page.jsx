import BonusWrapper from "@/our_pages/promotions/primex-bonus/BonusWrapper";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/bonus`;

  return {
    title: t("bonusPage.metaData.title"),
    description: t("bonusPage.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/bonus",
        ar: "https://www.primexcapital.com/ar/bonus",
        ku: "https://www.primexcapital.com/ku/bonus",
        es: "https://www.primexcapital.com/es/bonus",
        ps: "https://www.primexcapital.com/ps/bonus",
        pt: "https://www.primexcapital.com/pt/bonus",
        fa: "https://www.primexcapital.com/fa/bonus",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("bonusPage.metaData.title"),
      description: t("bonusPage.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-bonus/50%25+Hero+Page+photo(EN).png",
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
