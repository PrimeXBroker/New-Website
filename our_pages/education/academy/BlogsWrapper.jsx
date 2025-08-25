"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Moment from "react-moment";
import { useLocale } from "next-intl";
import { Pagination } from "@nextui-org/react";
import Image from "next/image";

const BlogsWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const locale = useLocale();

  const fetchEnglishBlogs = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://primexbroker.com/api/fetch/publish/related/all-blog/${page}/9`
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
  return (
    <section className="bg-p dark:bg-p-dark py-16 sm:py-28 bullet-list-styling">
      <div className="container">
        <div className="grid grid-cols-12 ">
          {blogs.map((blog, index) => (
            <div className="lg:col-span-4 md:col-span-6  col-span-12 px-4 mb-4 flex flex-col">
              <Link
                href={`/${locale}/blogs/${blog.slug}`}
                className="group h-full rounded-xl bg-cc dark:bg-cc-dark"
              >
                <div className="single-blog-thumb overflow-hidden transition duration-700 ease-in-out rounded-xl flex flex-col h-full">
                  <div>
                    <Image
                      unoptimized={true}
                      src={
                        locale === "ar"
                          ? blog?.imageAr || blog?.image
                          : locale === "ku"
                          ? blog?.imageKd || blog?.image
                          : locale === "pt"
                          ? blog?.imagePt || blog?.image
                          : blog?.image
                      }
                      width="100"
                      height="100"
                      alt={blog?.altTag}
                      className="w-full overflow-hidden transition duration-700 ease-in-out transform group-hover:scale-110"
                    />
                  </div>
                  <div className="px-3 py-5 flex-grow transition duration-700 ease-in-out">
                    <div>
                      <h4 className="text-xl font-semibold text-tm dark:text-tm-dark group-hover:text-pcp dark:hover:text-pcp-dark transition duration-700 ease-in-out">
                        {locale === "ar"
                          ? blog?.titleAr
                          : locale === "ku"
                          ? blog?.titleKd || blog?.titleEn
                          : locale === "pt"
                          ? blog?.titlePt || blog?.titleEn
                          : blog?.titleEn}
                      </h4>
                    </div>
                    <div className="mt-3">
                      <p className="text-ts dark:text-ts-dark text-sm group-hover:text-tm dark:group-hover:text-tm-dark  transition duration-700 ease-in-out">
                        <Moment
                          date={
                            blog?.postedOn ? blog?.postedOn : blog?.createdOn
                          }
                          format={
                            locale === "ar" || locale === "ku"
                              ? "Do MMM YYYY"
                              : "Do MMM YYYY"
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
            onChange={(p) => setPage(p)}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogsWrapper;
