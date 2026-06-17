"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const DepositorSection1 = () => {
  const locale = useLocale();
  const t = useTranslations("localDepositor.section1");

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6 hidden md:block">
            <div className="">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/about.webp"
                width="100"
                height="100"
                alt="About Image"
                className={`w-full sm:w-[80%]`}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="text-center md:text-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark">
                {t("title_1")}
              </h2>
              <p
                className={`text-ts dark:text-ts-dark mt-6 w-full mx-auto md:mx-0 ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                {t("description1")}
              </p>
              <p
                className={`text-ts dark:text-ts-dark mt-6 w-full mx-auto md:mx-0 ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                {t("description2")}
              </p>
              <p
                className={`text-ts dark:text-ts-dark mt-6 w-full mx-auto md:mx-0 ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                {t("description3")}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 block md:hidden mt-5 md:mt-0">
            <div className="flex justify-center md:justify-start">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/about.webp"
                width="100"
                height="100"
                alt="About Image"
                className={`w-full sm:w-[80%]`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositorSection1;
