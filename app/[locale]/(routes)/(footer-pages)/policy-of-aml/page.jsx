import AMLPolicyPage from "@/our_pages/footer-pages/policy-of-aml/AMLPolicyPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/policy-of-aml`;

  return {
    title: t("footer.amlPolicy.metaData.title"),
    description: t("footer.amlPolicy.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/policy-of-aml",
        ar: "https://www.primexcapital.com/ar/policy-of-aml",
        ku: "https://www.primexcapital.com/ku/policy-of-aml",
        es: "https://www.primexcapital.com/es/policy-of-aml",
        ps: "https://www.primexcapital.com/ps/policy-of-aml",
        pt: "https://www.primexcapital.com/pt/policy-of-aml",
        fa: "https://www.primexcapital.com/fa/policy-of-aml",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.amlPolicy.metaData.title"),
      description: t("footer.amlPolicy.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/risk/aml-rule.webp",
          width: 1200,
          height: 630,
          alt: t("footer.amlPolicy.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <AMLPolicyPage />;
};

export default page;
