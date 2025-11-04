"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { RiArrowLeftUpLine } from "react-icons/ri";

const GlobalLocation = () => {
  const locale = useLocale();
  const t = useTranslations("contactUs.globalLocation");
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative h-[460px] sm:h-[400px] md:h-[470px] lg:h-[570px] bg-[#000000] about-bg-main">
      <div className="container mx-auto h-full relative flex justify-center items-center">
        <div
          className={`absolute top-0 block lg:hidden ${
            locale === "ar" ||
            locale === "ps" ||
            locale === "ku" ||
            locale === "fa"
              ? "right-5 md:right-10"
              : "left-5 md:left-10"
          }`}
        >
          <h2 className="text-[#ffffff] text-2xl sm:text-4xl lg:text-5xl font-semibold sm:mb-2 block lg:hidden">
            {t("title1")}
            <span className="text-[#FED100]">{t("title2")}</span>
          </h2>
        </div>
        <div
          className={`absolute top-[16%] sm:top-[22%] flex items-center gap-2 ${
            locale === "ar" ||
            locale === "ps" ||
            locale === "ku" ||
            locale === "fa"
              ? "right-[5%] sm:right-[21%] md:right-[29%] lg:right-[29%]"
              : "left-[6%] sm:left-[12%] lg:left-[31%]"
          }`}
        >
          <div
            className="bg-[#111111] p-5 rounded-xl border-2 border-[#1d1d1d] hover:shadow-xl w-[230px] sm:w-[380px] hover:border-[#333333] group transition-all duration-500 ease-in-out"
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link
              href="https://maps.app.goo.gl/bZFoez9hfhEZzRFW6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-[32px] h-[32px]">
                    <Image
                      unoptimized={true}
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact/Country%3DAE+-+United+Arab+Emirates%2C+Style%3DSquare%2C+Corners%3DRounded.svg"
                      alt="UAE"
                      width={100}
                      height={100}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#ffffff]">
                      {t("uae_title1")}
                    </h3>
                    <p className="text-xs text-[#c6c6c6]"> {t("uae_title2")}</p>
                  </div>
                </div>
                <Link href={`/${locale}/account-types`}>
                  <div className="w-[33px] h-[33px] rounded-[5.73px] bg-[#1D1D1D] flex justify-center items-center group-hover:bg-[#F9F9F9] transition-all duration-500 ease-in-out">
                    {locale === "ar" ||
                    locale === "ps" ||
                    locale === "ku" ||
                    locale === "fa" ? (
                      <RiArrowLeftUpLine
                        className={`text-xl transition-transform duration-500 ease-in-out ${
                          hovered === 0
                            ? "rotate-[-45deg] text-[#1D1D1D]"
                            : "text-[#C6C6C6]"
                        }`}
                      />
                    ) : (
                      <RiArrowRightUpLine
                        className={`text-xl transition-transform duration-500 ease-in-out ${
                          hovered === 0
                            ? "rotate-45 text-[#1D1D1D]"
                            : "text-[#C6C6C6]"
                        }`}
                      />
                    )}
                  </div>
                </Link>
              </div>
              <p className="text-[#c6c6c6] mt-4 text-sm sm:text-[15px]">
                {t("uae_address")}
              </p>
            </Link>
          </div>
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact/Pin.svg"
            alt="Location Map Icon"
            width={19}
            height={19}
            className="w-[40px] sm:w-[50px]"
          />
        </div>
        {/* <div
          className={`absolute top-[57%] sm:top-[64%] md:top-[57%] lg:top-[54%] flex items-center gap-2 ${
            locale === "ar" || locale === "ps" || locale === "ku" || locale === "fa"
              ? "right-[18%] sm:right-[27%] md:right-[38%] lg:right-[50%]"
              : "left-[17%] sm:left-[28%] lg:left-[50%]"
          }`}
        >
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact/Pin.svg"
            alt="Location Map Icon"
            width={19}
            height={19}
            className="w-[40px] sm:w-[50px]"
          />
          <div
            className="bg-[#111111] p-5 rounded-xl border-2 border-[#1d1d1d] hover:shadow-xl w-[230px] sm:w-[380px] hover:border-[#333333] group transition-all duration-500 ease-in-out"
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link
              href="https://maps.app.goo.gl/NPtCrDm6Tqz7CNgf6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-[32px] h-[32px]">
                    <Image
                      unoptimized={true}
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact/Country%3DZA+-+South+Africa%2C+Style%3DSquare%2C+Corners%3DRounded.svg"
                      alt="South Africa"
                      width={100}
                      height={100}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#ffffff]">
                      {t("africa_title1")}
                    </h3>
                    <p className="text-xs text-[#c6c6c6]">
                      {" "}
                      {t("africa_title2")}
                    </p>
                  </div>
                </div>
                <Link href={`/${locale}/account-types`}>
                  <div className="w-[33px] h-[33px] rounded-[5.73px] bg-[#1D1D1D] flex justify-center items-center group-hover:bg-[#F9F9F9] transition-all duration-500 ease-in-out">
                    {locale === "ar" || locale === "ps" || locale === "ku" || locale === "fa" ? (
                      <RiArrowLeftUpLine
                        className={`text-xl transition-transform duration-500 ease-in-out ${
                          hovered === 1
                            ? "rotate-[-45deg] text-[#1D1D1D]"
                            : "text-[#C6C6C6]"
                        }`}
                      />
                    ) : (
                      <RiArrowRightUpLine
                        className={`text-xl transition-transform duration-500 ease-in-out ${
                          hovered === 1
                            ? "rotate-45 text-[#1D1D1D]"
                            : "text-[#C6C6C6]"
                        }`}
                      />
                    )}
                  </div>
                </Link>
              </div>
              <p className="text-[#c6c6c6] mt-4 text-sm sm:text-[15px]">
                {t("africa_address")}
              </p>
            </Link>
          </div>
        </div> */}
        <div
          className={`absolute bottom-10 hidden lg:block ${
            locale === "ar" ||
            locale === "ps" ||
            locale === "ku" ||
            locale === "fa"
              ? "right-5 md:right-10"
              : "left-5 md:left-10"
          }`}
        >
          <h2 className="text-[#ffffff] text-xl sm:text-3xl lg:text-5xl font-semibold sm:mb-2">
            {t("title1")}
            <br />
          </h2>
          <h2 className="text-[#FED100] text-xl sm:text-3xl lg:text-5xl font-semibold">
            {t("title2")}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default GlobalLocation;
