"use client";
import React, { useState } from "react";
import Banner from "./Banner";
import Testimonials from "../../home/Testimonials";
import WebinarLibrary from "./WebinarLibrary";
import { useTranslations } from "next-intl";
import JoinAcademy from "./JoinAcademy";
import PrivateSessions from "./PrivateSessions";
import Webinars from "./Webinars";
import BlogsWrapper from "./BlogsWrapper";
import { useLocale } from "next-intl";
import MobileBlogWrapper from "./MobileBlogWrapper";

const AcademyWrapper = ({
  marketNewsBlogs,
  marketNewsPages,
  startingGatewayBlogs,
  startingGatewayPages,
  marketNews,
  startingGateway,
}) => {
  const t = useTranslations("academy.joinAcademy");
  const [active, setActive] = useState("Webinars");
  const [activeBlog, setActiveBlog] = useState("Market News");
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
          <Webinars active={active} setActive={setActive} />
          <PrivateSessions setActive={setActive} />
          <div className="hidden md:block">
            <BlogsWrapper
              active={activeBlog}
              setActive={setActiveBlog}
              marketNewsBlogs={marketNewsBlogs}
              marketNewsPages={marketNewsPages}
              startingGatewayBlogs={startingGatewayBlogs}
              startingGatewayPages={startingGatewayPages}
              marketNews={marketNews}
              startingGateway={startingGateway}
            />
          </div>
          <div className="block md:hidden">
            <MobileBlogWrapper
              active={activeBlog}
              setActive={setActiveBlog}
              marketNewsBlogs={marketNewsBlogs}
              marketNewsPages={marketNewsPages}
              startingGatewayBlogs={startingGatewayBlogs}
              startingGatewayPages={startingGatewayPages}
              marketNews={marketNews}
              startingGateway={startingGateway}
            />
          </div>

          <JoinAcademy joinAcademy={joinAcademy} setActive={setActive} />
        </>
      )}
      <WebinarLibrary />
      <Testimonials />
    </>
  );
};

export default AcademyWrapper;
