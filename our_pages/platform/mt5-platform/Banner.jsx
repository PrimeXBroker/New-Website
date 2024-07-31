import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Banner = () => {
  const t = useTranslations("metaTrader5.hero");

  return (
    <section className="bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/background.jpg')]  bg-cover bg-no-repeat">
      <div className="container flex flex-col md:flex-row justify-center items-center py-12 lg:md:text-left text-center h-[80vh] ">
        <div className="md:w-[40%]">
          <h1
            className="text-primary md:text-3xl font-semibold mb-5"
            style={{ letterSpacing: "1px" }}
          >
            {t("title")}
          </h1>
          <p
            className="text-white text-lg font-[500]"
            style={{ letterSpacing: "1.4px" }}
          >
            {t("desc_1")}
          </p>
          <p
            className="text-white text-lg font-[700]"
            style={{ letterSpacing: "0.9px" }}
          >
            {t("desc_2")}
          </p>
          <div className="pt-5">
            <Link
              href='https://client.primexbroker.com/en/register'
              className="bg-primary rounded-full text-[13px]  text-center font-semibold text-secondary px-10 py-3"
              style={{ letterSpacing: "0.9px" }}
            >
              {t("start_now_btn")}
            </Link> 
          </div>
        </div>
        <div>
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/platform/mt5/Banner.webp"
            width="250"
            height="300"
            alt="banner Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
