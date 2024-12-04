import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import TrustPilot from "@/components/TrustPilot";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.header");

  return (
    <section className="relative bg-[#000000]">
      <div className="relative pt-[90px] md:pt-[110px] lg:pt-[130px] pb-4 sm:pb-12">
        <div className="container mx-auto lg:px-10 xl:px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center h-full">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
              <div className="text-center md:text-start mb-4">
                <TrustPilot />
              </div>
              <div
                className={`${
                  locale === "ar" || locale === "fa" || locale === "kur"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-[#FED100] font-semibold">
                  {t("title_l1")}
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-[#ffffff] font-semibold mt-2 mb-4">
                  {t("title_l2")}
                </h2>
              </div>
              <div
                className={`${
                  locale === "ar" || locale === "fa" || locale === "kur"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                <p className="text-[#c6c6c6] w-[80%] md:w-[50%] mx-auto md:mx-0">
                  {t("subtitle")}
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex flex-col items-center lg:items-end mt-3 sm:mt-10 lg:mt-0">
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/20%25-deposit-bonus/bonus-top.webp"
                width="500"
                height="500"
                alt="Bonus Hero"
                className="w-[65%] md:w-[75%] lg:w-96"
              />
              <div
                className={`relative top-[-40px] sm:top-[-46px] lg:top-[-59px] ${
                  locale === "ar" || locale === "fa" || locale === "kur"
                    ? "left-[-0%] sm:left-[-3%] lg:left-[16%]"
                    : "right-[-0%] sm:right-[-3%] lg:right-[16%]"
                }`}
              >
                <p>
                  <span className="text-[#ffffff]">*</span>
                  <span className="text-xs sm:text-sm text-[#ffffff] italic font-normal">
                    <Link
                      className="text-[#ffffff] hover:text-[#FED100]"
                      href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/PrimeX_Deposit_Bonus.pdf"
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
