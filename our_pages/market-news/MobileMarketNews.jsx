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

const MobileMarketNews = ({ slugEn, slugAr }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [catDetail, setCatDetail] = useState({});
  const locale = useLocale();

  const fetchcat = async () => {
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/single/category/${
        locale === "ar" ? slugAr : slugEn
      }`
    );
    if (res.status === 200) {
      setCatDetail(res.data.data);
    }
  };

  useEffect(() => {
    fetchcat();
  }, [locale, slugEn, slugAr]);

  const fetchNews = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/published/blogs/${page}/9/${
        locale === "ar" ? slugAr : slugEn
      }/${locale}`
    );
    if (res.data.success) {
      setNews(res.data.data);
      setTotalPages(res.data.pagination.totalPages);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page, slugEn, slugAr]);

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
          {news.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="lg:col-span-4 md:col-span-6  col-span-12 px-4 mb-4 flex flex-col">
                <Link
                  href={`/${locale}/market-news-detail/${blog.slug}`}
                  className="group h-full"
                  key={index}
                >
                  <div className="single-blog-thumb overflow-hidden transition duration-700 ease-in-out rounded-xl flex flex-col h-full">
                    <div>
                      <img
                        src={blog.image}
                        alt="PrimeX Capital"
                        className="w-full overflow-hidden transition duration-700 ease-in-out transform group-hover:scale-110"
                      />
                    </div>
                    <div className="px-3 py-5 bg-[#111111] transition duration-700 ease-in-out">
                      <div>
                        <h4 className="text-base md:text-xl font-semibold text-[#F9F9F9] group-hover:text-[#FED100] transition duration-700 ease-in-out">
                          {blog?.title}
                        </h4>
                      </div>
                      <div className="mt-3">
                        <p className="text-[#C6C6C6] text-xs md:text-sm group-hover:text-white transition duration-700 ease-in-out">
                          <Moment
                            date={blog?.createdOn}
                            format={
                              locale === "ar" ? "YYYY/MM/DD" : "DD/MM/YYYY"
                            }
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default MobileMarketNews;
