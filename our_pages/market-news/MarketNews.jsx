"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Moment from "react-moment";
import { useLocale } from "next-intl";
import { Pagination } from "@nextui-org/react";

const MarketNews = ({ slugEn, slugAr }) => {
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
    console.log(res, "res.data outside");
    if (res.status === 200) {
      console.log(res.data.data, "res.data ====");
      setCatDetail(res.data.data);
    }
  };

  useEffect(() => {
    fetchcat();
  }, [locale]);

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
  }, [page]);

  if (loading) {
    return (
      <div className="flex items-center justify-center my-48">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <section className="container py-20">
      <div className="grid grid-cols-12 ">
        {news.map((blog, index) => (
          <div className="lg:col-span-4 md:col-span-6  col-span-12 px-4 mb-4">
            <Link
              href={`/${locale}/market-news-detail/${blog.slug}`}
              className="group"
              key={index}
            >
              <div className="single-blog-thumb overflow-hidden transition duration-700 ease-in-out">
                <div>
                  <img
                    src={blog.image}
                    alt="PrimeX Capital"
                    className="w-full overflow-hidden transition duration-700 ease-in-out transform group-hover:scale-110"
                  />
                </div>
                <div className="px-3 py-5 group-hover:bg-secondary transition duration-700 ease-in-out">
                  <div className="mb-3">
                    <p className="text-black text-base group-hover:text-white transition duration-700 ease-in-out">
                      <Moment date={blog?.createdOn} format="Do MMMM YYYY" />
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-black group-hover:text-primary transition duration-700 ease-in-out">
                      {blog?.title}
                    </h4>
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
        />
      </div>
    </section>
  );
};

export default MarketNews;
