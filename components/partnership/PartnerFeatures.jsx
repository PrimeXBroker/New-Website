"use client";
import Lottie from "lottie-react";
import { useTheme } from "next-themes";
import React from "react";

const PartnerFeatures = ({ features, featureTitle }) => {
  const { theme } = useTheme();

  return (
    <div className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
          {featureTitle.title1}
          <span className="text-pcp dark:text-pcp-dark">
            {featureTitle.title2}
          </span>
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-cc dark:bg-cc-dark p-6 rounded-xl text-pcp dark:text-pcp-dark flex flex-col gap-2 "
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <h3 className="text-xl font-semibold text-tm dark:text-tm-dark">
                  {feature.title1} <span>{feature.title2}</span>
                </h3>
              </div>
              <div className="w-14 h-14 bg-e1 dark:bg-e1-dark rounded-lg flex items-center justify-center">
                {feature.icon && typeof feature.icon === "object" ? (
                  <Lottie
                    animationData={feature.icon}
                    loop={true}
                    style={{ width: "52px", height: "52px" }}
                  />
                ) : (
                  <img
                    src={
                      theme === "dark" ? feature.iconDark : feature.iconLight
                    }
                    alt={feature.title}
                    className="w-[32px]"
                  />
                )}
              </div>
            </div>
            <p className="text-ts dark:text-ts-dark mt-2 text-sm sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerFeatures;
