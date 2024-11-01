import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const AboutCopyProgram = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram.about");
  return (
    <section className="bg-[#000000] py-16 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-7 hidden md:block">
            <div className="">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/About+Image+New.webp"
                width="100"
                height="100"
                alt="image"
                className={`w-full sm:w-[70%]`}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="mt-4 text-center md:text-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff]">
                {t("title_part1")} <br />
                <span className="text-[#FED100] inline-block mt-1">
                  {t("title_part2")}{" "}
                </span>
              </h2>
              <p
                className={`text-[#c6c6c6] mt-4 w-full sm:w-[90%] md:w-[80%] mx-auto md:mx-0 ${
                  locale === "ar" || locale === "fa" || locale === "kur"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                {t("description")}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 block md:hidden mt-5 md:mt-0">
            <div className="flex justify-center md:justify-start">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/About+Image+New.webp"
                width="100"
                height="100"
                alt="image"
                className={`w-full sm:w-[90%] md:w-[70%]`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCopyProgram;
