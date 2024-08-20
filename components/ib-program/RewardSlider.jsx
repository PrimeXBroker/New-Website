import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const RewardSlider = ({ rewardsContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  console.log(rewardsContent, "rewardsContent");

  return (
    <div className="container relative">
      <Swiper
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        loop={true}
        pagination={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="rewards_swiper"
      >
        {rewardsContent.map((content, index) => (
          <SwiperSlide key={index} className="rounded-xl">
            <div
              key={index}
              className={`${"w-full sm:max-w-[650px] lg:max-w-[400px] lg:h-[400px] p-[24px] relative duration-700 delay-200overflow-hidden rounded-3xl"} bg-accent`}
            >
              <div className="relative">
                <div className={` opacity-1 transition-opacity duration-300`}>
                  <Image
                    src={content.img}
                    unoptimized={true}
                    width="100"
                    height="100"
                    alt="img"
                    className="w-full"
                  />
                  <h2 className="text-center text-3xl font-bold mt-4 text-secondary">
                    {content.innerTitle1} <br />
                    {content.innerTitle2}
                  </h2>
                  <h3 className="text-center text-xl font-light mt-3 text-secondary">
                    {content.innerSubTitle1}
                    <span className="font-bold">{content.innerSubTitle2}</span>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="">
        <div className="absolute bottom-[50%] right-[3%]">
          <div className="flex justify-center items-center text-lg rounded-full !text-black cursor-pointer z-10 -mt-6 h-11 w-11 bg-transparent swiper-button-next">
            <FaArrowRight className="items-center justify-center text-white hidden" />
          </div>
        </div>
        <div className="absolute bottom-[50%] left-[3%]">
          <div className="flex justify-center items-center text-lg rounded-full !text-black cursor-pointer z-10 -mt-6 h-11 w-11 bg-transparent swiper-button-prev">
            <FaArrowLeft className="hidden items-center justify-center text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardSlider;
