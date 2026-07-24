import RNCWrapper from "@/our_pages/regulation-and-compliance/RNCWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/regulation-and-compliance`;

  return {
    title: t("regulationCompliance.metaData.title"),
    description: t("regulationCompliance.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/regulation-and-compliance",
        ar: "https://www.primexcapital.com/ar/regulation-and-compliance",
        ku: "https://www.primexcapital.com/ku/regulation-and-compliance",
        es: "https://www.primexcapital.com/es/regulation-and-compliance",
        ps: "https://www.primexcapital.com/ps/regulation-and-compliance",
        pt: "https://www.primexcapital.com/pt/regulation-and-compliance",
        fa: "https://www.primexcapital.com/fa/regulation-and-compliance",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("regulationCompliance.metaData.title"),
      description: t("regulationCompliance.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/regulation-compliance/Hero+Dark+Mode.png",
          width: 1200,
          height: 630,
          alt: t("regulationCompliance.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <RNCWrapper />;
};

export default page;
