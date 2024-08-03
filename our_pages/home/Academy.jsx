"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Aos from "aos";
import { useTranslations, useLocale } from "next-intl";

const Academy = () => {
  const t = useTranslations("home.academy");
  const locale = useLocale();
  const [icon1Hovered, setIcon1Hovered] = useState(false);
  const [icon2Hovered, setIcon2Hovered] = useState(false);
  const [icon3Hovered, setIcon3Hovered] = useState(false);
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  const handleIcon1Enter = () => {
    setIcon1Hovered(true);
  };

  const handleIcon1Leave = () => {
    setIcon1Hovered(false);
  };

  const handleIcon2Enter = () => {
    setIcon2Hovered(true);
  };

  const handleIcon2Leave = () => {
    setIcon2Hovered(false);
  };

  const handleIcon3Enter = () => {
    setIcon3Hovered(true);
  };

  const handleIcon3Leave = () => {
    setIcon3Hovered(false);
  };
  return (
    <section className="py-12 container">
      <div
        data-aos-easing="ease-out"
        data-aos-duration={800}
        data-aos="slide-up"
      >
        <h1 className="sectionHeading">{t("academy_title")}</h1>
        <p className="sectionPara text-center">{t("academy_desc")}</p>
      </div>
      <div className="flex flex-row mt-12 gap-12 justify-center flex-wrap">
        <div
          className="bg-secondary cursor-pointer rounded-lg shadow-2xl border-b-5 group
           hover:bg-accent border-black hover:border-primary p-8 w-[300px]"
          data-aos-easing="ease-out"
          data-aos-duration={2500}
          data-aos="slide-up"
          onMouseEnter={handleIcon1Enter}
          onMouseLeave={handleIcon1Leave}
        >
          <div
            className={`flex ${
              locale === "ar" ? "justify-right" : "justify-left"
            }`}
          >
            <Image
              src={
                icon1Hovered
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/academy/icon1_black.svg"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/academy/icon1_yellow.svg"
              }
              alt="academy icon"
              width="80"
              height="80"
              className="block mx-0 academy_img"
            />
          </div>
          <h1
            className={`sectionHeading text-white text-xl mb-6 mt-2 group-hover:text-secondary ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("academy_card_1_title_1")} <br /> {t("academy_card_1_title_2")}
          </h1>
          <p
            className={`sectionPara text-white group-hover:text-secondary ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("academy_card_1_desc_1")} <br /> {t("academy_card_1_desc_2")}
          </p>
        </div>
        <div
          className="bg-secondary rounded-lg shadow-2xl border-b-5 cursor-pointer group
           hover:bg-accent border-black hover:border-primary p-8 w-[300px]"
          data-aos-easing="ease-out"
          data-aos-duration={1500}
          data-aos="slide-up"
          onMouseEnter={handleIcon2Enter}
          onMouseLeave={handleIcon2Leave}
        >
          <div
            className={`flex ${
              locale === "ar" ? "justify-right" : "justify-left"
            }`}
          >
            <Image
              src={
                icon2Hovered
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/academy/icon2_black.svg"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/academy/icon2_yellow.svg"
              }
              alt="academy icon"
              width="80"
              height="80"
              className="block mx-0"
            />
          </div>
          <h1
            className={`sectionHeading text-white group-hover:text-secondary text-xl mb-6 mt-2 ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("academy_card_2_title_1")} <br /> {t("academy_card_2_title_2")}
          </h1>
          <p
            className={`sectionPara text-white group-hover:text-secondary ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("academy_card_2_desc_1")} <br /> {t("academy_card_2_desc_2")}
          </p>
        </div>
        <div
          className="bg-secondary rounded-lg shadow-2xl border-b-5 cursor-pointer group 
          hover:bg-accent border-black hover:border-primary  p-8 w-[300px]"
          data-aos-easing="ease-out"
          data-aos-duration={500}
          data-aos="slide-up"
          onMouseEnter={handleIcon3Enter}
          onMouseLeave={handleIcon3Leave}
        >
          <div
            className={`flex ${
              locale === "ar" ? "justify-right" : "justify-left"
            }`}
          >
            <Image
              src={
                icon3Hovered
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/academy/icon3_black.svg"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/academy/icon3_yellow.svg"
              }
              alt="academy icon"
              width="80"
              height="80"
              className="block mx-0"
            />
          </div>
          <h1
            className={`sectionHeading text-white text-xl mb-6 mt-2 group-hover:text-secondary ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("academy_card_3_title_1")}
            <br /> {t("academy_card_3_title_2")}
          </h1>
          <p
            className={`sectionPara text-white group-hover:text-secondary ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("academy_card_3_desc_1")} <br /> {t("academy_card_3_desc_2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Academy;
