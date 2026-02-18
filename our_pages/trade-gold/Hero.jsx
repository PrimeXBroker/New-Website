"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = ({ translation, heroImageDark, heroImageLight, textChange }) => {
  const router = useRouter();
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations(translation);

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-24 sm:pt-28">
      <div className="container">
        <div className="py-8 sm:py-10 md:py-0">
          <div className="grid grid-cols-12 items-center md:py-10 lg:py-0 lg:h-[600px]">
            <div className="col-span-12 md:col-span-6 text-center md:text-start">
              <div
                className={`text-tm dark:text-tm-dark font-normal uppercase ${
                  textChange === true
                    ? "text-sm sm:text-xl md:text-base lg:text-lg"
                    : "text-sm sm:text-xl md:text-base lg:text-xl"
                }`}
              >
                {t("hero_subtitle")}
              </div>
              {textChange === false && (
                <h1 className="text-tm dark:text-tm-dark font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight my-3 uppercase">
                  {t("hero_title")}
                </h1>
              )}
              {textChange === true && (
                <h1 className="text-tm dark:text-tm-dark font-semibold text-4xl lg:text-6xl my-3 uppercase">
                  {t("hero_title1")} <br />
                  <span className="text-pcp dark:text-pcp-dark">
                    {t("hero_title2")}
                  </span>
                </h1>
              )}
              <p
                className={`font-normal  ${
                  textChange === true
                    ? "text-base sm:text-lg text-ts dark:text-ts-dark"
                    : "uppercase text-base sm:text-lg lg:text-xl text-tm dark:text-tm-dark"
                } mb-8`}
              >
                {t("hero_description")}
              </p>
              <div className="lg:mt-3 flex justify-center md:justify-start">
                <CustomYellowButton
                  title={t("btnTxt")}
                  onClick={handleClick}
                  className={` ${
                    textChange === true ? "px-5" : "px-12"
                  }  py-4 text-lg w-full sm:w-auto justify-between sm:justify-center`}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mt-6 md:mt-0">
              <div className="flex justify-center md:justify-end">
                <Image
                  unoptimized={true}
                  src={theme === "dark" ? heroImageDark : heroImageLight}
                  width="100"
                  height="100"
                  alt="Hero Image"
                  className="w-full md:w-[84%] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
