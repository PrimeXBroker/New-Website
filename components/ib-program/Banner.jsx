import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@nextui-org/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

const Banner = () => {
  const locale = useLocale();
  const t = useTranslations("ib.header");

  return (
    <section>
      <div
        className={`relative h-[1000px] md:h-[650px] xl:h-[750px] bg-no-repeat bg-cover bg-center ${
          locale === "ar"
            ? "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-new-header-mbl.webp)] md:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-new-header-ar.webp)]"
            : "bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-new-header-mbl.webp)] md:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-new-header.webp)]"
        }`}
      >
        <div className="container mx-auto md:px-10 xl:px-4 pt-20 xl:pt-32">
          <div className="grid grid-cols-12 gap-4 items-center h-full">
            <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center mt-[430px] md:mt-0">
              <div
                className={`${
                  locale === "ar"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                <h3 className="text-1xl sm:text-2xl xl:text-3xl font-light text-secondary px-10 sm:px-20 md:px-0">
                  {t("title1")}
                </h3>
              </div>
              <div
                className={`mt-1 ${
                  locale === "ar"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-secondary inline-block font-extrabold underline-custom">
                  {t("title2")}
                </h1>
              </div>
              <div
                className={`${
                  locale === "ar"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                <h3 className="text-3xl sm:text-4xl xl:text-5xl font-light text-secondary px-10 sm:px-20 md:px-0 mt-6">
                  {t("subtitle_1")}
                  <span className="font-semibold">{t("subtitle_2")}</span>{" "}
                  {t("subtitle_3")}
                </h3>
                <h3 className="text-5xl sm:text-7xl xl:text-8xl font-semibold text-secondary px-10 sm:px-20 md:px-0 mt-2">
                  {t("subtitle_4")}
                </h3>
              </div>
              <div
                className={`mt-16 ${
                  locale === "ar"
                    ? "text-center md:text-right"
                    : "text-center md:text-left"
                }`}
              >
                <Button
                  className="text-secondary font-semibold h-14 px-10"
                  radius="full"
                  size="lg"
                  color="primary"
                >
                  <Link
                    href="#ib-form"
                    className="inline-flex gap-3 items-center justify-center text-xl"
                  >
                    {t("btnTxt")}
                    {locale === "ar" ? (
                      <FaArrowLeftLong
                        size={"24px"}
                        style={{ marginRight: "16px" }}
                      />
                    ) : (
                      <FaArrowRightLong
                        size={"24px"}
                        style={{ marginLeft: "16px" }}
                      />
                    )}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-5 lg:col-span-6 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
