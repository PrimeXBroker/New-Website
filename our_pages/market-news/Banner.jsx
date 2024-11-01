"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, Card, Progress } from "@nextui-org/react";

const Banner = ({ news }) => {
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
    <div className="pt-20 bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="w-full h-[400px]">
            <img
              src={newsDetails?.image}
              alt="PrimeX Broker Crypto Trading"
              className="rounded-lg w-full h-full"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold leading-tight">
              {newsDetails?.title}
            </h1>
            <div className="flex items-center justify-between text-gray-400">
              <span>12.09.2024</span>
              <span>5 Min Read</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-3xl">
                {progressCounter}/{news.length}
              </span>
              <Progress
                size="sm"
                aria-label="Loading..."
                value={progressValue}
              />
              <div className="flex space-x-2">
                <Button
                  onClick={prevItem}
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  onClick={nextItem}
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-4">
              {displayNews
                .filter((_, index) => index !== currentIndex) // Exclude the current news
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
