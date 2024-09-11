"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const ParticipateForm = () => {
  const locale = useLocale();
  const t = useTranslations("demoAccount.participateForm");
  return (
    <section className="bg-accent py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-start-3 lg:col-start-0 sm:col-span-8 lg:col-span-6 mb-8 lg:mb-0">
            <div>
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-mobile.webp"
                width="350"
                height="300"
                alt="banner Image"
                className="w-[400px] mx-auto"
              />
            </div>
          </div>
          <div className="col-span-12 sm:col-start-2 lg:col-start-0 sm:col-span-10 lg:col-span-6 flex flex-col items-center justify-center">
            <h1 className="text-secondary text-3xl font-semibold text-center mb-8">
              {t("title")}
            </h1>
            <div className="relative flex items-center justify-between w-[100%] sm:w-[70%]">
              <div className="flex flex-col items-center z-10">
                <div className="steps-point bg-yellow-500 text-secondary rounded-full h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] flex justify-center items-center text-3xl sm:text-5xl font-bold border-8 border-secondary">
                  {t("step1_count")}
                </div>
                <p
                  className="mt-4 text-base font-semibold text-center"
                  style={{ lineHeight: "19px" }}
                >
                  {t("step1_p1")} <br /> {t("step1_p2")}
                </p>
              </div>
              <div className="absolute top-[37px] sm:top-[55px] transform -translate-y-1/2 left-[90px] right-[64px] sm:left-[104px] sm:right-[94px]">
                <div className="border-t-8 border-dashed border-secondary w-full"></div>
              </div>
              <div className="flex flex-col items-center z-10">
                <div className="steps-point bg-white text-secondary rounded-full h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] flex justify-center items-center text-3xl sm:text-5xl font-bold border-8 border-secondary">
                  {t("step2_count")}
                </div>
                <p
                  className="mt-4 text-base font-semibold text-center"
                  style={{ lineHeight: "19px" }}
                >
                  {t("step2_p1")} <br /> {t("step2_p2")}
                </p>
              </div>
            </div>
            <Link
              href={
                locale === "ar"
                  ? "https://client.primexbroker.com/ar/register"
                  : "https://client.primexbroker.com/en/register"
              }
              className="text-sm md:text-[16px] block w-[172px] py-3 rounded-full shadow-xl
              bg-secondary text-primary border-3 border-white hover:bg-accent
              hover:text-secondary text-center transition-all duration-300 hover:border-secondary
              hover:scale-105 mt-8 ml-[42px]"
            >
              {t("start_now_btn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipateForm;
