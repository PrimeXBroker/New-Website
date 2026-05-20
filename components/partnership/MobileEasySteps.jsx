"use client";
import Lottie from "lottie-react";
import React from "react";

const EasyStepsMobile = ({ easySteps, easyStepsMobile }) => {
  return (
    <div className="bg-p dark:bg-p-dark py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pcp dark:text-pcp-dark text-center">
          {easySteps.title1}
          <span className="text-tm dark:text-tm-dark">{easySteps.title2}</span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {easyStepsMobile.map((step, index) => (
          <div
            key={index}
            className="bg-cc dark:bg-cc-dark p-6 rounded-lg text-pcp dark:text-pcp-dark flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <span className="bg-e1 dark:bg-e1-dark text-center rounded-md text-tm dark:text-tm-dark h-8 w-8 flex items-center justify-center text-xl font-semibold">
                    {step.count}
                  </span>
                  {step.step_title}
                </h3>
              </div>
              <div className="w-14 h-14 bg-e1 dark:bg-white/15 border border-e2 dark:border-white/15 rounded-lg flex items-center justify-center">
                <Lottie
                  animationData={step.step_icon}
                  loop={true}
                  style={{ width: "48px", height: "48px" }}
                />
              </div>
            </div>
            <p className="text-tm dark:text-tm-dark mt-2 text-sm sm:text-base">
              {step.step_desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EasyStepsMobile;
