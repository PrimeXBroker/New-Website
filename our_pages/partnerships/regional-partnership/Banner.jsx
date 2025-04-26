"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useTheme } from "next-themes";

const Banner = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("regionalPartnership.banner");

  return (
    <section className="bg-p dark:bg-p-dark pt-32 pb-20">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="mt-4 text-center md:text-start">
              <h2 className="text-xl font-semibold text-tm dark:text-tm-dark">
                {t("title1")}{" "}
                <span className="text-pcp dark:text-pcp-dark text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                  {t("title2")}
                </span>
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-pcp dark:text-pcp-dark my-3">
                {t("title3")}
              </h1>
              <h2 className="text-xl font-semibold text-tm dark:text-tm-dark mb-3">
                {t("title4")}
                <span className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                  {t("title5")}
                </span>
                {t("title6")}
                <span className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                  {t("title7")}
                </span>
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark">
                {t("title8")}
              </h1>
            </div>
            <div className="mt-10">
              <CustomYellowButton
                title={t("btnTxt")}
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex justify-center mt-6 md:mt-0">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Regional+page+Hero+image.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/regional-partner/Regional+page+Hero+image.webp"
                }
                width="100"
                height="100"
                alt="Regional Partner"
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
