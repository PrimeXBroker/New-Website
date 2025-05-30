"use client";
import CustomWhiteButton from "@/components/common/CustomWhiteButton";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const AdvancedPlatform = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("home.advancedPlatforms");

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  const features = [
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
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28 hidden lg:block">
      <div className="container">
        <div class="grid grid-cols-12 gap-6 bg-cc dark:bg-cc-dark p-10 rounded-2xl items-center">
          <div className="col-span-4">
            <div>
              <h5 className="lg:text-2xl xl:text-3xl leading-tight  text-tm dark:text-tm-dark font-bold">
                {t("advance_platform_title_1")}
                <span className="text-pcp dark:text-pcp-dark">
                  {t("advance_platform_title_2")}
                </span>
              </h5>
              <p className="lg:text-sm xl:text-base text-ts dark:text-ts-dark font-medium lg:my-5 xl:my-6">
                {t("advance_platform_description")}
              </p>
              <div className="flex flex-row items-center gap-2">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/platform-icons/advanced-analytical-tools-dark.svg"
                  alt="advanced analytical tools"
                  width={100}
                  height={100}
                  className="w-[40px] h-40px"
                />
                <div>
                  <p className="lg:text-xs xl:text-sm text-tm dark:text-tm-dark font-bold mb-0">
                    {t("li1")}
                  </p>
                  <p className="lg:text-xs xl:text-sm text-ts dark:text-ts-dark font-medium mb-0">
                    {t("li1_desc")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 mt-4">
                <Image
                  unoptimized={true}
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/platform-icons/community-and-support-dark.svg"
                  alt="advanced analytical tools"
                  width={100}
                  height={100}
                  className="w-[40px] h-40px"
                />
                <div>
                  <p className="lg:text-xs xl:text-sm text-tm dark:text-tm-dark font-bold mb-0">
                    {t("li2")}
                  </p>
                  <p className="lg:text-xs xl:text-sm text-ts dark:text-ts-dark font-medium mb-0">
                    {t("li2_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div>
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/primex-homepage/advanced-platform-mid.webp"
                alt="advanced analytical tools"
                width={100}
                height={100}
                className="w-full rounded-xl"
              />
            </div>
          </div>
          <div className="col-span-4">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex flex-row items-center gap-2 lg:mb-2 xl:mb-4`}
              >
                <Image
                  unoptimized
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-[40px] h-[40px]"
                />
                <div>
                  <p className="lg:text-xs xl:text-sm text-tm dark:text-tm-dark font-bold mb-0">
                    {item.title}
                  </p>
                  <p className="lg:text-xs xl:text-sm text-ts dark:text-ts-dark font-medium mb-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <CustomWhiteButton
              title={t("btnTxt")}
              onClick={handleClick}
              className="lg:py-3 lg:px-6 xl:py-4 xl:px-7 w-auto tablet-md:text-[12px] laptop-sm:text-[15px] laptop-md:text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedPlatform;
