"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const ClientSatisfaction = () => {
  const locale = useLocale();
  const t = useTranslations("ibProgram.clientSatisfaction");

  return (
    <section className="bg-[#000000] pt-10 pb-20">
      <div className="container">
        <div className="ib-client-wrapper">
          <div className="ib-fixed-text sm:block hidden">
            <div className="flex flex-col justify-end h-[60vh]">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
                {t("main_title1")}
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#FED100] mb-2">
                {t("main_title2")}{" "}
                <span className="text-[#ffffff]">{t("main_title3")}</span>
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
                {t("main_title4")}
              </h2>
              <h2
                className={`text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#FED100] mb-2 ${
                  locale === "ar" ? "hidden" : ""
                }`}
              >
                {t("main_title5")}
              </h2>
            </div>
          </div>
          <div className="ib-fixed-text block sm:hidden text-center mb-5">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
              {t("main_title1")}{" "}
              <span className="text-[#FED100]"> {t("main_title2")}</span>{" "}
              {t("main_title3")}
            </h2>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#ffffff] mb-2">
              {t("main_title4")}
              <span
                className={`text-[#FED100] ${locale === "ar" ? "hidden" : ""}`}
              >
                {" "}
                {t("main_title5")}
              </span>
            </h2>
          </div>
          <ul>
            <li>
              <div>
                <div
                  className={`bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2 sm:w-[400px] h-[px] group ${
                    locale === "ar" ? "mr-auto ml-0" : "ml-auto mr-0"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold group-hover:text-[#FED100]">
                      {t("title1")}
                    </h3>
                    <div className="w-14 h-14 border-3 border-[#222222] bg-[#1D1D1D] rounded-lg flex justify-center items-center">
                      <Image
                        unoptimized={true}
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Discover.svg"
                        alt="Discover"
                        width={100}
                        height={100}
                        className="w-[34px] h-[34px]"
                      />
                    </div>
                  </div>
                  <p className="text-[#c6c6c6] mt-2 text-sm sm:text-base">
                    {t("description1")}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div
                  className={`bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2 sm:w-[400px] h-[px] group ${
                    locale === "ar" ? "mr-auto ml-0" : "ml-auto mr-0"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold group-hover:text-[#FED100]">
                      {t("title2")}
                    </h3>
                    <div className="w-14 h-14 border-3 border-[#222222] bg-[#1D1D1D] rounded-lg flex justify-center items-center">
                      <Image
                        unoptimized={true}
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Benefit.svg"
                        alt="Benefit"
                        width={100}
                        height={100}
                        className="w-[34px] h-[34px]"
                      />
                    </div>
                  </div>
                  <p className="text-[#c6c6c6] mt-2 text-sm sm:text-base">
                    {t("description2")}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div
                  className={`bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2 sm:w-[400px] h-[px] group ${
                    locale === "ar" ? "mr-auto ml-0" : "ml-auto mr-0"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold group-hover:text-[#FED100]">
                      {t("title3")}
                    </h3>
                    <div className="w-14 h-14 border-3 border-[#222222] bg-[#1D1D1D] rounded-lg flex justify-center items-center">
                      <Image
                        unoptimized={true}
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Experience.svg"
                        alt="Experience"
                        width={100}
                        height={100}
                        className="w-[34px] h-[34px]"
                      />
                    </div>
                  </div>
                  <p className="text-[#c6c6c6] mt-2 text-sm sm:text-base">
                    {t("description3")}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div
                  className={`bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2 sm:w-[400px] h-[px] group ${
                    locale === "ar" ? "mr-auto ml-0" : "ml-auto mr-0"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold group-hover:text-[#FED100]">
                      {t("title4")}
                    </h3>
                    <div className="w-14 h-14 border-3 border-[#222222] bg-[#1D1D1D] rounded-lg flex justify-center items-center">
                      <Image
                        unoptimized={true}
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Enjoy.svg"
                        alt="Enjoy"
                        width={100}
                        height={100}
                        className="w-[34px] h-[34px]"
                      />
                    </div>
                  </div>
                  <p className="text-[#c6c6c6] mt-2 text-sm sm:text-base">
                    {t("description4")}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div
                  className={`bg-[#111111] p-6 rounded-lg shadow-lg border-2 border-[#1d1d1d] text-[#ffffff] flex flex-col gap-2 sm:w-[400px] h-[px] group ${
                    locale === "ar" ? "mr-auto ml-0" : "ml-auto mr-0"
                  } `}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold group-hover:text-[#FED100]">
                      {t("title5")}
                    </h3>
                    <div className="w-14 h-14 border-3 border-[#222222] bg-[#1D1D1D] rounded-lg flex justify-center items-center">
                      <Image
                        unoptimized={true}
                        src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Count+on.svg"
                        alt="Count On"
                        width={100}
                        height={100}
                        className="w-[34px] h-[34px]"
                      />
                    </div>
                  </div>
                  <p className="text-[#c6c6c6] mt-2 text-sm sm:text-base">
                    {t("description5")}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ClientSatisfaction;
