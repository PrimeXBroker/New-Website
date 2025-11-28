import ECNBrokerWrapper from "@/our_pages/global-ecn-broker/ECNBrokerWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/ecn-broker`;

  return {
    title: t("ecnBroker.metaData.title"),
    description: t("ecnBroker.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("ecnBroker.metaData.title"),
      description: t("ecnBroker.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/ecn-hero.webp",
          width: 1200,
          height: 630,
          alt: t("ecnBroker.metaData.title"),
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
    { lng: "pt", url: "pt" },
    { lng: "fa", url: "fa" },
  ];
  return (
    <>
      <head>
        {hreflangLocales.map((item) => (
          <link
            key={item.lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${item.url}/ecn-broker`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <ECNBrokerWrapper />
    </>
  );
};

export default page;
