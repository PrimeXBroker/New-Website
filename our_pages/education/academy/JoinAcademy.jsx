import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

const sectionData = [
  {
    title: "Share Your Expertise With Academy of PrimeX Capital",
    description:
      "Ready to make an impact? Join our team of instructors and share your expertise with Academy of PrimeX Capital today!",
    btnText: "Become An Instructor",
    btnHref: "#",
  },
  {
    title: "Join Academy of PrimeX Capital To Trade",
    description:
      "Ready to take your trading skills to the next level? Sign up now and embark on your journey with the Academy of PrimeX Capital!",
    btnText: "Sign Up",
    btnHref: "#",
  },
];

const JoinAcademy = ({ setActive }) => {
  const t = useTranslations("academy.joinAcademy");
  const locale = useLocale();

  return (
    <section className="bg-accent container flex flex-col justify-center md:gap-24 gap-4  md:flex-row py-12 shadow-lg my-12">
      <div className="flex-1 md:max-w-sm">
        <h2
          className={`sectionHeading md:text-2xl text-secondary font-semibold pb-4 ${
            locale === "ar"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
        >
          {t("share_expertise_title")}
        </h2>
        <p
          className={`md:text-lg text-secondary font-[600] ${
            locale === "ar"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
        >
          {t("share_expertise_subtitle")}
        </p>
        <p
          className={`md:text-lg text-secondary font-[400] ${
            locale === "ar"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
        >
          {t("share_expertise_desc")}
        </p>
        <div className="mt-6">
          <Link
            className="bg-primary text-center font-semibold px-4 py-4 w-[250px] rounded-full shadow-xl mx-auto block md:m-0"
            href="#academy-form"
            onClick={() => setActive("Instructor")}
          >
            {t("become_instructor_btn")}
          </Link>
        </div>
      </div>
      <div className="border-r border-r-primary"></div>
      <div className="flex-1 md:max-w-sm">
        <h2
          className={`sectionHeading md:text-2xl text-secondary font-semibold pb-4 ${
            locale === "ar"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
        >
          {t("join_academy_title")}
        </h2>
        <p
          className={`md:text-lg text-secondary font-[600] ${
            locale === "ar"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
        >
          {t("join_academy_subtitle")}
        </p>
        <p
          className={`md:text-lg text-secondary font-[400] ${
            locale === "ar"
              ? "text-center md:text-right"
              : "text-center md:text-left"
          }`}
        >
          {t("join_academy_desc")}
        </p>
        <div
          className={`flex mt-6 ${
            locale === "ar" ? "justify-right" : "justify-left"
          }`}
        >
          {/* Flex container to align items to the end (right) */}
          <Link
            href="#academy-form"
            onClick={() => setActive("Webinars")}
            className="bg-primary font-semibold px-4 py-4 w-[250px] rounded-full shadow-xl text-center mt-6 mx-auto block md:m-0"
          >
            {t("sign_up_btn")}
          </Link>{" "}
          {/* Adjusted padding for better button appearance */}
        </div>
      </div>
    </section>
  );
};

export default JoinAcademy;
