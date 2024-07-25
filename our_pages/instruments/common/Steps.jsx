import Image from "next/image";
import React from "react";

const Steps = ({ title }) => {
  return (
    <section className="container border-t border-t-accent py-12">
      <h1 className="sectionHeading">{title}</h1>
      <div className="flex flex-col lg:flex-row mt-12 justify-center items-center">
        <div className="pl-12 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mr-[-10px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step1.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-white text-5xl group-hover:text-primary">
              1
            </div>
            <div className="flex flex-col text-white group-hover:text-primary">
              <p>Open a</p>
              <p>Primex Account</p>
            </div>
          </div>
        </div>
        <div className="w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mx-[-50px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step2.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-white text-5xl group-hover:text-primary">
              2
            </div>
            <div className="flex flex-col text-white group-hover:text-primary">
              <p>Deposit</p>
              <p>Funds</p>
            </div>
          </div>
        </div>
        <div className="pl-8 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mx-[-50px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step3.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-white text-5xl group-hover:text-primary">
              3
            </div>
            <div className="flex flex-col text-white group-hover:text-primary">
              <p>Choose your</p>
              <p>Currency Pairs</p>
            </div>
          </div>
        </div>
        <div className="pr-12 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:ml-[-20px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/instruments/forex/step4.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-white text-5xl group-hover:text-primary">
              4
            </div>
            <div className="flex flex-col text-white group-hover:text-primary">
              <p>Start</p>
              <p>Trading</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
