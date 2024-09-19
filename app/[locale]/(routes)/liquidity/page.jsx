import Banner from "@/our_pages/liquidity/Banner";
import Benefits from "@/our_pages/liquidity/Benefits";
import Choose from "@/our_pages/liquidity/Choose";
import LiquidityForm from "@/our_pages/liquidity/LiquidityForm";
import LiquiditySolutions from "@/our_pages/liquidity/LiquiditySolutions";
import Offer from "@/our_pages/liquidity/Offer";
import Steps from "@/our_pages/liquidity/Steps";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <Steps />
      <LiquiditySolutions />
      <Benefits />
      <Offer />
      <LiquidityForm />
      <Choose />
    </>
  );
};

export default page;
