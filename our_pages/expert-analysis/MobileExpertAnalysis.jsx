"use client";
import React, { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import Link from "next/link";
import Moment from "react-moment";

import { Pagination } from "@nextui-org/react";

const MobileExpertAnalysis = ({ id }) => {
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
      `https://primexbroker.com/api/fetch/publish/related/market-news/${page}/9/${currentCategory.id}`
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
    <section className="py-10 bg-[#000000]">
      <div className="container">
        {blogs && (
          <Swiper
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              300: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mt-5 home-testimonial-pagination"
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="lg:col-span-4 md:col-span-6 col-span-12 px-4 mb-4 flex flex-col">
                  <Link
                    href={`/${locale}/expert-analysis-detail/${blog.slug}`}
                    className="group h-full"
                  >
                    <div className="single-blog-thumb overflow-hidden transition duration-700 ease-in-out rounded-xl flex flex-col h-full">
                      <div>
                        <img
                          src={blog.image}
                          alt={blog.titleEn}
                          className="w-full overflow-hidden transition duration-700 ease-in-out transform group-hover:scale-110"
                        />
                      </div>
                      <div className="px-3 py-5 bg-[#111111] flex-grow transition duration-700 ease-in-out">
                        <h4 className="text-base md:text-xl font-semibold text-[#F9F9F9] group-hover:text-[#FED100] transition duration-700 ease-in-out">
                          {locale === "ar" ? blog.titleAr : blog.titleEn}
                        </h4>
                        <p className="text-[#C6C6C6] text-xs md:text-sm group-hover:text-white transition duration-700 ease-in-out mt-3">
                          <Moment
                            date={blog.createdOn}
                            format={
                              locale === "ar" ? "YYYY/MM/DD" : "Do MMM YYYY"
                            }
                          />
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
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

export default MobileExpertAnalysis;
