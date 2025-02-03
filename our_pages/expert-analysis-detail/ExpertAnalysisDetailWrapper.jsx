"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import ExpertAnalysisDetail from "./ExpertAnalysisDetail";

const ExpertAnalysisDetailWrapper = () => {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  return (
    <>
      <ExpertAnalysisDetail slug={slug} date={date} />
    </>
  );
};

export default ExpertAnalysisDetailWrapper;
