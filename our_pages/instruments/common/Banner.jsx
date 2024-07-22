import Image from "next/image";
import React from "react";

const Banner = ({ title, description, imgUrl }) => {
  return (
    <section className="md:h-[55vh] bg-gradient-to-b from-[#3f3f3e] to-[#e4e5e6]">
      <div className="container flex flex-col md:flex-row py-12 justify-around">
        <div className="max-w-xl flex flex-col justify-center">
          <h1 className="sectionHeading text-primary text-center md:text-left">
            {title}
          </h1>
          <p className="sectionPara text-accent text-center md:text-left pb-4">
            {description}
          </p>
          <button className="bg-primary rounded-full text-secondary font-semibold px-4 py-2 w-[250px]">
            Start Now!
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image src={imgUrl} alt="banner img" width="430" height="600" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
