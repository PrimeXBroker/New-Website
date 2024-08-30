import React from "react";
import Image from "next/image";
import TraderForm from "./TraderForm";
import { useTranslations, useLocale } from "next-intl";

const TopTraderForm = () => {
  const locale = useLocale();

  return (
    <section className="container">
      <div className="grid grid-cols-12">
        <div className="col-span-6 flex justify-center">
          <div className="relative w-[400px] mx-auto md:m-0 block">
            <div className="absolute top-0 left-0 w-full">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/top-trader/steps.webp"
                alt="Step Image"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div
              className={`flex items-center gap-4 absolute top-[6%] w-full ${
                locale === "ar" ? "right-[26%]" : "left-[26%]"
              }`}
            >
              <div className="text-6xl font-semibold text-secondary">1</div>
              <div
                className="text-xl text-secondary font-semibold"
                style={{ lineHeight: "24px" }}
              >
                Open a <br /> Live Account
              </div>
            </div>
            <div
              className={`flex items-center gap-4 absolute top-[43%] w-full ${
                locale === "ar" ? "right-[27%]" : "left-[27%]"
              }`}
            >
              <div className="text-6xl font-semibold text-white">2</div>
              <div
                className="text-xl text-white font-semibold"
                style={{ lineHeight: "24px" }}
              >
                Start <br />
                Trading
              </div>
            </div>
            <div
              className={`flex items-center gap-4 absolute top-[81%] w-full ${
                locale === "ar" ? "right-[26%]" : "left-[26%]"
              }`}
            >
              <div className="text-6xl font-semibold text-secondary">3</div>
              <div
                className="text-xl text-secondary font-semibold"
                style={{ lineHeight: "24px" }}
              >
                Fill & Submit <br /> the Form
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <TraderForm />
        </div>
      </div>
    </section>
  );
};

export default TopTraderForm;
