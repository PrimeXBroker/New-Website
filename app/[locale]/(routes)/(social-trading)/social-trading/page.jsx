import CopyProgramWrapper from "@/our_pages/copy-program/CopyProgramWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/copy-program`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/copy-program`;

  return {
    title: t("copyProgram.metaData.title"),
    description: t("copyProgram.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("copyProgram.metaData.title"),
      description: t("copyProgram.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/copy-program-hero.webp",
          width: 1200,
          height: 630,
          alt: t("copyProgram.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <CopyProgramWrapper />;
};

export default page;
