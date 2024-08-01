"use client";
import Aos from "aos";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import LocaleLink from "@/components/LocaleLink";
import { TbClock24 } from "react-icons/tb";
import { GrLanguage } from "react-icons/gr";
const CustomerCare = () => {
  const t = useTranslations("home.customerCare");
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section className="container my-8 flex flex-col justify-center items-center lg:flex-row lg:justify-around border-b-2 border-b-accent">
      <div className="pb-7 lg:pb-0">
        <Image
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/customer_care.webp"
          width="350"
          height="300"
          alt="customer care"
        />
      </div>
      <div>
        <h1 className="text-center text-xl md:text-4xl font-semibold text-secondary mb-5">
          {t("customer_care_title")}
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex gap-2 items-center">
            <TbClock24 size={50} color="#FFD000" />
            <div>
              <p className="text-secondary font-semibold md:text-xl text-lg">
                {t("customer_care_li1_title")}
              </p>
              <p>{t("customer_care_li1_desc")}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GrLanguage size={40} color="#FFD000" />
            <div>
              <p className="text-secondary font-semibold md:text-xl text-lg">
                {t("customer_care_li2_title")}
              </p>
              <p>{t("customer_care_li2_desc")}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-8 mb-6">
          <LocaleLink
            className=" bg-primary text-center block text-secondary font-semibold text-medium px-4 py-3 w-[200px] rounded-full shadow-xl"
            href="/contact"
          >
            {t("customer_care_btn")}
          </LocaleLink>
        </div>
      </div>
    </section>
  );
};

export default CustomerCare;
