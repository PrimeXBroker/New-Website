import Mt5PlatformPage from "@/our_pages/platform/mt5-platform/Mt5PlatformPage";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/platform/mt5-platform`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/platform/mt5-platform`;

  return {
    title: t("metaTrader5.metaData.title"),
    description: t("metaTrader5.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("metaTrader5.metaData.title"),
      description: t("metaTrader5.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("metaTrader5.metaData.title"),
        },
      ],
    },
  };
}

const Mt5Platform = () => {
  return (
    <>
      <Mt5PlatformPage />
    </>
  );
};

export default Mt5Platform;
