import Image from "next/image";
import React from "react";

const JoinPrimex = () => {
  return (
    <section className="container flex flex-col md:flex-row justify-center items-center py-12">
      <div>
        <h1
          className="text-secondary md:max-w-sm md:text-3xl font-semibold mb-5"
          style={{ letterSpacing: "1px" }}
        >
          Join Primex and trade with MT5 Today!
        </h1>
        <p
          className="text-secondary md:max-w-lg  text-[15px] font-[500]"
          style={{ letterSpacing: "1.4px" }}
        >
          Experience the future of trading with MetaTrader 5 at PrimeX. Whether
          you're a beginner or a seasoned trader, MT5 offers the tools and
          features you need to succeed in the financial markets. Join us today
          and elevate your trading experience.
        </p>
        <div className="pt-5 flex flex-row">
         <button>Download For Desktop</button>
         <button>Download For Mobile</button>
        </div>
      </div>
      <div>
        <Image
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/join_banner.webp"
          width="400"
          height="300"
          alt="banner Image"
        />
      </div>
    </section>
  );
};

export default JoinPrimex;
