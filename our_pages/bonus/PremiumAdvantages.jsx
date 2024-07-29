"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import RegButton from "@/components/RegButton";

const PremiumAdvantages = () => {
  const locale = useLocale();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const t = useTranslations("accountTypes");

  const advantagesData = {
    imgEn: "/images/advantage-en.webp",
    imgAr: "/images/advantage-ar.webp",
    mainTitle1: t("advantages.adv_h2"),
    mainTitle2: t("advantages.adv_h2_1"),
    btnTxt: t("header.btnTxt"),
    regNow: t("advantages.reg_now"),
    loginHere: t("advantages.login_here"),
    regLink: `https://client.primexbroker.com/${locale}/register`,
    loginLink: `https://client.primexbroker.com/${locale}/auth/sign-in`,
  };

  const advantagesContent = [
    {
      img: "/images/account-types/adv-logo1.svg",
      hoveredImg: "/images/account-types/adv-logo1-hover.svg",
      title: t("advantages.adv1_h3"),
      description: t("advantages.adv1_p"),
    },
    {
      img: "/images/account-types/adv-logo2.svg",
      hoveredImg: "/images/account-types/adv-logo2-hover.svg",
      title: t("advantages.adv2_h3"),
      description: t("advantages.adv2_p"),
    },
    {
      img: "/images/account-types/adv-logo3.svg",
      hoveredImg: "/images/account-types/adv-logo3-hover.svg",
      title: t("advantages.adv3_h3"),
      description: t("advantages.adv3_p"),
    },
    {
      img: "/images/account-types/adv-logo4.svg",
      hoveredImg: "/images/account-types/adv-logo4-hover.svg",
      title: t("advantages.adv4_h3"),
      description: t("advantages.adv4_p"),
    },
    {
      img: "/images/account-types/adv-logo5.svg",
      hoveredImg: "/images/account-types/adv-logo5-hover.svg",
      title: t("advantages.adv5_h3"),
      description: t("advantages.adv5_p"),
    },
  ];

  const customStyle = {
    btnColor: "secondary",
    txtColor1: "text-primary",
    txtColor2: "text-secondary",
    txtColor3: "text-secondary",
    borderColor: "border-transparent",
  };

  return (
    <section className="container">
      <div className="border-2 border-secondary rounded-3xl p-12 shadow-lg">
        <div className="grid grid-cols-12 mb-10">
          <div className="col-span-12">
            <div>
              <h2
                className={`sectionHeading inline-block ${
                  locale === "ar" ? "text-right" : "text-left"
                }`}
              >
                {advantagesData.mainTitle1}
                <br className="hidden md:block" /> {advantagesData.mainTitle2}
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-5 lg:mt-0">
          <div className="col-span-12 lg:col-span-6">
            {advantagesContent.map((item, index) => {
              const isSpecialImage = item.img === "/images/adv-logo3.svg";
              return (
                <div
                  key={index}
                  className="col-span-12 md:col-span-6 mb-9"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="grid grid-cols-12 justify-items-center sm:justify-items-start sm:gap-12">
                    <div className="col-span-12 sm:col-span-2 md:col-span-3 lg:col-span-2">
                      <div className="flex justify-center items-center w-20 h-20 rounded-full bg-secondary mb-4 sm:mb-0">
                        <Image
                          src={
                            hoveredIndex === index ? item.hoveredImg : item.img
                          }
                          width={isSpecialImage ? "34" : "44"}
                          height={isSpecialImage ? "34" : "44"}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-8">
                      <div className="text-center sm:text-start">
                        <h3 className="text-xl font-semibold mb-1 text-[#232323]">
                          {item.title}
                        </h3>
                        <p className="text-[#232323] px-6 sm:px-0">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0">
            <Image
              src="/images/bonus/premium-adv.webp"
              width="600"
              height="300"
              alt="img"
              className="md:w-[50%] lg:w-[90%] h-auto mx-auto animate-float-bob"
            />
            <div className="text-center mt-1">
              <RegButton customStyle={customStyle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAdvantages;
