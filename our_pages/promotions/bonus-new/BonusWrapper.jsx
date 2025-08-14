import React from "react";
import Hero from "./Hero";
import PrizesBreakdown from "./PrizesBreakdown";
import BonusRules from "./BonusRules";
import BonusFaqs from "./BonusFaqs";
import JoinNow from "./JoinNow";
import AccountTypes from "./AccountTypes";
import WhyBonusIconic from "../primex-bonus/WhyBonusIconic";

const BonusWrapper = () => {
  return (
    <>
      <Hero />
      <AccountTypes />
      <PrizesBreakdown />
      <BonusRules />
      <BonusFaqs />
      <WhyBonusIconic />
      <JoinNow />
    </>
  );
};

export default BonusWrapper;
