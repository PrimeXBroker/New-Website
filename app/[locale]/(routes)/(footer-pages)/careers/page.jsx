import CareersWrapper from "@/our_pages/footer-pages/careers/careers-grid/CareersWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/careers`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/careers`;

  return {
    title: t("careersPage.metaData.title"),
    description: t("careersPage.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("careersPage.metaData.title"),
      description: t("careersPage.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/Career+Hero+New.webp",
          width: 1200,
          height: 630,
          alt: t("careersPage.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <CareersWrapper />;
};

export default page;
