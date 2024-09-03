import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const Requirements = () => {
  const locale = useLocale();
  const t = useTranslations("topTrader.participationRequirements");

  return (
    <section className="container py-20">
      <div
        className="grid grid-cols-12 pt-[21px] bg-primary"
        style={{ borderTopLeftRadius: "60px", borderTopRightRadius: "60px" }}
      >
        <div
          className={`col-span-12 md:col-span-5 ${
            locale === "ar" ? "mr-0 md:mr-28" : "ml-0 md:ml-28"
          }`}
        >
          <div className="flex justify-center md:block">
            <Image
              unoptimized={true}
              className="mx-auto md:m-0 block"
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/requirement.webp"
              alt="Banner Image"
              width="300"
              height="450"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 flex justify-center items-center mt-8 md:mt-0">
          <div className="text-center md:text-left">
            <h1
              className={`text-secondary text-2xl md:text-4xl font-semibold ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "1px" }}
            >
              {t("title1")}
            </h1>
            <h1
              className={`text-secondary text-2xl md:text-2xl font-normal mb-8 md:mb-0 ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "1px" }}
            >
              {t("title1_part")}
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 relative">
        <div className="col-span-12 absolute top-[-24px] sm:top-[-45px] lg:top-[-68px]">
          <Image
            unoptimized={true}
            className="w-full mx-auto block"
            src={`${
              locale === "ar"
                ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/ribon-ar.webp"
                : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/ribon.webp"
            }`}
            alt="Banner Image"
            width="450"
            height="450"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 pt-[45px] sm:pt-[60px] md:pt-[121px] lg:pt-[139px] pb-10 bg-accent px-4 md:px-14">
        <div className="col-span-12 md:col-span-8">
          <div className="flex flex-col justify-center">
            <h1
              className={`text-secondary text-2xl md:text-3xl font-semibold mb-3 ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "1px" }}
            >
              {t("title2")}
            </h1>
            <p
              className={`text-secondary md:max-w-xl text-base font-[500] ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              {t("desc_p1")}
              <span className="font-semibold"> {t("desc_p2")} </span>
              {t("desc_p3")}
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center md:justify-start items-center mt-6 md:mt-0">
          <Button
            as={Link}
            href="https://primexcapital.s3.eu-north-1.amazonaws.com/website/assets/PDF/Trader_of_the_month_competition.pdf"
            target="_blank"
            radius="full"
            size="lg"
            color="secondary"
          >
            <p className="text-primary font-semibold">{t("tc_btn")}</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
