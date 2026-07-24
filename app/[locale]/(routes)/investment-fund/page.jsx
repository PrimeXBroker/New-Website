import InvestmentFundWrapper from "@/our_pages/investment-fund/InvestmentFundWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/investment-fund`;

  return {
    title: t("investmentFunds.metaData.title"),
    description: t("investmentFunds.metaData.description"),
    alternates: {
      canonical: url,
      languages: {
        en: "https://www.primexcapital.com/en/investment-fund",
        ar: "https://www.primexcapital.com/ar/investment-fund",
        ku: "https://www.primexcapital.com/ku/investment-fund",
        es: "https://www.primexcapital.com/es/investment-fund",
        ps: "https://www.primexcapital.com/ps/investment-fund",
        pt: "https://www.primexcapital.com/pt/investment-fund",
        fa: "https://www.primexcapital.com/fa/investment-fund",
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("investmentFunds.metaData.title"),
      description: t("investmentFunds.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/hero-investment.png",
          width: 1200,
          height: 630,
          alt: t("investmentFunds.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return <InvestmentFundWrapper />;
};

export default page;
