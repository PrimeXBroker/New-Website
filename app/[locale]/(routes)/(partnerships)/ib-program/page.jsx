import IbPage from "@/our_pages/partnerships/ib-program/IbPage";
import { createTranslator } from "next-intl";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/ib-program`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/ib-program`;

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

const page = ({ params: { locale } }) => {
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
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
            <link
              key={item.lng}
              rel="canonical"
              href={`https://www.primexcapital.com/${item.url}/ib-program`}
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
