import CopyProgramWrapper from "@/our_pages/copy-program/CopyProgramWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/social-trading`;

  return {
    title: t("copyProgram.metaData.title"),
    description: t("copyProgram.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/social-trading",
        ar: "https://www.primexcapital.com/ar/social-trading",
        ku: "https://www.primexcapital.com/ku/social-trading",
        es: "https://www.primexcapital.com/es/social-trading",
        ps: "https://www.primexcapital.com/ps/social-trading",
        pt: "https://www.primexcapital.com/pt/social-trading",
        fa: "https://www.primexcapital.com/fa/social-trading",
      },
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
