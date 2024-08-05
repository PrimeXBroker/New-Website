"use client";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import LocaleLink from "@/components/LocaleLink";

const BecomeIB = () => {
  const locale = useLocale();
  const t = useTranslations("home.becomeIB");

  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  const buttons = [
    {
      id: 1,
      title: t("become_ib_li1"),
      href: "#",
    },
  ];
  return (
    <section
      className="bg-primary container gap-4 py-8 mt-14 shadow-lg"
      data-aos-easing="ease-out"
      data-aos-duration={1000}
      data-aos="slide-up"
    >
      <div className="container flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] flex flex-col md:items-start items-center justify-center py-9">
          <h1 className="text-secondary md:text-left text-center text-xl md:text-[2rem] font-semibold w-fit">
            {t("become_ib_title_1")}
          </h1>
          <p className="text-secondary text-[14px] text-center md:text-left pt-4">
            {t("become_ib_desc_1")}
          </p>
          <div className="flex justify-start gap-2"></div>
          <p className="text-secondary text-[14px] font-semibold">
            {t("become_ib_desc_2")}
          </p>
          <div className="mt-[2rem]">
            <LocaleLink
              href="/ib-program"
              className="block w-fit px-4 py-3 rounded-full mx-auto md:mx-0 shadow-xl
              bg-secondary text-white border-3 border-white hover:bg-accent
              hover:text-secondary transition-all duration-300 hover:border-secondary
              hover:scale-105
              "
            >
              {t("become_ib_btn")}
            </LocaleLink>
          </div>
        </div>
        <div className="w-full md:w-[40%]">
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/partners.webp"
            width="600"
            height="300"
            alt="become ib"
            className="mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default BecomeIB;
