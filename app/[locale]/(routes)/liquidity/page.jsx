"use client";
import Banner from "@/our_pages/liquidity/Banner";
import Benefits from "@/our_pages/liquidity/Benefits";
import Choose from "@/our_pages/liquidity/Choose";
import LiquidityForm from "@/our_pages/liquidity/LiquidityForm";
import LiquiditySolutions from "@/our_pages/liquidity/LiquiditySolutions";
import Offer from "@/our_pages/liquidity/Offer";
import Steps from "@/our_pages/liquidity/Steps";
import React, { useRef } from "react";

const page = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Banner scrollToForm={scrollToForm} />
      <Steps />
      <LiquiditySolutions />
      <Benefits />
      <Offer />
      <section ref={formRef}>
        <LiquidityForm />
      </section>
      <Choose />
    </>
  );
};

export default page;
