"use client";
import MarketNewsDetail from "@/our_pages/market-news-detail/MarketNewsDetail";
import React from "react";
import { useParams } from "next/navigation";

const MarketNewsDetailWrapper = () => {
  const { slug } = useParams();
  return (
    <>
      <MarketNewsDetail slug={slug} />
    </>
  );
};

export default MarketNewsDetailWrapper;
