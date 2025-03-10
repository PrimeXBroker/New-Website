import ClientAgreementPage from "@/our_pages/footer-pages/client-agreement/ClientAgreementPage";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/client-agreement`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/client-agreement`;

  return {
    title: t("footer.client-agreement.metaData.title"),
    description: t("footer.client-agreement.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("footer.client-agreement.metaData.title"),
      description: t("footer.client-agreement.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/client-agreement/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("footer.client-agreement.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <ClientAgreementPage />;
};

export default page;
