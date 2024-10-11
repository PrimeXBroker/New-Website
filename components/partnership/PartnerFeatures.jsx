"use client";
import React from "react";

const PartnerFeatures = ({ features, featureTitle }) => {
  return (
    <div className="bg-[#000000] py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center">
          {featureTitle.title1}
          <span className="text-[#FED100]">{featureTitle.title2}</span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] hover:border-[#FED100] text-[#FED100] flex flex-col gap-2 "
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <h3 className="text-xl font-semibold text-[#ffffff]">
                  {feature.title1} <span>{feature.title2}</span>
                </h3>
              </div>
              <div className="w-14 h-14 border-2 border-[#222222] bg-[#1D1D1D] rounded-lg flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[32px]"
                />
              </div>
            </div>
            <p className="text-[#c6c6c6] mt-2 text-sm sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerFeatures;
