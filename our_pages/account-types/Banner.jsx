"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { getLoginUrl } from "@/utilities/getLoginUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("accountTypes.banner");

  return (
    <section className="bg-p dark:bg-p-dark pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-pcp dark:text-pcp-dark md:mt-0 lg:my-1">
                {t("title1")}
                <span className="text-tm dark:text-tm-dark">{t("title2")}</span>
              </h1>
              <p className="text-ts dark:text-ts-dark mt-4">
                {t("description")}
              </p>
            </div>
            <div className="mt-10">
              <CustomYellowButton
                title={t("btnTxt")}
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center"
              />
              <a
                href={getLoginUrl(locale)}
                target="_blank"
                className={`text-xs text-tm dark:text-tm-dark font-normal block mt-2 ${
                  locale === "ar" || locale === "ps" || locale === "ku"
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
