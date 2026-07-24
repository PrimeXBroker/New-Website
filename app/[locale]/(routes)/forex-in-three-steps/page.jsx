import TutorialsWrapper from "@/our_pages/tutorials/TutorialsWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/forex-in-three-steps`;

  return {
    title: t("tutorials.metaData.title"),
    description: t("tutorials.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/forex-in-three-steps",
        ar: "https://www.primexcapital.com/ar/forex-in-three-steps",
        ku: "https://www.primexcapital.com/ku/forex-in-three-steps",
        es: "https://www.primexcapital.com/es/forex-in-three-steps",
        ps: "https://www.primexcapital.com/ps/forex-in-three-steps",
        pt: "https://www.primexcapital.com/pt/forex-in-three-steps",
        fa: "https://www.primexcapital.com/fa/forex-in-three-steps",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("tutorials.metaData.title"),
      description: t("tutorials.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/tutorials/tutorials-hero.png",
          width: 1200,
          height: 630,
          alt: t("tutorials.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <TutorialsWrapper />;
};

export default page;
