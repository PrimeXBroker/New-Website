import IndicesPage from "@/our_pages/instruments/indices/IndicesPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
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
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("indices.metaData.title"),
      description: t("indices.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/indices/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("indices.metaData.title"),
        },
      ],
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
