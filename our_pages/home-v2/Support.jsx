"use client";
import CustomWhiteButton from "@/components/common/CustomWhiteButton";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import customerCare from "@/public/animations/home/customer-care.json";
import multilingualSupport from "@/public/animations/home/multilingual-support.json";
import Lottie from "lottie-react";
import { useTheme } from "next-themes";

const Support = () => {
  const locale = useLocale();
  const router = useRouter();
  const { theme } = useTheme();
  const t = useTranslations("home.customerCare");

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
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
            <div className="col-span-1 lg:col-span-4 hidden h-full lg:flex items-stretch">
              <div className="relative w-full h-full min-h-full">
                <Image
                  unoptimized={true}
                  fill
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/support/dark/Always+here+for+you+CTA.png"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/support/light/Always+Here+for+You.png"
                  }
                  alt="Support"
                  className="object-cover object-center rounded-xl"
                />
              </div>
            </div>
            <div className="col-span-1 lg:col-span-8 mb-6 lg:mb-0 text-center lg:text-start xl:ps-10">
              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-tm dark:text-tm-dark mb-4 xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                {t("customer_care_title1")}
                <span className="text-pcp dark:text-pcp-dark">
                  {t("customer_care_title2")}
                </span>
              </h2>
              <div className="flex flex-col md:flex-row gap-6 my-6 lg:my-4">
                <div className="flex items-center gap-2 group">
                  <div className="flex items-center justify-center w-[60px] h-[60px] bg-pcp dark:bg-pcp rounded-lg">
                    <Lottie
                      animationData={customerCare}
                      loop={true}
                      style={{ width: "52px", height: "52px" }}
                    />
                  </div>
                  <div className="text-start">
                    <p className="text-tm dark:text-tm-dark font-bold text-lg">
                      {t("customer_care_li1_title")}
                    </p>
                    <p className="text-sm sm:text-base text-ts dark:text-ts-dark font-medium">
                      {t("customer_care_li1_desc")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="flex items-center justify-center w-[60px] h-[60px] bg-pcp dark:bg-pcp rounded-lg">
                    <Lottie
                      animationData={multilingualSupport}
                      loop={true}
                      style={{ width: "52px", height: "52px" }}
                    />
                  </div>
                  <div className="text-start">
                    <p className="text-tm dark:text-tm-dark font-bold text-lg">
                      {t("customer_care_li2_title")}
                    </p>
                    <p className="text-sm sm:text-base text-ts dark:text-ts-dark font-medium">
                      {t("customer_care_li2_desc")}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-ts dark:text-ts-dark font-medium text-sm sm:text-base mb-6 lg:mb-4">
                {t("description")}
              </p>
              <CustomWhiteButton
                title={t("customer_care_btn")}
                onClick={() => router.push(`/${locale}/contact`)}
                className="py-4 px-7 w-full lg:w-auto text-base justify-between lg:justify-center"
              />
            </div>
            <div className="col-span-1 lg:col-span-4 lg:hidden mt-6 lg:mt-0 h-full items-stretch">
              <div className="relative w-full h-full min-h-full">
                <Image
                  unoptimized={true}
                  fill
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/support/dark/Always+here+for+you+CTA.png"
                  alt="Support"
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

export default Support;
