import IndicesPage from "@/our_pages/instruments/indices/IndicesPage";
import { createTranslator } from "next-intl";
import Script from "next/script";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../../../messages/${locale}.json`))
    .default;
  const t = createTranslator({ locale, messages });
  const url =
    locale != "en"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/indices`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/indices`;

  return {
    title: t("indices.metaData.title"),
    description: t("indices.metaData.description"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: url,
      title: t("indices.metaData.title"),
      description: t("indices.metaData.description"),
      images: [
        {
          url: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/indices/Banner.webp",
          width: 1200,
          height: 630,
          alt: t("indices.metaData.title"),
        },
      ],
    },
  };
}
const Indices = () => {
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
                "name": "What Does it Mean to Trade an Index?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Trading an index involves buying or selling a specific stock market index, which measures the performance of a group of stocks within a particular market.",
                },
              },
              {
                "@type": "Question",
                "name": "Can I Profit from Index Trading?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can profit from index trading, but there is also the potential for losses, similar to trading other instruments.",
                },
              },
              {
                "@type": "Question",
                "name": "Which Are the Most Popular Stock Indices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Popular stock indices include the S&P 500, Nasdaq, Dow Jones, FTSE 100, Nifty 50, and Nikkei 225.",
                },
              },
              {
                "@type": "Question",
                "name": "What Moves the Index Price?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Index prices are influenced by the price changes of the index's constituent stocks.",
                },
              },
              {
                "@type": "Question",
                "name": "What is the Best Time to Trade Indices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best time to trade indices is during the respective market's trading hours. For example, trade the Nasdaq when the US markets are open.",
                },
              },
              {
                "@type": "Question",
                "name": "Should I Trade Stocks or Indices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Whether to trade stocks or indices depends on an individual's risk appetite and financial goals. There is no universal answer.",
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
                "name": "Indices",
                "item": "https://www.primexcapital.com/en/indices"
              }
            ]
          }),
        }}
      />
      <IndicesPage />
    </>
  );
};

export default Indices;
