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
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { useTheme } from "next-themes";

const RewardsSlider = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("ibProgram.rewards");

  const awards = [
    {
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Mobile-Iphone.svg",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-mobile/Iphone+Light.webp",
      title: t("reward1_title"),
      lots: t("reward1_lots"),
    },
    {
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/1000%24-mbl.webp",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-mobile/1000%24+Light.webp",
      title: t("reward2_title"),
      lots: t("reward2_lots"),
    },
    {
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Macbook-mbl.webp",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-mobile/Macbook+Light.webp",
      title: t("reward3_title"),
      lots: t("reward3_lots"),
    },
    {
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/5000%24-mbl.webp",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-mobile/5000%24+Light.webp",
      title: t("reward4_title"),
      lots: t("reward4_lots"),
    },
    {
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/20000-mbl.webp",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-mobile/20%2C000%24+Light.webp",
      title: t("reward5_title"),
      lots: t("reward5_lots"),
    },
    {
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Maldives-mbl.webp",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-mobile/Maldives+Light.webp",

      title: t("reward6_title"),
      lots: t("reward6_lots"),
    },
    {
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Europe-mbl.webp",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-mobile/Family+Trip+Light.webp",
      title: t("reward7_title"),
      lots: t("reward7_lots"),
    },
    {
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Mercedes-mbl.webp",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-mobile/Mercedes+Light.webp",
      title: t("reward8_title"),
      lots: t("reward8_lots"),
    },
    {
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Bentley-mbl.webp",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-mobile/Bently+Light.webp",
      title: t("reward9_title"),
      lots: t("reward9_lots"),
    },
    {
      imgDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Dubai-mbl.webp",
      imgLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/ib/rewards-mobile/Apartment+Light.webp",
      title: t("reward10_title"),
      lots: t("reward10_lots"),
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
    <section className="py-10 bg-p dark:bg-p-dark">
      <div className="container">
        <div className="col-span-1 flex flex-col justify-center text-center">
          <Image
            unoptimized={true}
            width="120"
            height="120"
            src={
              theme === "dark"
                ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-white.webp"
                : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-logos/logo-black.webp"
            }
            alt="Logo Image"
            className="mb-2 mx-auto"
          />
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-tm dark:text-tm-dark">
            {t("main_title1")}
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-tm dark:text-tm-dark mb-2">
            {t("main_title2")}
          </h2>
          <p className="text-sm sm:text-base text-tm dark:text-tm-dark">
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
            nextEl: ".promotions-swiper-button-next",
            prevEl: ".promotions-swiper-button-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mt-5 home-testimonial-pagination"
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="relative">
                <Image
                  unoptimized={true}
                  src={theme === "dark" ? award.imgDark : award.imgLight}
                  alt={`Award ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full mb-4"
                />
                <div className="absolute bottom-5 px-5">
                  <h3 className="text-lg text-nw dark:text-nw-dark mb-2">
                    {award.title}
                  </h3>
                  <div className=" bg-pcp dark:bg-pcp-dark py-2 px-3 text-center rounded text-nb dark:text-nb-dark font-semibold text-xs inline-block">
                    {award.lots}
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

export default RewardsSlider;
