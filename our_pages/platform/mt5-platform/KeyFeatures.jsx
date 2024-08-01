"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa";
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
    {
      title: t("feature_4_title"),
      description: t("feature_4_desc"),
      imgUrl: "/images/platform/mt-5/netting.svg",
      imgHoverUrl: "/images/platform/mt-5/netting.svg",
    },
    {
      title: t("feature_5_title"),
      description: t("feature_5_desc"),
      imgUrl: "/images/platform/mt-5/timeframe.svg",
      imgHoverUrl: "/images/platform/mt-5/timeframe.svg",
    },
    {
      title: t("feature_6_title"),
      description: t("feature_6_desc"),
      imgUrl: "/images/platform/mt-5/calender.svg",
      imgHoverUrl: "/images/platform/mt-5/calender.svg",
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
    <div className="bg-secondary text-white py-8 mt5-key-features">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-6 sm-col-span-4 lg:col-span-2">
          <div>
            <h1 className="sectionHeading text-white px-12 text-left">
              {t("title")}
            </h1>
          </div>
          <div className="px-12 pt-5 relative">
            <div className="absolute left-[16%] right-auto">
              <FaArrowAltCircleLeft
                className="cursor-pointer  fill-white hover:fill-primary hover:transition-colors hover:duration-500 swiper-button-prev"
                onClick={prevFeature}
                size={40}
              />
            </div>
            <div className="absolute right-[44%] left-auto">
              <FaArrowAltCircleRight
                className="cursor-pointer fill-white hover:fill-primary hover:transition-colors hover:duration-500 swiper-button-next"
                onClick={nextFeature}
                size={40}
              />
            </div>
          </div>
        </div>
        <div className="col-span-6 sm-col-span-8 lg:col-span-10">
          <Swiper
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              300: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            spaceBetween={5}
            slidesPerView={5}
            loop
            pagination={false}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {features.map((feature, index) => {
              return (
                <SwiperSlide>
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
