import AMLPolicyPage from "@/our_pages/footer-pages/policy-of-aml/AMLPolicyPage";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/policy-of-aml`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/policy-of-aml`;

  return {
    title: t("footer.amlPolicy.metaData.title"),
    description: t("footer.amlPolicy.metaData.description"),
    alternates: {
      canonical: url,
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
