import HighProvidersWrapper from "@/our_pages/copy-program/Widgets/high-providers/HighProvidersWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/top-ranked-by-investors-number`;

  return {
    title: t("copyProgram.hightProvidersWidget.metaData.title"),
    description: t("copyProgram.hightProvidersWidget.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/top-ranked-by-investors-number",
        ar: "https://www.primexcapital.com/ar/top-ranked-by-investors-number",
        ku: "https://www.primexcapital.com/ku/top-ranked-by-investors-number",
        es: "https://www.primexcapital.com/es/top-ranked-by-investors-number",
        ps: "https://www.primexcapital.com/ps/top-ranked-by-investors-number",
        pt: "https://www.primexcapital.com/pt/top-ranked-by-investors-number",
        fa: "https://www.primexcapital.com/fa/top-ranked-by-investors-number",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("copyProgram.hightProvidersWidget.metaData.title"),
      description: t("copyProgram.hightProvidersWidget.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/Top-Ranked-by-Investors-Number.webp",
          width: 1200,
          height: 630,
          alt: t("copyProgram.hightProvidersWidget.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <HighProvidersWrapper />;
};

export default page;
