import RegionalPartnershipWrapper from "@/our_pages/regional-partnership/RegionalPartnershipWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/regional-partnership`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/regional-partnership`;

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
          url: "",
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
