"use client";
import Banner from "./Banner";
import Benefits from "./Benefits";
import Choose from "./Choose";
import LiquidityForm from "./LiquidityForm";
import LiquiditySolutions from "./LiquiditySolutions";
import Offer from "./Offer";
import Steps from "./Steps";
import React, { useRef } from "react";

const LiquidityWrapper = () => {
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

export default LiquidityWrapper;
