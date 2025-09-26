"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const Hero = () => {
  const locale = useLocale();
  const { theme } = useTheme();
  const t = useTranslations("primeXTradingApp.banner");

  return (
    <section id="hero" className="bg-p dark:bg-p-dark pt-24 xl:pt-28">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12">
            <div
              className={`bg-cc dark:bg-cc-dark ${
                theme === "dark"
                  ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/mobile-app-hero.png)]"
                  : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/Hero+Light+Mode.png)]"
              } bg-cover bg-bottom ${
                locale === "ku" || locale === "pt" || locale === "es"
                  ? "h-[756px]"
                  : "h-[722px]"
              } rounded-3xl hidden md:block`}
            >
              <div className="text-center pt-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark">
                  {t("title1")} {t("title2")}
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark">
                  {t("title3")}
                </h2>
                <p
                  className={`text-ts dark:text-ts-dark mt-2 w-full sm:w-[70%] md:w-[60%] lg:w-[38%] mx-auto`}
                >
                  {t("description")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.primex.primexmobileapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center w-full lg:w-[200px] h-[60px] rounded-lg group"
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
                    <p className="text-lg lg:text-base xl:text-lg font-semibold">
                      {t("google_play-btn_part2")}
                    </p>
                  </div>
                </a>
                <a
                  href=" https://apps.apple.com/ae/app/primex-online-trading/id6741466188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center w-full lg:w-[200px] h-[60px] rounded-lg group"
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
                    <p className="text-lg lg:text-base xl:text-lg font-semibold">
                      {t("app_store_btn_part2")}
                    </p>
                  </div>
                </a>
                {/* <a
                  href="https://appgallery.cloud.huawei.com/ag/n/app/C114072661?locale=en_GB&source=appshare&subsource=C114072661&shareTo=com.android.bluetooth&shareFrom=appmarket&shareIds=e02c3da07c89442dbb99f53adb01464d_com.android.bluetooth&callType=SHARE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center w-full lg:w-[200px] h-[60px] rounded-lg group"
                >
                  <Image
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/huawei-app-gallery.svg"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/huawei-app-gallery.svg"
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
                      {t("app_gallery_btn_part1")}
                    </p>
                    <p className="text-lg lg:text-base xl:text-lg font-semibold">
                      {t("app_gallery_btn_part2")}
                    </p>
                  </div>
                </a> */}
              </div>
            </div>
            <div
              className={`bg-cc dark:bg-cc-dark ${
                theme === "dark"
                  ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/mobile-hero/BG+Mobile.png)]"
                  : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/mobile-hero/Background+shadow.png)]"
              } bg-cover bg-bottom ${
                locale === "ku" || locale === "pt" || locale === "es" ? "" : ""
              } rounded-3xl md:hidden`}
            >
              <div className="text-center pt-5">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark">
                  {t("title1")} {t("title2")}
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-tm dark:text-tm-dark">
                  {t("title3")}
                </h2>
                <p
                  className={`text-ts dark:text-ts-dark mt-2 w-full sm:w-[70%] md:w-[60%] lg:w-[38%] mx-auto px-2`}
                >
                  {t("description")}
                </p>
              </div>
              <p className="text-tm dark:text-tm-dark font-semibold text-sm text-center mt-5">
                Download Now
              </p>
              <div className="flex justify-center items-center gap-4 mb-8 mt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.primex.primexmobileapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center w-[64px] h-[52px] rounded-lg group"
                >
                  <Image
                    src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/google-play_3128279+1.svg"
                    alt="Google Play"
                    width={24}
                    height={27}
                  />
                </a>
                <a
                  href=" https://apps.apple.com/ae/app/primex-online-trading/id6741466188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center w-[64px] h-[52px] rounded-lg group"
                >
                  <Image
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-platform/apple_731985+1.svg"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/mt5/Apple+Icon.svg"
                    }
                    alt="Apple Store"
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href="https://appgallery.cloud.huawei.com/ag/n/app/C114072661?locale=en_GB&source=appshare&subsource=C114072661&shareTo=com.android.bluetooth&shareFrom=appmarket&shareIds=e02c3da07c89442dbb99f53adb01464d_com.android.bluetooth&callType=SHARE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-e1 dark:bg-e1-dark border-2 border-e2 dark:border-e2-dark hover:border-e2 dark:hover:border-e2-dark transition-all duration-500 ease-in-out flex items-center justify-center w-[64px] h-[52px] rounded-lg group"
                >
                  <Image
                    src={
                      theme === "dark"
                        ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/huawei-app-gallery.svg"
                        : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-online-trading/huawei-app-gallery.svg"
                    }
                    alt="Apple Store"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-dark/mobile-hero/Mockup+Mobile.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-mobile-app/features-light/mobile-hero/Mobile+Mockup.png"
                }
                alt="Mobile Mockup"
                width={32}
                height={32}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
