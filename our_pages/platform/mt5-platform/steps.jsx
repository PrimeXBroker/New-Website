import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Steps = ({ title, title2 }) => {
  const t = useTranslations("metaTrader5.processTimeline");

  return (
    <section className="py-12">
      <div className="container">
        <h1 className="sectionHeading text-secondary">{title}</h1>
        <h1 className="sectionHeading text-secondary">{title2}</h1>
        <div className="flex flex-col lg:flex-row mt-12 justify-center items-center">
          <div className="text-white hover:text-black pl-12 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mr-[-10px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/brown-1.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/yellow-1.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
            <div className="flex flex-row gap-2">
              <div className="text-5xl">{t("step_1")}</div>
              <div className="flex flex-col">
                <p>{t("step_1_title_part_1")}</p>
                <p>{t("step_1_title_part_2")}</p>
              </div>
            </div>
          </div>
          <div className="text-white hover:text-black w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mx-[-50px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/brown-2.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/yellow-2.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
            <div className="flex flex-row gap-2">
              <div className="text-5xl ">{t("step_2")}</div>
              <div className="flex flex-col">
                <p>{t("step_2_title_part_1")}</p>
                <p>{t("step_2_title_part_2")}</p>
              </div>
            </div>
          </div>
          <div className="text-white hover:text-black pl-8 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:mx-[-50px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/brown-3.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/yellow-3.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
            <div className="flex flex-row gap-2">
              <div className="text-5xl ">{t("step_3")}</div>
              <div className="flex flex-col">
                <p>{t("step_3_title_part_1")}</p>
                <p>{t("step_3_title_part_2")}</p>
              </div>
            </div>
          </div>
          <div className="text-white hover:text-black pr-12 w-[270px] lg:w-[300px] xl:w-[350px] h-[100px] md:h-[200px] lg:ml-[-20px] bg-center bg-no-repeat bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/brown-4.svg')] hover:bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/yellow-4.svg')] flex justify-around items-center group transform translate-y-[0] hover:translate-y-[-1rem] transition-transform duration-500 cursor-pointer">
            <div className="flex flex-row gap-2">
              <div className="text-5xl">{t("step_4")}</div>
              <div className="flex flex-col">
                <p>{t("step_4_title_part_1")}</p>
                <p>{t("step_4_title_part_2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
