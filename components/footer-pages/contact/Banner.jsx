import Image from "next/image";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const ContactBanner = () => {
  const locale = useLocale();
  const t = useTranslations("contact.hero");

  return (
    <section
      className={`bg-secondary bg-[url("https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact-us/Main-Banner-Background.webp")] md:h-[431px] h-auto  bg-no-repeat bg-cover pt-[60px] lg:pt-18`}
    >
      <div className="container pt-10 md:pt-0 flex flex-col md:flex-row justify-around items-center">
        <div className="md:w-[45%]">
          <h1
            className={`text-primary text-xl md:text-3xl font-semibold mb-5 ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
            style={{ letterSpacing: "1px" }}
          >
            {t("title")}
          </h1>
          <p
            className={`text-white text-lg font-[500] ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "md:text-right text-center"
                : "md:text-left text-center"
            }`}
            style={{ letterSpacing: "1.4px" }}
          >
            {t("description")}
          </p>
          <div
            className={`mt-10 ${
              locale === "ar" || locale === "fa" || locale === "kur"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            }`}
          >
            <button className="bg-primary w-52 px-2 py-2 rounded-full text-secondary">
              {t("visit_help_btn")}
            </button>
          </div>
        </div>
        <div className="w-full md:w-[45%]">
          <img
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact-us/main-contact-banner.webp"
            alt="banner Image"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
