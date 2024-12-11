import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const EasySteps = () => {
  const t = useTranslations("ibProgram.easySteps");

  return (
    <div className="bg-[#000000] py-10">
      <div className="container mb-7">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff] text-center">
          {t("title1")}
          <span className="text-[#FED100]">{t("title2")} </span>
        </h2>
      </div>
      <div className="container bg-[#111111] border-2 border-[#1D1D1D] rounded-[2px]">
        <div className="sm:hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:px-12 pt-14 pb-20 justify-between">
          <div className="bg-transparent border-dashed border-4 border-[#1D1D1D] rounded-lg p-6 flex flex-col justify-center h-[250px]">
            <h3 className="text-[#FED100] text-2xl font-bold mb-2 flex items-center gap-2">
              <span className="bg-[#1D1D1D] border-2 border-[#222222] text-center rounded-md text-[#FED100] h-8 w-8 flex items-center justify-center text-xl font-semibold">
                {t("step1_count")}
              </span>
              {t("step2_title")}
            </h3>
            <p className="text-[#ffffff]">{t("step2_desc")}</p>
          </div>
          <div className="bg-[#1D1D1D] border-2 border-[#222222] rounded-lg p-6 flex justify-center items-center h-[250px]">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Promote.svg"
              alt="Promote"
              width={100}
              height={100}
              className="h-32 w-32"
            />
          </div>
          <div className="bg-transparent border-dashed border-4 border-[#1D1D1D] rounded-lg p-6 flex flex-col justify-center h-[250px] ">
            <h3 className="text-[#FED100] text-2xl font-bold mb-2 flex items-center gap-2">
              <span className="bg-[#1D1D1D] border-2 border-[#222222] text-center rounded-md text-[#FED100] h-8 w-8 flex items-center justify-center text-xl font-semibold">
                {t("step3_count")}
              </span>
              {t("step3_title")}
            </h3>
            <p className="text-[#ffffff]">{t("step3_desc")}</p>
          </div>
          <div className="bg-[#1D1D1D] border-2 border-[#222222] rounded-lg p-6 flex justify-center items-center h-[250px]">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Register.svg"
              alt="Register"
              width={100}
              height={100}
              className="h-32 w-32"
            />
          </div>
          <div className="bg-transparent border-dashed border-4 border-[#1D1D1D] rounded-lg p-6 flex flex-col justify-center h-[250px]">
            <h3 className="text-[#FED100] text-2xl font-bold mb-2 flex items-center gap-2">
              <span className="bg-[#1D1D1D] border-2 border-[#222222] text-center rounded-md text-[#FED100] h-8 w-8 flex items-center justify-center text-xl font-semibold">
                {t("step2_count")}
              </span>
              {t("step1_title")}
            </h3>
            <p className="text-[#ffffff]">{t("step1_desc")}</p>
          </div>
          <div className="bg-[#1D1D1D] border-2 border-[#222222] rounded-lg p-6 flex justify-center items-center h-[250px]">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Earn.svg"
              alt="Earn"
              width={100}
              height={100}
              className="h-32 w-32"
            />
          </div>
        </div>

        <div className="sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 sm:px-12 pt-14 pb-20 justify-between lg:hidden">
          <div className="bg-transparent border-dashed border-4 border-[#1D1D1D] rounded-lg p-6 flex flex-col justify-center h-[250px]">
            <h3 className="text-[#FED100] text-2xl font-bold mb-2 flex items-center gap-2">
              <span className="bg-[#1D1D1D] border-2 border-[#222222] text-center rounded-md text-[#FED100] h-8 w-8 flex items-center justify-center text-xl font-semibold">
                {t("step1_count")}
              </span>
              {t("step2_title")}
            </h3>
            <p className="text-[#ffffff]">{t("step2_desc")}</p>
          </div>
          <div className="bg-[#1D1D1D] border-2 border-[#222222] rounded-lg p-6 flex justify-center items-center h-[250px]">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Register.svg"
              alt="Promote"
              width={100}
              height={100}
              className="h-32 w-32"
            />
          </div>
          <div className="bg-transparent border-dashed border-4 border-[#1D1D1D] rounded-lg p-6 flex flex-col justify-center h-[250px] ">
            <h3 className="text-[#FED100] text-2xl font-bold mb-2 flex items-center gap-2">
              <span className="bg-[#1D1D1D] border-2 border-[#222222] text-center rounded-md text-[#FED100] h-8 w-8 flex items-center justify-center text-xl font-semibold">
                {t("step2_count")}
              </span>
              {t("step1_title")}
            </h3>
            <p className="text-[#ffffff]">{t("step1_desc")}</p>
          </div>
          <div className="bg-[#1D1D1D] border-2 border-[#222222] rounded-lg p-6 flex justify-center items-center h-[250px]">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Promote.svg"
              alt="Register"
              width={100}
              height={100}
              className="h-32 w-32"
            />
          </div>
          <div className="bg-transparent border-dashed border-4 border-[#1D1D1D] rounded-lg p-6 flex flex-col justify-center h-[250px]">
            <h3 className="text-[#FED100] text-2xl font-bold mb-2 flex items-center gap-2">
              <span className="bg-[#1D1D1D] border-2 border-[#222222] text-center rounded-md text-[#FED100] h-8 w-8 flex items-center justify-center text-xl font-semibold">
                {t("step3_count")}
              </span>
              {t("step3_title")}
            </h3>
            <p className="text-[#ffffff]">{t("step3_desc")}</p>
          </div>
          <div className="bg-[#1D1D1D] border-2 border-[#222222] rounded-lg p-6 flex justify-center items-center h-[250px]">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Earn.svg"
              alt="Earn"
              width={100}
              height={100}
              className="h-32 w-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;
