"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Banner from "@/our_pages/expert-analysis/Banner";
import ExpertAnalysis from "@/our_pages/expert-analysis/ExpertAnalysis";
import Testimonials from "@/our_pages/home/Testimonials";
import { useLocale } from "next-intl";
import Hero from "@/our_pages/expert-analysis/Hero";
import axios from "axios";
import ClientReviews from "@/components/common/ClientReviews";

const pages = () => {
  const id = "6641f01d7c9be5623e1092a4";
  const locale = useLocale();
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchCat = async () => {
    try {
      const res = await axios.get(
        `https://primexbroker.com/api/fetch/single/market-news/category/${id}`,
        { cache: "no-store" }
      );
      if (res.data?.success) {
        const data = {
          titleAr: res.data.data.titleAr,
          titleEn: res.data.data.titleEn,
          id: res.data.data._id,
          leadBy: res.data.data.leadBy,
        };
        setCurrentCategory((prev) => data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCat();
  }, [id]);

  const fetchEnglishBlogs = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/publish/related/market-news/${page}/6/${currentCategory.id}`
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
    if (currentCategory) {
      setLoading(true);
      fetchEnglishBlogs();
    }
  }, [currentCategory, page, id]);

  return (
    <>
      <Hero />

      <Banner news={blogs?.slice(0, 5)} titleEn={currentCategory?.titleEn} />
      <ExpertAnalysis id={id} />
      <div className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
        <ClientReviews />
      </div>
    </>
  );
};

export default pages;
