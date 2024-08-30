import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const Requirements = () => {
  const locale = useLocale();

  return (
    <section className="container py-20">
      <div
        className="grid grid-cols-12 pt-6 bg-primary"
        style={{ borderTopLeftRadius: "60px", borderTopRightRadius: "60px" }}
      >
        <div className={`col-span-5 ${locale === "ar" ? "mr-28" : "ml-28"}`}>
          <div>
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
        <div className="col-span-7 flex justify-center items-center">
          <div>
            <h1
              className={`text-secondary text-2xl md:text-4xl font-semibold ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "1px" }}
            >
              Tour Chance to Own
            </h1>
            <h1
              className={`text-secondary text-2xl md:text-2xl font-normal ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "1px" }}
            >
              the Brand-New iPhone Today!
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 relative">
        <div className="col-span-12 absolute top-[-68px]">
          <Image
            unoptimized={true}
            className="w-[100%] mx-auto md:m-0 block"
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
      <div className="grid grid-cols-12 pt-36 pb-10 bg-accent px-14">
        <div className="col-span-8">
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <h1
              className={`text-secondary text-2xl md:text-3xl font-semibold mb-3 ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "1px" }}
            >
              Participation Requirements
            </h1>
            <p
              className={`text-secondary md:max-w-xl  text-base font-[500] ${
                locale === "ar"
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
              style={{ letterSpacing: "1.4px" }}
            >
              For both new and existing clients, Being the highest trader
              <span className="font-semibold"> within 30 days </span> is all it
              takes to claim your prize!
            </p>
          </div>
        </div>
        <div className="col-span-4 flex items-center">
          <Button
            as={Link}
            href="https://client.primexbroker.com/en/register"
            radius="full"
            size="lg"
            color="primary"
          >
            <p className="text-secondary font-semibold">Terms and Conditions</p>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
