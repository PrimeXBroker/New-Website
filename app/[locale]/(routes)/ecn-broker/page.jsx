import ECNBrokerWrapper from "@/our_pages/global-ecn-broker/ECNBrokerWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/ecn-broker`;

  return {
    title: t("ecnBroker.metaData.title"),
    description: t("ecnBroker.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/ecn-broker",
        ar: "https://www.primexcapital.com/ar/ecn-broker",
        ku: "https://www.primexcapital.com/ku/ecn-broker",
        es: "https://www.primexcapital.com/es/ecn-broker",
        ps: "https://www.primexcapital.com/ps/ecn-broker",
        pt: "https://www.primexcapital.com/pt/ecn-broker",
        fa: "https://www.primexcapital.com/fa/ecn-broker",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("ecnBroker.metaData.title"),
      description: t("ecnBroker.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/ecn-hero.webp",
          width: 1200,
          height: 630,
          alt: t("ecnBroker.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <ECNBrokerWrapper />;
};

export default page;
