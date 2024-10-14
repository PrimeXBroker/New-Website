import React from "react";
import WebinarForm from "./WebinarForm";
import BookSession from "./BookSession";
import BecomeInstructor from "./BecomeInstructor";
import { useTranslations } from "next-intl";

function FormWarapper({ active, setActive }) {
  const t = useTranslations("academy.academyForm");

  const tabs = [
    {
      key: "Webinars",
      title: t("webinar_form_title"),
      content: <WebinarForm />,
    },
    {
      key: "Instructor",
      title: t("instructor_form_title"),
      content: <BecomeInstructor />,
    },
    {
      key: "Session",
      title: t("session_form_title"),
      content: <BookSession />,
    },
  ];

  return (
    <section className="relative">
      <div
        className={`tabs-navigation bg-[#1D1D1D] rounded-lg mb-2 flex justify-between items-center md:w-[80%] lg:w-full mx-auto`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`tab-title font-medium px-4 py-3 text-sm w-full ${
              active === tab.key
                ? "active bg-[#ffffff] text-[#111111] rounded-[5px]"
                : "text-[#ffffff]"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.key === active).content}
      </div>
    </section>
  );
}

export default FormWarapper;
