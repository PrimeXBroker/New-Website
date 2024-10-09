"use client";
import React, { useState } from "react";
import Banner from "./Banner";
import Testimonials from "../new-home/Testimonials";
import WebinarLibrary from "./WebinarLibrary";
import { useTranslations } from "next-intl";
import JoinAcademy from "./JoinAcademy";
import PrivateSessions from "./PrivateSessions";
import Webinars from "./Webinars";
import BlogsWrapper from "./BlogsWrapper";
import { useLocale } from "next-intl";
import MobileBlogWrapper from "./MobileBlogWrapper";

const AcademyWrapper = () => {
  const t = useTranslations("newAcademy.joinAcademy");
  const [active, setActive] = useState("Webinars");
  const [activeBlog, setActiveBlog] = useState("Learning Hub");
  const locale = useLocale();

  const joinAcademy = [
    {
      title1: t("share_expertise_title1"),
      title2: t("share_expertise_title2"),
      question: t("share_expertise_subtitle"),
      description: t("share_expertise_desc"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/teacher_7689910.svg",
      btn: t("become_instructor_btn"),
      formId: "Instructor",
    },
    {
      title1: t("join_academy_title1"),
      title2: t("join_academy_title2"),
      question: t("join_academy_subtitle"),
      description: t("join_academy_desc"),
      icon: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/education/academy/student_7689895.svg",
      btn: t("sign_up_btn"),
      formId: "Webinars",
    },
  ];

  return (
    <>
      <Banner setActive={setActive} />
      {(locale === "en" || locale === "ar") && (
        <>
          <div className="hidden md:block">
            <BlogsWrapper active={activeBlog} setActive={setActiveBlog} />
          </div>
          <div className="block md:hidden">
            <MobileBlogWrapper active={activeBlog} setActive={setActiveBlog} />
          </div>
          <Webinars active={active} setActive={setActive} />
          <PrivateSessions setActive={setActive} />
          <JoinAcademy joinAcademy={joinAcademy} setActive={setActive} />
        </>
      )}
      <WebinarLibrary />
      <Testimonials />
    </>
  );
};

export default AcademyWrapper;
