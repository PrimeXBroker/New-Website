"use client";
import React, { useEffect, useState } from "react";
import BlogsWrapper from "./BlogsWrapper";
import { useLocale } from "next-intl";
import Banner from "@/our_pages/market-news/Banner";
import axios from "axios";

const AcademyWrapper = () => {
  const locale = useLocale();
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchEnglishBlogs = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/publish/related/all-blog/${page}/6`
    );

    if (res.data.success) {
      setBlogs(res.data.data);
      setTotalPages(res.data.pagination.totalPages);
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
      <Banner news={blogs?.slice(0, 5)} />
      <BlogsWrapper />
    </>
  );
};

export default AcademyWrapper;
