"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Banner = () => {
  const homeVideoPlayer = useRef(null);
  const t = useTranslations("home.hero");
  const slideContents = [
    {
      title: t("title1"),
      description: t("desc1"),
    },
    {
      title: t("title2"),
      description: t("desc2"),
    },
    {
      title: t("title3"),
      description: t("desc3"),
    },
  ];

  const homeVideoClick = () => {
    if (
      homeVideoPlayer &&
      homeVideoPlayer.current &&
      homeVideoPlayer.current.video
    ) {
      homeVideoPlayer.current.video.play();
    }
  };

  const path = usePathname();
  const isAr = path.includes("/ar");
  return (
    <section
      className="relative h-[50vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] 3xl:h-[100vh] py-10 lg:py-16 xl:py-16 2xl:py-20 3xl:pt-40 4xl:pt-48 5xl:py-56"
      onClick={homeVideoClick}
    >
      <video
        ref={homeVideoPlayer}
        autoPlay
        loop
        muted
        controls={false}
        className="block absolute inset-0 w-full h-full object-cover opacity-80"
        playsInline
      >
        <source
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/videos/banner_video_v2.1.webm"
          type="video/webm"
        />
      </video>
      {/* <div
        className="lg:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-opacity-20 py-16"
        style={{
          backgroundImage: "url('/images/ibprogram2.webp')",
        }}
      ></div> */}
      <div className="container relative z-10">
        <div className="text-center pb-16 lg:pb-6 xl:pb-12 2xl:pb-28 3xl:pb-36">
          {/* <Swiper
            spaceBetween={30}
            loop
            effect={"fade"}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{
              delay: 8000,
            }}
            fadeEffect={{
              crossFade: true,
              duration: 6000,
            }}
          >
            {slideContents.map((slide, index) => (
              <SwiperSlide key={index}>
                <h1 className="text-secondary text-xl xl:text-3xl 2xl:text-6xl 3xl:text-[68px] font-medium md:leading-none tracking-tight">
                  {slide.title}
                </h1>
                <p
                  className={`text-gray-400 text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl tracking-wider pt-5 mx-auto ${
                    isAr ? "md:w-[900px]" : "md:w-[800px]"
                  }`}
                >
                  {slide.description}
                </p>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
