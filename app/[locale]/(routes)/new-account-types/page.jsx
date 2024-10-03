import AccountTypesWrapper from "@/our_pages/new-account-types/AccountTypesWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/new-account-types`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/new-account-types`;

  return {
    title: t("newAccountTypes.metaData.title"),
    description: t("newAccountTypes.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("newAccountTypes.metaData.title"),
      description: t("newAccountTypes.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-account-types/Hero+Section+Image.webp",
          width: 1200,
          height: 630,
          alt: t("newAccountTypes.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <AccountTypesWrapper />;
};

export default page;
