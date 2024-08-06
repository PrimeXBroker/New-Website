"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useEffect,useState } from "react";
import Aos from "aos";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";





const Rewards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("home.rewards");
  const language = useLocale();
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    console.log(activeIndex);
  };
  const campaignList = [
    {
      id: 1,
      title1: t("lower_deposits.title1_1"),
      title2: t("lower_deposits.title1_2"),
      imgUrlEn:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/raw_account_en.webp",
      imgUrlAr:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/raw_account_ar.webp",
      isExpired: false,
    },
    {
      id: 2,
      title1: t("20_deposit_bonus.title1_1"),
      title2: t("20_deposit_bonus.title1_2"),
      imgUrlEn:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/trade_now_en.webp",
      imgUrlAr:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/trade_now_ar.webp",
      isExpired: false,
    },
    {
      id: 3,
      title1: t("30_welcome_gift.title1_1"),
      title2: t("30_welcome_gift.title1_2"),
      imgUrlEn:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/campaign01.webp",
      imgUrlAr:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/campaign01.webp",
      isExpired: true,
    },
    {
      id: 4,
      title1: t("trade_to_win.title1_1"),
      title2: t("trade_to_win.title1_2"),
      imgUrlEn:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/campaign02.webp",
      imgUrlAr:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/campaign02.webp",
      isExpired: true,
    },
  ];
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section className="py-12 home_swiper">
      <h1
        className="sectionHeading mt-8"
        data-aos-easing="ease-out"
        data-aos-duration={1100}
        data-aos="slide-up"
      >
        {t("rewards_title")}
      </h1>
      <div className="container relative">
        <Swiper
          centeredSlides={true}
          onSlideChange={handleSlideChange}
          effect={"coverflow"}
          grabCursor={false}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          loop={true}
          pagination={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="rewards_swiper"
          >
          {campaignList.map((card, index) => (
            <SwiperSlide className="rounded-xl">
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
                  src={language === "ar"?card.imgUrlAr:card.imgUrlEn}
                  width={card.id === 3 ? "250" : card.id === 4 ? "200" : "350"}
                  height="200"
                  alt={card.title1}
                />
                <div className="text-center mt-5">
                  {card.isExpired == false ? (
                    <Button
                    as={Link}
                    href="https://client.primexbroker.com/en/register"
                    disabled={index != activeIndex} 
                    className={`bg-secondary absolute right-0 left-0 bottom-[-15px] 
                    text-primary font-semibold w-[200px] rounded-full shadow-md text-center 
                    mx-auto hover:bg-primary hover:text-secondary hover:border-2 hover:border-secondary`}>
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
          ))}
        </Swiper>
        <div className="">
              <div className="absolute bottom-[50%] right-[5%]">
                <div className="flex justify-center items-center text-lg rounded-full text-white cursor-pointer z-10 -mt-6 h-11 w-11 bg-secondary swiper-button-next">
                  <FaArrowRight color="#FFD000" className="items-center justify-center text-white hidden" />
                </div>
              </div>
              <div className="absolute bottom-[50%] left-[5%]">
                <div className="flex justify-center items-center text-lg rounded-full text-white cursor-pointer z-10 -mt-6 h-11 w-11 bg-secondary swiper-button-prev">
                  <FaArrowLeft className="hidden items-center justify-center text-white" />
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
