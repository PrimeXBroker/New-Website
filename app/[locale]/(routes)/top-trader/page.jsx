import Script from "next/script";
import TopTrader from "@/our_pages/top_trader/TopTrader";

const page = () => {

  return (
    <>
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
                "name": "Promotions",
                "item": "https://www.primexcapital.com/en/promotions"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Trader of the Month",
                "item": "https://www.primexcapital.com/en/top-trader"
              }
            ]
          }),
        }}
      />
      <TopTrader />
    </>
  );
};

export default page;
