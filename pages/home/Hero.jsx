import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-accent h-[70vh] rounded-b-[7%] md:rounded-b-[7%] relative">
      <div className="container mx-auto flex flex-col">
        <div className="max-w-2xl flex flex-col items-start gap-5 pt-5 md:pt-28">
          <h1 className="text-secondary text-4xl font-[800]">
            The Next Generation Of Trading
          </h1>
          <p className="text-secondary font-medium font-montserrat">
            Welcome to PrimeX Broker, where innovation drives success. Join us
            and experience a trading platform built for the future.
          </p>
        </div>
        <div className="absolute container bottom-0 flex justify-between pb-8 border-t-2 border-solid border-gray-400 pt-16">
          <div className="flex flex-col justify-center items-center w-[20%]">
            <Image
              src="/images/innovative_tools.svg"
              alt="clear pricing"
              width="100"
              height="200"
            />
            <h2 className="text-secondary text-2xl font-semibold pt-4 pb-4">
              Innovative Tools
            </h2>
            <p className="text-secondary text-center text-sm">
              Cutting-edge technology for every trader
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[20%]">
            <Image
              src="/images/competitive_pricing.svg"
              alt="clear pricing"
              width="100"
              height="200"
            />
            <h2 className="text-secondary text-2xl font-semibold pt-2 pb-4">
              Competitive Pricing
            </h2>
            <p className="text-secondary text-center text-sm">
              Low spreads and transparent costs
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[20%]">
            <Image
              src="/images/fast_execution.svg"
              alt="clear pricing"
              width="100"
              height="200"
            />
            <h2 className="text-secondary text-2xl font-semibold pt-2 pb-4">
              Fast Execution
            </h2>
            <p className="text-secondary text-center text-sm">
              {" "}
              Quick and reliable trade executions
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[20%]">
            <Image
              src="/images/clear_pricing.svg"
              alt="clear pricing"
              width="100"
              height="200"
            />
            <h2 className="text-secondary text-2xl font-semibold pt-2 pb-4">
              Clear Pricing
            </h2>
            <p className="text-secondary text-center text-sm">
              Upfront information for a better trading experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
