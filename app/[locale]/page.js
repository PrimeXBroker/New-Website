import HomePage from "@/our_pages/home/HomePage";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        type="application/ld+json"
        id="organization-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PrimeX Capital",
            url: "https://www.primexcapital.com/en",
            logo: "https://www.primexcapital.com/_next/static/media/logo_black_v2.2.9e793512.svg",
            description:
              "At PrimeX Capital, we are dedicated to transforming the trading experience...",
            foundingDate: "2022",
            founder: {
              "@type": "Person",
              name: "Ahmed Alarji",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "support@primexcapital.com",
              telephone: "+971 800 774639",
              contactType: "Customer Support",
              areaServed: "UAE",
              availableLanguage: ["English", "Arabic"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Westburry Office Tower...",
              addressLocality: "Dubai",
              addressRegion: "Dubai",
              addressCountry: "United Arab Emirates",
            },
            parentOrganization: {
              "@type": "Organization",
              name: "PRIMEX BROKER (PTY) LTD",
            },
            sameAs: [
              "https://www.facebook.com/PrimeX.Capital.En",
              "https://x.com/PrimeXCapital",
              "https://www.instagram.com/primexcapital.en/",
              "https://www.youtube.com/@primex.capital",
            ],
            keywords: "Trade Forex Stocks Indices CFD Metals...",
            award: ["Best Copy Trading Program UAE 2023..."],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "3",
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Dr. Ehab",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
                reviewBody: "Amazing vibes and office 👌...",
              },
            ],
            makesOffer: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Forex",
                  description: "Forex trading offers diverse opportunities...",
                },
              },
            ],
          }),
        }}
      />

      <Script
        type="application/ld+json"
        id="website-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "PrimeX Capital",
            url: "https://www.primexcapital.com/en",
            alternateName: "PrimeX Capital Arabic",
            inLanguage: ["en", "ar"],
            publisher: {
              "@type": "Organization",
              name: "PrimeX Capital",
              url: "https://www.primexcapital.com/en",
              logo: "https://www.primexcapital.com/_next/static/media/logo_black_v2.2.9e793512.svg",
            },
          }),
        }}
      />

      <Script
        type="application/ld+json"
        id="localbusiness-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "PrimeX Capital",
            url: "https://www.primexcapital.com/en",
            logo: "https://www.primexcapital.com/_next/static/media/logo_black_v2.2.9e793512.svg",
            image:
              "https://www.primexcapital.com/_next/static/media/logo_black_v2.2.9e793512.svg",
            description:
              "At PrimeX Capital, we are dedicated to transforming the trading experience...",
            telephone: "+971 800 774639",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Westburry Office Tower...",
              addressLocality: "Dubai",
              addressRegion: "Dubai",
              addressCountry: "United Arab Emirates",
            },
            openingHours: "Mo-Fr 10:00-18:00",
            sameAs: [
              "https://www.facebook.com/PrimeX.Capital.En",
              "https://x.com/PrimeXCapital",
              "https://www.instagram.com/primexcapital.en/",
              "https://www.youtube.com/@primex.capital",
            ],
          }),
        }}
      />
      <HomePage />
    </>
  );
}
