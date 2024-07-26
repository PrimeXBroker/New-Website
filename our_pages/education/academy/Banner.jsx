import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const Banner = () => {
  const h = useTranslations("academy.hero");
  const f = useTranslations("academy.unlimitedFeatures");

  return (
    <section className="">
      <div className="bg-secondary">
        <div className="container flex flex-col md:flex-row justify-around py-16">
          <div className="max-w-2xl flex flex-col justify-center items-start gap-6 md:w-[70%]">
            <h1
              className="text-primary text-xl md:text-3xl text-center md:text-left font-semibold"
              style={{ lineHeight: "45px", letterSpacing: "1px" }}
            >
              {h("title_1")}
              <span className="text-white md:text-2xl font-semibold">
                {h("title_2")}
              </span>
            </h1>
            <p
              className="text-white md:text-lg text-medium md:max-w-xl text-center md:text-left"
              style={{ letterSpacing: "0.7px" }}
            >
              {h("description")}
            </p>
            <button className="bg-primary px-4 py-4 rounded-full w-[200px] shadow-xl block md:m-0 mx-auto">
              {h("join_btn")}
            </button>
          </div>
          <div className="flex">
            <Image
              className="mx-auto md:m-0 block"
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/banner_img.webp"
              alt="Banner Image"
              width="550"
              height="500"
            />
          </div>
        </div>
      </div>
      <div className="container py-16 max-w-xl flex flex-col gap-12">
        <h1
          className="md:text-3xl text-secondary font-semibold text-center"
          style={{ lineHeight: "50px", letterSpacing: "1px" }}
        >
          {f("title")}
        </h1>
        <p
          className="text-center text-secondary md:text-medium"
          style={{ lineHeight: "30px", letterSpacing: "0.8px" }}
        >
          {f("description")}
        </p>
        <button className="bg-primary px-4 py-4 rounded-full w-[200px] mx-auto block shadow-xl mb-8">
          {f("download_btn")}
        </button>
        <p className="text-secondary text-lg text-center">
          {f("link_title_part_1")}
          <span className="font-[700]">{f("link_title_part_2")}</span>
          {f("link_title_part_3")}
          <Link className="text-primary appearance-none pl-2" href="#">
            {f("download_link_text")}
          </Link>
        </p>

        <p className="text-secondary text-lg text-center">{f("powered_by")}</p>
      </div>
    </section>
  );
};

export default Banner;
