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
  const r = useTranslations("home.testimonial");
  const t = useTranslations("home.ourRecognition");

  const awards = [
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/home-award-12.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/home-award-11.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/home-award-8.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/award-9-latest.webp",
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/home-award-10.webp",
    },
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
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/award-7-latest.webp",
    },
  ];

  useEffect(() => {
    const swiperPrevButton = document.querySelector(
      ".recognition-swiper-button-prev"
    );
    const swiperNextButton = document.querySelector(
      ".recognition-swiper-button-next"
    );

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
        <div className="col-span-1 flex flex-col justify-center text-center">
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
            nextEl: ".recognition-swiper-button-next",
            prevEl: ".recognition-swiper-button-prev",
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
          className={`recognition-swiper-navigation-buttons flex gap-4 w-fit ${
            locale === "ar" || locale === "fa" || locale === "kd"
              ? "float-left"
              : "float-right"
          } relative bottom-[37px] z-[10]`}
          dir={
            locale === "ar" || locale === "fa" || locale === "kd" ? "ltr" : ""
          }
        >
          <button className="recognition-swiper-button-prev group">
            <IoMdArrowBack className="text-[#FED100] group-hover:text-[#111111]" />
          </button>

          <button className="recognition-swiper-button-next group">
            <IoMdArrowForward className="text-[#FED100] group-hover:text-[#111111]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileRecognition;
