import SpreadWrapper from "@/our_pages/spread/SpreadWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/primex-spreads`;

  return {
    title: t("spreadPage.metaData.title"),
    description: t("spreadPage.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/primex-spreads",
        ar: "https://www.primexcapital.com/ar/primex-spreads",
        ku: "https://www.primexcapital.com/ku/primex-spreads",
        es: "https://www.primexcapital.com/es/primex-spreads",
        ps: "https://www.primexcapital.com/ps/primex-spreads",
        pt: "https://www.primexcapital.com/pt/primex-spreads",
        fa: "https://www.primexcapital.com/fa/primex-spreads",
      },
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
  return <SpreadWrapper />;
};

export default page;
