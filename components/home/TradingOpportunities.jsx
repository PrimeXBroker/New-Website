"use client";
import { useEffect, useOptimistic, useState } from "react";
import { useTranslations } from "next-intl";
import { tradingTabs } from "@/utilities/tradingOpportunity";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setTokenData } from "@/redux/slices/workspaceSlice";
import axios from "axios";

const TradingOpportunities = () => {
  const t = useTranslations("home.tradingOpportunities");
  const { tokenData } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState("Popular");
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
          })
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
    setLoading(false); // Stop loading when data is fetched
  };

  useEffect(() => {
    const fetchData = async () => {
      const activeTabData = tradingTabs.find((tab) => tab.name === activeTab);
      if (activeTabData) {
        await handleChange(activeTabData);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000); // Refetch data every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [activeTab]);

  return (
    <section className="pt-12 bg-accent relative">
      <h2
        className="sectionHeading px-8 md:px-0"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        {t("trading_opportunities_title")}
      </h2>
      <p
        className="sectionPara text-center py-4 px-8"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        {t("trading_opportunities_desc")}
      </p>
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 items-center px-10 md:px-[10%] py-10">
        <div>
          <h1 className="text-3xl md:text-6xl mb-2">
            Unlock Diverse Global Markets
          </h1>
          <p className="mb-1">
            Discover trading opportunities with CFDs on commodities like Oil,
            Gold, and Natural Gas. Explore CFDs in Forex, indices such as S&P
            500, the Dow, Nasdaq, and seize exposure to equity markets with CFDs
            on shares in companies like Amazon and Tesla.
          </p>
        </div>
        <div className="bg-black text-white p-6 rounded-xl max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-2 mb-6">
            {tradingTabs?.map((tab) => (
              <button
                key={tab.name}
                className={`flex items-center justify-center py-2 px-4 rounded-md text-sm ${
                  activeTab === tab.name
                    ? "bg-white text-black"
                    : "bg-gray-800 text-gray-300"
                }`}
                onClick={() => handleChange(tab)}
              >
                {tab.icon}
                <span className="ml-2 whitespace-nowrap">{tab.name}</span>
              </button>
            ))}
          </div>
          <div className="bg-gray-900 rounded-lg p-4 w-auto md:w-[400px] lg:w-[550px]">
            <div className="hidden md:grid grid-cols-3 gap-4 mb-2 text-gray-400 text-sm">
              <div>Name</div>
              <div>Price</div>
              <div>Spread</div>
            </div>

            {loading && !symbolList.length ? (
              <div className="flex justify-center items-center min-h-[70vh]">
                <div className="ellipsis">
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                </div>
              </div>
            ) : (
              <>
                {symbolList?.length
                  ? symbolList?.map((instrument) => (
                      <div
                        key={instrument.symbol}
                        className="flex md:grid md:grid-cols-3 gap-4 py-3 border-t border-gray-800"
                      >
                        <>
                          <div className="hidden md:flex items-center">
                            <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
                            {instrument.symbol}
                          </div>
                          <div className="hidden md:block">
                            {parseFloat(instrument?.bid_price)?.toFixed(3)}
                          </div>
                          <div className="hidden md:flex items-center justify-between">
                            <span
                              className={`bg-primary text-black px-1 rounded`}
                            >
                              {(
                                instrument?.ask_price - instrument.bid_price
                              )?.toFixed(3)}
                            </span>
                            <button className="bg-gray-800 text-white text-xs py-1 px-3 rounded">
                              {activeTab}
                            </button>
                          </div>
                        </>

                        {/* mobile view */}
                        <>
                          <div className="block md:hidden w-8 h-8 bg-gray-600 rounded-full mr-1"></div>
                          <div className="flex md:hidden items-center justify-between w-10/12">
                            <div className="flex flex-col">
                              <span className="text-sm">
                                {instrument.symbol}
                              </span>
                              <div className="flex items-center gap-2 text-xs">
                                <div className="">
                                  {parseFloat(instrument?.bid_price)?.toFixed(
                                    3
                                  )}
                                </div>
                                <span
                                  className={`bg-primary text-black px-1 rounded`}
                                >
                                  {(
                                    instrument?.ask_price - instrument.bid_price
                                  )?.toFixed(3)}
                                </span>
                              </div>
                            </div>
                            <button className="bg-gray-800 text-white text-xs py-1 px-3 rounded">
                              {activeTab}
                            </button>
                          </div>
                        </>
                      </div>
                    ))
                  : null}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingOpportunities;
