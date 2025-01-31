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
  pressReleaseBlogs,
  pressReleasePages,
  marketNews,
  startingGateway,
  pressRelease,
}) => {
  const t = useTranslations("academy.joinAcademy");
  const [activeBlog, setActiveBlog] = useState("Learning Hub");
  const locale = useLocale();

  return (
    <>
      <Banner />
      {(locale === "en" || locale === "ar") && (
        <>
          <div className="hidden md:block">
            <BlogsWrapper
              active={activeBlog}
              setActive={setActiveBlog}
              marketNewsBlogs={marketNewsBlogs}
              marketNewsPages={marketNewsPages}
              startingGatewayBlogs={startingGatewayBlogs}
              startingGatewayPages={startingGatewayPages}
              pressReleaseBlogs={pressReleaseBlogs}
              pressReleasePages={pressReleasePages}
              marketNews={marketNews}
              startingGateway={startingGateway}
              pressRelease={pressRelease}
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
              pressReleaseBlogs={pressReleaseBlogs}
              pressReleasePages={pressReleasePages}
              marketNews={marketNews}
              pressRelease={pressRelease}
            />
          </div>
        </>
      )}
    </>
  );
};

export default AcademyWrapper;
