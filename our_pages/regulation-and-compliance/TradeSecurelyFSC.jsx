"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowsExpandRight } from "react-icons/cg";
import { RiArrowLeftUpLine, RiArrowRightUpLine } from "react-icons/ri";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const TradeSecurelyFSC = () => {
  const locale = useLocale();
  const t = useTranslations("regulationCompliance.tradeSecurelyFSC");

  return (
    <section className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark pt-6">
      <div className="container">
        <div className="bg-cc dark:bg-cc-dark rounded-2xl px-4 py-6 sm:px-10 sm:py-10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-tm dark:text-tm-dark font-semibold text-4xl sm:mb-2">
                {t("fsc_title")}
              </h3>
              <Link
                href="https://www.fscmauritius.org/en"
                target="_blank"
                className="sm:flex items-center gap-2 group hidden"
              >
                <p className="text-tm dark:text-tm-dark font-medium text-lg">
                  {t("fsc_full_name")}
                </p>
                {locale === "ar" ||
                locale === "ku" ||
                locale === "ps" ||
                locale === "fa" ? (
                  <RiArrowRightUpLine
                    className={`text-tm dark:text-tm-dark text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg]`}
                  />
                ) : (
                  <RiArrowRightUpLine
                    className={`text-tm dark:text-tm-dark text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[45deg]`}
                  />
                )}
              </Link>
            </div>
            <div>
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/regulation-compliance/FSC+Logo+with+radius.png"
                width="100"
                height="100"
                alt="FSC logo"
                className={`w-[191px] h-[96px]`}
              />
            </div>
          </div>
          <Link
            href="https://www.fscmauritius.org/en"
            target="_blank"
            className="sm:hidden flex items-center gap-2 group mt-6"
          >
            <p className="text-tm dark:text-tm-dark font-medium text-lg">
              {t("fsc_full_name")}
            </p>
            {locale === "ar" ||
            locale === "ku" ||
            locale === "ps" ||
            locale === "fa" ? (
              <RiArrowLeftUpLine
                className={`text-tm dark:text-tm-dark text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg]`}
              />
            ) : (
              <RiArrowRightUpLine
                className={`text-tm dark:text-tm-dark text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[45deg]`}
              />
            )}
          </Link>
          <div className="grid grid-cols-12 mt-10 sm:gap-x-8">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-ts dark:text-ts-dark font-medium text-base mb-4">
                {t("para_1")}
              </p>
              <p className="text-ts dark:text-ts-dark font-medium text-base">
                {t("para_2")}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0 relative">
              <Zoom>
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/regulation-compliance/FSC+Certificate.png"
                  width="100"
                  height="100"
                  alt="FSC Certificate"
                  className={`w-full h-full cursor-zoom-in border-2 border-tl dark:border-tl-dark`}
                />
                <div className="absolute bottom-3 right-3 w-6 h-6 flex items-center justify-center bg-[#000000]/[0.07] border border-[#000000]/[0.07] rounded pointer-events-none">
                  <CgArrowsExpandRight className="text-nb text-sm" />
                </div>
              </Zoom>
            </div>
            <div className="col-span-12 mt-8">
              <p className="text-ts dark:text-ts-dark font-medium text-base">
                {t("para_3")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSecurelyFSC;
