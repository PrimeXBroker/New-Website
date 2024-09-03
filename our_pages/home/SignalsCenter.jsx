import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const SignalsCenter = () => {
  const locale = useLocale();
  const t = useTranslations("home.signalsCenter");

  return (
    <section
      className="container bg-cover bg-center bg-no-repeat ps-0 md:ps-14"
      style={{
        backgroundImage:
          "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/signal-center-bg.webp')",
      }}
    >
      <div className="grid grid-cols-12 pt-12 pb-8 md:pt-8 md:pb-6">
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
          <h1
            className={`text-secondary text-2xl md:text-[2.5rem] font-semibold mb-5 ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            {t("title")}
          </h1>
          <p
            className={`text-secondary md:max-w-xl  text-base font-[500] ${
              locale === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            {t("description")}
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 flex justify-center mt-7 md:mt-0">
          <Image
            unoptimized={true}
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/signal-center-banner.webp"
            width="300"
            height="300"
            alt="banner Image"
          />
        </div>
      </div>
    </section>
  );
};

export default SignalsCenter;
