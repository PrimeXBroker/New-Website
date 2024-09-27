"use client";
import React, { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const MobileRecognition = () => {
  const locale = useLocale();
  const r = useTranslations("newHomePage.testimonial");
  const t = useTranslations("newHomePage.ourRecognition");

  const awards = [
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+1.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+2.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+3.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+4.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+5.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+6.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Award+7.webp",
    },
  ];

  useEffect(() => {
    const swiperPrevButton = document.querySelector(".swiper-button-prev");
    const swiperNextButton = document.querySelector(".swiper-button-next");

    if (swiperPrevButton && swiperNextButton) {
      swiperPrevButton.addEventListener("click", () => {
        console.log("Prev clicked");
      });
      swiperNextButton.addEventListener("click", () => {
        console.log("Next clicked");
      });
    }
  }, []);

  return (
    <section className="py-10 bg-[#000000]">
      <div className="container">
        <div className="col-span-1 flex flex-col justify-center">
          <h2 className="text-[#ffffff] text-2xl sm:text-3xl font-bold">
            {t("our_recognition_title1")} <br />
            <span className="text-[#FED100]">
              {t("our_recognition_title2")}
            </span>
          </h2>
          <p className="text-sm mt-1 text-[#ffffff]">
            {t("our_recognition_desc")}
          </p>
        </div>
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
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          loop
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mt-5 home-testimonial-pagination"
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="text-center">
                <Image
                  unoptimized={true}
                  src={award.imgSrc}
                  alt={`Award ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full mb-4"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`swiper-navigation-buttons flex gap-4 w-fit ${
            locale === "ar" ? "float-left" : "float-right"
          } relative bottom-[37px] z-[10]`}
        >
          <button className="swiper-button-prev bg-transparent text-black p-2 w-[40px] h-[40px] border-1 border-[#ffffff] rounded-full flex justify-center items-center">
            <IoMdArrowBack className="text-[#ffffff] text-xl" />
          </button>

          <button className="swiper-button-next bg-transparent text-black p-2 w-[40px] h-[40px] border-1 border-[#ffffff] rounded-full flex justify-center items-center">
            <IoMdArrowForward className="text-[#ffffff] text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileRecognition;
