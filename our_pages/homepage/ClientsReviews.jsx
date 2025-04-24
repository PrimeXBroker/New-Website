"use client";
import React, { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const ClientReviews = () => {
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
      rating: t("rating1"),
    },
    {
      profile: "HA",
      name: t("review_name_2"),
      title: t("review_title_2"),
      description: t("review_description_2"),
      country: t("review_country_2"),
      date: t("review_date_2"),
      rating: t("rating2"),
    },
    {
      profile: "AH",
      name: t("review_name_3"),
      title: t("review_title_3"),
      description: t("review_description_3"),
      country: t("review_country_3"),
      date: t("review_date_3"),
      rating: t("rating3"),
    },
    {
      profile: "AL",
      name: t("review_name_4"),
      title: t("review_title_4"),
      description: t("review_description_4"),
      country: t("review_country_4"),
      date: t("review_date_4"),
      rating: t("rating4"),
    },
    {
      profile: "AM",
      name: t("review_name_5"),
      title: t("review_title_5"),
      description: t("review_description_5"),
      country: t("review_country_5"),
      date: t("review_date_5"),
      rating: t("rating5"),
    },
    {
      profile: "YO",
      name: t("review_name_6"),
      title: t("review_title_6"),
      description: t("review_description_6"),
      country: t("review_country_6"),
      date: t("review_date_6"),
      rating: t("rating6"),
    },
    {
      profile: "HU",
      name: t("review_name_7"),
      title: t("review_title_7"),
      description: t("review_description_7"),
      country: t("review_country_7"),
      date: t("review_date_7"),
      rating: t("rating7"),
    },
    {
      profile: "HA",
      name: t("review_name_8"),
      title: t("review_title_8"),
      description: t("review_description_8"),
      country: t("review_country_8"),
      date: t("review_date_8"),
      rating: t("rating8"),
    },
    {
      profile: "FA",
      name: t("review_name_9"),
      title: t("review_title_9"),
      description: t("review_description_9"),
      country: t("review_country_9"),
      date: t("review_date_9"),
      rating: t("rating8"),
    },
  ];

  useEffect(() => {
    const swiperPrevButton = document.querySelector(
      ".promotions-swiper-button-prev"
    );
    const swiperNextButton = document.querySelector(
      ".promotions-swiper-button-next"
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
    <section className="bg-p dark:bg-p-dark">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold">
            <span className="text-tm dark:text-tm-dark">{r("title1")}</span>
            <span className="text-pcp dark:text-pcp-dark">{r("title2")}</span>
            <span className="text-tm dark:text-tm-dark">{r("title3")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[600px] mx-auto text-ts dark:text-ts-dark">
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
          slidesPerView={"auto"}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={20}
          loop
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".promotions-swiper-button-next",
            prevEl: ".promotions-swiper-button-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="home-testimonial-pagination"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-sm mx-auto bg-cc dark:bg-cc-dark rounded-xl p-6 min-h-[210px] sm:min-h-[229px] mb-9">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-2 items-center">
                    <div className="font-semibold text-tm dark:text-tm-dark text-xl">
                      {review.name}
                    </div>
                    <div className="text-lg text-ts dark:text-ts-dark font-medium flex">
                      <Image
                        unoptimized={true}
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Location+Icon.svg"
                        alt="Location Icon"
                        width={24}
                        height={24}
                      />
                      <span className="">{review.country}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      unoptimized={true}
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Star-Review.svg"
                      alt="Location Icon"
                      width={24}
                      height={24}
                    />
                    <span className="text-tm dark:text-tm-dark font-normal text-lg">
                      {review.rating}
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="text-ts dark:text-ts-dark text-sm sm:text-base font-medium">
                    {review.description}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`promotion-swiper-navigation-buttons flex gap-4 w-fit float-right relative bottom-[37px] z-[10] ${
            locale === "ar" || locale === "fa" || locale === "ku"
              ? "float-left"
              : "float-right"
          }`}
          dir={
            locale === "ar" || locale === "fa" || locale === "ku" ? "ltr" : ""
          }
        >
          <button className="promotions-swiper-button-prev group !bg-tl dark:!bg-tl-dark hover:!bg-pcp dark:hover:!bg-pcp group transition-colors duration-300 ease-in-out">
            <TiArrowLeftThick className="text-nw dark:text-nw-dark group-hover:text-nb dark:group-hover:text-nb-dark transition-transform duration-500 ease-in-out" />
          </button>
          <button className="promotions-swiper-button-next group !bg-tl dark:!bg-tl-dark hover:!bg-pcp dark:hover:!bg-pcp group transition-colors duration-300 ease-in-out">
            <TiArrowRightThick
              className="text-nw dark:text-nw-dark group-hover:text-nb dark:group-hover:text-nb-dark"
              transition-transform
              duration-500
              ease-in-out
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
