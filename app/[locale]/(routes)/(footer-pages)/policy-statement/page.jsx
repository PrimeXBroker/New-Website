import PolicyStatementPage from "@/our_pages/footer-pages/policy-statement/PolicyStatementPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/policy-statement`;

  return {
    title: t("footer.policyStatement.metaData.title"),
    description: t("footer.policyStatement.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/policy-statement",
        ar: "https://www.primexcapital.com/ar/policy-statement",
        ku: "https://www.primexcapital.com/ku/policy-statement",
        es: "https://www.primexcapital.com/es/policy-statement",
        ps: "https://www.primexcapital.com/ps/policy-statement",
        pt: "https://www.primexcapital.com/pt/policy-statement",
        fa: "https://www.primexcapital.com/fa/policy-statement",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.policyStatement.metaData.title"),
      description: t("footer.policyStatement.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/risk/policy-statement.webp",
          width: 1200,
          height: 630,
          alt: t("footer.policyStatement.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <PolicyStatementPage />;
};

export default page;
