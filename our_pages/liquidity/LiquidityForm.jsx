import React from "react";
import Form from "./Form";

const LiquidityForm = () => {
  return (
    <section className="bg-[#000000] py-12">
      <div className="container grid grid-cols-12 items-center">
        <div className="col-span-12 md:col-span-6 mb-7 md:mb-0">
          <h2 className="text-2xl md:text-5xl font-semibold text-[#ffffff] mb-2">
            Connect with us for
          </h2>
          <h2 className="text-2xl md:text-5xl font-semibold text-[#ffffff] mb-2">
            <span className="text-primary"> Custom</span> Liquidity and
          </h2>
          <h2 className="text-2xl md:text-5xl font-semibold text-[#ffffff]">
            Expert
            <span className="text-primary mb-2"> Support</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default LiquidityForm;
