"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import AboutInvestmentFund from "./AboutInvestmentFund";
import WhyChoose from "./WhyChoose";
import Steps from "./Steps";
import PartnershipProgram from "../homepage/PartnershipProgram";
import Support from "../homepage/Support";
import ClientReviews from "./ClientsReviews";
import Faqs from "./Faqs";
import ROIChart from "@/components/investments/ROIChart";
import OurVision from "./OurVision";
import axios from "axios";

const InvestmentFundWrapper = () => {
  const [chartOptions, setChartOptions] = useState(null);

  const getChartOptions = async () => {
    try {
      const res = await axios.get(`https://primexbroker.com/api/chart/options`);
      console.log(res, "res1");

      const response = res?.data;
      if (response.success) {
        setChartOptions(response.data);
      }
    } catch (error) {
      console.log(error, "error");
      setChartOptions(null);
    }
  };

  useEffect(() => {
    getChartOptions();
  }, []);
  return (
    <>
      <Hero />
      {!chartOptions?.visible ? <ROIChart chartOptions={chartOptions} /> : null}
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
