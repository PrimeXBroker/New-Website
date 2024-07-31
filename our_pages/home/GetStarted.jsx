"use client";
import LocaleLink from "@/components/LocaleLink";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetStarted = () => {
  const t = useTranslations("home.getStarted");
  return (
    <section
      className="my-12 bg-primary relative">
      <div className="container flex p-10 flex-col md:flex-row">
      <div className="md:w-[60%] w-full mb-5 md:mb-0">
        <h1 className="sectionHeading text-3xl text-secondary font-semibold text-center md:text-left">
          {t("get_started_title")}
        </h1>
        <p className="sectionPara  text-secondary text-center md:text-left">
          {t("get_started_desc_1")}
          <br />
          {t("get_started_desc_2")}
        </p>
      </div>
      <div className="w-full md:w-[30%] flex justify-center items-center">
        <Button as={Link} href="https://client.primexbroker.com/en/register" radius="full" size="lg" color="secondary">
          <p className="text-white font-semibold">{t("get_started_btn")}</p>
        </Button>
      </div>
      </div>
      <Image 
      src='https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/x-Icon.svg' 
      width='100' 
      height='100' 
      alt="logo coin"
      className="absolute right-0 top-0 z-10"
      />
    </section>
  );
};

export default GetStarted;
