import RegionalPartnershipWrapper from "@/our_pages/regional-partnership/RegionalPartnershipWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/regional-partner`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/regional-partner`;

  return {
    title: t("regionalPartnership.metaData.title"),
    description: t("regionalPartnership.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("regionalPartnership.metaData.title"),
      description: t("regionalPartnership.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Regional+page+Hero+image.webp",
          width: 1200,
          height: 630,
          alt: t("regionalPartnership.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <RegionalPartnershipWrapper />;
};

export default page;
