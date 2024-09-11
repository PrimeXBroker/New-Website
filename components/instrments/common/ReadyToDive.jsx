import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const ReadyToDive = ({ title, description }) => {
  const t = useTranslations("commodities.readyToDive");
  const locale = useLocale();

  return (
    <section className="container bg-accent flex gap-5 md:gap-0 flex-col md:flex-row items-center p-8 lg:h-[200px] justify-around shadow-xl rounded-lg my-12">
      <div className="max-w-2xl">
        <h2
          className={`sectionHeading text-2xl ${
            locale === "ar"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
        >
          {title}
        </h2>
        <p
          className={`sectionpara ${
            locale === "ar"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
        >
          {description}
        </p>
      </div>
      <Link
        href="https://client.primexbroker.com/en/register"
        className="bg-primary rounded-full text-secondary text-center font-semibold px-4 py-4 w-[250px]"
      >
        {t("open_account_btn")}
      </Link>
    </section>
  );
};

export default ReadyToDive;
