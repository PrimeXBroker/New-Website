"use client";
import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const DepositorSection1 = () => {
  const locale = useLocale();
  const h = useTranslations("localDepositor.section1");

  return (
    <section className="flex flex-col-reverse md:flex-row justify-around">
      <div className="flex-1 flex pt-5 md:mt-0">
        <Image
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/about.webp"
          alt="Economic Calender Hero Image"
          width="550"
          height="500"
          className={`w-full sm:w-[80%] ms:w-full`}
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-enter md:items-start md:w-[70%]">
        <h2
          className={`text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark pb-1 ${
            locale === "ar" || locale === "ps" || locale === "ku"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
        >
          {h("title_1")}
        </h2>
        <p
          className={`text-ts dark:text-ts-dark  mt-2 text-sm sm:text-base ${
            locale === "ar" || locale === "ps" || locale === "ku"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
          style={{ letterSpacing: "0.7px" }}
        >
          {h("description")}
        </p>
      </div>
    </section>
  );
};

export default DepositorSection1;
