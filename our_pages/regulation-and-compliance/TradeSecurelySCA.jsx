"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowLeftUpLine, RiArrowRightUpLine } from "react-icons/ri";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { CgArrowsExpandRight } from "react-icons/cg";

const TradeSecurelySCA = () => {
  const locale = useLocale();
  const t = useTranslations("regulationCompliance.tradeSecurelySCA");

  const handleVerifyClick = () => {
    window.open(
      "https://beta.sca.gov.ae/en/open-data/licensed-companies.aspx?q=CP-0001872",
      "_blank"
    );
  };

  return (
    <section className="bg-p dark:bg-p-dark text-tm dark:text-tm-dark pt-16 sm:pt-28">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-tm dark:text-tm-dark text-3xl sm:text-3xl lg:text-4xl font-bold uppercase">
            {t("title_1")}
            <span className="text-pcp dark:text-pc-dark">{t("title_2")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg mt-2 md:w-[75%] mx-auto text-ts dark:text-ts-dark">
            {t("description")}
          </p>
        </div>
        <div className="bg-cc dark:bg-cc-dark rounded-2xl px-4 py-6 sm:px-10 sm:py-10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-tm dark:text-tm-dark font-semibold text-4xl sm:mb-2">
                {t("sca_title")}
              </h3>
              <Link
                href="https://beta.sca.gov.ae/en/home.aspx"
                target="_blank"
                className="sm:flex items-center gap-2 group hidden"
              >
                <p className="text-tm dark:text-tm-dark font-medium text-lg">
                  {t("sca_full_name")}
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
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/regulation-compliance/SCA+Logo+with+radius.png"
                width="100"
                height="100"
                alt="SCA logo"
                className={`w-[129px] h-[96px]`}
              />
            </div>
          </div>
          <Link
            href="https://beta.sca.gov.ae/en/home.aspx"
            target="_blank"
            className="sm:hidden flex items-center gap-2 group mt-6"
          >
            <p className="text-tm dark:text-tm-dark font-medium text-base">
              {t("sca_full_name")}
            </p>
            {locale === "ar" ||
            locale === "ku" ||
            locale === "ps" ||
            locale === "fa" ? (
              <RiArrowLeftUpLine
                className={`text-tm dark:text-tm-dark text-2xl transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg]`}
              />
            ) : (
              <RiArrowRightUpLine
                className={`text-tm dark:text-tm-dark text-2xl transition-transform duration-500 ease-in-out group-hover:rotate-[45deg]`}
              />
            )}
          </Link>
          <div className="grid grid-cols-12 mt-10 sm:gap-x-8">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-ts dark:text-ts-dark font-medium text-base">
                {t("para_1")}
              </p>
              <p className="text-ts dark:text-ts-dark font-medium text-base my-4">
                {t("para_2")}
              </p>
              <p className="text-ts dark:text-ts-dark font-medium text-base mb-4">
                {t("para_3")}
              </p>
              <p className="text-ts dark:text-ts-dark font-medium text-base">
                {t("para_4")}
              </p>
              <CustomYellowButton
                title={t("button_text")}
                onClick={handleVerifyClick}
                className="px-5 py-4 text-lg w-full md:w-auto justify-between sm:justify-center my-6"
              />
              <p className="text-tm dark:text-tm-dark font-medium text-base">
                {t("license_label")}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0 relative">
              <Zoom>
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/regulation-compliance/SCA+Certificate.jpg"
                  width="100"
                  height="100"
                  alt="SCA Certificate"
                  className={`w-full h-full cursor-zoom-in border-2 border-tl dark:border-tl-dark`}
                />
                <div className="absolute bottom-3 right-3 w-6 h-6 flex items-center justify-center bg-[#000000]/[0.07] border border-[#000000]/[0.07] rounded pointer-events-none">
                  <CgArrowsExpandRight className="text-nb text-sm" />
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSecurelySCA;
