"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import TrustPilot from "@/components/TrustPilot";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("newMT5Platform.banner");

  return (
    <section className="bg-[#000000] pt-32 pb-20">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="text-center md:text-start">
              <TrustPilot />
            </div>
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#FED100] md:mt-0 lg:my-1">
                {t("title1")}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#ffffff]">
                {t("title2")}
              </h2>
              <p className="text-[#c6c6c6] mt-4">{t("description")}</p>
            </div>
            <div className="mt-5">
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
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <Image
                unoptimized={true}
                src={
                  locale === "ar"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/Hero+Image+Ar+Meta.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/Hero+Image.webp"
                }
                width="100"
                height="100"
                alt="image"
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