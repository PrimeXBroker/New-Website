import TradeGoldWrapper from "@/our_pages/trade-gold/TradeGoldWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/trade-gold`;

  return {
    title: t("trdaeGold.metaData.title"),
    description: t("trdaeGold.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("trdaeGold.metaData.title"),
      description: t("trdaeGold.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/trade-gold/trade-gold-hero.svg",
          width: 1200,
          height: 630,
          alt: t("trdaeGold.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  const hreflangLocales = [
    { lng: "en", url: "en" },
    { lng: "ar", url: "ar" },
    { lng: "ku", url: "ku" },
    { lng: "es", url: "es" },
    { lng: "ps", url: "ps" },
  ];

  return (
    <>
      <head>
        {hreflangLocales.map((item) => (
          <link
            key={item.lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${item.url}/trade-gold`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <TradeGoldWrapper />
    </>
  );
};

export default page;
