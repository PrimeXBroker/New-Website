"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useTranslations, useLocale } from "next-intl";

const Banner = ({ setActive, formRef }) => {
  const locale = useLocale();
  const t = useTranslations("topTrader.banner");

  const handleScrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="">
      <div
        style={{
          backgroundImage:
            "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/top-trader-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container flex flex-col md:flex-row justify-around pb-16">
          <div className="flex mb-2 md:mb-0 md:hidden">
            <Image
              unoptimized={true}
              className="w-[100px] md:w-[250px] mx-auto md:m-0 block"
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/top-trader-banner.webp"
              alt="Banner Image"
              width="250"
              height="250"
            />
          </div>
          <div className="max-w-2xl flex flex-col justify-center items-center md:items-start gap-8 md:w-[70%] mx-auto md:mx-0 md:pt-16">
            <h1
              className={`text-secondary font-semibold ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ lineHeight: "45px", letterSpacing: "1px" }}
            >
              <span className="font-light block text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                {t("title")}
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold block">
                {t("subtitle")}
              </span>
            </h1>
            <p
              className={`text-secondary md:text-base text-light md:max-w-xl ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "0.7px" }}
            >
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col">
                <p
                  className={`${
                    locale === "ar" ? "mr-3" : "ml-3"
                  } mb-1 text-xs italic`}
                >
                  {t("already_member")}
                </p>
                <Link
                  href="#"
                  onClick={handleScrollToForm}
                  className="bg-secondary text-white border-1 border-secondary text-center text-sm sm:text-base md:text-sm lg:text-base px-4 py-3 rounded-full w-[280px] sm:w-[280px] md:w-[230px] lg:w-[280px] shadow-xl md:m-0 mx-auto"
                >
                  {t("join_btn")}
                </Link>
              </div>
              <div className="flex flex-col">
                <p
                  className={`${
                    locale === "ar" ? "mr-3" : "ml-3"
                  } mb-1 text-xs italic`}
                >
                  {t("new_here")}
                </p>
                <Link
                  href={`https://client.primexbroker.com/${locale}/register`}
                  target="_blank"
                  className="bg-transparent hover:bg-secondary border-1 border-secondary text-secondary hover:text-white text-center text-sm sm:text-base md:text-sm lg:text-base px-4 py-3 rounded-full w-[280px] sm:w-[280px] md:w-[230px] lg:w-[280px] shadow-xl md:m-0 mx-auto"
                >
                  {t("account_btn")}
                </Link>
              </div>
            </div>
            <Link
              href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/Trader_of_the_month_competition.pdf"
              target="_blank"
              className="text-secondary"
            >
              {t("tc")}
            </Link>
          </div>
          <div className="md:flex mt-8 md:mt-0 hidden">
            <Image
              unoptimized={true}
              className="w-[200px] lg:w-[250px] mx-auto md:m-0 block"
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/top-trader-banner.webp"
              alt="Banner Image"
              width="250"
              height="250"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
