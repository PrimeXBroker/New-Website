import IndicesPage from "@/our_pages/instruments/indices/IndicesPage";
import { createTranslator } from "next-intl";


export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });
  const url =
  locale != "en"
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/indices`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/indices`;


  return {
    title: t("indices.metaData.title"),
    description: t("indices.metaData.description"),
    alternates: {
      canonical: url,
    },
  };
}
const Indices = () => {
  return (
    <>
      <IndicesPage />
    </>
  );
};

export default Indices;
