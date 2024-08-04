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
import { useEffect } from "react";
import Aos from "aos";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleLink from "@/components/LocaleLink";

const campaignList = [
  {
    id: 1,
    title1: "Greater Gains,",
    title2: "Lower Deposits",
    imgUrlEn:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/raw_account_en.webp",
    imgUrlAr:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/raw_account_ar.webp",
    isExpired: false,
  },
  {
    id: 2,
    title1: "Unlock a 20% Deposit Bonus",
    title2: "Get Up to $25,000",
    imgUrlEn:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/trade_now_en.webp",
    imgUrlAr:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/trade_now_ar.webp",
    isExpired: false,
  },
  {
    id: 3,
    title1: "$30 Welcome Gift",
    title2: "Start with a $30 gift when you verify your account",
    imgUrlEn:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/campaign01.webp",
    imgUrlAr:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/campaign01.webp",
    isExpired: true,
  },
  {
    id: 4,
    title1: "Trade to win",
    title2: "Enter our competetion and compete for Amazing Prizes",
    imgUrlEn:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/campaign02.webp",
    imgUrlAr:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/campaign02.webp",
    isExpired: true,
  },
];

const Rewards = () => {
  const t = useTranslations("home.rewards");

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
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
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
          className="mySwiper"
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
                  src={card.imgUrlEn}
                  width={card.id === 3 ? "250" : card.id === 4 ? "200" : "350"}
                  height="200"
                  alt={card.title1}
                />
                <div className="text-center mt-5">
                  {card.isExpired == false ? (
                    <Button className="bg-secondary text-primary font-semibold w-[200px] rounded-full shadow-xl text-center mx-auto hover:bg-primary hover:text-secondary hover:border-2 hover:border-secondary">
                      Trade Now
                    </Button>
                  ) : (
                    <p className="text-sm text-center text-red-600">
                      this promotion has ended. Stay tuned for more exciting
                      promotions
                    </p>
                  )}
                </div>
                {/* <div class="absolute top-[40%] left-0 w-full h-[600px] opacity-10 bg-center bg-contain bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/bonus/background2.svg')]"></div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Rewards;
