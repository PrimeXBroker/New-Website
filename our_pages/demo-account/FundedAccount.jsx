"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import CompetitionWidget from "./CompetitionWidget";

const FundedAccount = () => {
  const locale = useLocale();
  const t = useTranslations("demoAccount.fundedAccount");

  return (
    <section className="mt-20 sm:mt-36 mb-20">
      <div className="container">
        <h1 className="text-secondary text-lg sm:text-xl lg:text-2xl font-semibold text-center pb-16">
          {t("title1")} <br />
          <span className="text-3xl sm:text-5xl lg:text-6xl block my-1">
            {t("title2")}
          </span>
          <span className="text-3xl sm:text-5xl lg:text-6xl">
            {t("title3")}
          </span>
        </h1>
        <CompetitionWidget />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative mb-6 sm:mb-0 transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 group">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-account-card.webp"
              width="350"
              height="300"
              alt="Tab Background"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-white text-4xl absolute top-[25px] md:top-[38px] font-semibold group-hover:text-primary">
                {t("step1_count")}
              </div>
              <div className="flex items-center gap-3 px-12 mt-14">
                <img
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-account-icon1.webp"
                  alt="banner Image"
                  className="w-[70px] mx-auto"
                />
                <p
                  className={`mt-4 ${
                    locale === "ar" ? "text-right" : "text-left"
                  } font-medium`}
                >
                  {t("step1_desc")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative mb-6 sm:mb-0 transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 group">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-account-card.webp"
              width="350"
              height="300"
              alt="Tab Background"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-white text-4xl absolute top-[25px] md:top-[38px] font-semibold group-hover:text-primary">
                {t("step2_count")}
              </div>
              <div className="flex items-center gap-3 px-12 mt-14">
                <img
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-account-icon2.webp"
                  alt="banner Image"
                  className="w-[70px] mx-auto"
                />
                <p
                  className={`mt-4 ${
                    locale === "ar" ? "text-right" : "text-left"
                  } font-medium`}
                >
                  {t("step2_desc")}
                </p>
              </div>
            </div>
          </div>
          <div className=" col-span-12 sm:col-start-4 lg:col-start-0 sm:col-span-6 lg:col-span-4 relative flex transform translate-y-[1rem] hover:translate-y-0 transition-transform duration-500 group">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-account-card.webp"
              width="350"
              height="300"
              alt="Tab Background"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-white text-4xl absolute top-[25px] md:top-[38px] font-semibold group-hover:text-primary">
                {t("step3_count")}
              </div>
              <div className="flex items-center gap-3 px-12 mt-14">
                <img
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/demo-account-icon3.webp"
                  alt="banner Image"
                  className="w-[70px] mx-auto"
                />
                <p
                  className={`mt-4 ${
                    locale === "ar" ? "text-right" : "text-left"
                  } font-medium`}
                >
                  {t("step3_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundedAccount;
