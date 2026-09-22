"use client";
import React from "react";
import Hero from "./Hero";
import FundedJourney from "./FundedJourney";
import Advantages from "./Advantages";
import TradingParameters from "./TradingParameters";
import InitiativeRegistration from "./InitiativeRegistration";
import FundedAccountFaqs from "./FundedAccountFaqs";

const FundedAccountWrapper = () => {
  return (
    <>
      <Hero />
      <FundedJourney />
      <Advantages />
      <TradingParameters />
      <InitiativeRegistration />
      <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
        <FundedAccountFaqs />
      </div>
    </>
  );
};

export default FundedAccountWrapper;
