import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const AwardsTimelineMobile = () => {
  const locale = useLocale();
  const t = useTranslations("newAwards.awardCards");
  return (
    <div className="bg-[#000000] py-20">
      <div className="container">
        <div class="timeline-mobile flex justify-center">
          <div class="outer inline-block">
            <div class="card-mobile relative">
              <div className="bg-[#222222] w-8 h-8 rounded-full absolute -top-3 -left-3 flex justify-center items-center">
                <span className="text-[#c6c6c6] text-sm">
                  {t("award_count1")}
                </span>
              </div>
              <div
                className={`border-2 border-[#1D1D1D] rounded-[20px] p-5 transition-all duration-700 
                    bg-[#111111] text-[#ffffff]
                `}
              >
                <div
                  className="relative bg-[#1D1D1D] p-10 rounded-[12px]"
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
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Award+1.svg`}
                      alt="Award"
                      className="w-full"
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
                  <div className="absolute top-2 right-2 bg-[#333333] px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear1`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-[#F1F1F1]">
                    {t(`subtitle1`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1">
                    {t(`title1`)}
                  </h2>
                  <p className="text-sm mt-2 text-[#c6c6c6]">
                    {t(`description1`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-[#222222] w-8 h-8 rounded-full absolute top-1/2 -right-3 flex justify-center items-center">
                <span className="text-[#c6c6c6] text-sm">
                  {t("award_count2")}
                </span>
              </div>
              <div
                className={`border-2 border-[#1D1D1D] rounded-[20px] p-5 transition-all duration-700 
                    bg-[#111111] text-[#ffffff]
                `}
              >
                <div
                  className="relative bg-[#1D1D1D] p-10 rounded-[12px]"
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
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Award+2.svg`}
                      alt="Award"
                      className="w-full"
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
                  <div className="absolute top-2 right-2 bg-[#333333] px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear1`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-[#F1F1F1]">
                    {t(`subtitle2`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 ">
                    {t(`title2`)}
                  </h2>
                  <p className="text-sm mt-2 text-[#c6c6c6]">
                    {t(`description2`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-[#222222] w-8 h-8 rounded-full absolute top-1/2 -left-3 flex justify-center items-center">
                <span className="text-[#c6c6c6] text-sm">
                  {t("award_count3")}
                </span>
              </div>
              <div
                className={`border-2 border-[#1D1D1D] rounded-[20px] p-5 transition-all duration-700 
                    bg-[#111111] text-[#ffffff]
                `}
              >
                <div
                  className="relative bg-[#1D1D1D] p-10 rounded-[12px]"
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
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Award+3.svg`}
                      alt="Award"
                      className="w-full"
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
                  <div className="absolute top-2 right-2 bg-[#333333] px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear3`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-[#F1F1F1]">
                    {t(`subtitle3`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 ">
                    {t(`title3`)}
                  </h2>
                  <p className="text-sm mt-2 text-[#c6c6c6]">
                    {t(`description3`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-[#222222] w-8 h-8 rounded-full absolute top-1/2 -right-3 flex justify-center items-center">
                <span className="text-[#c6c6c6] text-sm">
                  {t("award_count4")}
                </span>
              </div>
              <div
                className={`border-2 border-[#1D1D1D] rounded-[20px] p-5 transition-all duration-700 
                    bg-[#111111] text-[#ffffff]
                `}
              >
                <div
                  className="relative bg-[#1D1D1D] p-10 rounded-[12px]"
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
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Award+4.svg`}
                      alt="Award"
                      className="w-full"
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
                  <div className="absolute top-2 right-2 bg-[#333333] px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear4`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-[#F1F1F1]">
                    {t(`subtitle4`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 ">
                    {t(`title4`)}
                  </h2>
                  <p className="text-sm mt-2 text-[#c6c6c6]">
                    {t(`description4`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-[#222222] w-8 h-8 rounded-full absolute top-1/2 -left-3 flex justify-center items-center">
                <span className="text-[#c6c6c6] text-sm">
                  {t("award_count5")}
                </span>
              </div>
              <div
                className={`border-2 border-[#1D1D1D] rounded-[20px] p-5 transition-all duration-700 
                    bg-[#111111] text-[#ffffff]
                `}
              >
                <div
                  className="relative bg-[#1D1D1D] p-10 rounded-[12px]"
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
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Award+5.svg`}
                      alt="Award"
                      className="w-full"
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
                  <div className="absolute top-2 right-2 bg-[#333333] px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear5`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-[#F1F1F1]">
                    {t(`subtitle5`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 ">
                    {t(`title5`)}
                  </h2>
                  <p className="text-sm mt-2 text-[#c6c6c6]">
                    {t(`description5`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-[#222222] w-8 h-8 rounded-full absolute top-1/2 -right-3 flex justify-center items-center">
                <span className="text-[#c6c6c6] text-sm">
                  {t("award_count6")}
                </span>
              </div>
              <div
                className={`border-2 border-[#1D1D1D] rounded-[20px] p-5 transition-all duration-700 
                    bg-[#111111] text-[#ffffff]
                `}
              >
                <div
                  className="relative bg-[#1D1D1D] p-10 rounded-[12px]"
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
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Award+6.svg`}
                      alt="Award"
                      className="w-full"
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
                  <div className="absolute top-2 right-2 bg-[#333333] px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear6`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-[#F1F1F1]">
                    {t(`subtitle6`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 ">
                    {t(`title6`)}
                  </h2>
                  <p className="text-sm mt-2 text-[#c6c6c6]">
                    {t(`description6`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-[#222222] w-8 h-8 rounded-full absolute top-1/2 -left-3 flex justify-center items-center">
                <span className="text-[#c6c6c6] text-sm">
                  {t("award_count7")}
                </span>
              </div>
              <div
                className={`border-2 border-[#1D1D1D] rounded-[20px] p-5 transition-all duration-700 
                    bg-[#111111] text-[#ffffff]
                `}
              >
                <div
                  className="relative bg-[#1D1D1D] p-10 rounded-[12px]"
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
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Award+7.svg`}
                      alt="Award"
                      className="w-full"
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
                  <div className="absolute top-2 right-2 bg-[#333333] px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear7`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-[#F1F1F1]">
                    {t(`subtitle7`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 ">
                    {t(`title7`)}
                  </h2>
                  <p className="text-sm mt-2 text-[#c6c6c6]">
                    {t(`description7`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-[#222222] w-8 h-8 rounded-full absolute top-1/2 -right-3 flex justify-center items-center">
                <span className="text-[#c6c6c6] text-sm">
                  {t("award_count8")}
                </span>
              </div>
              <div
                className={`border-2 border-[#1D1D1D] rounded-[20px] p-5 transition-all duration-700 
                    bg-[#111111] text-[#ffffff]
                `}
              >
                <div
                  className="relative bg-[#1D1D1D] p-10 rounded-[12px]"
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
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Award+8.svg`}
                      alt="Award"
                      className="w-full"
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
                  <div className="absolute top-2 right-2 bg-[#333333] px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear8`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-[#F1F1F1]">
                    {t(`subtitle8`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 ">
                    {t(`title8`)}
                  </h2>
                  <p className="text-sm mt-2 text-[#c6c6c6]">
                    {t(`description8`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-[#222222] w-8 h-8 rounded-full absolute top-1/2 -left-3 flex justify-center items-center">
                <span className="text-[#c6c6c6] text-sm">
                  {t("award_count9")}
                </span>
              </div>
              <div
                className={`border-2 border-[#1D1D1D] rounded-[20px] p-5 transition-all duration-700 
                    bg-[#111111] text-[#ffffff]
                `}
              >
                <div
                  className="relative bg-[#1D1D1D] p-10 rounded-[12px]"
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
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Award+9.svg`}
                      alt="Award"
                      className="w-full"
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
                  <div className="absolute top-2 right-2 bg-[#333333] px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear9`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-[#F1F1F1]">
                    {t(`subtitle9`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 ">
                    {t(`title9`)}
                  </h2>
                  <p className="text-sm mt-2 text-[#c6c6c6]">
                    {t(`description9`)}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-mobile relative">
              <div className="bg-[#222222] w-8 h-8 rounded-full absolute bottom-0 -right-3 flex justify-center items-center">
                <span className="text-[#c6c6c6] text-sm">
                  {t("award_count10")}
                </span>
              </div>
              <div
                className={`border-2 border-[#1D1D1D] rounded-[20px] p-5 transition-all duration-700 
                    bg-[#111111] text-[#ffffff]
                `}
              >
                <div
                  className="relative bg-[#1D1D1D] p-10 rounded-[12px]"
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
                      src={`https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/Award+10.svg`}
                      alt="Award"
                      className="w-full"
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
                  <div className="absolute top-2 right-2 bg-[#333333] px-2 py-1 rounded-[4px] text-xs sm:text-sm md:text-xs lg:text-sm">
                    {t(`awardYear10`)}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-[#F1F1F1]">
                    {t(`subtitle10`)}
                  </h3>
                  <h2 className="text-lg sm:text-[22px] md:text-lg lg:text-[22px] font-semibold mt-1 ">
                    {t(`title10`)}
                  </h2>
                  <p className="text-sm mt-2 text-[#c6c6c6]">
                    {t(`description10`)}
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
