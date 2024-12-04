"use client";
import Image from "next/image";
import TrustPilot from "@/components/TrustPilot";
import { useLocale, useTranslations } from "next-intl";

const Banner1 = () => {
  const locale = useLocale();
  const t = useTranslations("fundedAccount.banner2");

  return (
    <section className="bg-[#000000] sm:pt-32 pb-8">
      <div className="container">
        <div className="grid grid-cols-12 items-start">
          {" "}
          <div className="col-span-12 md:col-span-6">
            <div className="flex justify-center md:justify-start mt-3 md:mt-0">
              <Image
                unoptimized={true}
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/funded-account/About+Image.png"
                width={100}
                height={100}
                alt="About Image"
                className={`w-full sm:w-[70%] md:w-[90%]`}
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="text-center md:text-start">
              {" "}
              {/* Removed margin-top */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl pt-4 md:pt-0 font-medium text-[#ffffff]">
                {t("title1")}
                <br />
                <span className="text-[#FED100]">{t("title2")}</span>
              </h1>
              <p className="text-[#c6c6c6] text-base md:text-xl mt-4 md:mt-1 xl:mt-3 px-2 sm:px-16 md:px-0">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
