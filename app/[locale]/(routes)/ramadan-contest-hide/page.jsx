import RamadanOfferWrappper from "@/our_pages/ramadan-offer/RamadanOfferWrappper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/ramadan-contest-hide`;

  return {
    title: t("ramadanOffer.metaData.title"),
    description: t("ramadanOffer.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/ramadan-contest-hide",
        ar: "https://www.primexcapital.com/ar/ramadan-contest-hide",
        ku: "https://www.primexcapital.com/ku/ramadan-contest-hide",
        es: "https://www.primexcapital.com/es/ramadan-contest-hide",
        ps: "https://www.primexcapital.com/ps/ramadan-contest-hide",
        pt: "https://www.primexcapital.com/pt/ramadan-contest-hide",
        fa: "https://www.primexcapital.com/fa/ramadan-contest-hide",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("ramadanOffer.metaData.title"),
      description: t("ramadanOffer.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/ramadan-contest-hero.webp",
          width: 1200,
          height: 630,
          alt: t("ramadanOffer.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <RamadanOfferWrappper />;
};

export default page;
