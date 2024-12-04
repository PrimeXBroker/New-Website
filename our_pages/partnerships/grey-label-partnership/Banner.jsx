"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import TrustPilot from "@/components/TrustPilot";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("greyLabel.banner");

  return (
    <section className="bg-[#000000] pt-24 pb-20">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="text-center md:text-start">
              <TrustPilot />
            </div>
            <div className="mt-4 text-center md:text-start">
              <h2 className="text-xl font-semibold text-[#ffffff]">
                {t("title1")}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#FED100] md:mt-0 lg:my-1">
                {t("title2")}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#ffffff]">
                {t("title3")}
              </h2>
              <p className="text-[#c6c6c6] mt-4">{t("description")}</p>
            </div>
            <div className="mt-5">
              <button
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-[16px] px-[46px] font-semibold mt-5 w-full md:w-auto custom-button"
              >
                {t("btnTxt")}
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center mt-6 md:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Grey+Label+Hero+Section.webp"
                width="100"
                height="100"
                alt="Grey Label Hero"
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
