import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const Steps = () => {
  const locale = useLocale();
  const t = useTranslations("bonus.claim");

  return (
    <section className="bg-[#000000] hidden md:block py-10">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center mb-2">
          {t("title1")}
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100] text-center">
          {t("title2")}
        </h2>
        <div className="grid grid-cols-12 mt-36">
          <div className="col-span-12 group">
            <div className="md:w-[700px] lg:w-[900px] m-auto relative">
              <div
                className={`md:w-[233px] lg:w-[300px] absolute bottom-0  ${
                  locale === "ar" || locale === "ps" || locale === "ku"
                    ? "right-0"
                    : "left-0"
                }`}
              >
                <div
                  className={`md:w-40 lg:w-48 md:h-40 lg:h-48 bg-[#111111] rounded-full flex justify-center items-center relative  ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "md:right-[19px] lg:right-[30px] md:-top-[20px] lg:-top-[30px]"
                      : "md:left-[19px] lg:left-[30px] md:-top-[20px] lg:-top-[30px]"
                  }`}
                >
                  <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-bonus/claim1.svg"
                    width={100}
                    height={100}
                    alt="Claim1"
                    className="md:w-[80px] lg:w-[100px] md:h-[80px] lg:h-[100px] m-auto"
                  />
                </div>
              </div>
              <div
                className={`md:w-[233px] lg:w-[300px] absolute bottom-0 ${
                  locale === "ar" || locale === "ps" || locale === "ku"
                    ? "right-[300px] "
                    : "left-[300px] "
                }`}
              >
                <div
                  className={`md:w-40 lg:w-48 md:h-40 lg:h-48 bg-[#111111] rounded-full flex justify-center items-center relative ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "md:-right-[29px] lg:right-[54px] md:-top-[20px] lg:-top-[30px]"
                      : "md:-left-[29px] lg:left-[54px] md:-top-[20px] lg:-top-[30px]"
                  }`}
                >
                  <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-bonus/claim2+1.svg"
                    width={100}
                    height={100}
                    alt="Claim2"
                    className="md:w-[80px] lg:w-[100px] md:h-[80px] lg:h-[100px] m-auto"
                  />
                </div>
              </div>
              <div
                className={`md:w-[233px] lg:w-[300px] absolute bottom-0 ${
                  locale === "ar" || locale === "ps" || locale === "ku"
                    ? "left-0"
                    : "right-0"
                }`}
              >
                <div
                  className={`md:w-40 lg:w-48 md:h-40 lg:h-48 bg-[#111111] rounded-full flex justify-center items-center relative ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "md:right-[56px] lg:right-[78px] md:-top-[20px] lg:-top-[30px]"
                      : "md:left-[56px] lg:left-[78px] md:-top-[20px] lg:-top-[30px]"
                  }`}
                >
                  <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-bonus/gift-box.svg"
                    width={100}
                    height={100}
                    alt="Gift Box"
                    className="md:w-[80px] lg:w-[100px] md:h-[80px] lg:h-[100px] m-auto"
                  />
                </div>
              </div>
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-bonus/bonus-step-line.webp"
                width={900}
                height={300}
                alt="img"
                className="m-auto"
              />
            </div>
            <div className="md:w-[700px] lg:w-[900px] m-auto flex mt-4">
              <div className="md:w-[233px] lg:w-[300px]">
                <div
                  className={`inline-block relative px-8 ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "left-[17px]"
                      : "right-[17px]"
                  }`}
                >
                  <div className="bg-[#FFFFFF] w-full rounded-full inline-block md:px-1 lg:px-4 py-1 mb-3">
                    <h6 className="md:text-sm lg:text-lg font-semibold m-0 text-center text-[#111111]">
                      {t("claim_li1")}
                    </h6>
                  </div>
                  <p className="text-center text-sm lg:text-base text-[#c6c6c6]">
                    {t("claim_li1_p")}
                  </p>
                </div>
              </div>
              <div className="md:w-[233px] lg:w-[300px]">
                <div
                  className={`inline-block relative px-8 ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "right-[4px]"
                      : "left-[4px] "
                  }`}
                >
                  <div className="bg-[#FFFFFF] w-full rounded-full inline-block md:px-1 lg:px-4 py-1 mb-3">
                    <h6 className="md:text-sm lg:text-lg font-semibold m-0 text-center text-[#111111]">
                      {t("claim_li2")}
                    </h6>
                  </div>
                  <p className="text-center text-sm lg:text-base text-[#c6c6c6]">
                    {t("claim_li2_p")}
                  </p>
                </div>
              </div>
              <div className="md:w-[233px] lg:w-[300px]">
                <div
                  className={`inline-block relative px-8 ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "right-[34px]"
                      : "left-[34px]"
                  }`}
                >
                  <div className="bg-[#FFFFFF] w-full rounded-full inline-block md:px-1 lg:px-4 py-1 mb-3">
                    <h6 className="md:text-sm lg:text-lg font-semibold m-0 text-center text-[#111111]">
                      {t("claim_li3")}
                    </h6>
                  </div>
                  <p className="text-center text-sm lg:text-base text-[#c6c6c6]">
                    {" "}
                    {t("claim_li3_p")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
