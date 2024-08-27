import MetalsPage from "@/our_pages/instruments/metals/MetalsPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/metals`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/metals`;

  return {
    title: t("metals.metaData.title"),
    description: t("metals.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("metals.metaData.title"),
      description: t("metals.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/metals/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("metals.metaData.title"),
        },
      ],
    },
  };
}
const Metals = () => {
  return (
    <>
      <MetalsPage />
    </>
  );
};

export default Metals;
