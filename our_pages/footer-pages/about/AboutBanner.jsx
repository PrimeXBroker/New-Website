import Image from "next/image";
import React from "react";

const AboutBanner = () => {
  return (
    <section className={`bg-secondary`}>
      <div className="container flex flex-col md:flex-row justify-evenly gap-10 items-center py-12">
        <div className="md:w-[45%]">
          <h1
            className={`text-primary text-xl md:text-3xl font-semibold mb-5 md:text-left text-center`}
            style={{ letterSpacing: "4px" }}
          >
            Revolutionizing Your Trading Experience
          </h1>
          <p
            className={`text-white text-[15px] font-[500] md:text-left text-center`}
            style={{ letterSpacing: "1px" }}
          >
            At PrimeX Capital we are dedicated to transforming the trading
            experience. Established with a vision to provide innovative and
            reliable trading solutions. We offer a platform where traders of all
            levels can thrive. Our mission is to deliver advanced technology,
            diverse trading instruments, and exceptional support to empower your
            trading journey.
          </p>
        </div>
        <div>
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/about/Banner.webp"
            width="500"
            height="300"
            alt="banner Image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
