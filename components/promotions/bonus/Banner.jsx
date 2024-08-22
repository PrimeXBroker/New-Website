import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import RegButton from "@/components/RegButton";
import Link from "next/link";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.header");

  const customStyle = {
    btnColor: "secondary",
    txtColor1: "text-primary",
    txtColor2: "text-accent",
    txtColor3: "text-primary",
    borderColor: "border-accent",
  };

  const desktopImageUrl =
    locale === "ar"
      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/20_deposit_bonus/header-bg-ar.webp"
      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/20_deposit_bonus/header-bg.webp";

  return (
    <section className="relative">
      {/* Background Image */}
      <Image
        src={desktopImageUrl}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10"
        priority={true}
      />

      {/* Content */}
      <div className="relative pt-12 pb-4 sm:pt-12 sm:pb-12">
        <div className="container mx-auto lg:px-10 xl:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center h-full">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div
                className={`${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <h1 className="text-4xl sm:text-5xl xl:text-7xl text-white inline-block font-extrabold underline-custom">
                  <span className="text-primary">{t("title_l1")}</span> <br />
                  {t("title_l2")}
                </h1>
              </div>
              <div
                className={`${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <h3 className="text-xl sm:text-3xl xl:text-4xl font-light text-white px-8 sm:px-20 md:px-40 lg:px-0 mt-8">
                  {t("subtitle_l1")} <br />
                  {t("subtitle_l2")}
                  <span className="sm:leading-[54px] text-primary font-semibold">
                    {t("subtitle_l3")}
                  </span>
                  {t("subtitle_l4")} <br />
                  <span className="text-primary font-semibold">
                    {t("subtitle_l5")}
                  </span>
                </h3>
              </div>
              {/* <div
                className={`mt-8 ${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <RegButton customStyle={customStyle} />
              </div> */}
            </div>
            <div className="lg:col-span-6 flex flex-col items-center lg:items-end mt-3 sm:mt-10 lg:mt-0">
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/bonus-top.webp"
                width="500"
                height="500"
                alt="img"
                className="w-52 sm:w-96"
              />
              <div className="relative top-[-28px]">
                <p>
                  <span className="text-white">*</span>
                  <span className="text-xs sm:text-sm text-white italic font-normal">
                    <Link
                      className="text-primary"
                      href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/20%25_deposit_bonus.pdf"
                      target="_blank"
                    >
                      {t("tc")}
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
