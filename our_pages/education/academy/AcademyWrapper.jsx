"use client";
import React, { useEffect, useRef, useState } from "react";
import BlogsWrapper from "./BlogsWrapper";
import Banner from "@/our_pages/market-news/Banner";
import axios from "axios";

const AcademyWrapper = () => {
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const bannerNewsRef = useRef([]); // stable ref so Banner carousel doesn't reset on re-render

  const fetchEnglishBlogs = async () => {
    setLoading(true);
    // Fetch with limit 9 to avoid duplicate API calls — BlogsWrapper needs 9 items per page
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/publish/related/all-blog/${page}/9`,
    );

    if (res.data.success) {
      setBlogs(res.data.data);
      setTotalPages(res.data.pagination.totalPages);
      // Cache the first page's blogs for the Banner (never changes after first load)
      if (bannerNewsRef.current.length === 0) {
        bannerNewsRef.current = res.data.data.slice(0, 5);
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchEnglishBlogs();
  }, [page]);
  return (
    <>
      <Banner news={bannerNewsRef.current} />
      <BlogsWrapper
        blogs={blogs}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        loading={loading}
      />
    </>
  );
};

export default AcademyWrapper;
