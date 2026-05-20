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
import { RiArrowLeftUpLine, RiArrowRightUpLine } from "react-icons/ri";

const AccountTypes = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("home.accountTypes");

  const accountTypesData = [
    {
      id: 1,
      title: t("acc1.title"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Cent+Account+large+icon.png",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/Cent+Account+large+icon.png",
      minimumDeposit: t("acc1.minimumDeposit"),
      description: t("acc1.description"),
    },
    {
      id: 2,
      title: t("acc2.title"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Standard+Account+large+icon.png",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/Standard+Account+large+icon.png",
      minimumDeposit: t("acc2.minimumDeposit"),
      description: t("acc2.description"),
    },
    {
      id: 3,
      title: t("acc3.title"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Narrow+account+large+icon.png",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/Narrow+account+large+icon.png",
      minimumDeposit: t("acc3.minimumDeposit"),
      description: t("acc3.description"),
    },
    {
      id: 4,
      title: t("acc4.title"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Raw+Account+large+icon.png",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/Raw+Account+large+icon.png",
      minimumDeposit: t("acc4.minimumDeposit"),
      description: t("acc4.description"),
    },
    {
      id: 5,
      title: t("acc1.title"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Cent+Account+large+icon.png",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/Cent+Account+large+icon.png",
      minimumDeposit: t("acc1.minimumDeposit"),
      description: t("acc1.description"),
    },
    {
      id: 6,
      title: t("acc2.title"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Standard+Account+large+icon.png",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/Standard+Account+large+icon.png",
      minimumDeposit: t("acc2.minimumDeposit"),
      description: t("acc2.description"),
    },
    {
      id: 7,
      title: t("acc3.title"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Narrow+account+large+icon.png",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/Narrow+account+large+icon.png",
      minimumDeposit: t("acc3.minimumDeposit"),
      description: t("acc3.description"),
    },
    {
      id: 8,
      title: t("acc4.title"),
      iconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Raw+Account+large+icon.png",
      iconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/Raw+Account+large+icon.png",
      minimumDeposit: t("acc4.minimumDeposit"),
      description: t("acc4.description"),
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
    <section className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold">
            <span className="text-tm dark:text-tm-dark">{t("title1")}</span>{" "}
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
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
          slidesPerView={"auto"}
          centeredSlides={true}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          //   pauseOnMouseEnter: true,
          // }}
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
          {accountTypesData.map((account, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  key={account.id}
                  className={`relative overflow flex flex-col justify-between max-w-sm mx-auto bg-cc dark:bg-cc-dark border-[0.71px] border-[] dark:border-[#2d2d2d] rounded-xl p-6 min-h-[210px] sm:min-h-[377px] mb-9 transition-all duration-500 ease-in-out ${
                    isActive ? "scale-100 md:scale-105 z-10" : "scale-90"
                  }`}
                >
                  <Link
                    href={`/${locale}/account-types`}
                    className="flex flex-col gap-7"
                  >
                    <div className="flex justify-between items-start">
                      <Image
                        unoptimized={true}
                        src={
                          theme === "dark"
                            ? account.iconDark
                            : account.iconLight
                        }
                        alt={account.title}
                        width={100}
                        height={100}
                        className={`${isActive ? "w-[56px] h-[56px]" : "w-[46px] h-[46px]"} `}
                      />
                      <Image
                        unoptimized={true}
                        src={
                          theme === "dark"
                            ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Glass+ECN+Tag.png"
                            : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/ECN+Tag.png"
                        }
                        alt="ECN"
                        width={100}
                        height={100}
                        className="w-[46px] h-auto"
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold text-tm dark:text-tm-dark mb-[6px] ${isActive ? "text-2xl " : "text-[22px]"}`}
                      >
                        {account.title}
                      </h3>
                      <p
                        className={`text-ts dark:text-ts-dark font-medium ${isActive ? "text-sm" : "text-[13px]"}`}
                      >
                        {account.description}
                      </p>
                    </div>
                    <p className="text-sm text-ts dark:text-ts-dark mt-1">
                      {t("deposit")}
                      <span className="font-bold text-sm text-tm dark:text-tm-dark">
                        {account.minimumDeposit}
                      </span>
                    </p>
                  </Link>
                </div>
              )}
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

export default AccountTypes;
