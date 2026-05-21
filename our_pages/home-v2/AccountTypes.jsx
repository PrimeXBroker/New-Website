"use client";
import React, { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import CustomYellowButton from "@/components/common/CustomYellowButton";

const AccountTypes = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("home.chooseAccountTypes");

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
      features: t.raw("acc1.features"),
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
      features: t.raw("acc2.features"),
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
      features: t.raw("acc3.features"),
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
      features: t.raw("acc4.features"),
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
      features: t.raw("acc1.features"),
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
      features: t.raw("acc2.features"),
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
      features: t.raw("acc3.features"),
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
      features: t.raw("acc4.features"),
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
          className="home-testimonial-pagination !items-center !overflow-x-hidden !overflow-y-visible !pt-9"
        >
          {accountTypesData.map((account, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  key={account.id}
                  className={`relative !overflow-visible flex flex-col items-center gap-6 justify-between mx-auto bg-cc dark:bg-cc-dark border-[0.71px] border-[] dark:border-[#2d2d2d] rounded-xl p-6 mb-9 transition-all duration-500 ease-in-out ${
                    isActive ? "scale-105" : "scale-95"
                  }`}
                >
                  <div className="absolute top-[60px] right-0 z-0">
                    <Image
                      unoptimized={true}
                      src={
                        theme === "dark"
                          ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Large+Background+X.png"
                          : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/Large+X.png"
                      }
                      alt="Background Accent"
                      width={138}
                      height={157}
                      className="w-[138px] h-auto"
                    />
                  </div>
                  <div className="absolute top-0 left-[98px]">
                    <Image
                      unoptimized={true}
                      src={
                        theme === "dark"
                          ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Small+Background+X.png"
                          : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/Small+X.png"
                      }
                      alt="Background Accent"
                      width={72}
                      height={82}
                      className="w-[72px] h-auto"
                    />
                  </div>
                  <Link
                    href={`/${locale}/account-types`}
                    className="flex flex-col gap-7 z-10"
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
                    <p
                      className={`text-sm text-tm dark:text-tm-dark font-medium ${isActive ? "text-base" : "text-sm"}`}
                    >
                      {t("deposit")}
                      {account.minimumDeposit}
                    </p>
                    <CustomYellowButton
                      title={t("btnText")}
                      className="py-4 md:py-3 lg:py-3 text-sm w-full justify-between sm:justify-center"
                    />
                    <div>
                      {account.features?.map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-start gap-2 font-medium ${isActive ? "text-sm" : "text-[13px]"} text-ts dark:text-ts-dark ${index === account.features.length - 1 ? "" : "mb-4"}`}
                        >
                          <Image
                            unoptimized={true}
                            src={
                              theme === "dark"
                                ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/dark/Check+Circle+icon.png"
                                : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/account-types/light/Check+Circle+icon.png"
                            }
                            alt="Check"
                            width={20}
                            height={20}
                            className={`${isActive ? "w-[20px]" : "w-[16px]"} h-auto mt-[1px]`}
                          />
                          <p>
                            {item.leftText}
                            <span className="text-tm dark:text-tm-dark">
                              {item.highlight}
                            </span>
                            {item.rightText}
                          </p>
                        </div>
                      ))}
                    </div>
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
