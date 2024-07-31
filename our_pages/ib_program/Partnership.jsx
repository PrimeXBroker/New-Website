import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { BsArrowDownCircleFill } from "react-icons/bs";

const Partnership = () => {
  const locale = useLocale();
  const t = useTranslations("ib");

  const partnershipContent = [
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-partnership1.webp",
      title: t("partnership.adv1_h3"),
      title2: t("partnership.adv1_h3_1"),
      description: t("partnership.adv1_p"),
    },
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-partnership2.webp",
      title: t("partnership.adv2_h3"),
      title2: t("partnership.adv2_h3_1"),
      description: t("partnership.adv2_p"),
    },
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-partnership3.webp",
      title: t("partnership.adv3_h3"),
      title2: t("partnership.adv3_h3_1"),
      description: t("partnership.adv3_p"),
    },
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-partnership4.webp",
      title: t("partnership.adv4_h3"),
      title2: t("partnership.adv4_h3_1"),
      description: t("partnership.adv4_p"),
    },
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-partnership5.webp",
      title: t("partnership.adv5_h3"),
      title2: t("partnership.adv5_h3_1"),
      description: t("partnership.adv5_p"),
    },
    {
      img: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-partnership6.webp",
      title: t("partnership.adv6_h3"),
      title2: t("partnership.adv6_h3_1"),
      description: t("partnership.adv6_p"),
    },
  ];

  return (
    <section className="my-20">
      <h1 className="sectionHeading">{t("partnership.title")}</h1>
      <div
        className={`mt-16 md:h-[580px] lg:h-[850px] bg-no-repeat bg-cover bg-top ${
          locale === "ar"
            ? "lg:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-new-partnership-ar.webp)]"
            : "lg:bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/ib/ib-new-partnership.webp)]"
        }`}
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-12 gap-4">
                {partnershipContent.map((item, index) => (
                  <div
                    key={index}
                    className="col-span-12 sm:col-span-7 md:col-span-6 mb-9"
                  >
                    <div className="grid grid-cols-12 justify-items-center sm:justify-items-start sm:gap-14 md:gap-9 group">
                      <div className="col-span-8 col-start-3 sm:col-span-2 sm:col-start-3 md:col-span-3 md:col-start-1">
                        <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full border-2 border-secondary bg-accent mb-4 group-hover:bg-primary">
                          <Image
                            src={item.img}
                            width="100"
                            height="100"
                            alt="img"
                            className="w-[63%]"
                          />
                        </div>
                      </div>
                      <div className="col-span-8 col-start-3 sm:col-span-8 md:col-span-8">
                        <div className="text-center sm:text-start">
                          <h3 className="text-xl font-semibold mb-1 text-[#232323]">
                            {item.title} <br />
                            {item.title2}
                          </h3>
                          <p className="text-[#232323]">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`mt-5 md:mt-0 ${
                  locale === "ar"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
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
                    {t("partnership.btnTxt")}
                    <BsArrowDownCircleFill size={"24px"} />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="sm:col-span-0 lg:col-span-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
