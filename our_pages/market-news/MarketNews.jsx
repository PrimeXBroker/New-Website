"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Moment from "react-moment";
import { useLocale } from "next-intl";
import { Pagination } from "@nextui-org/react";
import Image from "next/image";
import { getNews } from "@/actions/news";

const MarketNews = ({ news, totalPages, lang }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [newsList, setNews] = useState(news);
  const locale = useLocale();

  const handleChange = async (p) => {
    const response = await getNews(page, lang, locale);
    if (response?.success) {
      setNews(response?.result.data);
      setPage(p);
    }
  };
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
    <section className="bg-[#000000] pt-8 pb-12">
      <div className="container">
        <div className="grid grid-cols-12">
          {newsList.map((blog, index) => (
            <div className="lg:col-span-4 md:col-span-6  col-span-12 px-4 mb-4 flex flex-col">
              <Link
                href={`/${locale}/market-news-detail/${blog.slug}`}
                className="group h-full rounded-xl bg-[#111111]"
                key={index}
              >
                <div className="single-blog-thumb overflow-hidden transition duration-700 ease-in-out rounded-xl flex flex-col h-full">
                  <div>
                    <Image
                      unoptimized={true}
                      src={blog.image}
                      alt="PrimeX Capital"
                      width="100"
                      height="100"
                      className="w-full overflow-hidden transition duration-700 ease-in-out transform group-hover:scale-110"
                    />
                  </div>
                  <div className="px-3 py-5 bg-[#111111] transition duration-700 ease-in-out">
                    <div>
                      <h4 className="text-xl font-semibold text-[#F9F9F9] group-hover:text-[#FED100] transition duration-700 ease-in-out">
                        {blog?.title}
                      </h4>
                    </div>
                    <div className="mt-3">
                      <p className="text-[#C6C6C6] text-sm group-hover:text-white transition duration-700 ease-in-out">
                        <Moment
                          date={blog?.createdOn}
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
            onChange={(p) => handleChange(p)}
            className="all-blogs-pagination"
            radius="sm"
            color="default"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketNews;
