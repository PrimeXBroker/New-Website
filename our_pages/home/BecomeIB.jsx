"use client";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";

const BecomeIB = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section
      className="bg-accent container flex flex-col md:flex-row border-b-5 border-b-primary gap-5 py-4 px-8 shadow-lg"
      data-aos-easing="ease-out"
      data-aos-duration={1000}
      data-aos="slide-up"
    >
      <div className="w-full md:w-[60%] flex flex-col justify-center">
        <h1 className="sectionHeading text-center md:text-left">
          <span className="font-normal">Become a</span> PrimeX
          <br className="hidden md:block" /> Introducing Broker
        </h1>
        <p className="sectionPara md:max-w-xl text-center md:text-left">
          Join our IB Program and turn your network into a source of income.
          Connect traders with PrimeX and earn commissions while enjoying
          exclusive tools, marketing support, and competitive rewards.
        </p>
      </div>
      <div className="w-full md:w-[40%]">
        <Image
          src="/images/ib.webp"
          width="500"
          height="300"
          alt="become ib"
          className="mx-auto md:mx-0"
        />
      </div>
    </section>
  );
};

export default BecomeIB;
