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
      <h1 className="sectionHeading">Advanced Platform for Modern Traders</h1>

      <p className="sectionPara text-center py-4">
        Harness the power of MetaTrader 5 for an unparalleled trading
        experience.
      </p>

      <div className="my-8">
        <Image
          width="800"
          height="200"
          className="mx-auto"
          src="/images/platform_image.webp"
          alt="platform image"
        />
      </div>
    </section>
  );
};

export default AdvancedPlatforms;
