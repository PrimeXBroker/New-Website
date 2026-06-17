import React from "react";
import Banner from "./Banner";
import DepositorSection1 from "./DepositorSection1";
import Benefits from "./Benefits";
import PaymentMethods from "./PaymentMethods";
import Explore from "./Explore";

const LocalDepositorWrapper = () => {
  return (
    <>
      <Banner />
      <DepositorSection1 />
      <PaymentMethods />
      <Benefits />
      <Explore />
    </>
  );
};

export default LocalDepositorWrapper;
