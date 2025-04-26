import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import TrustPilot from "@/components/TrustPilot";

const Hero = () => {
  const locale = useLocale();
  const h = useTranslations("knowledgeHubTechnical.hero");

  return (
    <section className="">
      <div className="bg-p dark:bg-p-dark pt-[40px] lg:pt-10">
        <div className="container flex flex-col md:flex-row justify-around pt-16">
          <div className="max-w-2xl flex flex-col justify-center items-enter md:items-start md:w-[70%]">
            {/* <div
              className={`text-center md:text-start relative ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "left-[137px]"
                  : "right-[137px]"
              }`}
            >
              <TrustPilot />
            </div> */}
            <h1
              className={`text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark pb-1 ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {h("title_1")}
            </h1>
            <h2
              className={`text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-pcp dark:text-pcp-dark ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {h("title_2")}
            </h2>
            <p
              className={`text-ts dark:text-ts-dark w-[95%] sm:w-[90%] mx-auto md:mx-0 md:w-[75%] mb-5 text-sm sm:text-base mt-2 ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "0.7px" }}
            >
              {h("description")}
            </p>
          </div>
          <div className="flex md:justify-end justify-center mt-5 md:mt-0">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/knowledge-hub/economic-calender/technical.webp"
              alt="Market News Hero Image"
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

export default Hero;
