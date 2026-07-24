import WhyChooseUsWrapper from "@/our_pages/footer-pages/why-choose-us/WhyChooseUsWrapper";
import React from "react";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/why-choose-us`;

  return {
    title: t("whyChooseUs.metaData.title"),
    description: t("whyChooseUs.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/why-choose-us",
        ar: "https://www.primexcapital.com/ar/why-choose-us",
        ku: "https://www.primexcapital.com/ku/why-choose-us",
        es: "https://www.primexcapital.com/es/why-choose-us",
        ps: "https://www.primexcapital.com/ps/why-choose-us",
        pt: "https://www.primexcapital.com/pt/why-choose-us",
        fa: "https://www.primexcapital.com/fa/why-choose-us",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("whyChooseUs.metaData.title"),
      description: t("whyChooseUs.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Hero+Image+WHy+Choose+PrimeX.webp",
          width: 1200,
          height: 630,
          alt: t("whyChooseUs.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <WhyChooseUsWrapper />;
};

export default page;
