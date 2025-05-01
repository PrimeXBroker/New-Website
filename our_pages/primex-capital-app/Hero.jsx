"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const Hero = () => {
  const locale = useLocale();
  const { theme } = useTheme();

  const t = useTranslations("primeXTradingApp.banner");

  return (
    <section className="bg-p dark:bg-p-dark pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="mt-4 text-center md:text-start">
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark">
                {t("title1")}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-tm dark:text-tm-dark my-2">
                {t("title2")}
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-pcp dark:text-pcp-dark">
                {t("title3")}
              </h2>
              <p className="text-ts dark:text-ts-dark mt-5">
                {t("description")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.primex.primexmobileapp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-e1 dark:bg-e1-dark border-1 border-e1 dark:border-e1-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center w-full lg:w-[200px] h-[60px] rounded-lg group"
              >
                <Image
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/google-play_3128279+1.svg"
                  alt="Google Play"
                  width={32}
                  height={32}
                />
                <div
                  className={`text-tm dark:text-tm-dark ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-3 text-right"
                      : "ml-3 text-left"
                  }`}
                >
                  <p className="text-xs text-ts dark:text-ts-dark">
                    {t("google_play-btn_part1")}
                  </p>
                  <p className="text-lg md:text-sm lg:text-lg font-semibold">
                    {t("google_play-btn_part2")}
                  </p>
                </div>
              </a>
              <a
                href=" https://apps.apple.com/ae/app/primex-online-trading/id6741466188"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-e1 dark:bg-e1-dark border-1 border-e1 dark:border-e1-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center w-full lg:w-[200px] h-[60px] rounded-lg group"
              >
                <Image
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/apple_731985+1.svg"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/mt5/Apple+Icon.svg"
                  }
                  alt="Apple Store"
                  width={32}
                  height={32}
                />
                <div
                  className={`text-tm dark:text-tm-dark ${
                    locale === "ar" || locale === "ps" || locale === "ku"
                      ? "mr-3 text-right"
                      : "ml-3 text-left"
                  }`}
                >
                  <p className="text-xs text-ts dark:text-ts-dark">
                    {t("app_store_btn_part1")}
                  </p>
                  <p className="text-lg md:text-sm lg:text-lg font-semibold">
                    {t("app_store_btn_part2")}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/Hero+Image.webp"
                width="100"
                height="100"
                alt="MT5 Hero"
                className={`w-full sm:w-[70%]`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
