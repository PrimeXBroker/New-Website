"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Moment from "react-moment";
import { useLocale } from "next-intl";
import { Pagination } from "@nextui-org/react";
import Image from "next/image";

const ExpertAnalysis = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(null);
  const locale = useLocale();

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="ellipsis">
          <span className="dot text-[#FED100]">.</span>
          <span className="dot text-[#FED100]">.</span>
          <span className="dot text-[#FED100]">.</span>
        </div>
      </div>
    );
  }
  return (
    <section className="container  pt-8 pb-12">
      <div className="grid grid-cols-12 ">
        {blogs.map((blog, index) => (
          <div className="lg:col-span-4 md:col-span-6  col-span-12 px-4 mb-4 flex flex-col">
            <Link
              href={`/${locale}/expert-analysis-detail/${blog.slug}`}
              className="group h-full rounded-xl bg-[#111111]"
            >
              <div className="single-blog-thumb overflow-hidden transition duration-700 ease-in-out rounded-xl flex flex-col h-full">
                <div>
                  <Image
                    unoptimized={true}
                    src={
                      locale === "ar"
                        ? blog?.imageAr || blog?.image
                        : blog?.image
                    }
                    width="100"
                    height="100"
                    alt={blog?.titleEn}
                    className="w-full overflow-hidden transition duration-700 ease-in-out transform group-hover:scale-110"
                  />
                </div>
                <div className="px-3 py-5 flex-grow transition duration-700 ease-in-out">
                  <div>
                    <h4 className="text-xl font-semibold text-[#F9F9F9] group-hover:text-[#FED100] transition duration-700 ease-in-out">
                      {locale === "ar" ? blog?.titleAr : blog?.titleEn}
                    </h4>
                  </div>
                  <div className="mt-3">
                    <p className="text-[#C6C6C6] text-sm group-hover:text-white transition duration-700 ease-in-out">
                      <Moment
                        date={blog?.postedOn ? blog?.postedOn : blog?.createdOn}
                        format={locale === "ar" ? "YYYY/MM/DD" : "DD/MM/YYYY"}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Pagination
          showControls
          total={totalPages}
          initialPage={page}
          onChange={(p) => setPage(p)}
          className="all-blogs-pagination"
          radius="sm"
          color="default"
        />
      </div>
    </section>
  );
};

export default ExpertAnalysis;
