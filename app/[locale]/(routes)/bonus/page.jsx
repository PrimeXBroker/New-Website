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
