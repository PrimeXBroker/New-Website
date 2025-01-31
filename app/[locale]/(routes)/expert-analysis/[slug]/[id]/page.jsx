"use client";
import React from "react";
import { useParams } from "next/navigation";
import Banner from "@/our_pages/expert-analysis/Banner";
import ExpertAnalysis from "@/our_pages/expert-analysis/ExpertAnalysis";
import Testimonials from "@/our_pages/home/Testimonials";
import { useLocale } from "next-intl";
import Hero from "@/our_pages/expert-analysis/Hero";

const pages = () => {
  const { id } = useParams();
  const locale = useLocale();

  return (
    <>
      {/* <Banner /> */}
      <Hero />
      {(locale === "en" || locale === "ar") && <ExpertAnalysis id={id} />}
      <div className="pb-10 bg-[#000000]">
        <Testimonials />
      </div>
    </>
  );
};

export default pages;
