"use client";
import CustomWhiteButton from "@/components/common/CustomWhiteButton";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PartnershipProgram = () => {
  const locale = useLocale();
  const router = useRouter();
  const { theme } = useTheme();
  const t = useTranslations("home.partnerships");

  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container mx-auto">
        <div className="group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-300 bg-transparent">
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-gold-flow transition-opacity duration-500 pointer-events-none z-0"
            style={{
              background: `conic-gradient(from var(--gradient-angle), 
                rgba(255, 255, 255, 0.82) 0%, 
                rgba(232, 228, 107, 0.9062) 20%, 
                rgba(152, 129, 52, 0.776) 40%, 
                #746C00 60%, 
                #000000 80%, 
                rgba(255, 255, 255, 0.82) 100%)`,
            }}
          />
          <div className="relative z-10 bg-cc dark:bg-cc-dark grid grid-cols-1 lg:grid-cols-12 px-4 pt-14 sm:px-10 sm:pt-10 pb-10 items-center rounded-2xl">
            <div className="col-span-1 lg:col-span-8 mb-6 lg:mb-0 text-center lg:text-start xl:pe-10">
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-tm dark:text-tm-dark mb-4 xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                {t("title1")}
                <span className="text-pcp dark:text-pcp-dark">
                  {t("title2")}
                </span>
                <br className="hidden sm:block" />
                <span className="text-pcp dark:text-pcp-dark">
                  {t("title3")}
                </span>
                {t("title4")}
              </h2>
              <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base mb-0">
                {t("description")}
              </p>
              <div className="flex justify-center lg:justify-start">
                <div className="mt-6 flex flex-col md:flex-row gap-3 w-full md:w-auto">
                  <CustomWhiteButton
                    title={t("ib_btn")}
                    onClick={() => router.push(`/${locale}/ib-program`)}
                    className="py-4 px-7 w-full md:w-auto text-base justify-between md:justify-center"
                  />
                  <CustomWhiteButton
                    title={t("regional_btn")}
                    onClick={() => router.push(`/${locale}/regional-partner`)}
                    className="py-4 px-7 w-full md:w-auto text-base justify-between md:justify-center"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-4 mt-6 lg:mt-0 h-full flex items-stretch">
              <div className="relative w-full h-full min-h-full">
                <Image
                  unoptimized={true}
                  fill
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/support/dark/Earn+Big+With+PrimeX+Partnership+Programs!.png"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/support/light/Earn+Big+With+PrimeX+Partnership+Programs!.png"
                  }
                  alt="Partnership Programs"
                  className="object-cover object-center rounded-xl !relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipProgram;
