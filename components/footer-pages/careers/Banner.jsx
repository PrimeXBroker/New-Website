import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const Banner = () => {
  const t = useTranslations("careers.hero");
  const locale = useLocale();

  return (
    <section className="">
      <div className="bg-secondary pt-[50px] lg:pt-0">
        <div className="container flex flex-col md:flex-row justify-around py-16">
          <div className="md:max-w-2xl flex flex-col justify-center items-center md:items-start gap-6 md:w-[70%]">
            <h1
              className={`text-primary text-4xl md:text-5xl font-semibold ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ lineHeight: "45px", letterSpacing: "1px" }}
            >
              {t("title")}
            </h1>
            <p
              className={`text-white md:text-lg text-medium md:max-w-xl ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "0.7px" }}
            >
              {t("description")}
            </p>
            <button className="bg-primary px-4 py-4 font-semibold rounded-full w-[200px] shadow-xl block md:m-0 mx-auto">
              {t("apply_btn")}
            </button>
          </div>
          <div className="flex">
            <Image
              className="mx-auto md:m-0 block"
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/careers/careers_img.webp"
              alt="Banner Image"
              width="550"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
