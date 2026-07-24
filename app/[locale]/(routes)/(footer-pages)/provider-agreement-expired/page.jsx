import ProviderAgreementPage from "@/our_pages/footer-pages/provider-agreement/ProviderAgreementPage";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/provider-agreement`;

  return {
    title: t("footer.providerAgreement.metaData.title"),
    description: t("footer.providerAgreement.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/provider-agreement",
        ar: "https://www.primexcapital.com/ar/provider-agreement",
        ku: "https://www.primexcapital.com/ku/provider-agreement",
        es: "https://www.primexcapital.com/es/provider-agreement",
        ps: "https://www.primexcapital.com/ps/provider-agreement",
        pt: "https://www.primexcapital.com/pt/provider-agreement",
        fa: "https://www.primexcapital.com/fa/provider-agreement",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.providerAgreement.metaData.title"),
      description: t("footer.providerAgreement.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/provider-meta.webp",
          width: 1200,
          height: 630,
          alt: t("footer.providerAgreement.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <ProviderAgreementPage />;
};

export default page;
