import { Button } from "@nextui-org/button";
import React from "react";

const GetStarted = () => {
  return (
    <section className="my-12 container bg-secondary flex p-10">
      <div className="w-[60%]">
        <h1 className="sectionHeading text-3xl text-white font-semibold text-left">
          Get Started with PrimeX
        </h1>
        <p className="sectionPara  text-white text-left">
          Ready to elevate your trading experience? Join PrimeX Broker and
          <br />
          explore our advanced trading features and special offers.
        </p>
      </div>
      <div className="w-[30%] flex justify-center items-center">
        <Button radius="full" size="lg" color="primary">
          <p className="text-secondary font-semibold"> Open Your Account</p>
        </Button>
      </div>
    </section>
  );
};

export default GetStarted;
