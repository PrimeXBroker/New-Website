"use client";
import React, { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

const Promotions = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("home.promotions");

  const promotionsData = [
    {
      id: 1,
      imageDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/promotions/dark/PrimeX+Spreads.png",
      imageLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/promotions/light/PrimeX+Spreads.png",
      altText: "IB Program",
      title: t("promotion3.title"),
      description: t("promotion3.desc"),
      link: `/${locale}/investment-fund`,
    },
    {
      id: 2,
      imageDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/promotions/dark/PrimeX+Spreads.png",
      imageLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/promotions/light/PrimeX+Spreads.png",
      altText: "PrimeX Spread",
      title: t("promotion2.title"),
      description: t("promotion2.desc"),
      link: `/${locale}/ib-program`,
    },
    {
      id: 3,
      imageDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/promotions/dark/PrimeX+Spreads.png",
      imageLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/promotions/light/PrimeX+Spreads.png",
      altText: "IB Program",
      title: t("promotion4.title"),
      description: t("promotion4.desc"),
      link: `/${locale}/primex-spreads`,
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
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold">
            <span className="text-tm dark:text-tm-dark">{t("title1")}</span>
            <br className="block sm:hidden" />
            <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[540px] mx-auto text-ts dark:text-ts-dark">
            {t("desc")}
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
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
          }}
          slidesPerView={"auto"}
          centeredSlides={false}
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
          {promotionsData.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto flex">
              <div className="bg-cc dark:bg-cc-dark rounded-xl px-2 pt-2 pb-6 border-2 border-cc dark:border-cc-dark w-full flex flex-col flex-1 mb-9">
                <Link href={item.link} className="flex flex-col flex-1 h-full">
                  <div className="flex-1">
                    <div className="rounded-lg">
                      <Image
                        unoptimized={true}
                        src={
                          theme === "dark" ? item.imageDark : item.imageLight
                        }
                        alt={item.altText}
                        width={100}
                        height={100}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="px-4 mt-4">
                      <h3 className="text-xl font-semibold text-tm dark:text-tm-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
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

export default Promotions;
