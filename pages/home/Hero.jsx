import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const t = useTranslations("Index.home");
  return (
    <section className="bg-accent h-[70vh] rounded-b-[7%] md:rounded-b-[7%] relative">
      <div className="container mx-auto flex flex-col">
        <div className="md:max-w-2xl flex flex-col items-center md:items-start gap-5 pt-5 md:pt-28">
          <h1 className="text-secondary text-2xl md:text-4xl font-[800] text-center md:text-left">
            {t("title")}
          </h1>
          <p className="text-secondary font-medium font-montserrat text-center md:text-left pb-4 md:pb-0">
            {t("description")}
          </p>
        </div>
        <div className="md:absolute container bottom-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-8 md:border-t-2 border-solid border-gray-400 md:pt-16">
          <div className="flex flex-col justify-center items-center lg:mb-0 mb-5">
            <Image
              src="/images/innovative_tools.svg"
              alt="clear pricing"
              width="80"
              height="200"
            />
            <h2 className="text-secondary text-2xl font-semibold pt-4 pb-4">
              Innovative Tools
            </h2>
            <p className="text-secondary text-center text-sm">
              Cutting-edge technology for <br /> every trader
            </p>
          </div>
          <div className="flex flex-col justify-center items-center lg:mb-0 mb-5">
            <Image
              src="/images/competitive_pricing.svg"
              alt="clear pricing"
              width="80"
              height="200"
            />
            <h2 className="text-secondary text-2xl font-semibold pt-2 pb-4">
              Competitive Pricing
            </h2>
            <p className="text-secondary text-center text-sm">
              Low spreads and transparent <br /> costs
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/fast_execution.svg"
              alt="clear pricing"
              width="80"
              height="200"
            />
            <h2 className="text-secondary text-2xl font-semibold pt-2 pb-4">
              Fast Execution
            </h2>
            <p className="text-secondary text-center text-sm">
              {" "}
              Quick and reliable trade <br /> executions
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/clear_pricing.svg"
              alt="clear pricing"
              width="80"
              height="200"
            />
            <h2 className="text-secondary text-2xl font-semibold pt-2 pb-4">
              Clear Pricing
            </h2>
            <p className="text-secondary text-center text-sm">
              Upfront information for a <br /> better trading experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
