"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";

const AdvancedPlatforms = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section
      className="py-12 container"
      data-aos-easing="ease-out"
      data-aos-duration={2000}
      data-aos="slide-up"
    >
      <h1 className="sectionHeading"><span className="font-light">Advanced</span> Platform for Modern Traders</h1>

      <p className="sectionPara text-center py-4">
        Harness the power of MetaTrader 5 for an unparalleled trading
        experience.
      </p>

      <div className="my-8 relative">
        <Image
          width="700"
          height="700"
          className="mx-auto z-0 lg:w-fit w-[80%]"
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/platform_image.webp"
          alt="platform image"
        />
        <div className="absolute z-10 lg:w-fit right-[1%] bottom-[35%] w-[30%]
         cursor-pointer bg-transparent hover:bg-black hover:text-white
          transition duration-500 hover:translate-y-[-5px]">
          <Image
            width='250'
            height='200'
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/meta_trader5.svg"
            alt="mt5"
            className="block"
          />
        </div>
        <div className="absolute z-10 lg:w-fit bottom-[50%] w-[30%] cursor-pointer bg-transparent hover:bg-black hover:text-white transition duration-500 hover:translate-y-[-5px]">
          <Image
            className="block"
            width="250"
            height="200"
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/multi_device.svg"
            alt="mt5"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedPlatforms;
