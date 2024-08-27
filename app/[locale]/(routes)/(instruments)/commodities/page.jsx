import CommoditiesPage from "@/our_pages/instruments/commodities/CommoditiesPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
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
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("commodities.metaData.title"),
      description: t("commodities.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/commodities/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("commodities.metaData.title"),
        },
      ],
    },
  };
}

const Commodities = () => {
  return (
    <>
      <CommoditiesPage />
    </>
  );
};

export default Commodities;
