"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { IoPlayOutline } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const WebinarLibrary = () => {
  const t = useTranslations("academy.webinarLibrary");
  const locale = useLocale();

  const webinarCards = [
    {
      iconUrl: "https://youtu.be/6Z7LfE1gnSA",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/academy/smt-divergence.webp",
      title1: t("webinar1_topic_p1"),
      title2: t("webinar1_topic_p2"),
      name: t("presenter_1"),
    },
    {
      iconUrl: "https://youtu.be/-P7VbO9s9Ow",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/academy/ict-daily-bias.webp",
      title1: t("webinar1_topic_p1"),
      name: t("presenter_2"),
    },
    {
      iconUrl: "https://youtu.be/dN9SqFyJLPo",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/academy/ict-weekly-profiles.webp",
      title1: t("webinar3_topic_p1"),
      title2: t("webinar3_topic_p2"),
      name: t("presenter_3"),
    },
    {
      iconUrl: "https://youtu.be/UuZWoudtycg",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/academy/ict-power-of-3.webp",
      title1: t("webinar4_topic_p1"),
      title2: t("webinar4_topic_p2"),
      name: t("presenter_4"),
    },
    {
      iconUrl: "https://youtu.be/wqYtkxuHEA0",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/academy/ict-mentorship-2022.webp",
      title1: t("webinar5_topic_p1"),
      title2: t("webinar5_topic_p2"),
      name: t("presenter_5"),
    },
    {
      iconUrl: "https://youtu.be/rgCEOuVOHR0",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/academy/ict-market-maker-model.webp",
      title1: t("webinar6_topic_p1"),
      title2: t("webinar6_topic_p2"),
      title3: t("webinar6_topic_p3"),
      name: t("presenter_6"),
    },
    {
      iconUrl: "https://youtu.be/Le1NednWK3Y",
      imgUrl:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/academy/core-cpi.webp",
      title1: t("webinar7_topic_p1"),
      title2: t("webinar7_topic_p2"),
      title3: t("webinar7_topic_p3"),
      title4: t("webinar7_topic_p4"),
      name: t("presenter_7"),
    },
  ];

  useEffect(() => {
    const swiperPrevButton = document.querySelector(
      ".webinar-swiper-button-prev"
    );
    const swiperNextButton = document.querySelector(
      ".webinar-swiper-button-next"
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
      <div className="container webinar_slider">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#FED100] text-center font-semibold pb-4">
          {t("title1")} <span className="text-[#ffffff]">{t("title2")}</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[#ffffff] text-center max-w-xl mx-auto">
          {t("description")}
        </p>
        <div className="mt-12">
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            centeredSlides={false}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".webinar-swiper-button-next",
              prevEl: ".webinar-swiper-button-prev",
            }}
            spaceBetween={20}
            loop
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="home-testimonial-pagination"
          >
            {webinarCards.map((card, index) => (
              <SwiperSlide
                className="flex flex-col justify-center items-center w-[255px] m-auto mb-10"
                key={index}
                style={{ display: "flex !important" }}
              >
                <div className="flex flex-col justify-center items-center w-[255px] h-[292px] m-aut0">
                  <div className="academy-video-single-box">
                    <div className="academy-video-thumb">
                      <img src={card.imgUrl} alt={card.name} />
                      <div className="academy-video-content">
                        <div className="academy-video-icon flex justify-center items-center relative">
                          <a
                            className="video-vemo-icon flex justify-center items-center venobox vbox-item"
                            data-vbtype="youtube"
                            data-autoplay="true"
                            href={card.iconUrl}
                          >
                            <IoPlayOutline className="text-[24px] z-10" />
                          </a>
                        </div>
                        <div className="academy-video-title">
                          <h4
                            className={`text-[#fff] ${
                              card.iconUrl === "https://youtu.be/Le1NednWK3Y"
                                ? "text-[15px] font-semibold"
                                : "text-[22px] font-semibold"
                            }`}
                            style={{ lineHeight: "normal" }}
                          >
                            {card.title1 && <div>{card.title1}</div>}
                            {card.title2 && <div>{card.title2}</div>}
                            {card.title3 && <div>{card.title3}</div>}
                            {card.title4 && <div>{card.title4}</div>}
                          </h4>
                          <span>{card.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={`webinars-swiper-navigation-buttons flex gap-4 w-fit ${
              locale === "ar" || locale === "fa" || locale === "ku"
                ? "float-left"
                : "float-right"
            } relative bottom-[37px] z-[10] `}
            dir={
              locale === "ar" || locale === "fa" || locale === "ku" ? "ltr" : ""
            }
          >
            <button className="webinar-swiper-button-prev group">
              <IoMdArrowBack className="text-[#FED100] group-hover:text-[#111111] " />
            </button>

            <button className="webinar-swiper-button-next group">
              <IoMdArrowForward className="text-[#FED100] group-hover:text-[#111111]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarLibrary;
