"use client";
import React from "react";
import { useParams } from "next/navigation";
import Banner from "@/our_pages/expert-analysis/Banner";
import ExpertAnalysis from "@/our_pages/expert-analysis/ExpertAnalysis";

const pages = () => {
  const { id } = useParams();

  return (
    <>
      <Banner id={id} />
      <ExpertAnalysis id={id} />
    </>
  );
};

export default pages;
