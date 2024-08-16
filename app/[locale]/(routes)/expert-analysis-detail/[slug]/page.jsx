"use client";
import ExpertAnalysisDetail from "@/our_pages/expert-analysis-detail/ExpertAnalysisDetail";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { slug } = useParams();
  return (
    <>
      <ExpertAnalysisDetail slug={slug} />
    </>
  );
};

export default page;
