"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const GlobalLocation = () => {
  const locale = useLocale();
  const t = useTranslations("contactUs.globalLocation");

  return (
    <section className="relative h-[250px] sm:h-[340px] md:h-[400px] lg:h-[570px] bg-[#000000] about-bg-main">
      <div className="container mx-auto h-full relative flex justify-center items-center">
        <div
          className={`absolute top-0 block lg:hidden ${
            locale === "ar" || locale === "fa" || locale === "kur"
              ? "right-5 md:right-10"
              : "left-5 md:left-10"
          }`}
        >
          <h2 className="text-[#ffffff] text-xl sm:text-3xl lg:text-5xl font-semibold sm:mb-2 block lg:hidden">
            {t("title1")}
            <span className="text-[#FED100]">{t("title2")}</span>
          </h2>
        </div>
        <div
          className={`absolute top-[22%] flex items-center gap-2 ${
            locale === "ar" || locale === "fa" || locale === "kur"
              ? "right-[65%] sm:right-[29%]"
              : "left-[65%] sm:left-[31%]"
          }`}
        >
          <div className="bg-[#111111] p-5 rounded-xl border-2 border-[#1d1d1d] hover:shadow-xl group w-[80%]">
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
                    <h3 className="text-base font-semibold text-[#ffffff] group-hover:text-[#FED100]">
                      {t("uae_title1")}
                    </h3>
                    <p className="text-xs text-[#c6c6c6]"> {t("uae_title2")}</p>
                  </div>
                </div>
                <Link href={`/${locale}/account-types`}>
                  <div className="w-[33px] h-[33px]">
                    <Image
                      unoptimized={true}
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Arrow.svg"
                      alt="Trustpilot"
                      width={100}
                      height={100}
                      className="arrow"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-[#c6c6c6] mt-4 text-sm sm:text-[15px] w-[80%]">
                {t("uae_address")}
              </p>
            </Link>
          </div>
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact/Pin.svg"
            alt="Location Map Icon"
            width={19}
            height={19}
            className="w-[50px]"
          />
        </div>
        <div
          className={`absolute top-[46%] sm:top-[54%] flex items-center gap-2 ${
            locale === "ar" || locale === "fa" || locale === "kur"
              ? "right-[50%]"
              : "left-[50%]"
          }`}
        >
          <div className="bg-[#111111] p-5 rounded-xl border-2 border-[#1d1d1d] hover:shadow-xl group w-[80%]">
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
                      alt="ZA"
                      width={100}
                      height={100}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#ffffff] group-hover:text-[#FED100]">
                      {t("africa_title1")}
                    </h3>
                    <p className="text-xs text-[#c6c6c6]">
                      {" "}
                      {t("africa_title2")}
                    </p>
                  </div>
                </div>
                <Link href={`/${locale}/account-types`}>
                  <div className="w-[33px] h-[33px]">
                    <Image
                      unoptimized={true}
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/Arrow.svg"
                      alt="Trustpilot"
                      width={100}
                      height={100}
                      className="arrow"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-[#c6c6c6] mt-4 text-sm sm:text-[15px] w-[80%]">
                {t("africa_address")}
              </p>
            </Link>
          </div>
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact/Pin.svg"
            alt="Location Map Icon"
            width={19}
            height={19}
            className="w-[50px]"
          />
        </div>
        <div
          className={`absolute bottom-10 hidden lg:block ${
            locale === "ar" || locale === "fa" || locale === "kur"
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
