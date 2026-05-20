"use client";
import { useEffect, useState, useOptimistic } from "react";
import { useTranslations, useLocale } from "next-intl";
import { tradingInstrumentsTabs } from "@/utilities/tradingInstruments";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setTokenData } from "@/redux/slices/workspaceSlice";
import axios from "axios";
import Image from "next/image";

const TradingInstruments = () => {
  const locale = useLocale();
  const { tokenData } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState("Trending");
  const [symbolList, setSymbolList] = useState([]);
  const [loading, setLoading] = useOptimistic(true);

  const handleChange = async (tab) => {
    setLoading(true);

    setActiveTab(tab.name);
    const tokenExpireTime = new Date(tokenData?.expire).getTime();
    const currentTime = new Date().getTime();
    const tokenExpirationThreshold = 5 * 60 * 1000;

    let newTokenData = tokenData;
    if (tokenExpireTime - currentTime < tokenExpirationThreshold) {
      try {
        const res = await axios.post(`https://primexbroker.com/api/v1/price`, {
          token: "",
          expire: false,
          symbol: tab?.symbol,
        });
        newTokenData = res?.data?.data;
        setSymbolList(res?.data?.data?.feedSymbols);
        dispatch(
          setTokenData({
            token: newTokenData?.token,
            expire: newTokenData?.expire,
          }),
        );
      } catch (error) {
        console.error("Error getting new token and price data:", error);
      }
    } else {
      try {
        const res = await axios.post(`https://primexbroker.com/api/v1/price`, {
          ...newTokenData,
          symbol: tab?.symbol,
        });
        setSymbolList(res?.data?.data?.feedSymbols);
      } catch (error) {
        console.error("Failed to send request with current token", error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const activeTabData = tradingInstrumentsTabs.find(
        (tab) => tab.name === activeTab,
      );
      if (activeTabData) {
        await handleChange(activeTabData);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="bg-p dark:bg-p-dark pb-20">
      <div className="container">
        <div className="text-center md:text-center mb-10">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold">
            Unlock Diverse
            <br className="block sm:hidden" />
            <span className="text-pcp dark:text-pcp-dark"> Global</span> Markets
          </h2>
        </div>
        <div className="w-full mb-10">
          <div className="flex items-center justify-center space-x-6 min-w-max">
            {tradingInstrumentsTabs.map((tab) => {
              return (
                <button
                  key={tab.name}
                  onClick={() => handleChange(tab)}
                  className="relative text-xl md:text-2xl font-light tracking-wide transition-colors duration-200 focus:outline-none"
                >
                  <span className="text-tm dark:text-tm-dark text-lg font-light">
                    {tab.name}
                  </span>
                  {activeTab === tab.name && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-[4px] w-[90%] h-[2px] bg-pcp dark:bg-pcp-dark rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
        {loading && !symbolList?.length ? (
          <div className="flex justify-center items-center min-h-[30vh]">
            <div className="ellipsis">
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {symbolList?.length
              ? symbolList.map((instrument) => {
                  const displayPrice = instrument?.bid_price
                    ? parseFloat(instrument.bid_price).toFixed(3)
                    : "0.000";
                  const displaySpeed = instrument?.speed
                    ? parseFloat(instrument.speed).toFixed(3)
                    : "0.000";
                  return (
                    <div
                      key={instrument.symbol}
                      className="relative flex flex-col justify-between bg-cc dark:bg-cc-dark rounded-xl p-6 h-[276px] overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-36 h-36 pointer-events-none select-none">
                        <img
                          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/trading-instruments/X.png"
                          alt="X overlay"
                          className="w-full h-full object-contain object-right-top"
                        />
                      </div>
                      <div className="relative z-10">
                        <Image
                          unoptimized={true}
                          src={instrument.image}
                          width="24"
                          height="24"
                          alt={instrument.name}
                          className="w-[40px] h-[40px]"
                          style={{
                            filter: `
                            drop-shadow(1.75px 2.63px 6.13px rgba(0, 0, 0, 0.29))
                            drop-shadow(5.25px 10.5px 11.38px rgba(0, 0, 0, 0.26))
                            drop-shadow(12.25px 23.63px 15.75px rgba(0, 0, 0, 0.15))
                            drop-shadow(21.88px 41.13px 18.38px rgba(0, 0, 0, 0.04))
                            drop-shadow(35px 64.75px 20.13px rgba(0, 0, 0, 0.01))
                            drop-shadow(0px 3.5px 3.5px rgba(0, 0, 0, 0.25))
                            drop-shadow(0px 3.5px 3.5px rgba(0, 0, 0, 0.25))
                          `,
                          }}
                        />
                        <h3 className="text-xl font-semibold text-pcp dark:text-pcp-dark uppercase mt-6 mb-3">
                          {instrument.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <span className="px-3 py-1 bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/trading-instruments/category-bg.png)] bg-cover bg-center text-nb dark:text-nb-dark font-medium text-xs">
                            {activeTab}
                          </span>
                          <span className="px-3 py-1 bg-[url(https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/trading-instruments/trending-bg.png)] bg-cover bg-center text-ts dark:text-ts-dark font-medium text-xs">
                            Popular
                          </span>
                        </div>
                      </div>
                      <div className="relative z-10 border-t border-white border-opacity-[0.2] pt-4 flex items-center justify-between">
                        <div>
                          <span className="block text-xs text-ts dark:text-ts-dark font-medium mb-[2px]">
                            Latest Price
                          </span>
                          <span className="text-base font-medium text-tm dark:text-tm-dark">
                            {displayPrice}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="block text-xs text-ts dark:text-ts-dark font-medium mb-[2px]">
                            Speed
                          </span>
                          <span className="text-base font-medium text-pcp dark:text-pcp-dark">
                            {displaySpeed}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default TradingInstruments;
