import React, { Suspense } from "react";
import { createTranslator } from "next-intl";
import BonusLandingPage from "@/our_pages/BonusLandingPage/BonusLandingPage";

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
