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

const Testimonials = () => {
  const locale = useLocale();
  const t = useTranslations("academy.successStories");
  const r = useTranslations("home.testimonial");

  const reviews = [
    {
      profile: "RA",
      name: t("review_name_1"),
      title: t("review_title_1"),
      description: t("review_description_1"),
      country: t("review_country_1"),
      date: t("review_date_1"),
    },
    {
      profile: "HA",
      name: t("review_name_2"),
      title: t("review_title_2"),
      description: t("review_description_2"),
      country: t("review_country_2"),
      date: t("review_date_2"),
    },
    {
      profile: "AH",
      name: t("review_name_3"),
      title: t("review_title_3"),
      description: t("review_description_3"),
      country: t("review_country_3"),
      date: t("review_date_3"),
    },
    {
      profile: "AL",
      name: t("review_name_4"),
      title: t("review_title_4"),
      description: t("review_description_4"),
      country: t("review_country_4"),
      date: t("review_date_4"),
    },
    {
      profile: "AM",
      name: t("review_name_5"),
      title: t("review_title_5"),
      description: t("review_description_5"),
      country: t("review_country_5"),
      date: t("review_date_5"),
    },
    {
      profile: "YO",
      name: t("review_name_6"),
      title: t("review_title_6"),
      description: t("review_description_6"),
      country: t("review_country_6"),
      date: t("review_date_6"),
    },
    {
      profile: "HU",
      name: t("review_name_7"),
      title: t("review_title_7"),
      description: t("review_description_7"),
      country: t("review_country_7"),
      date: t("review_date_7"),
    },
    {
      profile: "HA",
      name: t("review_name_8"),
      title: t("review_title_8"),
      description: t("review_description_8"),
      country: t("review_country_8"),
      date: t("review_date_8"),
    },
    {
      profile: "FA",
      name: t("review_name_9"),
      title: t("review_title_9"),
      description: t("review_description_9"),
      country: t("review_country_9"),
      date: t("review_date_9"),
    },
  ];

  useEffect(() => {
    const swiperPrevButton = document.querySelector(
      ".reviews-swiper-button-prev"
    );
    const swiperNextButton = document.querySelector(
      ".reviews-swiper-button-next"
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
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            <span className="text-[#ffffff]">{r("title1")}</span>
            <span className="text-[#FED100]">{r("title2")}</span>
            <span className="text-[#ffffff]">{r("title3")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-4 md:w-[575px] mx-auto text-[#ffffff]">
            {r("desc")}
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
          centeredSlides={true}
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
            nextEl: ".reviews-swiper-button-next",
            prevEl: ".reviews-swiper-button-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mt-5 home-testimonial-pagination"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-sm mx-auto bg-[#111111] rounded-lg border-2 border-[#1D1D1D] shadow-md p-4 min-h-[346px] mb-9">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 p-4 rounded-full bg-[#FED100] flex items-center justify-center text-xl font-bold">
                    {review.profile}
                  </div>
                  <div
                    className={`${
                      locale === "ar" || locale === "fa" || locale === "kur"
                        ? "mr-4"
                        : "ml-4"
                    }`}
                  >
                    <div className="font-semibold text-[#ffffff]">
                      {review.name}
                    </div>
                    <div className="text-sm text-[#c6c6c6] flex">
                      <Image
                        unoptimized={true}
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Location+Icon.svg"
                        alt=""
                        width={17}
                        height={17}
                      />
                      <span className="ml-1">{review.country}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Image
                    unoptimized={true}
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Rating+Stars.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div
                    className={`text-sm text-[#c6c6c6] ${
                      locale === "ar" || locale === "fa" || locale === "kur"
                        ? "mr-auto"
                        : "ml-auto"
                    }`}
                  >
                    {review.date}
                  </div>
                </div>
                <div className="bg-[#1D1D1D] border-2 border-[#222222] rounded-[4px] p-[16px] min-h-[210px]">
                  <div className="font-semibold mb-2 text-[#ffffff]">
                    {review.title}
                  </div>
                  <div className="text-[#c6c6c6] text-sm">
                    {review.description}
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
          } relative bottom-[37px] z-[10] `}
          dir={
            locale === "ar" || locale === "fa" || locale === "kur" ? "ltr" : ""
          }
        >
          <button className="reviews-swiper-button-prev group">
            <IoMdArrowBack className="text-[#FED100] group-hover:text-[#111111] " />
          </button>

          <button className="reviews-swiper-button-next group">
            <IoMdArrowForward className="text-[#FED100] group-hover:text-[#111111]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
