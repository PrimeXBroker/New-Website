import DemoAccountWrapper from "@/our_pages/demo-account/DemoAccountWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/funded-account-competition`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/funded-account-competition`;
  return {
    title: t("demoAccount.metaData.title"),
    description: t("demoAccount.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("demoAccount.metaData.title"),
      description: t("demoAccount.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-account-banner.webp",
          width: 1200,
          height: 630,
          alt: t("demoAccount.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return (
    <>
      <DemoAccountWrapper />
    </>
  );
};

export default page;
