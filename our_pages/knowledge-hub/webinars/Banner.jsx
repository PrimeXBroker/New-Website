import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import { useTheme } from "next-themes";

const Banner = ({ setActive }) => {
  const locale = useLocale();
  const { theme } = useTheme();
  const h = useTranslations("knowledgeHubWebinars.hero");

  return (
    <section className="">
      <div className="bg-p dark:bg-p-dark pt-[40px] lg:pt-10">
        <div className="container flex flex-col md:flex-row justify-around pt-16">
          <div className="max-w-2xl flex flex-col justify-center items-enter md:items-start md:w-[70%]">
            <h1
              className={`text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark pb-1 ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {h("title_1")}
            </h1>
            <h2
              className={`text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-pcp dark:text-pcp-dark ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {h("title_2")}
            </h2>
            <p
              className={`text-ts dark:text-ts-dark w-[95%] sm:w-[90%] mx-auto md:mx-0 md:w-[75%] mb-5 text-sm sm:text-base mt-2 ${
                locale === "ar" ||
                locale === "ps" ||
                locale === "ku" ||
                locale === "fa"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "0.7px" }}
            >
              {h("description")}
            </p>
            <Link
              href="#academy-form"
              onClick={() => setActive("Webinars")}
              className="text-center py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full flex items-center justify-center gap-3 sm:w-auto rounded-lg font-bold md:m-0 mx-auto group bg-pcp dark:bg-pcp-dark text-nb dark:text-nb-dark"
            >
              {h("join_btn")}
              {locale === "ar" ||
              locale === "ku" ||
              locale === "ps" ||
              locale === "fa" ? (
                <div
                  className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
                >
                  <FiArrowUpLeft className="transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg] text-pcp dark:text-pcp-dark text-xs" />
                </div>
              ) : (
                <div
                  className={`w-[20px] h-[20px] flex justify-center items-center rounded-full bg-nb dark:bg-nb-dark`}
                >
                  <FiArrowUpRight className="transition-transform duration-500 ease-in-out group-hover:rotate-[45deg] text-pcp dark:text-pcp-dark text-xs" />
                </div>
              )}
            </Link>
          </div>
          <div className="flex md:justify-end justify-center pt-5 md:mt-0">
            <Image
              src={
                theme === "dark"
                  ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/Academy+Hero+New.webp"
                  : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/webinars/academy-hero-light.webp"
              }
              alt="Academy Hero Image"
              width="550"
              height="500"
              className={`w-full sm:w-[90%] ms:w-full`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
