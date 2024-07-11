import Image from "next/image";
import React from "react";

const BecomeIB = () => {
  return (
    <section className="bg-accent container flex border-b-5 border-b-primary gap-5 py-4 px-8 shadow-lg">
      <div className="w-[60%] flex flex-col justify-center">
        <h1 className="sectionHeading text-left">
          <span className="font-normal">Become a</span> PrimeX
          <br /> Introducing Broker
        </h1>
        <p className="sectionPara max-w-xl">
          Join our IB Program and turn your network into a source of income.
          Connect traders with PrimeX and earn commissions while enjoying
          exclusive tools, marketing support, and competitive rewards.
        </p>
      </div>
      <div className="w-[40%]">
        <Image src="/images/ib.webp" width="500" height="300" alt="become ib" />
      </div>
    </section>
  );
};

export default BecomeIB;
