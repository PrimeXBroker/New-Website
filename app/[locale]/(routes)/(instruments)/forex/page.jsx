import ForexPage from "@/our_pages/instruments/forex/ForexPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/forex`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/forex`;


  return {
    title: t("forex.metaData.title"),
    description: t("forex.metaData.description"),
    alternates: {
      canonical: url,
    },
  };
}
const Forex = () => {
  return (
    <>
      <ForexPage />
    </>
  );
};

export default Forex;
