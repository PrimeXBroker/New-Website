import React from "react";
import Banner from "./Banner";
import MaximizeProfit from "@/our_pages/promotions/bonus/MaximizeProfit";
import EconomicCalenderWidget from "./EconomicCalenderWidget";

const EconomicCalenderWrapper = () => {
  return (
    <>
      <Banner />
      <EconomicCalenderWidget />
      <MaximizeProfit />
    </>
  );
};

export default EconomicCalenderWrapper;
