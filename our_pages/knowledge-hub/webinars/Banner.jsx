import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import TrustPilot from "@/components/TrustPilot";

const Banner = ({ setActive }) => {
  const locale = useLocale();
  const h = useTranslations("knowledgeHubWebinars.hero");

  return (
    <section className="">
      <div className="bg-[#000000] pt-[40px] lg:pt-10">
        <div className="container flex flex-col md:flex-row justify-around py-16">
          <div className="max-w-2xl flex flex-col justify-center items-enter md:items-start md:w-[70%]">
            {/* <div className="text-center md:text-start mb-3">
              <TrustPilot />
            </div>{" "} */}
            <h1
              className={`text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#ffffff] pb-1 ${
                locale === "ar" || locale === "fa" || locale === "kd"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {h("title_1")}
            </h1>
            <h2
              className={`text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#FED100] ${
                locale === "ar" || locale === "fa" || locale === "kd"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {h("title_2")}
            </h2>
            <p
              className={`text-[#c6c6c6] w-[95%] sm:w-[90%] mx-auto md:mx-0 md:w-[75%] mb-5 text-sm sm:text-base mt-2 ${
                locale === "ar" || locale === "fa" || locale === "kd"
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
              className="bg-primary text-center px-4 py-4 w-[200px] shadow-xl block md:m-0 mx-auto custom-button font-semibold"
            >
              {h("join_btn")}
            </Link>
          </div>
          <div className="flex md:justify-end justify-center pt-5 md:mt-0">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/Academy+Hero+New.webp"
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
