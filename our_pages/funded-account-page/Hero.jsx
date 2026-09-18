"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Hero = () => {
  const router = useRouter();
  const locale = useLocale();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("fundedAccountPage.banner");

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme || theme || "dark" : "dark";

  const scrollToRegistration = () => {
    document
      .getElementById("initiative-registration")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-28 sm:pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="mt-4 text-center md:text-start">
              <div className="inline-flex items-center justify-center mx-auto gap-2 bg-[#f5f5f5] dark:bg-white dark:bg-opacity-[0.12] w-fit px-3 py-[6px] rounded-lg mb-5 border-[0.7px] border-[#f5f5f5] dark:border-white dark:border-opacity-[0.15]">
                <Image
                  unoptimized={true}
                  src={
                    theme === "dark"
                      ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Join+250%2C000%2B+traders+worldwide+icon.png"
                      : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Join+250%2C000%2B+traders+worldwide+icon.png"
                  }
                  width="16"
                  height="16"
                  alt="badge"
                  className="w-[24px] h-auto"
                />
                <p className="text-tm dark:text-tm-dark font-medium text-sm text-start">
                  {t("badge")}
                </p>
              </div>
              <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-[44px] font-semibold text-tm dark:text-tm-dark !leading-[1.15]">
                {t("title1")}
                <span className="text-pcp dark:text-pcp-dark">
                  {t("title2")}
                </span>
                {t("title3")}
              </h1>
              <p className="text-tm dark:text-ts-dark text-sm sm:text-base mt-5">
                {t("description")}
              </p>
            </div>
            <div className="mt-8">
              <CustomYellowButton
                title={t("btnTxt")}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full md:w-auto justify-between sm:justify-center"
                onClick={scrollToRegistration}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
              <Image
                unoptimized={true}
                src={
                  currentTheme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account-page/funded-account-hero-dark.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account-page/funded-account-hero-light.png"
                }
                width="100"
                height="100"
                alt="Funded Account"
                className="w-full h-auto sm:w-[92%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
