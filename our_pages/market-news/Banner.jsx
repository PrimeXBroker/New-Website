"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, Card, Progress } from "@nextui-org/react";
import Moment from "react-moment";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { useLocale } from "next-intl";

const Banner = ({ news }) => {
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayNews, setDisplayNews] = useState(news);
  const [newsDetails, setNewsDetails] = useState(news[0]);
  const [progressCounter, setProgressCounter] = useState(1); // Track the overall position

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

  return (
    <div className="py-20 bg-[#000000] text-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="w-full sm:h-[400px]">
            <img
              src={newsDetails?.image}
              alt="PrimeX Broker Crypto Trading"
              className="rounded-lg w-full h-full"
            />
          </div>
          {/* Right side - Content */}
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight pt-3 lg:pt-0">
              {newsDetails?.title}
            </h1>
            <div className="flex items-center justify-between text-[#c6c6c6] py-2 lg:py-0">
              <span>
                <Moment date={newsDetails?.createdOn} format="DD.MM.YYYY" />
              </span>
              <span>5 Min Read</span>
            </div>
            <div className="flex items-center gap-x-4">
              <span className="text-3xl">
                {progressCounter}/{news.length}
              </span>
              <Progress
                size="sm"
                aria-label="Loading..."
                value={progressValue}
              />
              <div className="flex gap-x-2">
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-[#ffffff] border-1">
                  <Button
                    onClick={prevItem}
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    {locale === "ar" ? (
                      <IoMdArrowForward className="h-4 w-4" />
                    ) : (
                      <IoMdArrowBack className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-[#ffffff] border-1">
                  <Button
                    onClick={nextItem}
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    {locale === "ar" ? (
                      <IoMdArrowBack className="h-4 w-4" />
                    ) : (
                      <IoMdArrowForward className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-4 pt-3 lg:pt-0">
              {displayNews
                .filter((_, index) => index !== currentIndex)
                .map((blog, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={blog?.image}
                      alt={`Thumbnail ${index}`}
                      width={300}
                      height={150}
                      className="w-full h-auto cursor-pointer"
                      onClick={() => handleThumbnailClick(index + 1)}
                    />
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
