"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import CustomYellowButton from "@/components/common/CustomYellowButton";

const Promotions = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("home.promotions");

  const promotionsData = [
    {
      id: 1,
      title: t("promotion1.title"),
      description: t("promotion1.desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/bonus-promotion.webp",
      link: `/${locale}/bonus`,
    },
    {
      id: 2,
      title: t("promotion2.title"),
      description: t("promotion2.desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/ib-promotion.webp",
      link: `/${locale}/ib-program`,
    },
    {
      id: 3,
      title: t("promotion3.title"),
      description: t("promotion3.desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/social-trading-promotion.webp",
      link: `/${locale}/social-trading`,
    },
    {
      id: 4,
      title: t("promotion4.title"),
      description: t("promotion4.desc"),
      image:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/spread-promotion.webp",
      link: `/${locale}/primex-spreads`,
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
      swiperPrevButton.addEventListener("click", () => {});
      swiperNextButton.addEventListener("click", () => {});
    }
  }, []);

  return (
    <section className="bg-p dark:bg-p-dark hidden sm:block">
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
          spaceBetween={20}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".promotions-swiper-button-next",
            prevEl: ".promotions-swiper-button-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="home-testimonial-pagination px-6"
        >
          {promotionsData.map((promo) => (
            <SwiperSlide
              key={promo.id}
              className="!w-[85%] md:!w-[80%] xl:!w-[60%] mb-10"
            >
              <div className="grid grid-cols-12 bg-cc dark:bg-cc-dark rounded-xl overflow-hidden items-center gap-7 p-5">
                <div className="col-span-4">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    width={200}
                    height={200}
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="col-span-8">
                  <h2 className="text-xl lg:text-2xl font-semibold text-tm dark:text-tm-dark mb-1 md:mb-2 lg:mb-3">
                    {promo.title}
                  </h2>
                  <p className="text-base lg:text-lg text-ts dark:text-ts-dark font-medium mb-4 lg:mb-5">
                    {promo.description}
                  </p>
                  <CustomYellowButton
                    title={t("btnTxt")}
                    onClick={() => router.push(promo.link)}
                    className="py-2 px-6 md:py-3 md:px-7 lg:py-4 lg:px-8 w-auto text-base"
                  />
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

export default Promotions;
