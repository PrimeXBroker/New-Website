"use client";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpECN = () => {
  const locale = useLocale();
  const router = useRouter();
  const { theme } = useTheme();
  const t = useTranslations("ecnBroker.signUpECN");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container mx-auto">
        <div className="bg-cc dark:bg-cc-dark grid grid-cols-1 md:grid-cols-12 px-4 pt-14 sm:px-10 md:pt-2 items-center rounded-2xl">
          <div className="col-span-1 md:col-span-6 mb-6 md:mb-0 text-center md:text-start">
            <h6 className="text-tm dark:text-tm-dark font-bold text-lg md:text-sm lg:text-lg uppercase">
              {t("subtitle")}
            </h6>
            <h2 className="text-4xl lg:text-[54px] font-semibold text-tm dark:text-tm-dark !leading-tight mb-1">
              {t("title")}
            </h2>
            <p className="text-ts dark:text-ts-dark font-medium text-xl sm:text-2xl md:text-lg lg:text-2xl mb-0">
              {t("description")}
            </p>
            <div className="flex justify-center md:justify-start">
              <div className="mt-6 flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <CustomYellowButton
                  title={t("btnTxt")}
                  onClick={handleClick}
                  className="py-4 px-7 w-full md:w-auto text-base justify-between md:justify-center"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-6 mt-6 lg:mt-0">
            <div className="flex justify-center lg:justify-end">
              <Image
                unoptimized={true}
                width="500"
                height="400"
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/sign-up-ecn-dark.svg"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/global-ecn-broker/sign-up-ecn-light.svg"
                }
                alt="Spread Matters"
                className={`sm:w-[86%] h-auto`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpECN;
