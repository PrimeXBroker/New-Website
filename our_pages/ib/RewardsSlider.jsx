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
import Logo from "@/public/images/logos/logo-white.webp";

const RewardsSlider = () => {
  const locale = useLocale();
  const t = useTranslations("ibProgram.rewards");

  const awards = [
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Mobile-Iphone.svg",
      title: t("reward1_title"),
      lots: t("reward1_lots"),
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/1000%24-mbl.webp",
      title: t("reward2_title"),
      lots: t("reward2_lots"),
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Macbook-mbl.webp",
      title: t("reward3_title"),
      lots: t("reward3_lots"),
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/5000%24-mbl.webp",
      title: t("reward4_title"),
      lots: t("reward4_lots"),
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/20000-mbl.webp",
      title: t("reward5_title"),
      lots: t("reward5_lots"),
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Maldives-mbl.webp",

      title: t("reward6_title"),
      lots: t("reward6_lots"),
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Europe-mbl.webp",
      title: t("reward7_title"),
      lots: t("reward7_lots"),
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Mercedes-mbl.webp",
      title: t("reward8_title"),
      lots: t("reward8_lots"),
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Bentley-mbl.webp",
      title: t("reward9_title"),
      lots: t("reward9_lots"),
    },
    {
      imgSrc:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Dubai-mbl.webp",
      title: t("reward10_title"),
      lots: t("reward10_lots"),
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
        <div className="col-span-1 flex flex-col justify-center text-center">
          <Image
            unoptimized={true}
            width="120"
            height="120"
            src={Logo}
            alt="Logo Image"
            className="mb-2 mx-auto"
          />
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#ffffff]">
            {t("main_title1")}
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#ffffff] mb-2">
            {t("main_title2")}
          </h2>
          <p className="text-sm sm:text-base text-[#ffffff]">
            {t("main_desc")}
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
              <div key={index} className="relative">
                <Image
                  unoptimized={true}
                  src={award.imgSrc}
                  alt={`Award ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full mb-4"
                />
                <div className="absolute bottom-5 px-5">
                  <h3 className="text-lg text-[#ffffff] mb-2">{award.title}</h3>
                  <div className=" bg-[#FED100] py-2 px-3 text-center rounded text-[#111111] font-semibold text-xs inline-block">
                    {award.lots}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`review-swiper-navigation-buttons flex gap-4 w-fit ${
            locale === "ar" || locale === "fa" || locale === "kur"
              ? "float-left"
              : "float-right"
          } relative bottom-[37px] z-[10]`}
          dir={
            locale === "ar" || locale === "fa" || locale === "kur" ? "ltr" : ""
          }
        >
          <button className="swiper-button-prev group">
            <IoMdArrowBack className="text-[#FED100] group-hover:text-[#111111]" />
          </button>

          <button className="swiper-button-next group">
            <IoMdArrowForward className="text-[#FED100] group-hover:text-[#111111]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RewardsSlider;
