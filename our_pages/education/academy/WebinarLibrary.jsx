"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import { useTranslations } from "next-intl";

const WebinarLibrary = () => {
  const t = useTranslations("academy.webinarLibrary");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const webinarCards = [
    {
      iconUrl: "/images/education/academy/webinar_icon1.svg",
      iconHoverUrl: "/images/education/academy/webinar_icon1_hover.svg",
      title: t("webinar_topic_1"),
      name: t("presenter_1"),
    },
    {
      iconUrl: "/images/education/academy/webinar_icon2.svg",
      iconHoverUrl: "/images/education/academy/webinar_icon2_hover.svg",
      title: t("webinar_topic_2"),
      name: t("presenter_2"),
    },
    {
      iconUrl: "/images/education/academy/webinar_icon3.svg",
      iconHoverUrl: "/images/education/academy/webinar_icon3_hover.svg",
      title: t("webinar_topic_3"),
      name: t("presenter_3"),
    },
    {
      iconUrl: "/images/education/academy/webinar_icon1.svg",
      iconHoverUrl: "/images/education/academy/webinar_icon1_hover.svg",
      title: t("webinar_topic_1"),
      name: t("presenter_1"),
    },
    {
      iconUrl: "/images/education/academy/webinar_icon2.svg",
      iconHoverUrl: "/images/education/academy/webinar_icon2_hover.svg",
      title: t("webinar_topic_2"),
      name: t("presenter_2"),
    },
    {
      iconUrl: "/images/education/academy/webinar_icon3.svg",
      iconHoverUrl: "/images/education/academy/webinar_icon3_hover.svg",
      title: t("webinar_topic_3"),
      name: t("presenter_3"),
    },
  ];

  const handleIconEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleIconLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <section className="py-8 container webinar_slider">
      <h1 className="text-xl md:text-3xl text-secondary text-center font-semibold pb-4">
        {t("title")}
      </h1>
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
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          centeredSlides={true}
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
              className="text-center w-[250px] flex mx-auto justify-center items-center"
              key={index}
            >
              <div
                onMouseEnter={() => handleIconEnter(index)}
                onMouseLeave={handleIconLeave}
                key={index}
                className="mt-4 flex flex-col justify-center items-center bg-accent cursor-pointer rounded-2xl border-b-5 w-[320px] sm:w-[250px] md:w-[270px] h-[250px] group
                 hover:bg-[#3F3F3E] border-black hover:border-primary text-center mx-auto transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500"
              >
                <div className="mb-4">
                  <Image
                    src={
                      hoveredIndex === index ? card.iconHoverUrl : card.iconUrl
                    }
                    alt="academy icon"
                    width="100"
                    height="70"
                    className="academy_img"
                  />
                </div>
                <h1 className="sectionHeading text-xl text-left group-hover:text-white">
                  {card.title}
                </h1>
                <p className="sectionPara text-left text-sm group-hover:text-white">
                  {card.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WebinarLibrary;
