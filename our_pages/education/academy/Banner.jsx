import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="h-screen">
      <div className="bg-secondary">
        <div className="container flex justify-around py-16">
          <div className="max-w-2xl flex flex-col justify-center items-start gap-6">
            <h1
              className="text-primary md:text-3xl font-semibold"
              style={{ lineHeight: "45px", letterSpacing: "1px" }}
            >
              Welcome to the academy of PrimeX Capital -{" "}
              <span className="text-white md:text-2xl font-semibold">
                Your Ultimate Resource Hub For Staying Ahead In The Dynamic
                World Of Trading
              </span>
            </h1>
            <p
              className="text-white md:text-lg text-medium max-w-xl"
              style={{ letterSpacing: "0.7px" }}
            >
              A Wealth Of Knowledge At Your Fingertips, including the lastest
              market news, insightful blogs, and personalized one-on-one
              sessions
            </p>
            <button className="bg-primary px-4 py-4 rounded-full w-[200px] shadow-xl">
              Join Now!
            </button>
          </div>
          <div>
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/banner_img.webp"
              alt="Banner Image"
              width="550"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="container py-16 max-w-xl flex flex-col gap-12">
        <h1
          className="md:text-3xl text-secondary font-semibold text-center"
          style={{ lineHeight: "50px", letterSpacing: "1px" }}
        >
          Explore The Ulimited Features Of PrimeX Signals Center
        </h1>
        <p
          className="text-center text-secondary md:text-medium"
          style={{ lineHeight: "30px", letterSpacing: "0.8px" }}
        >
          Real-time market insights, unlimited daily signals, and much more
          seamlessly integrated within your MT5 trading Platform
        </p>
        <button className="bg-primary px-4 py-4 rounded-full w-[200px] mx-auto block shadow-xl mb-8">
          Download
        </button>
        <p className="text-secondary text-lg text-center">
          Don't have <span className="font-[700]">MT5</span> yet?
          <Link className="text-primary appearance-none pl-2" href="#">
            Download here
          </Link>
        </p>

        <p className="text-secondary text-lg text-center">Provided by Acuity</p>
      </div>
    </section>
  );
};

export default Banner;
