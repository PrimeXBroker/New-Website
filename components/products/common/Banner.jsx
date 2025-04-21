"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import TrustPilot from "@/components/TrustPilot";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";

const Banner = ({
  title_part1,
  title_part2,
  title_part3,
  title_part4,
  title_part5,
  imgUrl,
}) => {
  const locale = useLocale();
  const t = useTranslations("productsPageCommon");

  return (
    <section className="bg-[#000000] pt-32 pb-8">
      <div className="container">
        <div className="grid grid-cols-12 items-center overflow-hidden">
          <div className="col-span-12 md:col-span-5">
            {/* <div
              className={`text-center md:text-start relative ${
                locale === "ar" || locale === "fa" || locale === "ku"
                  ? ""
                  : "md:right-[20%] lg:right-[24%] xl:right-[28%]"
              }`}
            >
              <TrustPilot />
            </div> */}
            <div className="mt-5 md:mt-4 lg:mt-5 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-[#ffffff]">
                {title_part1} <br className="sm:hidden lg:block" />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-[#ffffff] my-2 inline-block md:my-1 lg:my-2">
                  {title_part2}
                </span>
                <br className="sm:hidden lg:block" />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-[#ffffff] mb-2 inline-block md:mb-1 lg:mb-2">
                  {title_part3 ? <span>{title_part3}</span> : ""}
                  <span className="text-[#FED100]">{title_part4}</span>
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-[#FED100]">
                  {title_part5}
                </span>
              </h1>
            </div>
            <div
              className={`mt-5 md:mt-4 lg:mt-5 flex ${
                locale === "ar" || locale === "fa" || locale === "ku"
                  ? "justify-center md:justify-start"
                  : "justify-center md:justify-start"
              }`}
            >
              <button
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-[16px] px-[46px] font-semibold mt-5 w-full sm:w-72 md:w-auto custom-button"
              >
                {t("sign_up_btn")}
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 mt-8 md:mt-0">
            <div className="flex justify-center md:justify-end">
              <Image
                unoptimized={true}
                src={imgUrl}
                width="100"
                height="100"
                alt="Product Image"
                className={`w-full sm:w-[70%] ms:w-full`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
