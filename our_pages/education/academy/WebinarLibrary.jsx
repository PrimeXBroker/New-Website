"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { IoPlayOutline } from "react-icons/io5";

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

  return (
    <section className="py-8 container webinar_slider">
      <h2 className="text-xl md:text-3xl text-secondary text-center font-semibold pb-4">
        {t("title")}
      </h2>
      <p className="md:text-lg text-secondary text-center max-w-xl mx-auto">
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
          }}
          spaceBetween={20}
          loop
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {webinarCards.map((card, index) => (
            <SwiperSlide
              className="flex flex-col justify-center items-center w-[255px] m-auto"
              key={index}
              style={{ display: "flex !important" }}
            >
              <div className="flex flex-col justify-center items-center w-[255px] h-[292px] m-aut0">
                <div className="academy-video-single-box">
                  <div className="academy-video-thumb">
                    <img src={card.imgUrl} alt="" />
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
      </div>
    </section>
  );
};

export default WebinarLibrary;
