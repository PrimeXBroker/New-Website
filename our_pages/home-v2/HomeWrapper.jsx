import React from "react";
import dynamic from "next/dynamic";
import StatCards from "./StatCards";
import Promotions from "./Promotions";
import SectionSkeleton from "@/components/common/SectionSkeleton";

// Hero components use Three.js which accesses window at module level
// Must be client-only (ssr: false) to prevent SSR "window is not defined" errors
const Hero = dynamic(() => import("./Hero"), {
  ssr: false,
  loading: () => <div className="bg-p dark:bg-p-dark pt-14 lg:block min-h-[600px]" />,
});

const HeroMobile = dynamic(() => import("./HeroMobile"), {
  ssr: false,
  loading: () => null,
});

// Dynamically import below-the-fold components with loading placeholders
const TradingInstruments = dynamic(() => import("./TradingInstruments"), {
  ssr: true,
  loading: () => <SectionSkeleton className="min-h-[400px]" />,
});

const PrimeXAcademy = dynamic(() => import("./PrimeXAcademy"), {
  ssr: true,
  loading: () => <SectionSkeleton className="min-h-[300px]" />,
});

const AccountTypes = dynamic(() => import("./AccountTypes"), {
  ssr: true,
  loading: () => <SectionSkeleton className="min-h-[500px]" />,
});

const ClientReviews = dynamic(() => import("./ClientReviews"), {
  ssr: true,
  loading: () => <SectionSkeleton className="min-h-[400px]" />,
});

const AdvancedPlatform = dynamic(() => import("./AdvancedPlatform"), {
  ssr: true,
  loading: () => <SectionSkeleton className="min-h-[500px]" />,
});

const PartnershipProgram = dynamic(() => import("./PartnershipProgram"), {
  ssr: true,
  loading: () => <SectionSkeleton className="min-h-[300px]" />,
});

const Support = dynamic(() => import("./Support"), {
  ssr: true,
  loading: () => <SectionSkeleton className="min-h-[300px]" />,
});

const Recognition = dynamic(() => import("./Recognition"), {
  ssr: true,
  loading: () => <SectionSkeleton className="min-h-[400px]" />,
});

const HomeWrapper = () => {
  return (
    <>
      <Hero />
      <HeroMobile />
      <StatCards />
      <Promotions />
      <TradingInstruments />
      <PrimeXAcademy />
      <AccountTypes />
      <ClientReviews />
      <AdvancedPlatform />
      <PartnershipProgram />
      <Support />
      <Recognition />
    </>
  );
};

export default HomeWrapper;
