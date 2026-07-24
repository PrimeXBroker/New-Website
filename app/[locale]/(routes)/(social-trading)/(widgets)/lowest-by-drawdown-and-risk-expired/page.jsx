import LowestDDWrapper from "@/our_pages/copy-program/Widgets/lowest-DD/LowestDDWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/lowest-by-drawdown-and-risk`;

  return {
    title: t("copyProgram.lowestDDWidget.metaData.title"),
    description: t("copyProgram.lowestDDWidget.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/lowest-by-drawdown-and-risk",
        ar: "https://www.primexcapital.com/ar/lowest-by-drawdown-and-risk",
        ku: "https://www.primexcapital.com/ku/lowest-by-drawdown-and-risk",
        es: "https://www.primexcapital.com/es/lowest-by-drawdown-and-risk",
        ps: "https://www.primexcapital.com/ps/lowest-by-drawdown-and-risk",
        pt: "https://www.primexcapital.com/pt/lowest-by-drawdown-and-risk",
        fa: "https://www.primexcapital.com/fa/lowest-by-drawdown-and-risk",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("copyProgram.lowestDDWidget.metaData.title"),
      description: t("copyProgram.lowestDDWidget.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/Lowest-By-Drawdown-and-Risk.webp",
          width: 1200,
          height: 630,
          alt: t("copyProgram.lowestDDWidget.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <LowestDDWrapper />;
};

export default page;
