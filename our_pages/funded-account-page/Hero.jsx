"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
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

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark pt-28 sm:pt-32">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="mt-4 text-center md:text-start">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-pcp dark:border-pcp-dark bg-pcp/[0.0784] dark:bg-pcp-dark/[0.0784] mb-5">
                <span className="w-2 h-2 rounded-full bg-pcp dark:bg-pcp-dark inline-block"></span>
                <span className="text-pcp dark:text-pcp-dark text-xs sm:text-sm tracking-wider uppercase">
                  {t("badge")}
                </span>
              </div>
              <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-[44px] font-semibold text-tm dark:text-tm-dark !leading-[1.15]">
                {t("title1")}
                <span className="text-pcp dark:text-pcp-dark">
                  {t("title2")}
                </span>
                {t("title3")}
              </h1>
              <p className="text-tm dark:text-ts-dark font-medium mt-5">
                {t("description")}
              </p>
            </div>
            <div className="mt-8">
              <CustomYellowButton
                title={t("btnTxt")}
                onClick={handleClick}
                className="py-5 px-9 md:py-4 md:px-7 lg:py-4 lg:px-9 text-lg w-full md:w-auto justify-between sm:justify-center"
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
