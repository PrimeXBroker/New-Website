"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const AboutECNBroker = () => {
  const locale = useLocale();
  const t = useTranslations("ecnBroker.aboutECN");

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6 hidden md:block">
            <div className="flex justify-center md:justify-start">
              <div className="px-[70px]">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/what-is-ecn.webp"
                  width="100"
                  height="100"
                  alt="Hero Image"
                  className="w-full h-[420px]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="text-center md:text-start">
              <h2 className="text-tm dark:text-tm-dark font-semibold text-3xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3">
                {t("title1")}
                <span className="text-pcp dark:text-pcp-dark">
                  {t("title2")}
                </span>
              </h2>
              <p className="font-normal text-sm sm:text-lg md:text-base lg:text-lg text-ts dark:text-ts-dark">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:hidden">
            <div className="flex justify-center md:justify-start">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/what-is-ecn.webp"
                width="100"
                height="100"
                alt="Hero Image"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutECNBroker;
