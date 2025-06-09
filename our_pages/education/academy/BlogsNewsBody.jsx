"use client";
import React, { useEffect, useState } from "react";
import { EditorState, convertFromRaw, CompositeDecorator } from "draft-js";
import { Editor as MyEditor } from "draft-js";
import axios from "axios";
import { useLocale } from "next-intl";
import Moment from "react-moment";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import ReadOnlyEditor from "@/components/common/ReadOnlyEditor";

function BlogsNewsBody({ slug }) {
  const locale = useLocale();
  const [detail, setDetail] = useState(null);
  const [content, setContent] = useState(null);

  const fetchdetails = async () => {
    // setLoading(true);
    try {
      const res = await axios.get(
        `https://primexbroker.com/api/fetch/one/all-blog/${slug}`,
        { cache: "no-store" }
      );
      console.log(res?.data?.data, "analysisblog");
      if (res?.data?.success) {
        setDetail(res?.data?.data);
        if (locale === "ar") {
          setContent(res?.data?.data?.contentAr);
        } else if (locale === "ku") {
          setContent(
            res?.data?.data?.contentKd
              ? res?.data?.data?.contentKd
              : res?.data?.data?.contentEn
          );
        } else {
          setContent(res?.data?.data?.contentEn);
        }
        // setLoading(false);
      }
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchdetails();
    }
  }, []);

  useEffect(() => {
    if (slug) {
      fetchdetails();
    }
  }, [slug]);

  if (content) {
    return (
      <>
        <div className="text-tm dark:text-tm-dark pt-10 sm:pt-16 bullet-list-styling">
          <Link
            className="text-tm dark:text-tm-dark hover:text-pcp dark:hover:text-pcp-dark font-medium flex justify-center sm:justify-start items-center mb-8"
            href={`/${locale}/blogs`}
          >
            <span
              className={`${
                locale === "ar" || locale === "ku" ? "ml-2 " : "mr-2 "
              }`}
            >
              {locale === "ar" || locale === "ku" ? (
                <FaArrowRight />
              ) : (
                <FaArrowLeft />
              )}
            </span>
            {locale === "ar"
              ? "العودة إلى المدونات"
              : locale === "ku"
              ? "گەڕانەوە بۆ بڵاگ"
              : "Back to Blogs"}
          </Link>

          <div className="text-ts dark:text-ts-dark text-sm mb-2 text-center">
            <Moment
              date={detail?.postedOn ? detail?.postedOn : detail?.createdOn}
              format={locale === "ar" ? "Do MMM YYYY" : "Do MMM YYYY"}
            />{" "}
            • 5 Min Read
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold mb-12 text-center text-tm dark:text-tm-dark w[96%] sm:w-[80%] mx-auto">
            {locale === "ar"
              ? detail?.titleAr
              : locale === "ku"
              ? detail?.titleKd || detail?.titleEn
              : detail?.titleEn}
          </h2>
        </div>
        <div className="text-tm dark:text-tm-dark">
          <img
            src={
              locale === "ar"
                ? detail?.imageAr || detail?.image
                : locale === "ku"
                ? detail?.imageKd || detail?.image
                : detail?.image
            }
            alt={detail?.altTag}
            className="mb-4"
          />
          <div className="mb-7 blog-detail-styling">
            <ReadOnlyEditor content={content} />
          </div>
        </div>
      </>
    );
  }
}

export default BlogsNewsBody;
