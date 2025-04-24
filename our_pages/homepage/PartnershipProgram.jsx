"use client";
import CustomWhiteButton from "@/components/common/CustomWhiteButton";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PartnershipProgram = () => {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("home.partnerships");

  return (
    <section className="bg-p dark:bg-p-dark">
      <div className="container mx-auto">
        <div className="bg-cc dark:bg-cc-dark grid grid-cols-1 lg:grid-cols-12 px-4 pt-14 sm:px-10 sm:pt-10 pb-10 items-center rounded-2xl">
          <div className="col-span-1 lg:col-span-8 mb-6 lg:mb-0 text-center lg:text-start">
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-tm dark:text-tm-dark mb-4 xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              {t("title1")}
              <span className="text-pcp dark:text-pcp-dark">{t("title2")}</span>
              <br className="hidden sm:block" />
              <span className="text-pcp dark:text-pcp-dark">{t("title3")}</span>
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
                  title={t("grey_label_btn")}
                  onClick={() => router.push(`/${locale}/grey-label-partner`)}
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
          <div className="col-span-1 lg:col-span-4 mt-6 lg:mt-0">
            <div className="flex justify-center lg:justify-end">
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/Earn-Big-With-PrimeX-Partnership-Programs.svg"
                alt="Spread Matters"
                className={`sm:w-[80%] h-auto`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipProgram;
