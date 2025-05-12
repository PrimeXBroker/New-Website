import RegistrationWrapper from "@/our_pages/registration/RegistrationWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/primex-spreads`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/primex-spreads`;

  return {
    title: t("spreadPage.metaData.title"),
    description: t("spreadPage.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("spreadPage.metaData.title"),
      description: t("spreadPage.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/spread/spread-hero.png",
          width: 1200,
          height: 630,
          alt: t("spreadPage.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <RegistrationWrapper />;
};

export default page;
