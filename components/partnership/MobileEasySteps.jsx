"use client";
import React from "react";

const EasyStepsMobile = ({ easySteps, easyStepsMobile }) => {
  return (
    <div className="bg-[#000000] py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100] text-center">
          {easySteps.title1}
          <span className="text-[#ffffff]">{easySteps.title2}</span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {easyStepsMobile.map((step, index) => (
          <div
            key={index}
            className="bg-transparent border-dashed border-4 border-[#1D1D1D] rounded-lg p-6 shadow-lg text-[#FED100] flex flex-col gap-2 hover:scale-105 transition-all duration-500 ease-in-out group"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{step.step_title}</h3>
              </div>
              <div className="w-12 h-12 borer-2 border-[#222222] bg-[#1D1D1D] group-hover:bg-[#FED100] rounded-lg flex items-center justify-center">
                <img
                  src={step.step_img}
                  alt={step.step_title}
                  className="w-[32px]"
                />
              </div>
            </div>
            <p className="text-[#c6c6c6] mt-2 text-sm sm:text-base">
              {step.step_desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EasyStepsMobile;
