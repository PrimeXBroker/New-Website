import React,{useState} from "react";
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
const RewardSlider = ({ tabsContent,handleTabClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
      };
  return (
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
      {tabsContent.map((content, index) => (
        <SwiperSlide key={index} className="rounded-xl">
        <div
                    key={index}
                    className={`${
                         "w-full sm:max-w-[650px] lg:max-w-[400px] lg:h-[400px] p-[24px] relative duration-700 delay-200overflow-hidden rounded-3xl"
                    } bg-accent`}
                  >
                    <div className="relative">
                      <div
                        className={`flex flex-col items-center justify-center cursor-pointer h-[400px] ${
                          activeIndex === index ? "hidden" : "block"
                        }`}
                      >
                        <div className="-rotate-90">
                          <h3 className="text-center text-xl font-semibold mb-0 text-secondary w-[350px]">
                            {content.title}
                          </h3>
                        </div>
                      </div>
                      <div
                        className={`${
                          activeIndex === index ? "block" : "hidden"
                        } opacity-1 transition-opacity duration-300`}
                      >
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
                          <span className="font-bold">
                            {content.innerSubTitle2}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
      ))}
      {/* {tabsContent.map((card, index) => (
        <SwiperSlide key={index} className="rounded-xl">
          <div
            key={index}
            className="flex flex-col bg-accent p-8 rounded-xl h-[500px]"
          >
            <h1 className="text-secondary text-xl text-center bg-primary rounded-lg w-fit mx-auto p-1">
              {card.title1}
            </h1>
            <h2 className="text-secondary text-2xl font-semibold text-center">
              {card.title2}
            </h2>
            <Image
              className="block mx-auto"
              src={language === "ar" ? card.imgUrlAr : card.imgUrlEn}
              width={card.id === 3 ? "250" : card.id === 4 ? "200" : "350"}
              height="200"
              alt={card.title1}
            />
            <div className="text-center mt-5">
              {card.isExpired == false ? (
                <Button
                  hidden={index !== activeIndex}
                  as={Link}
                  href="https://client.primexbroker.com/en/register"
                  className={`bg-secondary absolute right-0 left-0 bottom-[-15px] 
              text-primary font-semibold w-[200px] rounded-full shadow-md text-center 
              mx-auto hover:bg-primary hover:text-secondary hover:border-2 hover:border-secondary`}
                >
                  {t("trade_now")}
                </Button>
              ) : (
                <p className="text-sm text-center text-red-600">
                  {t("expired_promotion")}
                </p>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
};

export default RewardSlider;
