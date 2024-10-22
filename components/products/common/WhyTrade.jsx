"use client";
import React, { useState, useEffect, useOptimistic } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setTokenData } from "@/redux/slices/workspaceSlice";
import axios from "axios";

const WhyTrade = ({
  title_part1,
  title_part2,
  description,
  productTickers,
}) => {
  const locale = useLocale();

  const { tokenData } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [symbolList, setSymbolList] = useState([]);
  const [loading, setLoading] = useOptimistic(true);
  const [previousPrices, setPreviousPrices] = useState({});
  const [priceColors, setPriceColors] = useState({});
  const [differenceColors, setDifferenceColors] = useState({});

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
    const interval = setInterval(handleChange, 3000);
    return () => clearInterval(interval);
  }, [productTickers]);

  const comparePrices = (currentPrice, previousPrice) => {
    if (previousPrice === undefined) return "#111111"; // No previous price, default color
    if (currentPrice > previousPrice) return "#00FF00"; // Green for increase
    if (currentPrice < previousPrice) return "#FF0000"; // Red for decrease
    return "#111111"; // No change, default color
  };

  useEffect(() => {
    if (symbolList.length) {
      const newPreviousPrices = symbolList.reduce((acc, symbol) => {
        const currentBidPrice = parseFloat(symbol.bid_price);
        const currentAskPrice = parseFloat(symbol.ask_price);

        const previousBidPrice = previousPrices[symbol.name]?.bid_price;
        const previousDifference = previousPrices[symbol.name]?.difference;

        // Update bid price color
        const bidPriceColor = comparePrices(currentBidPrice, previousBidPrice);
        // Update ask-bid difference color
        const differenceColor = comparePrices(
          currentAskPrice - currentBidPrice,
          previousDifference
        );

        // Update previous prices and colors
        acc[symbol.name] = {
          bid_price: currentBidPrice,
          difference: currentAskPrice - currentBidPrice,
        };

        // Update state for colors
        setPriceColors((prevColors) => ({
          ...prevColors,
          [symbol.name]: bidPriceColor, // Persist color for bid_price
        }));

        setDifferenceColors((prevColors) => ({
          ...prevColors,
          [symbol.name]: differenceColor, // Persist color for ask-bid difference
        }));

        return acc;
      }, {});

      // Update previous prices for the next comparison
      setPreviousPrices(newPreviousPrices);
    }
  }, [symbolList]);

  return (
    <section className="bg-[#000000] pt-12 sm:pt-28">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 lg:col-span-5">
            <div className="mt-5 text-center lg:text-start flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffffff]">
                {title_part1} <br className="hidden lg:block" />
                <span className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-[#FED100] inline-block mt-2">
                  {title_part2}
                </span>
              </h2>
              <p
                className={`text-[#c6c6c6] mt-4 sm:w-[84%] lg:w-auto mx-auto lg:mx-0 ${
                  locale === "ar" || locale === "fa" || locale === "kur"
                    ? "text-center lg:text-right"
                    : "text-center lg:text-left"
                }`}
              >
                {description}
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 mt-5 sm:mt-8">
            <div
              className={`flex justify-center items-center mt-6 md:mt-0 w-full sm:w-[86%] h-[644px] sm:h-[400px] rounded-3xl relative z-0 bg-[#222222] bg-no-repeat sm:bg-cover bg-center ${
                locale === "ar" || locale === "fa" || locale === "kur"
                  ? "mx-auto lg:mx-0 lg:mr-auto"
                  : "mx-auto lg:mx-0 lg:ml-auto"
              }`}
              style={{
                backgroundImage:
                  "url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/new-instruments/Product+Tickers+BG+.webp')",
              }}
            >
              <div className="h-[400px] z-10 flex items-center">
                {loading && !symbolList.length ? (
                  <div className="flex justify-center items-center">
                    <div className="ellipsis">
                      <span className="dot text-[#FED100]">.</span>
                      <span className="dot text-[#FED100]">.</span>
                      <span className="dot text-[#FED100]">.</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className="bg-[#FFFFFF] bg-opacity-30 p-5 rounded-[20px] backdrop-blur-sm"
                      dir="ltr"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {symbolList.map((item, index) => (
                          <div
                            key={index}
                            className="w-56 bg-[#FFFFFF] rounded-2xl shadow-md p-4 flex flex-col justify-center items-center space-y-4"
                          >
                            <div className="flex gap-3 items-center w-full">
                              <div className="flex items-center space-x-2">
                                <div className="">
                                  <Image
                                    unoptimized={true}
                                    src={item.image}
                                    width="100"
                                    height="100"
                                    alt="image"
                                    className="w-full"
                                  />
                                </div>
                              </div>
                              <div className="">
                                <p className="text-base font-semibold text-[#111111]">
                                  {item.name}
                                </p>
                                {item.description ? (
                                  <p className="text-xs text-[#111111]">
                                    {item.description}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                              <div
                                className="text-xl font-semibold"
                                style={{
                                  color: priceColors[item.name], // Bid price color
                                }}
                              >
                                {parseFloat(item?.bid_price)?.toFixed(3)}
                              </div>
                              <div
                                className="bg-[#F1F1F1] px-4 py-1 rounded-md text-[#111111] font-medium text-base"
                                style={{
                                  color: differenceColors[item.name], // Difference color
                                }}
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