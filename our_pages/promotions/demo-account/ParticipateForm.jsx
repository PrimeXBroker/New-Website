"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const ParticipateForm = () => {
  const locale = useLocale();
  const t = useTranslations("demoAccount.participateForm");
  return (
    <section className="py-20 bg-[#000000]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-start-3 lg:col-start-0 sm:col-span-8 lg:col-span-6 mb-8 lg:mb-0 hidden md:block">
            <div>
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/fac-mobile.webp"
                width="350"
                height="300"
                alt="Funded Account Hero"
                className="w-[500px] mx-auto"
              />
            </div>
          </div>
          <div
            className={`col-span-12 sm:col-start-2 lg:col-start-0 sm:col-span-10 lg:col-span-6 flex flex-col mx-auto ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "pr-[20px] md:pl-[173px]"
                : "pr-[20px] md:pr-[173px]"
            }`}
          >
            <h2 className="text-[#ffffff] text-2xl md:text-4xl font-semibold mb-8">
              {t("title1")}
              <span className="text-[#FED100]">{t("title2")}</span>{" "}
              {t("title3")}
              <br />
              {t("title4")}{" "}
              <span className="text-[#FED100]">{t("title5")}</span>
            </h2>
            <div className="flex flex-col space-y-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-[50px] h-[50px] flex items-center justify-center">
                    <Image
                      unoptimized={true}
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/Frame+18.svg"
                      width="50"
                      height="50"
                      alt="Icon 1"
                    />
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-10 border-l-2 border-dashed border-[#ffffff] z-0"></div>
                </div>
                <p className="text-base font-medium text-[#c6c6c6]">
                  {t("step1_p1")}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-[50px] h-[50px] flex items-center justify-center">
                    <Image
                      unoptimized={true}
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/Frame+19.svg"
                      width="50"
                      height="50"
                      alt="Icon 2"
                      className="z-10"
                    />
                  </div>
                </div>
                <p className="text-base font-medium text-[#c6c6c6]">
                  {t("step2_p1")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-start-3 lg:col-start-0 sm:col-span-8 lg:col-span-6 mb-8 lg:mb-0 block md:hidden mt-8">
            <div>
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/fac-mobile.webp"
                width="350"
                height="300"
                alt="Funded Account Banner"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipateForm;
