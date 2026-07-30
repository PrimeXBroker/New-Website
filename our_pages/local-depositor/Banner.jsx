"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("localDepositor.hero");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-28 sm:pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center md:py-10 lg:py-0">
          <div className="col-span-12 md:col-span-6 text-center md:text-start">
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark !leading-tight">
                {t("title_1")}
              </h1>
              <p className="text-pcp dark:text-pcp-dark my-4 text-xl">
                {t("title_2")}
              </p>
              <p className="text-tm dark:text-ts-dark">{t("description")}</p>
            </div>
            <div className="mt-8">
              <CustomYellowButton
                title={t("btnTxt")}
                onClick={handleClick}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full md:w-auto justify-between sm:justify-center"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 mt-6 md:mt-0">
            <div className="flex justify-center md:justify-end">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/local-depositor/hero.webp"
                width="100"
                height="100"
                alt="Hero Image"
                className={`w-full sm:w-[80%] h-full`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
