"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useTheme } from "next-themes";

const Banner = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("greyLabel.banner");

  return (
    <section className="bg-p dark:bg-p-dark pt-24 pb-20">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="mt-4 text-center md:text-start">
              <h2 className="text-xl font-semibold text-tm dark:text-tm-dark">
                {t("title1")}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-pcp dark:text-pcp-dark md:mt-0 lg:my-1">
                {t("title2")}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark">
                {t("title3")}
              </h2>
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
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center mt-6 md:mt-0">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/grey-regional-partnership/Grey+Label+Hero+Section.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/grey-label/Grey+Label+Hero+Section.jpg"
                }
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
