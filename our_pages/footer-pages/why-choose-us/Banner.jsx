"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useTheme } from "next-themes";

const Banner = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("whyChooseUs.hero");

  return (
    <section className="bg-p dark:bg-p-dark pt-28 sm:pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark md:mb-1 lg:mb-0">
                {t("title1")} <br />
                <span className="inline-block my-2">{t("title2")}</span> <br />
                <span className="text-pcp dark:text-pcp-dark">
                  {t("title3")}
                </span>{" "}
                <br />
                <span className="text-pcp dark:text-pcp-dark inline-block my-2">
                  {t("title4")}
                </span>{" "}
                <br />
                <span className="text-pcp dark:text-pcp-dark">
                  {t("title5")}
                </span>
              </h1>
            </div>
            <div
              className={`mt-8 ${
                locale === "ar" || locale === "ps" || locale === "ku"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              <CustomYellowButton
                title={t("btnTxt")}
                onClick={() => window.open(getRegisterUrl(locale))}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full sm:w-auto justify-between sm:justify-center"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 relative">
            <div className="flex flex-col items-end sm:items-center md:items-end mt-6 md:mt-0 relative">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/footer-pages/why-choose-us/Hero+Image+WHy+Choose+PrimeX.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/why-choose-us/Why-Choose-Hero-Light.webp"
                }
                width="100"
                height="100"
                alt="Why Choose PrimeX"
                className={`w-full sm:w-[70%] md:w-[70%] relative`}
              />
              <div
                className={`bg-cc dark:bg-cc-dark bg-opacity-[80%] dark:bg-opacity-[80%] backdrop-blur-[7px] dark:backdrop-blur-[7px] py-4 px-6 md:px-4 lg:px-6 w-[90%] sm:w-[65%] absolute bottom-0 ${
                  locale === "ar" || locale === "ps" || locale === "ku"
                    ? "rounded-tl-[0px] rounded-tr-[28px] rounded-bl-[8px] rounded-br-[0px] sm:left-[14.7%] md:left-0"
                    : "rounded-tl-[28px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[8px] sm:right-[14.7%] md:right-0"
                }`}
              >
                <h2 className="text-tm dark:text-tm-dark text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold glow-text mb-0 lg:mb-1">
                  {t("img_title1")}
                </h2>
                <h3 className="text-tm dark:text-tm-dark text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
                  {t("img_title2")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
