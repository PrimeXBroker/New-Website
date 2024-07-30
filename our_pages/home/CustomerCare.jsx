"use client";
import Aos from "aos";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import LocaleLink from "@/components/LocaleLink";

const CustomerCare = () => {
  const t = useTranslations("home.customerCare");
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section className="container pb-8 flex flex-col justify-center items-center md:flex-row md:justify-around border-b-2 border-b-accent">
      <div
        className="flex flex-col justify-center"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        <h1 className="sectionHeading text-left mb-8">
          {t("customer_care_title_1")} <br className="hidden md:block" /> {t("customer_care_title_2")}
        </h1>
        <Button
          href="/contact"
          as={LocaleLink}
          variant="solid"
          radius="full"
          color="primary"
          className="w-[13rem] mx-auto md:mx-0"
        >
          <p className="text-secondary font-semibold">
            {t("customer_care_btn")}
          </p>
        </Button>
      </div>
      <div className="md:my-0 my-3">
        <Image
          data-aos-easing="ease-out"
          data-aos-duration={1000}
          data-aos="slide-up"
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/customer_care.webp"
          alt="customer care"
          width="300"
          height="300"
        />{" "}
      </div>
      <div
        className="flex flex-col justify-center gap-8 items-center"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        <div className="flex gap-2 pt-4 md:pt-0">
          <Image
            src="/images/cc_icon1.svg"
            alt="cc icon"
            width="50"
            height="50"
          />
          <div>
            <h1 className="secttionHeading text-lg font-semibold">
              {t("customer_care_li1_title")}
            </h1>
            <p>{t("customer_care_li1_desc")}</p>
          </div>
        </div>
        <div className="flex gap-2 ite">
          <Image
            src="/images/cc_icon2.svg"
            alt="cc icon"
            width="50"
            height="50"
          />
          <div>
            <h1 className="secttionHeading text-lg font-semibold">
              {t("customer_care_li2_title")}
            </h1>
            <p>{t("customer_care_li2_desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCare;
