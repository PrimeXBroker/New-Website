"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

const KeyFeatures = () => {
  const t = useTranslations("metaTrader5.keyFeatures");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleIconEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleIconLeave = () => {
    setHoveredIndex(null);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const features = [
    {
      title: t("feature_1_title"),
      description: t("feature_1_desc"),
      imgUrl: "/images/platform/mt-5/user.svg",
      imgHoverUrl: "/images/platform/mt-5/user.svg",
    },
    {
      title: t("feature_2_title"),
      description: t("feature_2_desc"),
      imgUrl: "/images/platform/mt-5/trading.svg",
      imgHoverUrl: "/images/platform/mt-5/trading.svg",
    },
    {
      title: t("feature_3_title"),
      description: t("feature_3_desc"),
      imgUrl: "/images/platform/mt-5/mobile.svg",
      imgHoverUrl: "/images/platform/mt-5/mobile.svg",
    },
  ];

  const nextFeature = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-secondary text-white">
      <div className="flex items-center flex-col justify-center space-x-6">
        <div>
          <h1 className="sectionHeading text-white p-12">{t("title")}</h1>
        </div>
        <div className="flex space-x-6 flex-wrap">
          {features.map((feature, index) => (
            <div
              onMouseEnter={() => handleIconEnter(index)}
              onMouseLeave={handleIconLeave}
              key={index}
              className={`flex flex-col justify-center bg-[#3F3F3E] cursor-pointer rounded-2xl shadow-2xl border-b-5 md:w-[200px] h-[250px] group
                      hover:bg-[#3F3F3E] border-black hover:border-primary transform translate-y-[0]
             ${
               index === activeIndex
                 ? "border-primary translate-y-[-1rem] transition-transform duration-500"
                 : "border-white"
             }`}
            >
              <div className="flex justify-end mb-4">
                <Image
                  src={
                    hoveredIndex === index
                      ? feature.imgHoverUrl
                      : feature.imgUrl
                  }
                  alt="academy icon"
                  width="70"
                  height="70"
                  className="block mx-0 academy_img"
                />
              </div>
              <h1
                className={`pl-4 sectionHeading md:text-xl text-left text-[14px] ${
                  index === activeIndex ? "text-primary" : "text-white"
                }`}
              >
                {feature.title}
              </h1>
              <p className="pl-4 sectionPara text-left text-sm text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 pt-8">
          <FaArrowAltCircleLeft
            className="cursor-pointer hover:text-primary hover:transition-colors hover:duration-500"
            onClick={prevFeature}
            size={30}
          />
          <FaArrowAltCircleRight
            className="cursor-pointer hover:text-primary hover:transition-colors hover:duration-500"
            onClick={nextFeature}
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
