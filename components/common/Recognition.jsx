"use client";
import React, { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const Recognition = () => {
  const locale = useLocale();
  const t = useTranslations("home.ourRecognition");

  const recognition = [
    {
      badge: t("award1_badge"),
      title: t("award1_title1"),
      description: t("award1_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award1.webp",
    },
    {
      badge: t("award2_badge"),
      title: t("award2_title1"),
      title2: t("award2_title2"),
      description: t("award2_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award2.webp",
    },
    {
      badge: t("award3_badge"),
      title: t("award3_title1"),
      description: t("award3_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award3.webp",
    },
    {
      badge: t("award4_badge"),
      title: t("award4_title1"),
      title2: t("award4_title2"),
      description: t("award4_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award4.webp",
    },
    {
      badge: t("award5_badge"),
      title: t("award5_title1"),
      description: t("award5_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award5.webp",
    },
    {
      badge: t("award6_badge"),
      title: t("award6_title1"),
      description: t("award6_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award6.webp",
    },
    {
      badge: t("award7_badge"),
      title: t("award7_title1"),
      description: t("award7_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award7.webp",
    },
    {
      badge: t("award8_badge"),
      title: t("award8_title1"),
      description: t("award8_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award8.webp",
    },
    {
      badge: t("award9_badge"),
      title: t("award9_title1"),
      description: t("award9_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award9.webp",
    },
    {
      badge: t("award10_badge"),
      title: t("award10_title1"),
      description: t("award10_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award10.webp",
    },
    {
      badge: t("award11_badge"),
      title: t("award11_title1"),
      description: t("award11_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award11.webp",
    },
    {
      badge: t("award12_badge"),
      title: t("award12_title1"),
      description: t("award12_desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/award12.webp",
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
    <section className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark">
            {t("our_recognition_title1")}
            <span className="text-pcp dark:text-pcp-dark">
              {t("our_recognition_title2")}
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[600px] mx-auto text-ts dark:text-ts-dark">
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
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
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
          {recognition.map((recognition, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-12 mx-auto bg-cc dark:bg-cc-dark rounded-xl p-8 mb-9 items-center min-h-[192px]">
                <div className="col-span-8">
                  <h2 className="text-tm dark:text-tm-dark font-bold text-base sm:text-[22px] capitalize">
                    {recognition.badge}
                  </h2>
                  <h2 className="text-tm dark:text-tm-dark font-bold text-base sm:text-[22px] capitalize my-[3px]">
                    {recognition.title}
                  </h2>
                  {recognition.title2 && (
                    <h2 className="text-tm dark:text-tm-dark font-bold text-base sm:text-[22px] capitalize">
                      {recognition.title2}
                    </h2>
                  )}
                  <p className="text-ts dark:text-ts-dark font-normal text-xs sm:text-sm mb-0 mt-1">
                    {recognition.description}
                  </p>
                </div>
                <div className="col-span-4">
                  <div className="">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={recognition.image}
                      alt="Award"
                      className="w-[104px] h-[104px] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`promotion-swiper-navigation-buttons flex gap-4 w-fit float-right relative bottom-[37px] z-[10] ${
            locale === "ar" || locale === "ps" || locale === "ku"
              ? "float-left"
              : "float-right"
          }`}
          dir={
            locale === "ar" || locale === "ps" || locale === "ku" ? "ltr" : ""
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

export default Recognition;
