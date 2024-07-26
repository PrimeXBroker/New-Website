import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("careers.hero");

  return (
    <section className="">
      <div className="bg-secondary">
        <div className="container flex flex-col md:flex-row justify-around py-16">
          <div className="md:max-w-2xl flex flex-col justify-center items-center md:items-start gap-6 md:w-[70%]">
            <h1
              className="text-primary text-4xl md:text-5xl text-center md:text-left font-semibold"
              style={{ lineHeight: "45px", letterSpacing: "1px" }}
            >
              {t("title")}
            </h1>
            <p
              className="text-white md:text-lg text-medium md:max-w-xl text-center md:text-left"
              style={{ letterSpacing: "0.7px" }}
            >
              {t("description")}
            </p>
            <button className="bg-primary px-4 py-4 font-semibold rounded-full w-[200px] shadow-xl block md:m-0 mx-auto">
              {t("apply_btn")}
            </button>
          </div>
          <div className="flex">
            <Image
              className="mx-auto md:m-0 block"
              src="/images/careers/careers_img.webp"
              alt="Banner Image"
              width="550"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
