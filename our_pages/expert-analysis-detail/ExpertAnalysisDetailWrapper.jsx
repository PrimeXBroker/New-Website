"use client";
import React from "react";
import { useParams } from "next/navigation";
import ExpertAnalysisDetail from "./ExpertAnalysisDetail";

const ExpertAnalysisDetailWrapper = () => {
  const { slug } = useParams();
  return (
    <>
      <ExpertAnalysisDetail slug={slug} />
    </>
  );
};

export default ExpertAnalysisDetailWrapper;
