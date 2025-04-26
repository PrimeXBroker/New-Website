import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AwardsTimelineMobile = () => {
  const t = useTranslations("newAwards.awardCards");

  return (
    <div className="bg-p dark:bg-p-dark py-16">
      <div className="container">
        <div class="timeline-mobile flex justify-center">
          <div class="outer inline-block">
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute -top-3 -left-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count1")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+1.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear1`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle1`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark">
                    {t(`title1`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description1`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute top-1/2 -right-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count2")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+2.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear1`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle2`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark ">
                    {t(`title2`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description2`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute top-1/2 -left-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count3")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+3.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear3`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle3`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark ">
                    {t(`title3`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description3`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute top-1/2 -right-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count4")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+4.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear4`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle4`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark ">
                    {t(`title4`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description4`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute top-1/2 -left-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count5")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+5.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear5`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle5`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark ">
                    {t(`title5`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description5`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute top-1/2 -right-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count6")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+6.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear6`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle6`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark ">
                    {t(`title6`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description6`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute top-1/2 -left-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count7")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+7.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear7`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle7`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark ">
                    {t(`title7`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description7`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute top-1/2 -right-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count8")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+8.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear8`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle8`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark ">
                    {t(`title8`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description8`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute top-1/2 -left-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count9")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+9.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear9`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle9`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark ">
                    {t(`title9`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description9`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute top-1/2 -right-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count10")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+10.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear10`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle10`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark ">
                    {t(`title10`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description10`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute top-1/2 -left-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count11")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+11.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear11`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle11`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark ">
                    {t(`title11`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description11`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-cc dark:bg-cc-dark w-8 h-8 rounded-full absolute -bottom-1 -right-3 flex justify-center items-center">
                <span className="text-ts dark:text-ts-dark text-sm">
                  {t("award_count12")}
                </span>
              </div>
              <div
                className={`rounded-[20px] p-5 transition-all duration-700 
                    bg-cc dark:bg-cc-dark text-tm dark:text-tm-dark
                `}
              >
                <div
                  className="relative bg-e2 dark:bg-e2-dark p-10 rounded-[12px]"
                  dir="ltr"
                >
                  <div className="flex justify-center items-center">
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Left.svg"
                      alt="Left Leaf"
                      className="w-full"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award+12.png`}
                      alt="Award"
                      className="w-[106px] h-[106px]"
                    />
                    <Image
                      unoptimized={true}
                      width="120"
                      height="120"
                      src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Leaf+Right.svg"
                      alt="Right Leaf"
                      className="w-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-e1 dark:bg-e1-dark px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear12`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-ts dark:text-ts-dark">
                    {t(`subtitle12`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 text-tm dark:text-tm-dark ">
                    {t(`title12`)}
                  </h2>
                  <p className="text-sm mt-2 text-ts dark:text-ts-dark">
                    {t(`description12`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsTimelineMobile;
