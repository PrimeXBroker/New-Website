"use client";
import Banner from "@/our_pages/market-news/Banner";
import React from "react";
import { useParams } from "next/navigation";
import MarketNews from "@/our_pages/market-news/MarketNews";

const page = () => {
  const { slugEn, slugAr } = useParams();

  return (
    <>
      <Banner />
      <MarketNews slugEn={slugEn} slugAr={slugAr} />
    </>
  );
};

export default page;
