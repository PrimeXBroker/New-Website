"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
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
              slidesPerView: 8,
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
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award1.svg"
              alt="award"
              height="300"
              width="220"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award2.svg"
              alt="award"
              height="200"
              width="220"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award3.svg"
              alt="award"
              height="200"
              width="220"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award4.svg"
              alt="award"
              height="200"
              width="220"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award1.svg"
              alt="award"
              height="200"
              width="220"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award2.svg"
              alt="award"
              height="200"
              width="220"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award3.svg"
              alt="award"
              height="200"
              width="220"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award4.svg"
              alt="award"
              height="200"
              width="220"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award1.svg"
              alt="award"
              height="200"
              width="220"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award2.svg"
              alt="award"
              height="200"
              width="220"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award3.svg"
              alt="award"
              height="200"
              width="220"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="block mx-auto"
              src="/images/award4.svg"
              alt="award"
              height="200"
              width="220"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurRecognition;
