"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import TrustPilot from "@/components/TrustPilot";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram.hero");

  return (
    <section className="bg-[#000000] pt-32 pb-8">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="text-center md:text-start">
              <TrustPilot />
            </div>
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-[#ffffff]">
                {t("title_part1")} <br className="sm:hidden lg:block" />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-[#FED100] my-2 inline-block md:my-1 lg:my-2">
                  {t("title_part2")}
                </span>
                <br className="sm:hidden lg:block" />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-[#ffffff] mb-2 inline-block md:mb-1 lg:mb-2">
                  {t("title_part3")}
                  <span className="text-[#FED100]">{t("title_part4")}</span>
                </span>
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-[#FED100] mb-2 inline-block md:mb-1 lg:mb-2">
                  {t("title_part5")}
                </span>
              </h1>
              <p className="text-[#c6c6c6] mt-4 w-[80%]">{t("description")}</p>
            </div>
            <div className="mt-3">
              <button
                onClick={() =>
                  window.open(
                    `${
                      locale === "ar"
                        ? "https://client.primexbroker.com/ar/register"
                        : "https://client.primexbroker.com/en/register"
                    }`
                  )
                }
                className="py-[16px] px-[46px] font-semibold mt-5 w-full md:w-auto custom-button"
              >
                {t("btnTxt")}
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-end mt-6 md:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/copy-program/Hero+Image.webp"
                width="100"
                height="100"
                alt="image"
                className={`w-full sm:w-[70%]`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;