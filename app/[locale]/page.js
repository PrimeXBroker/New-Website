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
            "name": "PrimeX Capital",
            "url": "https://www.primexcapital.com/en",
            "logo": "https://www.primexcapital.com/_next/static/media/logo_black_v2.2.9e793512.svg",
            "description": "At PrimeX Capital, we are dedicated to transforming the trading experience...",
            "foundingDate": "2022",
            "founder": {
              "@type": "Person",
              "name": "Ahmed Alarji"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "support@primexcapital.com",
              "telephone": "+971 800 774639",
              "contactType": "Customer Support",
              "areaServed": "UAE",
              "availableLanguage": ["English", "Arabic"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Westburry Office Tower...",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "addressCountry": "United Arab Emirates"
            },
            "sameAs": [
              "https://www.facebook.com/PrimeX.Capital.En",
              "https://x.com/PrimeXCapital",
              "https://www.instagram.com/primexcapital.en/",
              "https://www.youtube.com/@primex.capital"
            ]
          })
        }}
        
      />
      <HomePage />
    </>
  );
}
