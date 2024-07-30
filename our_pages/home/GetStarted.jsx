"use client";
import LocaleLink from "@/components/LocaleLink";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const GetStarted = () => {
  const t = useTranslations("home.getStarted");
  return (
    <section
      className="my-12 container bg-secondary flex p-10 flex-col md:flex-row"
      data-aos-easing="ease-out"
      data-aos-duration={1000}
      data-aos="slide-up"
    >
      <div className="md:w-[60%] w-full mb-5 md:mb-0">
        <h1 className="sectionHeading text-3xl text-white font-semibold text-center md:text-left">
          {t("get_started_title")}
        </h1>
        <p className="sectionPara  text-white text-center md:text-left">
          {t("get_started_desc_1")}
          <br />
          {t("get_started_desc_2")}
        </p>
      </div>
      <div className="w-full md:w-[30%] flex justify-center items-center">
        <Button as={Link} href="https://client.primexbroker.com/en/register" radius="full" size="lg" color="primary">
          <p className="text-secondary font-semibold">{t("get_started_btn")}</p>
        </Button>
      </div>
    </section>
  );
};

export default GetStarted;
