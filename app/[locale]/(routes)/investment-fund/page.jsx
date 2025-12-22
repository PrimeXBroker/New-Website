import InvestmentFundWrapper from "@/our_pages/investment-fund/InvestmentFundWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/investment-fund`;

  return {
    title: t("investmentFunds.metaData.title"),
    description: t("investmentFunds.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("investmentFunds.metaData.title"),
      description: t("investmentFunds.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/investment-funds/Hero+Image.png",
          width: 1200,
          height: 630,
          alt: t("investmentFunds.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  const hreflangLocales = [
    { lng: "en", url: "en" },
    { lng: "ar", url: "ar" },
    { lng: "ku", url: "ku" },
    { lng: "es", url: "es" },
    { lng: "ps", url: "ps" },
    { lng: "pt", url: "pt" },
    { lng: "fa", url: "fa" },
  ];

  return (
    <>
      <head>
        {hreflangLocales.map((item) => (
          <link
            key={item.lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${item.url}/investment-fund`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <InvestmentFundWrapper />
    </>
  );
};

export default page;
