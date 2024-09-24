"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const SuccessStories = () => {
  const locale = useLocale();
  const t = useTranslations("academy.successStories");

  const reviews = [
    {
      name: t("review_name_1"),
      title: t("review_title_1"),
      description: t("review_description_1"),
      country: t("review_country_1"),
      date: t("review_date_1"),
    },
    {
      name: t("review_name_2"),
      title: t("review_title_2"),
      description: t("review_description_2"),
      country: t("review_country_2"),
      date: t("review_date_2"),
    },
    {
      name: t("review_name_3"),
      title: t("review_title_3"),
      description: t("review_description_3"),
      country: t("review_country_3"),
      date: t("review_date_3"),
    },
    {
      name: t("review_name_4"),
      title: t("review_title_4"),
      description: t("review_description_4"),
      country: t("review_country_4"),
      date: t("review_date_4"),
    },
    {
      name: t("review_name_5"),
      title: t("review_title_5"),
      description: t("review_description_5"),
      country: t("review_country_5"),
      date: t("review_date_5"),
    },
    {
      name: t("review_name_6"),
      title: t("review_title_6"),
      description: t("review_description_6"),
      country: t("review_country_6"),
      date: t("review_date_6"),
    },
    {
      name: t("review_name_7"),
      title: t("review_title_7"),
      description: t("review_description_7"),
      country: t("review_country_7"),
      date: t("review_date_7"),
    },
    {
      name: t("review_name_8"),
      title: t("review_title_8"),
      description: t("review_description_8"),
      country: t("review_country_8"),
      date: t("review_date_8"),
    },
    {
      name: t("review_name_9"),
      title: t("review_title_9"),
      description: t("review_description_9"),
      country: t("review_country_9"),
      date: t("review_date_9"),
    },
  ];

  return (
    <section className="container py-12">
      <h2 className="text-secondary md:text-3xl text-2xl font-semibold text-center mb-6">
        {t("title")}
      </h2>
      <p className="text-secondary text-[1rem] md:text-lg text-center max-w-xl mx-auto">
        {t("description")}
      </p>
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
        modules={[Autoplay, Pagination]}
        className="mt-5"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-sm mx-auto bg-[#F3F3F3] rounded-lg shadow-md p-4 min-h-[288px]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 p-4 rounded-full bg-white flex items-center justify-center text-xl font-bold">
                  RA
                </div>
                <div className={`${locale === "ar" ? "mr-4" : "ml-4"}`}>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-500">
                    {" "}
                    <span className="ml-2">{review.country}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="bg-[#53B07F] p-1">
                      <svg
                        key={index}
                        className="w-4 h-4 text-[#fff]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974h4.174c.97 0 1.371 1.24.588 1.81l-3.368 2.448 1.286 3.974c.3.921-.755 1.688-1.541 1.117l-3.368-2.448-3.368 2.448c-.786.571-1.841-.196-1.541-1.117l1.286-3.974-3.368-2.448c-.783-.57-.382-1.81.588-1.81h4.174l1.286-3.974z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div
                  className={`text-sm text-gray-500 ${
                    locale === "ar" ? "mr-auto" : "ml-auto"
                  }`}
                >
                  {review.date}
                </div>
              </div>
              <div className="font-semibold mb-2">{review.title}</div>
              <div className="text-gray-700 text-sm">{review.description}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SuccessStories;
