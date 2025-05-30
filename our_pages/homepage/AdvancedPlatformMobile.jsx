"use client";
import CustomButton from "@/components/common/CustomYellowButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const AdvancedPlatformMobile = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("home.advancedPlatforms");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  const features = [
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/platform-icons/advanced-analytical-tools-dark.svg",
      title: t("li1"),
      description: t("li1_desc"),
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/platform-icons/community-and-support-dark.svg",
      title: t("li2"),
      description: t("li2_desc"),
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/platform-icons/powerful-charting-dark.svg",
      title: t("li3"),
      description: t("li3_desc"),
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/platform-icons/multi-assets-platform-dark.svg",
      title: t("li4"),
      description: t("li4_desc"),
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/platform-icons/automated-trading-dark.svg",
      title: t("li5"),
      description: t("li5_desc"),
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/platform-icons/lightening-fast-dark.svg",
      title: t("li6"),
      description: t("li6_desc"),
    },
    {
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/platform-icons/integrated-economic-calender.svg",
      title: t("li7"),
      description: t("li7_desc"),
    },
  ];
  return (
    <section className="bg-p dark:bg-p-dark lg:hidden py-16 sm:py-28">
      <div className="container">
        <div className="bg-cc dark:bg-cc-dark px-4 py-8 sm:px-10 sm:py-10 rounded-xl">
          <div>
            <h5 className="text-3xl sm:text-3xl lg:text-4xl  text-tm dark:text-tm-dark font-bold text-center mb-3">
              {t("advance_platform_title_1")}
              <span className="text-pcp dark:text-pcp-dark">
                {t("advance_platform_title_2")}
              </span>
            </h5>
            <p className="text-sm sm:text-base text-ts dark:text-ts-dark font-medium mb-0 text-center">
              {t("advance_platform_description")}
            </p>
          </div>
          <div className="my-6">
            <Image
              unoptimized={true}
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/advanced-platform-mid.webp"
              alt="advanced analytical tools"
              width={100}
              height={100}
              className="w-full rounded-xl"
            />
          </div>
          <div className="mb-6">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex flex-row items-center gap-3 sm:gap-5 ${
                  index !== features.length - 1 ? "mb-6" : ""
                }`}
              >
                <Image
                  unoptimized
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-[36px] h-[36px] sm:w-[54px] sm:h-[54px]"
                />
                <div>
                  <p className="text-sm sm:text-xl text-tm dark:text-tm-dark font-semibold mb-0">
                    {item.title}
                  </p>
                  <p className="text-sm m:text-lg text-ts dark:text-ts-dark font-medium mb-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <CustomButton
            title="Open Account"
            onClick={handleClick}
            className="py-4 px-7 w-full justify-between text-base bg-pcp dark:bg-pcp-dark hover:bg-tm dark:hover:bg-tm-dark text-nb dark:text-nb-dark"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedPlatformMobile;
