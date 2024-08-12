"use client"
import Banner from "@/our_pages/market-news-detail/Banner";
import MarketNewsDetail from "@/our_pages/market-news-detail/MarketNewsDetail";
import React, { useEffect } from "react";
import { useParams } from 'next/navigation';
import axios from "axios";


const page = () => {
  const { slug } = useParams();
  // const { slug } = router.query;

  // console.log(slug, "quey" );



  return (
    <>
      {/* <Banner slug={slug}  /> */}
      <MarketNewsDetail slug={slug} />
    </>
  );
};

export default page;
