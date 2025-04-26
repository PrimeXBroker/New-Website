"use client";
import Image from "next/image";
import TrustPilot from "@/components/TrustPilot";
import { useLocale, useTranslations } from "next-intl";

const Banner1 = () => {
  const locale = useLocale();
  const t = useTranslations("fundedAccount.banner1");

  return (
    <section className="bg-[#000000] pt-24 sm:pt-32 pb-8">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6">
            {/* <div
              className={`text-center md:text-start relative ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "left-[137px]"
                  : "right-[137px]"
              }`}
            >
              <TrustPilot />
            </div> */}
            <div className="mt-4 md:mt-0 xl:mt-4 text-center md:text-start md:px-0 sm:px-2 px-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#ffffff]">
                {t("title1")} <br className="sm:hidden md:block" />
                {t("title2")} <br className="sm:hidden lg:block" />
                {t("title3")} <br className="sm:hidden lg:block" />
                <span className="text-[#FED100]">
                  {t("title4")} <br className="sm:hidden lg:block" />
                  {t("title5")}
                </span>
              </h1>
              <p className="text-[#c6c6c6] text-base md:text-lg mt-4 md:mt-1 xl:mt-3 w-full lg:w-[80%] md:px-0 sm:px-8 px-0">
                {t("description")}
              </p>
            </div>
            <div className="lg:mt-3 flex justify-center md:justify-start">
              <button className="py-[16px] px-[20px] font-semibold mt-2 xl:mt-5 w-full sm:w-[70%] mx-auto md:mx-0 md:w-auto custom-button">
                {" "}
                {t("btnTxt")}
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/Hero+Image.png"
                width={100}
                height={100}
                alt="Funded Account Hero"
                className={`w-full sm:w-[70%] md:w-[90%]`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
