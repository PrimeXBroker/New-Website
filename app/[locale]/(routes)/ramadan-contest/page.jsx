import RamadanOfferWrappper from "@/our_pages/ramadan-offer/RamadanOfferWrappper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/ramadan-contest`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/ramadan-contest`;
  return {
    title: t("ramadanOffer.metaData.title"),
    description: t("ramadanOffer.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("ramadanOffer.metaData.title"),
      description: t("ramadanOffer.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/ramadan-hero.webp",
          width: 1200,
          height: 630,
          alt: t("ramadanOffer.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <RamadanOfferWrappper />;
};

export default page;
