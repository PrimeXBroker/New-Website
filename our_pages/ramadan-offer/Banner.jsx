"use client";
import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import TrustPilot from "@/components/TrustPilot";
import { getLoginUrl } from "@/utilities/getLoginUrl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const locale = useLocale();
  const h = useTranslations("ramadanOffer.hero");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="">
      <div className="bg-[#000000] pt-[40px] lg:pt-10">
        <div className="container flex flex-col md:flex-row justify-around py-16">
          <div className="max-w-2xl flex flex-col justify-center items-center md:items-start md:w-[70%]">
            {/* <div
              className={`text-center md:text-start relative ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "left-[137px]"
                  : "right-[137px]"
              }`}
            >
              <TrustPilot />
            </div> */}
            <h2
              className={`text-base sm:text-lg md:text-base lg:text-lg xl:text-lg text-[#ffffff] ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {h("sub_title")}
            </h2>
            <h1
              className={`text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#FED100] py-2 ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              // style={{ lineHeight: "66px" }}
            >
              {h("title")}
            </h1>
            <p
              className={`text-[#ffffff] text-xl sm:text-3xl md:text-xl lg:text-3xl mt-1 ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "0.7px" }}
            >
              {h("description")}
            </p>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row mt-4 gap-3">
              <div className="flex items-center gap-2 md:gap-1">
                <Image
                  unoptimized={true}
                  width="25"
                  height="25"
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/award_star.svg"
                  alt="Logo Image"
                />
                <p
                  className={`text-[#ffffff] text-xl md:text-base lg:text-xl ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "text-center md:text-right"
                      : "text-center md:text-left"
                  }`}
                  style={{ letterSpacing: "0.7px" }}
                >
                  {h("prize1")}
                </p>
              </div>
              <div className="flex items-center gap-2 md:gap-1">
                <Image
                  unoptimized={true}
                  width="25"
                  height="25"
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/featured_seasonal_and_gifts.svg"
                  alt="Logo Image"
                />
                <p
                  className={`text-[#ffffff] text-xl md:text-base lg:text-xl ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "text-center md:text-right"
                      : "text-center md:text-left"
                  }`}
                  style={{ letterSpacing: "0.7px" }}
                >
                  {h("prize2")}
                </p>
              </div>
            </div>
            <div className="mt-3 lg:mt-5">
              <button
                onClick={handleClick}
                className="py-[16px] px-[46px] font-semibold mt-5 w-full md:w-auto custom-button"
              >
                {h("btnTxt")}
              </button>
              <a
                href={getLoginUrl(locale)}
                target="_blank"
                className={`text-xs text-[#ffffff] font-normal block mt-2 ${
                  locale === "ar" || locale === "ps" || locale === "ku"
                    ? "text-center md:text-start mr-6"
                    : "text-center md:text-start md:ml-6"
                }`}
              >
                {h("registered_already")}{" "}
                <span className="italic font-semibold">{h("login_here")}</span>
              </a>
            </div>
          </div>
          <div className="flex md:justify-end justify-center mt-5 md:mt-0">
            <img
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ramadan-offer/ramadan-contest-hero.webp"
              alt="Ramadan Offer Hero Image"
              className={`w-full sm:w-[90%] md:w-full`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
