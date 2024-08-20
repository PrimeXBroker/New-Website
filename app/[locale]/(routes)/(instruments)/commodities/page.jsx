


import CommoditiesPage from "@/our_pages/instruments/commodities/CommoditiesPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/commodities`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/commodities`;
  return {
    title: t("commodities.metaData.title"),
    description: t("commodities.metaData.description"),
    alternates: {
      canonical: url,
    },
  };
}


const Commodities = () => {
  return (
    <>
      <CommoditiesPage/>
    </>
  );
};

export default Commodities;
