import React, { useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import WebinarForm from "./WebinarForm";
import BookSession from "./BookSession";
import BecomeInstructor from "./BecomeInstructor";
import { useTranslations } from "next-intl";

function FromWarapper({ active, setActive }) {
  const t = useTranslations("academy.academyForm");

  return (
    <section id="academy-forms" className="bg-accent relative container">
      <div className="text-center academy-forms ">
        <Tabs
          radius="full"
          color="default"
          className="tabs_custom text-secondary bg-secondary  rounded-xl px-[8%] py-3 "
          selectedKey={active}
          onSelectionChange={setActive}
        >
          <Tab key={"Webinars"} title={t("webinar_form_title")}>
            <div className=" lg:text-xl xs:text-small">
              <WebinarForm />
            </div>
          </Tab>

          <Tab key={"Instructor"} title={t("instructor_form_title")}>
            <div className=" text-xl">
              <BecomeInstructor />
            </div>
          </Tab>
          <Tab key={"Session"} title={t("session_form_title")}>
            <div className=" text-xl">
              <BookSession />
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

export default FromWarapper;
