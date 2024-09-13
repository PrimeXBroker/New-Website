import PolicyStatementPage from "@/our_pages/footer-pages/policy-statement/PolicyStatementPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/policy-statement`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/policy-statement`;

  return {
    title: t("footer.policyStatement.metaData.title"),
    description: t("footer.policyStatement.metaData.description"),
    alternates: {
      canonical: url,
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
