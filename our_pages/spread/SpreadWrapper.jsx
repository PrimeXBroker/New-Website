import React from "react";
import Hero from "./Hero";
import SpreadAccountTypes from "./SpreadAccountTypes";
import TradingOpportunitiesWidget from "../home/NewTradingOpportunitiesWidget";
import SpreadMatter from "./SpreadMatter";
import IndustryLeadingSpread from "./IndustryLeadingSpread";
import GetStarted from "./GetStarted";
import SpreadAccountMobileTable from "./SpreadAccountMobileTable";

const SpreadWrapper = () => {
  return (
    <>
      <Hero />
      <SpreadAccountTypes />
      <div className="block lg:hidden bg-black">
        <SpreadAccountMobileTable />
      </div>
      <div className="bg-black">
        <TradingOpportunitiesWidget />
      </div>
      <SpreadMatter />
      <IndustryLeadingSpread />
      <GetStarted />
    </>
  );
};

export default SpreadWrapper;
