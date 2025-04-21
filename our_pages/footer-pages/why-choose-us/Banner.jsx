"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import TrustPilot from "@/components/TrustPilot";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("whyChooseUs.hero");

  return (
    <section className="bg-[#000000] pt-28 sm:pt-32 pb-20">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            {/* <div
              className={`text-center md:text-start relative ${
                locale === "ar" || locale === "fa" || locale === "ku"
                  ? "left-[137px]"
                  : "right-[137px]"
              }`}
            >
              <TrustPilot />
            </div> */}
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#ffffff] md:mb-1 lg:mb-0">
                {t("title1")} <br />
                <span className="inline-block my-2">{t("title2")}</span> <br />
                <span className="text-[#FED100]">{t("title3")}</span> <br />
                <span className="text-[#FED100] inline-block my-2">
                  {t("title4")}
                </span>{" "}
                <br />
                <span className="text-[#FED100]">{t("title5")}</span>
              </h1>
            </div>
            <div
              className={`mt-3 ${
                locale === "ar" || locale === "fa" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              <button
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-[16px] px-[46px] font-semibold mt-5 w-full sm:w-[70%] md:w-auto custom-button"
              >
                {t("btnTxt")}
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 relative">
            <div className="flex flex-col items-end sm:items-center md:items-end mt-6 md:mt-0 relative">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Hero+Image+WHy+Choose+PrimeX.webp"
                width="100"
                height="100"
                alt="Why Choose PrimeX"
                className={`w-full sm:w-[70%] md:w-[70%] relative`}
              />
              <div
                className={`bg-[#111111] bg-opacity-[80%] backdrop-blur-[7px] py-4 px-6 md:px-4 lg:px-6 w-[90%] sm:w-[65%] absolute bottom-0 ${
                  locale === "ar" || locale === "fa" || locale === "ku"
                    ? "rounded-tl-[0px] rounded-tr-[28px] rounded-bl-[8px] rounded-br-[0px] sm:left-[14.7%] md:left-0"
                    : "rounded-tl-[28px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[8px] sm:right-[14.7%] md:right-0"
                }`}
              >
                <h2 className="text-[#ffffff] text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold glow-text mb-0 lg:mb-1">
                  {t("img_title1")}
                </h2>
                <h3 className="text-[#ffffff] text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
                  {t("img_title2")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
