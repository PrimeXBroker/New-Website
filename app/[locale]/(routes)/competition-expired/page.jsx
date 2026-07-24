import CompetitionWrapper from "@/our_pages/competitions/CompetitionWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/competition`;

  return {
    title: t("competitions.metaData.title"),
    description: t("competitions.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/competition",
        ar: "https://www.primexcapital.com/ar/competition",
        ku: "https://www.primexcapital.com/ku/competition",
        es: "https://www.primexcapital.com/es/competition",
        ps: "https://www.primexcapital.com/ps/competition",
        pt: "https://www.primexcapital.com/pt/competition",
        fa: "https://www.primexcapital.com/fa/competition",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("competitions.metaData.title"),
      description: t("competitions.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/competitions/Hero+Image.png",
          width: 1200,
          height: 630,
          alt: t("competitions.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <CompetitionWrapper />;
};

export default page;
