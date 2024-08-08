import React, { useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import WebinarForm from "./WebinarForm";
import BookSession from "./BookSession";
import BecomeInstructor from "./BecomeInstructor";
import { useTranslations, useLocale } from "next-intl";

function FromWarapper({ active, setActive }) {
  const t = useTranslations("academy.academyForm");
  const locale = useLocale();

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
    <section id="academy-forms" className="relative container">
      <div className="tabs-container text-center">
        <div
          className={`tabs-navigation bg-accent rounded-3xl px-[8%] py-3 mb-2 flex justify-around items-center sm:w-[74%] md:w-[64%] lg:w-[94%] ${
            locale === "ar"
              ? "mr-auto ml-auto lg:mr-auto lg:ml-0"
              : "ml-auto mr-auto lg:ml-auto lg:mr-0"
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`tab-title text-black font-medium px-4 py-1 text-sm ${
                active === tab.key
                  ? "active bg-secondary text-primary rounded-full"
                  : ""
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabs.find((tab) => tab.key === active).content}
        </div>
      </div>
    </section>
  );
}

export default FromWarapper;
