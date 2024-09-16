"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("demoAccount.banner");

  return (
    <section className="w-full flex flex-col md:flex-row md:h-[650px]">
      <div className="w-[100%] md:w-[60%] bg-black text-white flex items-center pt-28 pb-36 sm:pb-32 md:pt-0 md:pb-0">
        <div
          className={`${
            locale === "ar" ? "mr-[10%] xl:mr-[18%]" : "ml-[10%] xl:ml-[18%]"
          }`}
        >
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-semibold text-white sm:mb-2">
            {t("title1")}
          </h1>
          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-semibold text-primary">
            {" "}
            {t("title2")}
          </h2>
          <p className="text-lg sm:text-xl my-4">
            <span className="text-[#c6c6c6]">{t("subtitle_p1")}</span>
            {t("subtitle_p2")}
            <br />
            {t("subtitle_p3")}
          </p>
          <button
            onClick={() =>
              window.open(
                `${
                  locale === "ar"
                    ? "https://client.primexbroker.com/ar/register"
                    : "https://client.primexbroker.com/en/register"
                }`
              )
            }
            className="py-3 bg-white text-black rounded-lg hover:bg-primary w-[100%] md:w-[157px]"
          >
            {t("start_btn")}
          </button>
          <div className="w-full h-[100px] bg-black flex flex-col justify-between mt-6">
            <div className="flex flex-row items-center gap-2 mb-1">
              <div>
                <Image
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/trustpilot-logo.svg"
                  alt="Trustpilot Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <span className="text-xs">{t("rated_title")}</span>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/reviews.svg"
                alt="Reviews"
                width={180}
                height={180}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs mb-1">{t("reviewed_title")}</span>
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/fac-testi.webp"
                alt="User Testimonials"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[40%] bg-[#fed100] flex justify-center items-center pb-32">
        <Image
          unoptimized={true}
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/fac-top-banner.webp"
          width="350"
          height="300"
          alt="banner Image"
          className={`w-[80%] sm:w-[70%] md:w-[100%] object-contain relative top-[-95px] sm:top-[-140px] md:top-[8%] ${
            locale === "ar" ? "md:left-[50%]" : "md:right-[50%] "
          }`}
        />
      </div>
    </section>
  );
};

export default Banner;
