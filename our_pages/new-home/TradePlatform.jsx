"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TradePlatform = () => {
  const t = useTranslations("newHomePage.advancedPlatforms");

  const features = [
    {
      name: t("li1"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Advanced+Analytical+Tools.svg",
      iconActive:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Active+-+Advanced+Analytical+Tools.svg",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Advanced+Analytical+Tools+mockup.webp",
    },
    {
      name: t("li2"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Community+and+Support.svg",
      iconActive:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Active+-+Community+and+Support.svg",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Community+and+Support+mockup.webp",
    },
    {
      name: t("li3"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Superior+Charting+Capabilities.svg",
      iconActive:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Active+-+Superior+Charting+Capabilities.svg",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Superior+Charting+Capabilities+mockup.webp",
    },
    {
      name: t("li4"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Multi-Asset+Platform.svg",
      iconActive:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Active+-+Multi-Asset+Platform.svg",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Multi-Asset+Platform+mockup.webp",
    },
    {
      name: t("li5"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Automated+Trading.svg",
      iconActive:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Active+-+Automated+Trading.svg",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Automated+Trading+mockup.webp",
    },
    {
      name: t("li6"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Improved+Order+Execution.svg",
      iconActive:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Active+-+Improved+Order+Execution.svg",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Improved+Order+Execution+mockup.webp",
    },
    {
      name: t("li7"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Built-in+Economic+Calendar.svg",
      iconActive:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Active+-+Built-in+Economic+Calendar.svg",
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Built-in+Economic+Calendar+mockup.webp",
    },
  ];

  const [activeFeature, setActiveFeature] = useState(features[0]);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isUserInteracted) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isUserInteracted]);

  useEffect(() => {
    setActiveFeature(features[currentIndex]);
  }, [currentIndex]);

  const handleFeatureClick = (feature, index) => {
    setActiveFeature(feature);
    setIsUserInteracted(true);
    setCurrentIndex(index);
  };

  return (
    <section className="bg-[#000000]">
      <div className="container bg-[#111111] rounded-xl py-20">
        <div className="flex flex-col justify-start items-center lg:items-start">
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4 hidden md:block lg:hidden">
            {t("advance_platform_title_1")} <br className="hidden lg:block" />
            <span className="text-yellow-400">
              {t("advance_platform_title_2")}
            </span>
          </h2>
          <div className="md:grid md:grid-cols-2 gap-72 p-4">
            <div className="text-white flex flex-col space-y-4 items-center md:items-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 block md:hidden lg:block text-center md:text-start">
                {t("advance_platform_title_1")}{" "}
                <br className="hidden lg:block" />
                <span className="text-yellow-400">
                  {t("advance_platform_title_2")}
                </span>
              </h2>
              <div className="flex flex-col space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    onClick={() => handleFeatureClick(feature, index)}
                    className={`cursor-pointer px-2 py-1 rounded-md flex items-center space-x-2 sm:w-[350px] ${
                      activeFeature.name === feature.name
                        ? "bg-[#FED100] text-[#111111] border-2 border-[#EBC100]"
                        : "bg-[#1D1D1D] text-[#ffffff] border-2 border-[#222222]"
                    }`}
                  >
                    <span className="inline-block w-[50px] h-[50px] p-2 rounded-md">
                      <Image
                        unoptimized={true}
                        src={
                          activeFeature.name === feature.name
                            ? feature.iconActive
                            : feature.icon
                        }
                        alt={feature.name}
                        width={100}
                        height={100}
                        className="w-full"
                      />
                    </span>
                    <span
                      className={`text-sm sm:text-base ${
                        activeFeature.name === feature.name
                          ? "font-semibold"
                          : ""
                      }`}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center mt-8 md:mt-0">
              <Image
                unoptimized={true}
                src={activeFeature.image}
                alt="Trade Platform"
                width={100}
                height={100}
                className="w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradePlatform;
