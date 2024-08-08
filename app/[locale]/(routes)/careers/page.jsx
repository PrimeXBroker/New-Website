import CareersPage from "@/our_pages/footer-pages/careers/CareersPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/careers`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/careers`;

  return {
    title: t("careers.metaData.title"),
    description: t("careers.metaData.description"),
    alternates: {
      canonical: url,
    },
  };
}

const page = () => {
  return (
    <>
      <CareersPage />
    </>
  );
};

export default page;
