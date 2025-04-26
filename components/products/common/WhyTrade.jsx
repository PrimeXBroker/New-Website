"use client";
import React, { useState, useEffect, useOptimistic } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setTokenData } from "@/redux/slices/workspaceSlice";
import axios from "axios";
import { useTheme } from "next-themes";

const WhyTrade = ({
  title_part1,
  title_part2,
  description,
  productTickers,
}) => {
  const locale = useLocale();
  const { theme } = useTheme();
  const { tokenData } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [symbolList, setSymbolList] = useState([]);
  const [loading, setLoading] = useOptimistic(true);

  const handleChange = async () => {
    setLoading(true);

    const tokenExpireTime = new Date(tokenData?.expire).getTime();
    const currentTime = new Date().getTime();
    const tokenExpirationThreshold = 5 * 60 * 1000;

    let newTokenData = tokenData;
    if (tokenExpireTime - currentTime < tokenExpirationThreshold) {
      try {
        const res = await axios.post(`https://primexbroker.com/api/v1/price`, {
          token: "",
          expire: false,
          symbol: productTickers,
        });
        newTokenData = res?.data?.data;
        setSymbolList(res?.data?.data?.feedSymbols);
        dispatch(
          setTokenData({
            token: newTokenData?.token,
            expire: newTokenData?.expire,
          })
        );
      } catch (error) {
        console.error("Error getting new token and price data:", error);
      }
    } else {
      try {
        const res = await axios.post(`https://primexbroker.com/api/v1/price`, {
          ...newTokenData,
          symbol: productTickers,
        });
        setSymbolList(res?.data?.data?.feedSymbols);
      } catch (error) {
        console.error("Failed to send request with current token", error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(handleChange, 1000);
    return () => clearInterval(interval);
  }, [productTickers]);

  return (
    <section className="bg-p dark:bg-p-dark pt-16 sm:pt-28">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-5">
            <div className="mt-5 text-center lg:text-start flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tm dark:text-tm-dark">
                {title_part1} <br className="hidden lg:block" />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-pcp dark:text-pcp-dark inline-block mt-2">
                  {title_part2}
                </span>
              </h2>
              <p
                className={`text-ts dark:text-ts-dark mt-4 sm:w-[84%] lg:w-auto mx-auto lg:mx-0 ${
                  locale === "ar" || locale === "ku" || locale === "ps"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                {description}
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 mt-5 sm:mt-0">
            <div
              className={`flex justify-center items-center mt-6 md:mt-0 w-full sm:w-[86%] h-[644px] sm:h-[400px] rounded-3xl relative z-0 bg-cc dark:bg-cc-dark bg-no-repeat sm:bg-cover bg-center ${
                locale === "ar" || locale === "ku" || locale === "ps"
                  ? "mx-auto lg:mx-0 lg:mr-auto"
                  : "mx-auto lg:mx-0 lg:ml-auto"
              }`}
              style={
                theme === "dark"
                  ? {
                      backgroundImage:
                        "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Product+Tickers+BG+.webp')",
                    }
                  : {
                      backgroundImage:
                        "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/light-mode-icons/trading-instruments/Bg-Ticker-Light.webp')",
                    }
              }
            >
              <div className="h-[400px] z-10 flex items-center">
                {loading && !symbolList.length ? (
                  <div className="flex justify-center items-center">
                    <div className="ellipsis">
                      <span className="dot text-pcp dark:text-pcp-dark">.</span>
                      <span className="dot text-pcp dark:text-pcp-dark">.</span>
                      <span className="dot text-pcp dark:text-pcp-dark">.</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className="bg-tm dark:bg-tm-dark bg-opacity-30 dark:bg-opacity-30 p-5 rounded-[20px] backdrop-blur-sm"
                      dir="ltr"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {symbolList.map((item, index) => (
                          <div
                            key={index}
                            className="w-56 bg-nw dark:bg-nw-dark rounded-2xl shadow-md p-4 flex flex-col justify-center items-center space-y-4"
                          >
                            <div className="flex gap-3 items-center w-full">
                              <div className="flex items-center space-x-2">
                                <div className="">
                                  <Image
                                    unoptimized={true}
                                    src={item.image}
                                    width="100"
                                    height="100"
                                    alt={item.name}
                                    className="w-full"
                                  />
                                </div>
                              </div>
                              <div className="">
                                <p className="text-base font-semibold text-nb dark:text-nb-dark">
                                  {item.name}
                                </p>
                                {item.description ? (
                                  <p className="text-xs text-nb dark:text-nb-dark">
                                    {item.description}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                              <div
                                className={`text-xl font-medium ${
                                  item.bid_price_change === "up"
                                    ? "text-gc dark:text-gc-dark"
                                    : "text-rc dark:text-rc-dark"
                                }`}
                              >
                                {parseFloat(item?.bid_price)?.toFixed(3)}
                              </div>
                              <div
                                className={`px-4 py-1 rounded-md text-[#111111] font-medium text-base ${
                                  item.bid_price_change === "up"
                                    ? "bg-gb dark:bg-gb-dark text-gc dark:text-gc-dark"
                                    : "bg-rb dark:bg-rb-dark dark:text-rc-dark"
                                }`}
                              >
                                {(item?.ask_price - item.bid_price)?.toFixed(3)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrade;
