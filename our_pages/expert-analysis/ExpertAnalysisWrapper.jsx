"use client";
import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import axios from "axios";
import ClientReviews from "@/components/common/ClientReviews";
import Banner from "./Banner";
import ExpertAnalysis from "./ExpertAnalysis";
import Hero from "./Hero";

const ExpertAnalysisWrapper = () => {
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

  const hreflangLocales = [
    { lng: "en", url: "en" },
    { lng: "ar", url: "ar" },
    { lng: "ku", url: "ku" },
    { lng: "es", url: "es" },
    { lng: "ps", url: "ps" },
  ];

  return (
    <>
      <head>
        {hreflangLocales
          .filter((item) => item.lng === locale)
          .map((item) => (
            <link
              key={item.lng}
              rel="canonical"
              href={`https://www.primexcapital.com/${item.url}/technical-analysis`}
            />
          ))}
        {hreflangLocales.map((item) => (
          <link
            key={item.lng}
            rel="alternate"
            href={`https://www.primexcapital.com/${item.url}/technical-analysis`}
            hreflang={item.lng}
          />
        ))}
      </head>
      <Hero />
      <Banner news={blogs?.slice(0, 5)} titleEn={currentCategory?.titleEn} />
      <ExpertAnalysis id={id} />
      <div className="bg-p dark:bg-p-dark pb-16 sm:pb-28">
        <ClientReviews />
      </div>
    </>
  );
};

export default ExpertAnalysisWrapper;
