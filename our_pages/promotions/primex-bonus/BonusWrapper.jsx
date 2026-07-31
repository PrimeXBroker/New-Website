import React from "react";
import Hero from "./Hero";
import PrizesBreakdown from "./PrizesBreakdown";
import BonusRules from "./BonusRules";
import BonusFaqs from "./BonusFaqs";
import JoinNow from "./JoinNow";
import HowItWorks from "./HowItWorks";

const BonusWrapper = () => {
  return (
    <>
      <Hero />
      <PrizesBreakdown />
      <HowItWorks />
      <BonusRules />
      <BonusFaqs />
      <JoinNow />
    </>
  );
};

export default BonusWrapper;
