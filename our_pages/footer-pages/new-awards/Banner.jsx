"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import TrustPilot from "@/components/TrustPilot";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("newAwards.hero");

  return (
    <section className="bg-[#000000] pt-28 pb-20">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="text-center md:text-start">
              <TrustPilot />
            </div>
            <div className="mt-4 text-center md:text-start">
              <h2 className="text-2xl font-semibold text-[#ffffff]">
                {t("title1")}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#FED100] md:mt-0 lg:my-2">
                {t("title2")}{" "}
                <span className="text-[#ffffff]">{t("title3")}</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#ffffff]">
                {t("title4")}
              </h2>
              <p className="text-[#c6c6c6] mt-4">{t("description")}</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 relative">
            <div className="flex flex-col items-end mt-6 md:mt-0 relative">
              <Image
                unoptimized={true}
                src={
                  locale === "ar" || locale === "fa" || locale === "kur"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/award-bg-leaf.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/award-bg-leaf.webp"
                }
                width="100"
                height="100"
                alt="image"
                className={`w-full sm:w-[70%] ms:w-full relative`}
              />
              <div className={`bg-[#ffffff] w-[65%] absolute bottom-0`}>
                <h2 className="text-[#ffffff] text-4xl font-semibold glow-text mb-1">
                  {t("img_title1")}
                </h2>
                <h3 className="text-[#ffffff] text-4xl">{t("img_title2")}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
