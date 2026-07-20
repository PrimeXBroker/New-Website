"use client";
import React from "react";
import BlogsWrapper from "./BlogsWrapper";
import Banner from "@/our_pages/market-news/Banner";

const AcademyWrapper = ({ initialBlogs, initialTotalPages }) => {
  return (
    <>
      <Banner news={initialBlogs?.slice(0, 5)} />
      <BlogsWrapper
        initialBlogs={initialBlogs}
        initialTotalPages={initialTotalPages}
      />
    </>
  );
};

export default AcademyWrapper;
