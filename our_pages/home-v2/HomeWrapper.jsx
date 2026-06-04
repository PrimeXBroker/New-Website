import React from "react";
import Hero from "./Hero";
import TradingInstruments from "./TradingInstruments";
import Recognition from "./Recognition";
import Support from "./Support";
import PartnershipProgram from "./PartnershipProgram";
import AdvancedPlatform from "./AdvancedPlatform";
import ClientReviews from "./ClientReviews";
import PrimeXAcademy from "./PrimeXAcademy";
import AccountTypes from "./AccountTypes";
import Promotions from "./Promotions";
import StatCards from "./StatCards";
import HeroMobile from "./HeroMobile";

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
