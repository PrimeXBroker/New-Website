"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import TrustPilot from "@/components/TrustPilot";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("copyProgram.hightProvidersWidget");

  return (
    <section className="bg-[#000000] pt-24 sm:pt-32 pb-8">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            {/* <div className="text-center md:text-start">
              <TrustPilot />
            </div> */}
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#FED100]">
                {t("title1")}
                {/* <span className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#FED100]">
                  {t("title2")}
                </span> */}
              </h1>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/social-trading/Top-Ranked-by-Investors-Number.webp"
                width="100"
                height="100"
                alt="Copy Program Hero"
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
