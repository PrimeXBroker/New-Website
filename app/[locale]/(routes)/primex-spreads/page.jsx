import SpreadWrapper from "@/our_pages/spread/SpreadWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/primex-spreads`;

  return {
    title: t("spreadPage.metaData.title"),
    description: t("spreadPage.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("spreadPage.metaData.title"),
      description: t("spreadPage.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/spread/spread-hero.png",
          width: 1200,
          height: 630,
          alt: t("spreadPage.metaData.title"),
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
  ];
  return (
    <>
      <head>
        {hreflangLocales.map((item) => (
          <link
            key={item.lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${item.url}/primex-spreads`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <SpreadWrapper />
    </>
  );
};

export default page;
