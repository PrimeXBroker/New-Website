import Image from "next/image";
import React from "react";

const Strategies = ({ tipsData }) => {
  return (
    <section className="pt-12 pb-8 container">
      <h1 className="sectionHeading pb-8">Tips And Strategies</h1>
      <div className="grid justify-center place-items-center gap-6 grid-cols-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-4 pt-12 pb-8">
        {tipsData.map((tip, index) => (
          <div key={index} className="flip-card cursor-pointer">
            <div className="flip-card-inner">
              <div className="flip-card-front" style={{ background: "#FFF" }}>
                <Image
                  src={tip.imgUrl}
                  width="50"
                  height="100"
                  alt="account logo"
                />
                <p className="text-lg md:text-2xl font-semibold text-secondary pt-5">
                  {tip.title}
                </p>
              </div>
              <div className="flip-card-back">
                <p className="text-md text-[#FFF] text-center px-6 pb-3">
                  {tip.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strategies;
