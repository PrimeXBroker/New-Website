import React, { Suspense } from "react";
import { createTranslator } from "next-intl";
import BonusLandingPage from "@/our_pages/BonusLandingPage/BonusLandingPage";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale !== "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/bonus-landing-page`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/bonus-landing-page`;

  return {
    title: t("bonus_landing.metaData.title"),
    description: t("bonus_landing.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("bonus_landing.metaData.title"),
      description: t("bonus_landing.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/bonus-top.webp",
          width: 1200,
          height: 630,
          alt: t("bonus_landing.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return (
    <>
      <Suspense>
        <BonusLandingPage />
      </Suspense>
    </>
  );
};

export default page;
