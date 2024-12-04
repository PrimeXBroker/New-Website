"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import TrustPilot from "@/components/TrustPilot";
import Link from "next/link";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { getLoginUrl } from "@/utilities/getLoginUrl";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("accountTypes.banner");

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
                <span className="text-[#ffffff]">{t("title2")}</span>
              </h1>
              <p className="text-[#c6c6c6] mt-4">{t("description")}</p>
            </div>
            <div className="mt-5">
              <button
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-[16px] px-[46px] font-semibold mt-5 w-full md:w-auto custom-button"
              >
                {t("btnTxt")}
              </button>
              <a
                href={getLoginUrl(locale)}
                target="_blank"
                className={`text-xs text-[#ffffff] font-normal block mt-2 ${
                  locale === "ar" || locale === "fa" || locale === "kur"
                    ? "text-center md:text-start mr-6"
                    : "text-center md:text-start md:ml-6"
                }`}
              >
                {t("registered_already")}{" "}
                <span className="italic font-semibold">{t("login_here")}</span>
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center mt-8 md:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-account-types/accounttypes-header-img.webp"
                width="100"
                height="100"
                alt="Account Types Header"
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
