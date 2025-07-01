import AwardsPage from "@/components/footer-pages/awards/AwardsPage";
import { createTranslator } from "next-intl";
import React from "react";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/awards`;

  return {
    title: t("awards.metaData.title"),
    description: t("awards.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("awards.metaData.title"),
      description: t("awards.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/award-bg-leaf.webp",
          width: 1200,
          height: 630,
          alt: t("awards.metaData.title"),
        },
      ],
    },
  };
}

const Awards = () => {
  return (
    <>
      <AwardsPage />
    </>
  );
};

export default Awards;
