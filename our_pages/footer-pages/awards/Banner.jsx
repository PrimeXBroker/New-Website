"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const Banner = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("newAwards.hero");

  return (
    <section className="bg-p dark:bg-p-dark pt-28">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="mt-4 text-center md:text-start">
              <h2 className="text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-tm dark:text-tm-dark md:mb-1 lg:mb-0">
                {t("title1")}
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-pcp dark:text-pcp-dark my-1 md:my-1 lg:my-2">
                {t("title2")}{" "}
                <span className="text-tm dark:text-tm-dark">{t("title3")}</span>
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-tm dark:text-tm-dark">
                {t("title4")}
              </h2>
              <p className="text-ts dark:text-ts-dark mt-4 w-full sm:w-[70%] md:w-full lg:w-[70%] mx-auto md:mx-0">
                {t("description")}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 relative">
            <div className="flex flex-col items-end sm:items-center md:items-end mt-6 md:mt-0 relative">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-awards/award-bg-leaf.webp"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/awards/award-hero-img.webp"
                }
                width="100"
                height="100"
                alt="Award bg Leaf"
                className={`w-full sm:w-[70%] md:w-[70%] relative`}
              />
              <div
                className={`bg-cc dark:bg-cc-dark bg-opacity-[80%] dark:bg-opacity-[80%] backdrop-blur-[7px] dark:backdrop-blur-[7px] py-4 px-6 md:px-4 lg:px-6 w-[90%] sm:w-[65%] absolute bottom-0 ${
                  locale === "ar" ||
                  locale === "ps" ||
                  locale === "ku" ||
                  locale === "fa"
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
