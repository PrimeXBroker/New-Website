"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const t = useTranslations("tutorials.hero");

  return (
    <section className="bg-p dark:bg-p-dark pt-28 sm:pt-28">
      <div className="container">
        <div className="grid grid-cols-12 items-center md:py-10 lg:py-0">
          <div className="col-span-12 md:col-span-6 text-center md:text-start">
            <div
              className={`text-tm dark:text-tm-dark font-normal uppercase text-sm sm:text-xl md:text-base lg:text-lg`}
            >
              {t("subtitle")}
            </div>
            <h1 className="text-tm dark:text-tm-dark font-semibold text-4xl lg:text-6xl my-3">
              {t("title_1")}
            </h1>
            <h2 className="text-pcp dark:text-pcp-dark font-semibold text-4xl lg:text-6xl my-3">
              {t("title_2")}
            </h2>
            <p
              className={`font-normal text-base sm:text-lg text-ts dark:text-ts-dark mb-8`}
            >
              {t("description")}
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 mt-6 md:mt-0">
            <div className="flex justify-center md:justify-end">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/tutorials/tutorials-hero.png"
                width="100"
                height="100"
                alt="Hero Image"
                className={`w-full sm:w-[80%] h-full`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
