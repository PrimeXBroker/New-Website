"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, Card, Progress } from "@nextui-org/react";
import Moment from "react-moment";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { useLocale } from "next-intl";
import axios from "axios";
import Link from "next/link";

const Banner = ({ news }) => {
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayNews, setDisplayNews] = useState(news);
  const [newsDetails, setNewsDetails] = useState(news[0]);
  const [progressCounter, setProgressCounter] = useState(1); // Track the overall position

  console.log(news, "news");

  useEffect(() => {
    const interval = setInterval(() => {
      nextItem();
    }, 3000);

    return () => clearInterval(interval);
  }, [displayNews]);

  const nextItem = () => {
    // Rotate the displayNews array: move the first item to the end
    const updatedNews = [...displayNews.slice(1), displayNews[0]];

    // Update currentIndex and increment the progressCounter
    setCurrentIndex(0);
    setDisplayNews(updatedNews);
    setNewsDetails(updatedNews[0]);
    setProgressCounter((prevCounter) =>
      prevCounter >= news.length ? 1 : prevCounter + 1
    );
  };

  const prevItem = () => {
    // Move the last item to the start of the array (reverse queue-like behavior)
    const updatedNews = [
      displayNews[displayNews.length - 1],
      ...displayNews.slice(0, displayNews.length - 1),
    ];

    setCurrentIndex(0);
    setDisplayNews(updatedNews);
    setNewsDetails(updatedNews[0]);
    setProgressCounter((prevCounter) =>
      prevCounter === 1 ? news.length : prevCounter - 1
    );
  };

  const handleThumbnailClick = (index) => {
    // Rearrange the array so the selected item becomes the first item
    const selectedNews = displayNews[index];
    const updatedNews = [
      selectedNews,
      ...displayNews.slice(0, index),
      ...displayNews.slice(index + 1),
    ];

    setDisplayNews(updatedNews);
    setNewsDetails(selectedNews);
    setCurrentIndex(0);
    setProgressCounter(index + 1); // Set the counter to the clicked item's position
  };

  // Calculate the progress percentage based on progressCounter
  const progressValue = (progressCounter / news.length) * 100;

  useEffect(() => {
    if (news.length > 0) {
      setDisplayNews(news);
      setNewsDetails(news[0]); // تحديث أول عنصر بعد تحميل البيانات
    }
  }, [news]);

  return (
    <div className="pt-16 sm:pt-28 bg-p dark:bg-p-dark text-[#ffffff] bullet-list-styling">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-cc dark:bg-cc-dark rounded-3xl p-5 sm:p-14">
          <div className="w-full sm:h-[400px]">
            {newsDetails?.slug && (
              <Link href={`/${locale}/blogs/${newsDetails.slug}`}>
                <img
                  src={
                    locale === "ar"
                      ? newsDetails?.imageAr || newsDetails?.image
                      : locale === "ku"
                      ? newsDetails?.imageKd || newsDetails?.image
                      : locale === "pt"
                      ? newsDetails?.imagePt || newsDetails?.image
                      : locale === "fa"
                      ? newsDetails?.imageFa || newsDetails?.image
                      : newsDetails?.image
                  }
                  alt={newsDetails?.altTag}
                  className="rounded-lg w-full h-full"
                />
              </Link>
            )}
          </div>
          {/* Right side - Content */}
          <div className="space-y-6 sm:h-[400px] flex flex-col justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight pt-3 lg:pt-0 text-tm dark:text-tm-dark">
              {newsDetails?.slug && (
                <Link href={`/${locale}/blogs/${newsDetails.slug}`}>
                  {locale === "ar"
                    ? newsDetails?.titleAr
                    : locale === "ku"
                    ? newsDetails?.titleKd || newsDetails?.titleEn
                    : locale === "pt"
                    ? newsDetails?.titlePt || newsDetails?.titleEn
                    : locale === "fa"
                    ? newsDetails?.titleFa || newsDetails?.titleEn
                    : newsDetails?.titleEn}
                </Link>
              )}
            </h2>
            <div className="flex items-center justify-between text-ts dark:text-ts-dark py-2 lg:py-0">
              <span>
                <Moment
                  date={newsDetails?.createdOn}
                  format={
                    locale === "ar" || locale === "pt" || locale === "fa"
                      ? "Do MMM YYYY"
                      : "Do MMM YYYY"
                  }
                />
              </span>
              <span>5 Min Read</span>
            </div>
            <div className="flex items-center gap-x-4">
              <span className="text-3xl text-tm dark:text-tm-dark">
                {progressCounter}/{news.length}
              </span>
              <Progress
                size="sm"
                aria-label="Loading..."
                value={progressValue}
              />
              <div className="flex gap-x-2">
                <div className="flex justify-center items-center h-10 w-10 rounded-full bg-e1 dark:bg-e1-dark">
                  <Button
                    onClick={prevItem}
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    {locale === "ar" || locale === "ku" || locale === "fa" ? (
                      <IoMdArrowForward className="h-4 w-4 text-tm dark:text-tm-dark" />
                    ) : (
                      <IoMdArrowBack className="h-4 w-4 text-tm dark:text-tm-dark" />
                    )}
                  </Button>
                </div>
                <div className="flex justify-center items-center h-10 w-10 rounded-full bg-e1 dark:bg-e1-dark">
                  <Button
                    onClick={nextItem}
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    {locale === "ar" || locale === "ku" || locale === "fa" ? (
                      <IoMdArrowBack className="h-4 w-4 text-tm dark:text-tm-dark" />
                    ) : (
                      <IoMdArrowForward className="h-4 w-4 text-tm dark:text-tm-dark" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-4 pt-3 lg:pt-0">
              {displayNews
                .filter((_, index) => index !== currentIndex)
                .map((blog, index) => (
                  <Link href={`/${locale}/blogs/${blog.slug}`}>
                    <Card
                      key={index}
                      className="rounded-[4px] overflow-hidden bg-e1 dark:bg-e1-dark p-2"
                    >
                      <Image
                        src={
                          locale === "ar"
                            ? blog?.imageAr || blog?.image
                            : locale === "ku"
                            ? blog?.imageKd || blog?.image
                            : locale === "pt"
                            ? blog?.imagePt || blog?.image
                            : locale === "fa"
                            ? blog?.imageFa || blog?.image
                            : blog?.image
                        }
                        alt={blog?.altTag}
                        width={300}
                        height={150}
                        className="w-full h-[75px] cursor-pointer rounded-[2px]"
                        onClick={() => handleThumbnailClick(index + 1)}
                      />
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
