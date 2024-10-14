import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const StepsMobile = () => {
  const t = useTranslations("bonus.claim");

  return (
    <section className="bg-[#000000] block md:hidden py-10">
      <div className="container">
        <h2 className=" text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff]">
          {t("title1")}
        </h2>
        <h2 className=" text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FED100]">
          {t("title2")}
        </h2>
        <div className="flex flex-col justify-center items-center mt-14">
          <div className="w-[230px]">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#111111] flex justify-end items-center m-auto">
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-bonus/claim1.svg"
                width={100}
                height={100}
                alt="img"
                className="w-[70px] sm:w-[90px] m-auto"
              />
            </div>
            <div>
              <div className="bg-[#ffffff] w-full rounded-full inline-block px-4 py-1 mt-4 mb-2">
                <h6 className="text-base sm:text-lg font-semibold m-0 text-center text-[#111111]">
                  {t("claim_li1")}
                </h6>
              </div>
              <p className="text-center text-sm sm:text-base text-[#c6c6c6]">
                {t("claim_li1_p")}
              </p>
            </div>
          </div>
          <div className="w-[230px] my-12">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#111111] flex justify-end items-center m-auto">
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-bonus/claim2+1.svg"
                width={100}
                height={100}
                alt="img"
                className="w-[70px] sm:w-[90px] m-auto"
              />
            </div>
            <div>
              <div className="bg-[#ffffff] w-full rounded-full inline-block px-4 py-1 mt-4 mb-2">
                <h6 className="text-base sm:text-lg font-semibold m-0 text-center text-[#111111]">
                  {t("claim_li2")}
                </h6>
              </div>
              <p className="text-center text-sm sm:text-base text-[#c6c6c6]">
                {t("claim_li2_p")}
              </p>
            </div>
          </div>
          <div className="w-[230px]">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#111111] flex justify-end items-center m-auto">
              <Image
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-bonus/gift-box.svg"
                width={100}
                height={100}
                alt="img"
                className="w-[70px] sm:w-[90px] m-auto"
              />
            </div>
            <div>
              <div className="bg-[#ffffff] w-full rounded-full inline-block px-4 py-1 mt-4 mb-2">
                <h6 className="text-base sm:text-lg font-semibold m-0 text-center text-[#111111]">
                  {t("claim_li3")}
                </h6>
              </div>
              <p className="text-center text-sm sm:text-base text-[#c6c6c6]">
                {t("claim_li3_p")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsMobile;
