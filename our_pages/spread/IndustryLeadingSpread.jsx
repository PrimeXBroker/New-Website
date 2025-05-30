"use client";
import CustomWhiteButton from "@/components/common/CustomWhiteButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  BsArrowUpLeftCircleFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";

const SpreadMatter = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("spreadPage.industryLeading");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark py-16 sm:py-28">
      <div className="container mx-auto">
        <div className="bg-cc dark:bg-cc-dark grid grid-cols-1 lg:grid-cols-12 px-4 pt-14 sm:px-10 sm:pt-10 pb-10 items-center rounded-2xl">
          <div className="col-span-1 lg:col-span-4 hidden lg:block">
            <div className="flex justify-center lg:justify-start">
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/spread/industry-leading.png"
                alt="Spread Matters"
                className={`sm:w-[80%] h-auto`}
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-8 mb-6 lg:mb-0 text-center lg:text-start">
            <p className="text-lg md:text-2xl mb-3 text-ts dark:text-ts-dark font-semibold">
              {t("subtitle")}
            </p>
            <h2 className="text-3xl sm:text-[42px] font-bold text-tm dark:text-tm-dark mb-5">
              {t("title1")}
              <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
            </h2>
            <p className="text-base text-tm dark:text-tm-dark">
              {t("description")}
            </p>
            <div className="flex justify-center lg:justify-start">
              <CustomWhiteButton
                title={t("btnTxt")}
                onClick={handleClick}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center mt-5"
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4 lg:hidden">
            <div className="flex justify-center lg:justify-start">
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/spread/industry-leading.png"
                alt="Spread Matters"
                className={`sm:w-[80%] h-auto`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpreadMatter;
