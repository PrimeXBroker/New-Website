import RNCWrapper from "@/our_pages/regulation-and-compliance/RNCWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/regulation-and-compliance`;

  return {
    title: t("regulationCompliance.metaData.title"),
    description: t("regulationCompliance.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("regulationCompliance.metaData.title"),
      description: t("regulationCompliance.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/regulation-compliance/Hero+Dark+Mode.png",
          width: 1200,
          height: 630,
          alt: t("regulationCompliance.metaData.title"),
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
            href={`https://www.primexcapital.com/${item.url}/regulation-and-compliance`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <RNCWrapper />
    </>
  );
};

export default page;
