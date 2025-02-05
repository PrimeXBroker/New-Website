"use client";
import React from "react";
import { useParams } from "next/navigation";
import MarketNewsDetail from "./MarketNewsDetail";

const MarketNewsDetailWrapper = () => {
  const { slug } = useParams();

  return (
    <>
      <MarketNewsDetail slug={slug} />
    </>
  );
};

export default MarketNewsDetailWrapper;
