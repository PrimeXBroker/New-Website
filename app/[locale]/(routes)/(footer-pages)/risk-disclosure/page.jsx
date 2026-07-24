import RiskDisclosurePage from "@/our_pages/footer-pages/risk-disclosure/RiskDisclosurePage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/risk-disclosure`;

  return {
    title: t("footer.riskDisclosure.metaData.title"),
    description: t("footer.riskDisclosure.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/risk-disclosure",
        ar: "https://www.primexcapital.com/ar/risk-disclosure",
        ku: "https://www.primexcapital.com/ku/risk-disclosure",
        es: "https://www.primexcapital.com/es/risk-disclosure",
        ps: "https://www.primexcapital.com/ps/risk-disclosure",
        pt: "https://www.primexcapital.com/pt/risk-disclosure",
        fa: "https://www.primexcapital.com/fa/risk-disclosure",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.riskDisclosure.metaData.title"),
      description: t("footer.riskDisclosure.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/risk/risk-disclosure.webp",
          width: 1200,
          height: 630,
          alt: t("footer.riskDisclosure.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <RiskDisclosurePage />;
};

export default page;
