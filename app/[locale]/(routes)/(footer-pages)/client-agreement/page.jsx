import ClientAgreementPage from "@/our_pages/footer-pages/client-agreement/ClientAgreementPage";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/client-agreement`;

  return {
    title: t("footer.clientAgreement.metaData.title"),
    description: t("footer.clientAgreement.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/client-agreement",
        ar: "https://www.primexcapital.com/ar/client-agreement",
        ku: "https://www.primexcapital.com/ku/client-agreement",
        es: "https://www.primexcapital.com/es/client-agreement",
        ps: "https://www.primexcapital.com/ps/client-agreement",
        pt: "https://www.primexcapital.com/pt/client-agreement",
        fa: "https://www.primexcapital.com/fa/client-agreement",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.clientAgreement.metaData.title"),
      description: t("footer.clientAgreement.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/client-agreement/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("footer.clientAgreement.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <ClientAgreementPage />;
};

export default page;
