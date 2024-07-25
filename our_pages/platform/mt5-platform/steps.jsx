import Image from "next/image";
import React from "react";

const Steps = ({ title, title2 }) => {
  return (
    <section className="container py-12 bg-secondary">
      <h1 className="sectionHeading text-white">{title}</h1>
      <h1 className="sectionHeading text-white">{title2}</h1>
      <div className="flex flex-col lg:flex-row mt-12 justify-center items-center">
        <div className="pl-12 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mr-[-10px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/1.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-black text-5xl ">
              1
            </div>
            <div className="flex flex-col text-black ">
              <p>Register</p>
              <p>An Account</p>
            </div>
          </div>
        </div>
        <div className="w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mx-[-50px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/2.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-black text-5xl ">
              2
            </div>
            <div className="flex flex-col text-black ">
              <p>Download</p>
              <p>MT5</p>
            </div>
          </div>
        </div>
        <div className="pl-8 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mx-[-50px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/3.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-black text-5xl ">
              3
            </div>
            <div className="flex flex-col text-black">
              <p>Fund Your</p>
              <p>Account</p>
            </div>
          </div>
        </div>
        <div className="pr-12 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:ml-[-20px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/4.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
          <div className="flex flex-row gap-2">
            <div className="text-black text-5xl">
              4
            </div>
            <div className="flex flex-col text-black ">
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
