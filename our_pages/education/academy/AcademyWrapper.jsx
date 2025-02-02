"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import BlogsWrapper from "./BlogsWrapper";
import { useLocale } from "next-intl";
import MobileBlogWrapper from "./MobileBlogWrapper";
import Hero from "./Hero";
import Banner from "@/our_pages/market-news/Banner";

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
  news,
}) => {
  const t = useTranslations("academy.joinAcademy");
  const [activeBlog, setActiveBlog] = useState("Learning Hub");
  const locale = useLocale();

  return (
    <>
      <Hero />
      {(locale === "en" || locale === "ar") && (
        <>
          <Banner news={news} />
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
