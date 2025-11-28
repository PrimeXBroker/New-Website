import IbPage from "@/our_pages/partnerships/ib-program/IbPage";
import { createTranslator } from "next-intl";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url = `https://www.primexcapital.com/${locale}/ib-program`;

  return {
    title: t("ibProgram.metaData.title"),
    description: t("ibProgram.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("ibProgram.metaData.title"),
      description: t("ibProgram.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/IB+page+updated+hero+section+image.webp",
          width: 1200,
          height: 630,
          alt: t("ibProgram.metaData.title"),
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
            href={`https://www.primexcapital.com/${item.url}/ib-program`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <Script
        id="linkedin-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.lintrk('track', { conversion_id: 18644578 });`,
        }}
      />
      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.primexcapital.com/en",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Partners",
                item: "https://www.primexcapital.com/en/partners",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "IB Program",
                item: "https://www.primexcapital.com/en/ib-program",
              },
            ],
          }),
        }}
      />
      <IbPage />
    </>
  );
};

export default page;
