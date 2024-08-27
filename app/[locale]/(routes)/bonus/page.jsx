import React, { Suspense } from "react";
import { createTranslator } from "next-intl";
import BonusPage from "@/our_pages/bonus/BonusPage";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/bonus`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/bonus`;

  return {
    title: t("bonus.metaData.title"),
    description: t("bonus.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("bonus.metaData.title"),
      description: t("bonus.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/bonus-top.webp",
          width: 1200,
          height: 630,
          alt: t("bonus.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return (
    <>
      <Suspense>
        <BonusPage />
      </Suspense>
    </>
  );
};

export default page;
