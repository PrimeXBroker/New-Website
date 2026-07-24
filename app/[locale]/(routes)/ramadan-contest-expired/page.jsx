import TradeGoldWrapper from "@/our_pages/trade-gold/TradeGoldWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/ramadan-contest`;

  return {
    title: t("trdaeGold.metaData.title"),
    description: t("trdaeGold.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/ramadan-contest",
        ar: "https://www.primexcapital.com/ar/ramadan-contest",
        ku: "https://www.primexcapital.com/ku/ramadan-contest",
        es: "https://www.primexcapital.com/es/ramadan-contest",
        ps: "https://www.primexcapital.com/ps/ramadan-contest",
        pt: "https://www.primexcapital.com/pt/ramadan-contest",
        fa: "https://www.primexcapital.com/fa/ramadan-contest",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("trdaeGold.metaData.title"),
      description: t("trdaeGold.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/contest-hero-dark.webp",
          width: 1200,
          height: 630,
          alt: t("trdaeGold.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <TradeGoldWrapper />;
};

export default page;
