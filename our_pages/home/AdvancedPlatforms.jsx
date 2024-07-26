"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import { useTranslations } from "next-intl";

const AdvancedPlatforms = () => {
  const t = useTranslations("home.advancedPlatforms");

  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section
      className="py-12 container"
      data-aos-easing="ease-out"
      data-aos-duration={2000}
      data-aos="slide-up"
    >
      <h1 className="sectionHeading">
        <span className="font-light">{t("advance_platform_title_1")} </span>
        {t("advance_platform_title_2")}
      </h1>

      <p className="sectionPara text-center py-4">
        {t("advanced_platform_desc")}
      </p>

      <div className="my-8 relative">
        <Image
          width="700"
          height="700"
          className="mx-auto z-0 lg:w-fit w-[80%]"
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/platform_image.webp"
          alt="platform image"
        />
        <div
          className="absolute z-10 lg:w-fit right-[1%] bottom-[35%] w-[30%]
         cursor-pointer bg-transparent hover:bg-black hover:text-white
          transition duration-500 hover:translate-y-[-5px]"
        >
          <Image
            width="250"
            height="200"
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/meta_trader5.svg"
            alt="mt5"
            className="block"
          />
        </div>
        <div className="absolute z-10 lg:w-fit bottom-[50%] w-[30%] cursor-pointer bg-transparent hover:bg-black hover:text-white transition duration-500 hover:translate-y-[-5px]">
          <Image
            className="block"
            width="250"
            height="200"
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/multi_device.svg"
            alt="mt5"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedPlatforms;
