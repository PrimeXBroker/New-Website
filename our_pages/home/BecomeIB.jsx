"use client";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleLink from "@/components/LocaleLink";

const BecomeIB = () => {
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
    {
      id: 2,
      title: t("become_ib_li2"),
      href: "#",
    },
    {
      id: 3,
      title: t("become_ib_li3"),
      href: "#",
    },
    {
      id: 4,
      title: t("become_ib_li4"),
      href: "#",
    },
  ];
  return (
    <section
      className="bg-accent  border-b-5 border-b-primary gap-4 py-8 shadow-lg"
      data-aos-easing="ease-out"
      data-aos-duration={1000}
      data-aos="slide-up"
    >
      <div className="container flex flex-col md:flex-row">
        <div className="w-full md:w-[50%] flex flex-col justify-center space-y-4 py-9">
          <h1
            className="text-secondary text-xl md:text-2xl font-semibold"
            style={{ lineHeight: "0px" }}
          >
            {t("become_ib_title_1")}
          </h1>
          <span className="text-secondary text-xl md:text-2xl font-semibold border-b-4 border-b-primary w-fit">
            {t("become_ib_title_2")}
          </span>
          <p className="text-secondary text-md">{t("become_ib_desc_1")}</p>
          <div className="flex justify-start gap-2">
            {buttons.map((btn) => (
              <Link
                key={btn.id}
                href={btn.href}
                className="bg-secondary text-white w-[150px] text-center rounded-lg px-2 py-2 shadow-xl border border-transparent hover:text-primary hover:border hover:border-primary transition-colors duration-300 "
              >
                {btn.title}
              </Link>
            ))}
          </div>
          <p className="text-secondary text-md">{t("become_ib_desc_2")}</p>
          <LocaleLink
            href="/ib-program"
            className="block text-left w-fit px-4 py-2 rounded-full shadow-xl bg-accent text-secondary border-3 border-secondary hover:bg-secondary hover:text-primary transition-colors duration-300 hover:border-primary"
          >
            {t("become_ib_btn")}
          </LocaleLink>
        </div>
        <div className="w-full md:w-[50%]">
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
