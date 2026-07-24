import CashbackWrapper from "@/our_pages/cashback/CashbackWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/cashback`;

  return {
    title: t("cashback.metaData.title"),
    description: t("cashback.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/cashback",
        ar: "https://www.primexcapital.com/ar/cashback",
        ku: "https://www.primexcapital.com/ku/cashback",
        es: "https://www.primexcapital.com/es/cashback",
        ps: "https://www.primexcapital.com/ps/cashback",
        pt: "https://www.primexcapital.com/pt/cashback",
        fa: "https://www.primexcapital.com/fa/cashback",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("cashback.metaData.title"),
      description: t("cashback.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/light/Hero+Image+Dark+Mode.png",
          width: 1200,
          height: 630,
          alt: t("cashback.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <CashbackWrapper />;
};

export default page;
