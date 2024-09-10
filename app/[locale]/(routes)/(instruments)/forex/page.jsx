import ForexPage from "@/our_pages/instruments/forex/ForexPage";
import { createTranslator } from "next-intl";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/forex`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/forex`;

  return {
    title: t("forex.metaData.title"),
    description: t("forex.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("forex.metaData.title"),
      description: t("forex.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("forex.metaData.title"),
        },
      ],
    },
  };
}
const Forex = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        id="json-ld"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does 'Pip' mean in Forex Trading?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A pip, short for 'price interest point' or 'percentage in point,' is the smallest price movement possible in the exchange rate of a currency pair according to forex market standards.",
                },
              },
              {
                "@type": "Question",
                "name": "Can only professional traders participate in forex trading?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, forex trading is not limited to professional traders. Anyone can participate in forex trading, including beginners. New traders can start with a demo account to practice and gain experience before trading with real money.",
                },
              },
              {
                "@type": "Question",
                "name": "What is a ‘Stop Loss’ in Forex Trading?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A stop loss in forex trading is a tool recommended by brokers to help traders limit potential losses in a volatile market by automatically closing a position at a predetermined price.",
                },
              },
              {
                "@type": "Question",
                "name": "What is Hedging in Forex Trading?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hedging in forex trading involves companies locking in a specific exchange rate for future transactions to mitigate the risk of currency fluctuations when dealing with foreign countries.",
                },
              },
            ],
          }),
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
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.primexcapital.com/en"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Trading",
                "item": "https://www.primexcapital.com/en/trading"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Forex",
                "item": "https://www.primexcapital.com/en/forex"
              }
            ]
          }),
        }}
      />
      <ForexPage />
    </>
  );
};

export default Forex;
