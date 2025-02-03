"use client";
import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import MarketNewsDetail from "./MarketNewsDetail";

const MarketNewsDetailWrapper = () => {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  return (
    <>
      <MarketNewsDetail slug={slug} date={date} />
    </>
  );
};

export default MarketNewsDetailWrapper;
