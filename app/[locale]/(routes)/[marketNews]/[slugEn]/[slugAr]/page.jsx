"use client";
import Banner from "@/our_pages/market-news/Banner";
import React from "react";
import { useParams } from "next/navigation";
import MarketNews from "@/our_pages/market-news/MarketNews";

const page = () => {
  const { marketNews, slugEn, slugAr } = useParams();

  const formattedTitle = marketNews
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      <Banner title={formattedTitle} />
      <MarketNews slugEn={slugEn} slugAr={slugAr} />
    </>
  );
};

export default page;
