import React from "react";
import { useTranslations } from "next-intl";

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

const JoinAcademy = () => {
  const t = useTranslations("academy.joinAcademy");

  return (
    <section className="bg-accent container flex flex-col justify-center md:gap-24 gap-4  md:flex-row py-12 shadow-lg my-12">
      <div className="flex-1 md:max-w-sm">
        <h1 className="md:text-2xl text-secondary text-center md:text-left font-semibold pb-4">
          {t("share_expertise_title")}
        </h1>
        <p className="md:text-lg text-secondary font-[600] text-center md:text-left">
          {t("share_expertise_subtitle")}
        </p>
        <p className="md:text-lg text-secondary font-[400] text-center md:text-left">
          {t("share_expertise_desc")}
        </p>
        <button className="bg-primary font-semibold px-4 py-2 w-[200px] rounded-full shadow-xl mt-6 mx-auto block md:m-0">
          {t("become_instructor_btn")}
        </button>
      </div>
      <div className="border-r border-r-primary"></div>
      <div className="flex-1 md:max-w-sm">
        <h1 className="md:text-2xl text-secondary text-center md:text-right font-semibold pb-4">
          {t("join_academy_title")}
        </h1>
        <p className="md:text-lg text-secondary font-[600] text-center md:text-right">
          {t("join_academy_subtitle")}
        </p>
        <p className="md:text-lg text-secondary font-[400] text-center md:text-right">
          {t("join_academy_desc")}
        </p>
        <div className="flex justify-end">
          {" "}
          {/* Flex container to align items to the end (right) */}
          <button className="bg-primary font-semibold px-4 py-2 w-[200px] rounded-full shadow-xl text-center mt-6 mx-auto block md:m-0">
            {t("sign_up_btn")}
          </button>{" "}
          {/* Adjusted padding for better button appearance */}
        </div>
      </div>
    </section>
  );
};

export default JoinAcademy;