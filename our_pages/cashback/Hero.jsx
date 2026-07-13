"use client";
import CustomBrownButton from "@/components/common/CustomBrownButton";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("cashback.hero");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-28 sm:pt-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center rounded-2xl relative overflow-hidden">
          <div className=" text-center">
            <div className="flex items-center justify-center mx-auto gap-2 bg-[#f5f5f5] dark:bg-white dark:bg-opacity-[0.12] w-fit px-3 py-[6px] rounded-lg mb-[10px] border-[0.7px] border-[#f5f5f5] dark:border-white dark:border-opacity-[0.15]">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/Hero+Chip+Icon.svg"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/light/Hero+Chip+Icon.svg"
                }
                width="16"
                height="16"
                alt="badge"
                className="w-[24px] h-auto"
              />
              <p className="text-tm dark:text-tm-dark font-medium text-sm text-start">
                {t("badgeText")}
              </p>
            </div>
            <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark !leading-tight my-5">
              {t("title1")}
              <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
              {t("title3")}
              <br className="hidden sm:block" />
              {t("title4")}
              <span className="text-pcp dark:text-pcp-dark">{t("title5")}</span>
              {t("title6")}
            </h2>
            <p className="text-ts dark:text-ts-dark font-medium text-base sm:text-xl mb-0 md:w-[90%] lg:w-[78%] xl:w-[71%] mx-auto">
              {t("description")}
            </p>
            <div className="flex justify-center">
              <div className="mt-6 flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <CustomYellowButton
                  title={t("btn1_txt")}
                  onClick={handleClick}
                  className="py-4 px-7 w-full md:w-auto text-base justify-between md:justify-center"
                />
                <CustomBrownButton
                  title={t("btn2_txt")}
                  onClick={handleClick}
                  className="py-4 px-7 w-full md:w-auto text-base justify-between md:justify-center"
                />
              </div>
            </div>
            <div className="mt-10 sm:mt-14">
              <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base mb-5 md:w-[90%] lg:w-full text-center mx-auto">
                {t("disclaimer")}
              </p>
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/light/Hero+Image+Dark+Mode.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/cashback/light/Hero+Image+Light+Mode.png"
                }
                width="100"
                height="100"
                alt="Cashback Hero"
                className={`w-full h-auto`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
