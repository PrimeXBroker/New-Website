import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import RegButton from "@/components/RegButton";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("accountTypes");

  const customStyle = {
    btnColor: "secondary",
    txtColor1: "text-primary",
    txtColor2: "text-secondary",
    txtColor3: "text-secondary",
    borderColor: "border-secondary",
  };

  return (
    <section>
      <div
        className={`relative lg:h-[600px] bg-no-repeat bg-cover bg-center ${
          locale === "ar"
            ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/acc-type-header-ar.webp)]"
            : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/acc-type-header.webp)]"
        }`}
      >
        <div className="container mx-auto lg:px-10 xl:px-4 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center h-full">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div
                className={`${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <h1 className="text-4xl sm:text-5xl xl:text-6xl text-secondary inline-block font-extrabold underline-custom">
                  {t("header.title")}
                </h1>
              </div>
              <div
                className={`${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <h5 className="my-6 text-base sm:text-lg md:text-xl font-normal text-secondary px-10 sm:px-20 md:px-40 lg:px-0">
                  {t("header.text")}
                </h5>
              </div>
              <div
                className={`${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                <RegButton customStyle={customStyle} />
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center lg:justify-end mt-10 lg:mt-0">
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/account-types/acc-banner.webp"
                width="600"
                height="300"
                alt="img"
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
