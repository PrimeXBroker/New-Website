import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logos/logo-white.webp";
import { useLocale, useTranslations } from "next-intl";

const Rewards = () => {
  const locale = useLocale();
  const t = useTranslations("ibProgram.rewards");

  return (
    <section className="bg-[#000000] py-10">
      <div className="container">
        <Image
          unoptimized={true}
          src={
            locale === "en"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/En.webp"
              : locale === "ar"
              ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/ar.png"
              : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib-program/Kd.webp"
          }
          alt="Iphone"
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Rewards;
