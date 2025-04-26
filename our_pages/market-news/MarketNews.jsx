"use client";
import React, { useEffect, useOptimistic, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Moment from "react-moment";
import { useLocale } from "next-intl";
import { Pagination } from "@nextui-org/react";
import Image from "next/image";
import { getNews } from "@/actions/news";

const MarketNews = ({ news, totalPages, lang }) => {
  const [loading, setLoading] = useOptimistic(false);
  const [page, setPage] = useState(1);
  const [newsList, setNews] = useState(news);
  const locale = useLocale();

  const convertToKebabCase = (str) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  const handleChange = async (p) => {
    setLoading(true);
    const response = await getNews(page, lang, locale);
    if (response?.success) {
      console.log(response?.result.data, "response?.result.data");
      setNews(response?.result.data);
      setPage(p);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleChange(page);
  }, [page, news]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] bg-p dark:bg-p-dark">
        <div className="ellipsis">
          <span className="dot text-pcp dark:text-pcp-dark">.</span>
          <span className="dot text-pcp dark:text-pcp-dark">.</span>
          <span className="dot text-pcp dark:text-pcp-dark">.</span>
        </div>
      </div>
    );
  }
  console.log(newsList?.[0], "newsList");

  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28">
      <div className="container">
        <div className="grid grid-cols-12">
          {newsList?.map((blog, index) => (
            <div className="lg:col-span-4 md:col-span-6  col-span-12 px-4 mb-4 flex flex-col">
              <Link
                href={`/${locale}/${convertToKebabCase(
                  blog?.category?.title
                )}/${blog.slug}`}
                className="group h-full rounded-xl bg-cc dark:bg-cc-dark"
                key={index}
              >
                <div className="single-blog-thumb overflow-hidden transition duration-700 ease-in-out rounded-xl flex flex-col h-full">
                  <div>
                    <Image
                      unoptimized={true}
                      src={blog.image}
                      alt={blog?.title}
                      width="100"
                      height="100"
                      className="w-full overflow-hidden transition duration-700 ease-in-out transform group-hover:scale-110"
                    />
                  </div>
                  <div className="px-3 py-5 bg-cc dark:bg-cc-dark transition duration-700 ease-in-out">
                    <div>
                      <h4 className="text-xl font-semibold text-tm dark:text-tm-dark group-hover:text-pcp dark:group-hover:text-pcp-dark transition duration-700 ease-in-out">
                        {blog?.title}
                      </h4>
                    </div>
                    <div className="mt-3">
                      <p className="text-ts dark:text-ts-dark text-sm group-hover:text-tm dark:group-hover:text-tm-dark transition duration-700 ease-in-out">
                        <Moment
                          date={
                            blog?.postedOn ? blog?.postedOn : blog?.createdOn
                          }
                          format={
                            locale === "ar" ? "Do MMM YYYY" : "Do MMM YYYY"
                          }
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
          />
        </div>
      </div>
    </section>
  );
};

export default MarketNews;
