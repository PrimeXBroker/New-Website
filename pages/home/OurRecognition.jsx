"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
const OurRecognition = () => {
  return (
    <section className="py-12">
      <h1 className="sectionHeading">Our Recognition</h1>
      <p className="sectionPara text-center">
        We’re honored to receive industry accolades for our excellence and
        innovation
      </p>
      <div className="mt-12">
        <Swiper
          autoplay
          spaceBetween={50}
          slidesPerView={8}
          loop
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src="/images/award1.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/award2.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/award3.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/award4.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/award1.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/award2.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/award3.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/award4.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/award1.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/award2.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/award3.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/award4.svg"
              alt="award"
              height="200"
              width="300"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurRecognition;
