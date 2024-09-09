import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("metaTrader5.hero");

  return (
    <section className="relative pt-[60px] lg:pt-0">
      {/* Background Image */}
      <Image
        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/background_mt5.webp"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10"
        priority={true}
      />

      {/* Content */}
      <div className="container flex flex-col md:flex-row justify-around items-center py-12 lg:md:text-left text-center md:h-[80vh] relative">
        <div className="md:w-[40%]">
          <h1
            className={`text-primary text-3xl lg:text:4xl xl:text-5xl font-semibold mb-8 ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            {t("title")}
          </h1>
          <p
            className={`text-white md:text-base lg:text-xl font-[500] ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
            style={{ letterSpacing: "1.4px" }}
          >
            {t("desc_1")}
          </p>
          <p
            className={`text-white md:text-base lg:text-xl font-[700] ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
            style={{ letterSpacing: "0.9px" }}
          >
            {t("desc_2")}
          </p>
          <div
            className={`pt-10 ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            <Link
              href="https://client.primexbroker.com/en/register"
              className="bg-primary rounded-full text-[13px] text-center font-semibold text-secondary px-10 py-3"
              style={{ letterSpacing: "0.9px" }}
            >
              {t("start_now_btn")}
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/Banner.webp"
            width="350"
            height="300"
            alt="Banner Image"
            className="md:w-[300px] lg:w-[350px]"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
