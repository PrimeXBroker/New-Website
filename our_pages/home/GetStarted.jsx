"use client";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import React from "react";

const GetStarted = () => {
  const t = useTranslations("getStarted");
  return (
    <section className="my-12 container bg-secondary flex p-10 flex-col md:flex-row">
      <div className="md:w-[60%] w-full mb-5 md:mb-0">
        <h1 className="sectionHeading text-3xl text-white font-semibold text-center md:text-left">
          {t("title")}
        </h1>
        <p className="sectionPara  text-white text-center md:text-left">
          Ready to elevate your trading experience? Join PrimeX Broker and
          <br />
          explore our advanced trading features and special offers.
        </p>
      </div>
      <div className="w-full md:w-[30%] flex justify-center items-center">
        <Button radius="full" size="lg" color="primary">
          <p className="text-secondary font-semibold"> Open Your Account</p>
        </Button>
      </div>
    </section>
  );
};

export default GetStarted;
