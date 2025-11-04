import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const AboutCopyProgram = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("copyProgram.about");
  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-7 hidden md:block">
            <div className="">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/About-Image-Copy-Program-Page.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/About+Image+Copy+Program+Light.webp"
                }
                width="100"
                height="100"
                alt="About Image"
                className={`w-full sm:w-[70%]`}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="mt-4 text-center md:text-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark">
                {t("title_part1")} <br />
                <span className="text-pcp dark:text-pcp-dark inline-block mt-1">
                  {t("title_part2")}{" "}
                </span>
              </h2>
              <p
                className={`text-ts dark:text-ts-dark mt-4 w-full sm:w-[90%] md:w-[80%] mx-auto md:mx-0 ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
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
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/About-Image-Copy-Program-Page.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/social-trading/About+Image+Copy+Program+Light.webp"
                }
                width="100"
                height="100"
                alt="About Image"
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
