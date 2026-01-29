"use client";
import React from "react";
import Hero from "./Hero";
import AboutInvestmentFund from "./AboutInvestmentFund";
import WhyChoose from "./WhyChoose";
import Steps from "./Steps";
import PartnershipProgram from "../homepage/PartnershipProgram";
import Support from "../homepage/Support";
import ClientReviews from "./ClientsReviews";
import Faqs from "./Faqs";
// import ROIChart from "@/components/investments/ROIChart";
import OurVision from "./OurVision";

const InvestmentFundWrapper = () => {
  return (
    <>
      <Hero />
      {/* <ROIChart /> */}
      <AboutInvestmentFund />
      <div className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
        <OurVision />
      </div>
      <WhyChoose />
      <Steps />
      <PartnershipProgram />
      <div className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
        <ClientReviews />
      </div>
      <div className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
        <Faqs />
      </div>
      <Support />
    </>
  );
};

export default InvestmentFundWrapper;
