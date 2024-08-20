"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";

const awardsURLS = [
  "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/award1.webp",
  "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/award2.webp",
  "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/award3.webp",
  "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/award4.webp",
  "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/award5.webp",
  "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/award6.webp",
  "https://primexcapital.s3.eu-north-1.amazonaws.com/website/awards/award7.webp",
];

const OurRecognition = () => {
  const t = useTranslations("home.ourRecognition");
  return (
    <section className="py-12">
      <h1 className="sectionHeading">{t("our_recognition_title")}</h1>
      <p className="sectionPara text-center">{t("our_recognition_desc")}</p>
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={8}
          loop
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {awardsURLS.map((el, index) => (
            <SwiperSlide key={index}>
              <Image
                unoptimized={true}
                className="block mx-auto"
                src={el}
                alt="award"
                height="220"
                width="220"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurRecognition;
