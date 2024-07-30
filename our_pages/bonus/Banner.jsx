import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import RegButton from "@/components/RegButton";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.header");

  const customStyle = {
    btnColor: "secondary",
    txtColor1: "text-primary",
    txtColor2: "text-accent",
    txtColor3: "text-primary",
    borderColor: "border-accent",
  };

  return (
    <section>
      <div
        className={`relative h-[1140px] lg:h-[750px] bg-no-repeat bg-cover bg-center ${
          locale === "ar"
            ? "bg-[url(/images/bonus/header-bg-ar.webp)]"
            : "bg-[url(/images/bonus/header-bg.webp)]"
        }`}
      >
        <div className="container mx-auto lg:px-10 xl:px-4 pt-16 xl:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center h-full">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div
                className={`${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <h1 className="text-5xl sm:text-6xl xl:text-7xl text-white inline-block font-extrabold underline-custom">
                  <span className="text-primary">{t("title_l1")}</span> <br />
                  {t("title_l2")}
                </h1>
              </div>
              <div
                className={`${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <h3 className="text-2xl sm:text-3xl xl:text-4xl	font-light text-white px-10 sm:px-20 md:px-40 lg:px-0 mt-8">
                  {t("subtitle_l1")} <br />
                  {t("subtitle_l2")}
                  <span className="leading-[54px] text-primary font-semibold">
                    {t("subtitle_l3")}
                  </span>
                  {t("subtitle_l4")} <br />
                  <span className="text-primary font-semibold">
                    {t("subtitle_l5")}
                  </span>
                </h3>
              </div>
              <div
                className={`mt-8 ${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <RegButton customStyle={customStyle} />
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col items-center lg:items-end mt-10 lg:mt-0">
              <Image
                src="/images/bonus/bonus-top.webp"
                width="500"
                height="500"
                alt="img"
                className=" w-[70%] sm:w-[50%] md:w-[40%] lg:w-[80%]"
              />
              <div className="relative top-10 lg:top-0">
                <p>
                  <span className="text-white">*</span>
                  <span className="text-sm text-white italic font-normal">
                    {t("tc")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
