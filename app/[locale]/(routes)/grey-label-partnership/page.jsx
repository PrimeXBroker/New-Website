import GreyLabelWrapper from "@/our_pages/grey-label-partnership/GreyLabelWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/grey-label-partnership`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/grey-label-partnership`;

  return {
    title: t("greyLabel.metaData.title"),
    description: t("greyLabel.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("greyLabel.metaData.title"),
      description: t("greyLabel.metaData.description"),
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: t("greyLabel.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <GreyLabelWrapper />;
};

export default page;
