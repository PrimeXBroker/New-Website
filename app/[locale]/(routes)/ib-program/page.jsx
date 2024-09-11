import IbPage from "@/our_pages/ib_program/IbPage";
import { createTranslator } from "next-intl";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/ib-program`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/ib-program`;

  return {
    title: t("ib.metaData.title"),
    description: t("ib.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("ib.metaData.title"),
      description: t("ib.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-new-reward.webp",
          width: 1200,
          height: 630,
          alt: t("ib.metaData.title"),
        },
      ],
    },
  };
}

const page = () => {
  return (
    <>
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
