import React from "react";
import Hero from "./Hero";
import SpreadAccountTypes from "./SpreadAccountTypes";
import TradingOpportunitiesWidget from "../home/NewTradingOpportunitiesWidget";
import SpreadMatter from "./SpreadMatter";
import IndustryLeadingSpread from "./IndustryLeadingSpread";
import SpreadAccountMobileTable from "./SpreadAccountMobileTable";

const SpreadWrapper = () => {
  return (
    <>
      <Hero />
      <SpreadAccountTypes />
      <div className="block lg:hidden bg-p dark:bg-p-dark">
        <SpreadAccountMobileTable />
      </div>
      <div className="bg-p dark:bg-p-dark py-16 sm:py-28">
        <TradingOpportunitiesWidget />
      </div>
      <SpreadMatter />
      <IndustryLeadingSpread />
    </>
  );
};

export default SpreadWrapper;
