import SuccessStep from "@/our_pages/registration/SuccessStep";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/registration/success`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/registration/success`;

  return {
    title: t("registration.metaData.title"),
    description: t("registration.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("registration.metaData.title"),
      description: t("registration.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-registeration/mockup-en.webp",
          width: 1200,
          height: 630,
          alt: t("registration.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <SuccessStep />;
};

export default page;
