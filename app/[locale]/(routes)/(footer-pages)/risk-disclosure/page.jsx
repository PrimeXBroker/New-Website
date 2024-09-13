import RiskDisclosurePage from "@/our_pages/footer-pages/risk-disclosure/RiskDisclosurePage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/risk-disclosure`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/risk-disclosure`;

  return {
    title: t("footer.riskDisclosure.metaData.title"),
    description: t("footer.riskDisclosure.metaData.description"),
    alternates: {
      canonical: url,
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
