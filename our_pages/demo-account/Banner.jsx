"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("demoAccount.banner");

  return (
    <section
      className="bg-center bg-cover h-[430px] sm:h-[570px] pt-24 sm:pt-32"
      style={{
        backgroundImage:
          "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-account-bg.webp')",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <h1
              className={`text-primary font-semibold text-center text-xl sm:text-[2.5rem]`}
              style={{ lineHeight: "45px", letterSpacing: "1px" }}
            >
              {t("title")}
              <span className="text-base sm:text-xl font-light block text-white sm:mt-2">
                {t("subtitle_p1")}
                <span className="font-semibold">{t("subtitle_p2")}</span>
              </span>
            </h1>
          </div>
          <div className="col-span-12">
            <div className="mt-[36px] sm:mt-[46px]">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-account-banner.webp"
                width="350"
                height="300"
                alt="banner Image"
                className="w-[600px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
