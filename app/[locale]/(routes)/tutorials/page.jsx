import TutorialsWrapper from "@/our_pages/tutorials/TutorialsWrapper";
import { createTranslator } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/tutorials`;

  return {
    title: t("tutorials.metaData.title"),
    description: t("tutorials.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("tutorials.metaData.title"),
      description: t("tutorials.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/tutorials/tutorials-hero.png",
          width: 1200,
          height: 630,
          alt: t("tutorials.metaData.title"),
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
            href={`https://www.primexcapital.com/${item.url}/tutorials`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <TutorialsWrapper />
    </>
  );
};

export default page;
