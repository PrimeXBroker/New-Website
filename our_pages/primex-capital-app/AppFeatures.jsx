"use client";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";
import { FiArrowUp } from "react-icons/fi";

const AppFeatures = () => {
  const { theme } = useTheme();
  const locale = useLocale();
  const t = useTranslations("primeXTradingApp.appBenefits");
  const t1 = useTranslations("primeXTradingApp.whyPrimex");

  const handleScrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container">
        <div className="mb-7">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark text-center">
            {t("main_title1")}
            <span className="text-tm dark:text-tm-dark">
              {t("main_title2")}
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="relative">
            <Image
              unoptimized={true}
              width="46"
              height="32"
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Community+Desktop+Dark+Mode.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Community+Desktop+Light+Mode.png"
              }
              alt="In App Community Image"
              className="w-full h-full rounded-2xl hidden md:block"
            />
            <Image
              unoptimized={true}
              width="46"
              height="32"
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Community+Mobile+Dark+Mode.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Community+Mobile+Light+Mode.png"
              }
              alt="In App Community Image"
              className="w-full h-full rounded-2xl md:hidden"
            />
            <div className="bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute bottom-0 mx-2 mb-2 sm:w-[85%]">
              <div className="flex items-center justify-between">
                <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                  {t1("title10")}
                </h5>
                <Image
                  unoptimized={true}
                  width="32"
                  height="32"
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Community+-+Dark.png"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Community+-+Light.svg"
                  }
                  alt="In App Community Icon"
                  className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                />
              </div>
              <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                {t1("desc10")}
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              unoptimized={true}
              width="46"
              height="32"
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Languages+Desktop+Dark+Mode.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Languages+Desktop+Light+Mode.png"
              }
              alt="Language Image"
              className="w-full h-full rounded-2xl hidden md:block"
            />
            <Image
              unoptimized={true}
              width="46"
              height="32"
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Languages+Mobile+Dark+Mode.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Languages+Mobile+Light+Mode.png"
              }
              alt="Language Image"
              className="w-full h-full rounded-2xl md:hidden"
            />
            <div
              className={`bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute bottom-0 mx-2 mb-2 w-[85%] hidden md:block ${
                locale === "ar" ? "left-0" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                  {t1("title11")}
                </h5>
                <Image
                  unoptimized={true}
                  width="32"
                  height="32"
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Languages+-+Dark.png"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Languages+-+Light.svg"
                  }
                  alt="Language Icon"
                  className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                />
              </div>
              <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                {t1("desc11")}
              </p>
            </div>
            <div className="bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute bottom-0 mx-2 mb-2 md:hidden">
              <div className="flex items-center justify-between">
                <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                  {t1("title11")}
                </h5>
                <Image
                  unoptimized={true}
                  width="32"
                  height="32"
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Languages+-+Dark.png"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/community-features/Languages+-+Light.svg"
                  }
                  alt="Economic Calendar Icon"
                  className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                />
              </div>
              <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                {t1("desc11")}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div>
            <div className="relative mb-6">
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/bgs/Demo+Account.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/Demo+Account.png"
                }
                alt="Demo Image"
                className="w-full h-full rounded-2xl hidden md:block"
              />
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/mobile-bgs/Demo+Account.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/mobile-bgs/Demo+Account.png"
                }
                alt="Demo Image"
                className="w-full h-full rounded-2xl md:hidden"
              />
              <div className="bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute top-0 mx-2 mt-2">
                <div className="flex items-center justify-between">
                  <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                    {t1("title1")}
                  </h5>
                  <Image
                    unoptimized={true}
                    width="46"
                    height="32"
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/icons/Demo+Account+Icon.png"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/icons/Demo+Account+Icon.png"
                    }
                    alt="Demo Icon"
                    className="w-[35px] h-[24px] sm:w-[46px] sm:h-[32px]"
                  />
                </div>
                <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                  {t1("desc1")}
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/bgs/Dark+Mode.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/Dark+Mode.png"
                }
                alt="Dark Mode Image"
                className="w-full h-full rounded-2xl hidden md:block"
              />
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/mobile-bgs/Dark+Mode.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/mobile-bgs/Dark+Mode.png"
                }
                alt="Dark Mode Image"
                className="w-full h-full rounded-2xl md:hidden"
              />
              <div className="bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute bottom-0 mx-2 mb-2">
                <div className="flex items-center justify-between">
                  <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                    {t1("title2")}
                  </h5>
                  <Image
                    unoptimized={true}
                    width="32"
                    height="32"
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/icons/Dark+Mode+Icon.png"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/icons/Dark+Mode+Icon.png"
                    }
                    alt="Dark Mode Icon"
                    className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                  />
                </div>
                <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                  {t1("desc2")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/bgs/Live+Chat.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/Live+Chat.png"
                }
                alt="Live Support Image"
                className="w-full h-full rounded-2xl hidden md:block"
              />
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/mobile-bgs/Live+Chat.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/mobile-bgs/Live+Chat.png"
                }
                alt="Live Support Image"
                className="w-full h-full rounded-2xl md:hidden"
              />
              <div className="bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute top-0 mx-2 mt-2">
                <div className="flex items-center justify-between">
                  <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                    {t1("title3")}
                  </h5>
                  <Image
                    unoptimized={true}
                    width="32"
                    height="32"
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/icons/Live+Support+Icon.png"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/icons/Live+Support+Icon.png"
                    }
                    alt="Live Support Icon"
                    className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                  />
                </div>
                <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                  {t1("desc3")}
                </p>
              </div>
            </div>
            <div className="relative my-6">
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/bgs/Download+the+App.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/Download+the+App.png"
                }
                alt="Download App Image"
                className="w-full h-full rounded-2xl hidden md:block"
              />
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/mobile-bgs/Download+the+App.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/mobile-bgs/Download+the+App.png"
                }
                alt="Download App Image"
                className="w-full h-full rounded-2xl md:hidden"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-7">
                <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl !leading-tight">
                  {t1("title4")}
                </h5>
                <button
                  onClick={handleScrollToHero}
                  className="flex items-center justify-center gap-3 bg-tm dark:bg-tm-dark rounded-lg sm:rounded-xl px-6 py-4 text-nw-dark dark:text-nb-dark w-full text-base sm:text-lg lg:text-sm xl:text-lg font-bold uppercase mt-2 sm:mt-4 lg:mt-2 xl:mt-4 !leading-tight"
                >
                  {t1("desc4")}
                  <div
                    className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nw dark:bg-nb-dark`}
                  >
                    <FiArrowUp className="transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] text-tm dark:text-tm-dark text-xs" />
                  </div>
                </button>
              </div>
            </div>
            <div className="relative h-[424px">
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/bgs/Secure+Access.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/Secure+Access.png"
                }
                alt="Secure Access Image"
                className="w-full h-full rounded-2xl hidden md:block"
              />
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/mobile-bgs/Secure+Access.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/mobile-bgs/Secure+Access.png"
                }
                alt="Secure Access Image"
                className="w-full h-full rounded-2xl md:hidden"
              />
              <div className="bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute bottom-0 mx-2 mb-2">
                <div className="flex items-center justify-between">
                  <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                    {t1("title5")}
                  </h5>
                  <Image
                    unoptimized={true}
                    width="32"
                    height="32"
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/icons/Secure+Access+Icon.png"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/icons/Secure+Access+Icon.png"
                    }
                    alt="Secure Access Icon"
                    className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                  />
                </div>
                <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                  {t1("desc5")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative mb-6">
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/bgs/Start+with+10%24.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/Start+with+10%24.png"
                }
                alt="Start with $10 Image"
                className="w-full h-full rounded-2xl hidden md:block"
              />
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/mobile-bgs/Start+with+10%24.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/mobile-bgs/Start+with+10%24.png"
                }
                alt="Start with $10 Image"
                className="w-full h-full rounded-2xl md:hidden"
              />
              <div className="bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute bottom-0 mx-2 mb-2">
                <div className="flex items-center justify-between">
                  <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                    {t1("title6")}
                  </h5>
                  <Image
                    unoptimized={true}
                    width="32"
                    height="32"
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/icons/Start+with+%2410+Icon.png"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/icons/Start+with+%2410+Icon.png"
                    }
                    alt="Start with $10 Icon"
                    className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                  />
                </div>
                <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                  {t1("desc6")}
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/bgs/Smart+Trading.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/Smart+Trading.png"
                }
                alt="Smart Trading Image"
                className="w-full h-full rounded-2xl hidden md:block"
              />
              <Image
                unoptimized={true}
                width="46"
                height="32"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/mobile-bgs/Smart+Trading.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/mobile-bgs/Smart+Trading.png"
                }
                alt="Smart Trading Image"
                className="w-full h-full rounded-2xl md:hidden"
              />
              <div className="bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute top-0 mx-2 mt-2">
                <div className="flex items-center justify-between">
                  <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                    {t1("title7")}
                  </h5>
                  <Image
                    unoptimized={true}
                    width="32"
                    height="32"
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/icons/Smart+Trading+Icon.png"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/icons/Smart+Trading+Icon.png"
                    }
                    alt="Smart Trading Icon"
                    className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                  />
                </div>
                <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                  {t1("desc7")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative">
            <Image
              unoptimized={true}
              width="46"
              height="32"
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/bgs/Free+Learning.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/Free+Learning.png"
              }
              alt="Free Learning Image"
              className="w-full h-full rounded-2xl hidden md:block"
            />
            <Image
              unoptimized={true}
              width="46"
              height="32"
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/mobile-bgs/Free+learning.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/mobile-bgs/Free+learning.png"
              }
              alt="Free Learning Image"
              className="w-full h-full rounded-2xl md:hidden"
            />
            <div className="bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute bottom-0 mx-2 mb-2 sm:w-[65%]">
              <div className="flex items-center justify-between">
                <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                  {t1("title8")}
                </h5>
                <Image
                  unoptimized={true}
                  width="32"
                  height="32"
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/icons/Free+Learning+Icon.png"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/icons/Free+Learning+Icon.png"
                  }
                  alt="Free Learning Icon"
                  className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                />
              </div>
              <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                {t1("desc8")}
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              unoptimized={true}
              width="46"
              height="32"
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/bgs/Economic+Calendar.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/Economic+Calendar.png"
              }
              alt="Economic Calendar Image"
              className="w-full h-full rounded-2xl hidden md:block"
            />
            <Image
              unoptimized={true}
              width="46"
              height="32"
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/mobile-bgs/Economic+Calendar.png"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/mobile-bgs/Economic+Calendar.png"
              }
              alt="Economic Calendar Image"
              className="w-full h-full rounded-2xl md:hidden"
            />
            <div
              className={`bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute bottom-0 mx-2 mb-2 w-[65%] hidden md:block ${
                locale === "ar" ? "left-0" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                  {t1("title9")}
                </h5>
                <Image
                  unoptimized={true}
                  width="32"
                  height="32"
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/icons/Economic+Calendar+Icon.png"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/icons/Economic+Calendar+Icon.png"
                  }
                  alt="Economic Calendar Icon"
                  className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                />
              </div>
              <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                {t1("desc9")}
              </p>
            </div>
            <div className="bg-p dark:bg-p-dark rounded-xl px-5 py-4 absolute top-0 mx-2 mt-2 md:hidden">
              <div className="flex items-center justify-between">
                <h5 className="text-tm dark:text-tm-dark font-bold text-xl sm:text-2xl lg:text-lg xl:text-2xl">
                  {t1("title9")}
                </h5>
                <Image
                  unoptimized={true}
                  width="32"
                  height="32"
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/icons/Economic+Calendar+Icon.png"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/icons/Economic+Calendar+Icon.png"
                  }
                  alt="Economic Calendar Icon"
                  className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                />
              </div>
              <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base lg:text-sm xl:text-base !leading-tight mt-2">
                {t1("desc9")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
