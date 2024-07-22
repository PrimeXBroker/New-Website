import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import RegButton from "@/components/RegButton";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("gift.header");

  const customStyle = {
    btnColor: "primary",
    txtColor1: "text-secondary",
    txtColor2: "text-secondary",
    txtColor3: "text-secondary",
    borderColor: "border-primary",
  };

  return (
    <section>
      <div className="relative h-[1000px] lg:h-[750px] bg-accent">
        <div className="container mx-auto lg:px-10 xl:px-4 pt-20 xl:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center h-full">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div
                className={`${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <h3 className="text-1xl sm:text-2xl xl:text-3xl font-light text-secondary px-10 sm:px-20 md:px-40 lg:px-0">
                  {t("celeb_l1")}
                  <span className="font-semibold">{t("celeb_l2")}</span>
                  {t("celeb_l3")}
                </h3>
              </div>
              <div
                className={`mt-2 ${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <h1 className="text-4xl sm:text-5xl xl:text-6xl text-secondary inline-block font-extrabold underline-custom">
                  {t("title")}
                </h1>
              </div>
              <div
                className={`${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <h3 className="text-1xl sm:text-2xl xl:text-3xl font-semibold text-secondary px-10 sm:px-20 md:px-40 lg:px-0 mt-4">
                  {t("subtitle_l1")} <br />
                  {t("subtitle_l2")} <br />
                </h3>
                <h3 className="text-1xl sm:text-2xl xl:text-3xl font-light text-secondary px-10 sm:px-20 md:px-40 lg:px-0 mt-3">
                  {t("subtitle_l3")}
                </h3>
              </div>
              <div
                className={`mt-6 ${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <div>
                  <RegButton customStyle={customStyle} />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center lg:justify-end mt-10 lg:mt-0">
              <Image
                src="/images/gift/gift-box.webp"
                width="500"
                height="500"
                alt="img"
                className=" w-[70%] sm:w-[50%] md:w-[40%] lg:w-[80%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
