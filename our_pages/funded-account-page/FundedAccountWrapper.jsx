"use client";
import React from "react";
import Hero from "./Hero";
import FundedJourney from "./FundedJourney";
import Advantages from "./Advantages";
import TradingParameters from "./TradingParameters";
import InitiativeRegistration from "./InitiativeRegistration";

const FundedAccountWrapper = () => {
  return (
    <>
      <Hero />
      <FundedJourney />
      <Advantages />
      <TradingParameters />
      <InitiativeRegistration />
    </>
  );
};

export default FundedAccountWrapper;
