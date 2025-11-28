"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const WhyChooseHammurabi = () => {
  const t = useTranslations("hammurabiAccount.whyChooseHammurabi");

  const features = [
    t("feature1"),
    t("feature2"),
    t("feature3"),
    t("feature4"),
    t("feature5"),
    t("feature6"),
    t("feature7"),
    t("feature8"),
    t("feature9"),
    t("feature15"),
    t("feature10"),
    t("feature11"),
    t("feature12"),
    t("feature13"),
    t("feature14"),
  ];

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container mx-auto">
        <div className="bg-cc dark:bg-cc-dark grid grid-cols-1 lg:grid-cols-12 px-4 pt-10 sm:px-10 sm:pt-10 pb-10 items-center rounded-2xl">
          <div className="col-span-12 lg:col-span-7 mb-6 lg:mb-0 text-center lg:text-start">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark mb-4 xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              {t("title1")}
              <br className="hidden sm:block" />
              <span className="text-pcp dark:text-pcp-dark text-3xl sm:text-4xl md:text-[42px]">
                {t("title2")}
              </span>
            </h2>
            <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base mb-3">
              {t("desc1")}
            </p>
            <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base mb-0">
              {t("desc2")}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="flex justify-center lg:justify-end">
              <Image
                unoptimized={true}
                width={500}
                height={400}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/hammurabic-account/Why+Choose+Image.png"
                alt="Why choose hammurabi account"
                className="sm:w-[70%] h-auto"
              />
            </div>
          </div>

          <div className="col-span-12 mt-4">
            <div className="flex flex-wrap gap-3">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center bg-e1 dark:bg-e1-dark border border-e2 dark:border-e2-dark rounded-lg p-[6px]"
                >
                  <div className="flex items-center justify-center w-7 h-7 bg-e2 dark:bg-e2-dark rounded-md me-2 text-sm">
                    ✔
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-tm dark:text-tm-dark whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHammurabi;
