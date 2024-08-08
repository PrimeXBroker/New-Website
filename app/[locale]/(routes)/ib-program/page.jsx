import IbPage from "@/our_pages/ib_program/IbPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/ib-program`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/ib-program`;

  return {
    title: t("ib.metaData.title"),
    description: t("ib.metaData.description"),
    alternates: {
      canonical: url,
    },
  };
}


const page = () => {
  return (
    <>
      <IbPage/>
    </>
  );
};

export default page;
