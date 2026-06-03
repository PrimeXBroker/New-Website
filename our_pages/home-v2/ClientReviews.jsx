"use client";
import React, { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useTheme } from "next-themes";

const ClientReviews = () => {
  const locale = useLocale();
  const { theme } = useTheme();
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
      ".promotions-swiper-button-prev",
    );
    const swiperNextButton = document.querySelector(
      ".promotions-swiper-button-next",
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
            <SwiperSlide key={index} className="!h-auto flex">
              <div className="relative overflow-hidden flex flex-col justify-between max-w-sm mx-auto bg-cc dark:bg-cc-dark rounded-xl p-8 w-full flex-1 mb-9">
                <div className="flex flex-col flex-1 h-full">
                  <div className="flex-1 flex flex-col justify-between">
                    <div
                      className={`absolute top-[17px] ${locale === "ar" || locale === "ku" ? "end-[100px]" : "end-[80px]"} w-28 h-28 pointer-events-none`}
                    >
                      <Image
                        unoptimized={true}
                        src={
                          theme === "dark"
                            ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/dark/Background+X.png"
                            : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/light/Background+X.png"
                        }
                        alt="Background Accent"
                        width={71}
                        height={81}
                        className="w-[88px] h-auto"
                      />
                    </div>
                    <div className="flex justify-between items-center mb-8">
                      <Image
                        unoptimized={true}
                        src={
                          theme === "dark"
                            ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/dark/All+Stars.png"
                            : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/light/All+Stars.png"
                        }
                        alt="Star Reviews"
                        width={132}
                        height={132}
                        className="w-[124px] h-auto"
                      />
                      <div className="flex gap-2 items-center bg-[#f5f5f5] dark:bg-white dark:bg-opacity-[0.12] border-[0.7px] border-[#f5f5f5] dark:border-white dark:border-opacity-[0.15] px-2 py-1 rounded-[4px]">
                        <Image
                          unoptimized={true}
                          src={
                            theme === "dark"
                              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/dark/Location+Pin+Icon.png"
                              : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/light/Location+Pin+Icon.png"
                          }
                          alt="Location Icon"
                          width={16}
                          height={16}
                        />
                        <span className="text-ts dark:text-ts-dark text-xs font-medium">
                          {review.country}
                        </span>
                      </div>
                    </div>
                    <div>
                      <Image
                        unoptimized={true}
                        src={
                          theme === "dark"
                            ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/dark/Double+Quotes.png"
                            : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/light/Double+Quotes.png"
                        }
                        alt="Double Quotes"
                        width={25}
                        height={25}
                        className={`${locale === "ar" || locale === "ku" || locale === "ps" || locale === "fa" ? "transform rotate-180" : ""}`}
                      />
                      <p className="text-tm dark:text-tm-dark text-sm sm:text-base font-medium mt-4 mb-8">
                        {review.description}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-[#636363] dark:text-[#636363]">
                      {review.name}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`promotion-swiper-navigation-buttons flex gap-3 w-fit float-right relative bottom-[37px] z-[10] ${
            locale === "ar" ||
            locale === "ps" ||
            locale === "ku" ||
            locale === "fa"
              ? "float-left"
              : "float-right"
          }`}
          dir={
            locale === "ar" ||
            locale === "ps" ||
            locale === "ku" ||
            locale === "fa"
              ? "ltr"
              : ""
          }
        >
          <button className="promotions-swiper-button-prev">
            <Image
              unoptimized={true}
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/dark/arrow+move+left.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/light/arrow+move+left.png"
              }
              alt="Double Quotes"
              fill
              className="w-full h-auto object-cover"
            />
          </button>
          <button className="promotions-swiper-button-next">
            <Image
              unoptimized={true}
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/dark/arrow+move+right.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/light/arrow+move+right.png"
              }
              alt="Double Quotes"
              fill
              className="w-full h-auto object-cover"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
