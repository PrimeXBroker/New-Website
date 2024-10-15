"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import TrustPilot from "@/components/TrustPilot";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("demoAccount.banner");

  return (
    <section className="bg-[#000000] pt-32 pb-10">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="text-center md:text-start">
              <TrustPilot />
            </div>
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#ffffff] sm:mb-2">
                {t("title1")}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#FED100]">
                {" "}
                {t("title2")}
              </h2>
              <p className="text-lg sm:text-xl my-4 text-[#c6c6c6]">
                <span className="text-[#c6c6c6]">{t("subtitle_p1")}</span>
                {t("subtitle_p2")}
                <br />
                {t("subtitle_p3")}
              </p>
            </div>
            <div
              className={`mt-5 ${
                locale === "ar" || locale === "fa" || locale === "kur"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
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
                className="py-3 custom-button w-[90%] sm:w-[157px]"
              >
                {t("start_btn")}
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center md:justify-end mt-10 md:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/demo-account/fac-top-banner.webp"
                width="100"
                height="100"
                alt="image"
                className={`w-full sm:w-[70%] md:w-full`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
