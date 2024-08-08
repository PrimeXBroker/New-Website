import StocksPage from "@/our_pages/instruments/stocks/StocksPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
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
  };
}


const Stocks = () => {
  return (
    <>
      <StocksPage/>
    </>
  );
};

export default Stocks;
