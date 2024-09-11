import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import local from "@next/font/local";

const Banner = ({ setActive }) => {
  const locale = useLocale();
  const h = useTranslations("academy.hero");
  const f = useTranslations("academy.unlimitedFeatures");

  return (
    <section className="">
      <div className="bg-secondary pt-[40px] lg:pt-0">
        <div className="container flex flex-col md:flex-row justify-around py-16">
          <div className="max-w-2xl flex flex-col justify-center items-start gap-6 md:w-[70%]">
            <h1
              className={`text-primary text-xl md:text-3xl font-semibold ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ lineHeight: "45px", letterSpacing: "1px" }}
            >
              <span className="text-white font-light block text-lg text-2xl">
                {h("title_1")}
              </span>
              {h("title_2")}
              <span className="text-white text-xl md:text-3xl font-semibold block mt-3">
                {h("title_3")}
              </span>
              <span className="text-white text-xl md:text-3xl font-semibold block mt-1">
                {h("title_4")}
              </span>
            </h1>
            <p
              className={`text-white md:text-lg text-medium md:max-w-xl ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "0.7px" }}
            >
              {h("description")}
            </p>
            <Link
              href="#academy-form"
              onClick={() => setActive("Webinars")}
              className="bg-primary text-center px-4 py-4 rounded-full w-[200px] shadow-xl block md:m-0 mx-auto"
            >
              {h("join_btn")}
            </Link>
          </div>
          <div className="flex">
            <Image
              className="mx-auto md:m-0 block"
              src={
                locale === "en"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/banner_img.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/academy/20240805-171521.png"
              }
              alt="Banner Image"
              width="550"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="container py-16 max-w-xl flex flex-col gap-5 sm:gap-5">
        <h2
          className="md:text-3xl text-xl text-secondary font-semibold text-center"
          style={{ lineHeight: "50px", letterSpacing: "1px" }}
        >
          {f("title")}
        </h2>
        <p
          className="text-center text-secondary md:text-medium"
          style={{ lineHeight: "30px", letterSpacing: "0.8px" }}
        >
          {f("description")}
        </p>
        <Link
          href="https://download.mql5.com/cdn/web/22640/mt5/primexbroker5setup.exe"
          className="bg-primary text-center px-4 py-4 rounded-full w-[200px] mx-auto block shadow-xl mb-3 sm:mb-2"
        >
          {f("download_btn")}
        </Link>
        <p className="text-secondary text-lg text-center" dir="ltr">
          {f("link_title_part_1")}
          <span className="font-[700]">{f("link_title_part_2")}</span>
          {f("link_title_part_3")}
          <Link
            className="text-primary appearance-none pl-2"
            href="https://download.mql5.com/cdn/web/22640/mt5/primexbroker5setup.exe"
          >
            {f("download_link_text")}
          </Link>
        </p>
        <p className="text-secondary text-lg text-center">{f("powered_by")}</p>
      </div>
    </section>
  );
};

export default Banner;
