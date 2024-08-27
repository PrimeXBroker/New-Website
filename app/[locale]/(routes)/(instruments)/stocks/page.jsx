import StocksPage from "@/our_pages/instruments/stocks/StocksPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/stocks`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/stocks`;

  return {
    title: t("stocks.metaData.title"),
    description: t("stocks.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("stocks.metaData.title"),
      description: t("stocks.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/stocks/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("stocks.metaData.title"),
        },
      ],
    },
  };
}

const Stocks = () => {
  return (
    <>
      <StocksPage />
    </>
  );
};

export default Stocks;
