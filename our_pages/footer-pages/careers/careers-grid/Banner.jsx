"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const Banner = () => {
  const { theme } = useTheme();
  const t = useTranslations("careersPage.banner");

  return (
    <section className="bg-p dark:bg-p-dark pt-24 sm:pt-28 md:pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-tm dark:text-tm-dark md:mt-0 lg:my-1">
                {t("title")}
              </h1>
              <p className="text-ts dark:text-ts-dark mt-4">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center md:justify-end mt-8 md:mt-0">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/Career+Hero+New.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/careers-hero-light.webp"
                }
                width="100"
                height="100"
                alt="Career Hero"
                className={`w-full sm:w-[70%] ms:w-full`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
