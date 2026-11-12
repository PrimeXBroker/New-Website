"use client";
import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("competitions.hero");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-[40px] lg:pt-24">
      <div className="container flex flex-col lg:flex-row justify-around pt-16">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-7">
            <div
              className={`mb-5 w-full flex ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "justify-center lg:justify-end"
                  : "justify-center lg:justify-start"
              }`}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-pcp dark:border-pcp-dark bg-cc dark:bg-cc-dark">
                <span className="text-xs sm:text-sm font-medium text-pcp dark:text-pcp-dark">
                  {t("badgeTxt")}
                </span>
              </div>
            </div>
            <h1
              className={`text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark pb-1 ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("title_1")}
            </h1>
            <h2
              className={`text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-semibold text-pcp dark:text-pcp-dark ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              {t("title_2")}
            </h2>
            <p
              className={`text-tm dark:text-tm-dark w-[95%] sm:w-[90%] mx-auto lg:mx-0 lg:w-[75%] ${locale === "ar" ? "mt-6" : "my-5"} text-sm sm:text-base ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "text-center lg:text-right"
                  : "text-center lg:text-left"
              }`}
            >
              <span className="text-pcp dark:text-pcp-dark">
                {t("description1")}
              </span>
              {t("description2")}
            </p>
            <div className="mt-8">
              <CustomYellowButton
                title={t("btnTxt")}
                onClick={handleClick}
                className="py-5 px-9 lg:py-4 lg:px-9 text-lg w-full lg:w-auto justify-between sm:justify-center"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="flex justify-center md:justify-end mt-5 md:mt-0">
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/competitions/Hero+Image.png"
                alt="Competition Hero Image"
                width="550"
                height="500"
                className={`w-full sm:w-[93%] h-auto`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
