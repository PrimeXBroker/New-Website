// components/ChartComponent.js
import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import axios from "axios";
import { convertToSeconds, graphTimeList } from "@/utils/data";

export default function ChartComponent({ symbol }) {
  const chartContainerRef = useRef();
  const [dateTime, setDateTime] = useState("Today");
  const [loading, setLoading] = useState(true);

  function createCandlesFromTicks(ticks, durationMs = 60000) {
    const candlesMap = new Map();

    for (const [timeMs, bid, ask] of ticks) {
      const price = (bid + ask) / 2;

      const minuteBucket = Math.floor(timeMs / durationMs) * durationMs;

      const time = Math.floor(minuteBucket / 1000);

      if (!candlesMap.has(time)) {
        candlesMap.set(time, {
          time: time,
          open: price,
          high: price,
          low: price,
          close: price,
        });
      } else {
        const candle = candlesMap.get(time);
        candle.high = Math.max(candle.high, price);
        candle.low = Math.min(candle.low, price);
        candle.close = price;
      }
    }

    // Return sorted candles by time
    return Array.from(candlesMap.values()).sort((a, b) => a.time - b.time);
  }

  const graphAPI = async () => {
    setLoading(true);
    const { from, to } = convertToSeconds(dateTime);
    const url = `https://primexbroker.com/api/trade/graph?symbol=${symbol}&from=${from}&to=${to}`;
    console.log(url, "urlgraph");
    try {
      const response = await axios.get(url);
      console.log(JSON.stringify(response.data, null, 2), "response");
      if (response?.data?.success) {
        const data = response?.data?.result?.answer;
        const processedData = createCandlesFromTicks(data);
        console.log(processedData, "processedData");

        const chartContainer = chartContainerRef.current;
        const chart = createChart(chartContainerRef.current, {
          // width: 600,
          // height: 400,
          layout: {
            backgroundColor: "#ffffff",
            textColor: "#333",
          },
          grid: {
            vertLines: { color: "rgba(197, 203, 206, 0.5)" },
            horzLines: { color: "rgba(197, 203, 206, 0.5)" },
          },
          timeScale: {
            borderColor: "#D1D4DC",
          },
        });
        const candlestickSeries = chart.addSeries(CandlestickSeries, {
          upColor: "#26a69a", // Green for up candles
          downColor: "#ef5350", // Red for down candles
          borderVisible: false,
          wickUpColor: "#26a69a", // Wick color for up
          wickDownColor: "#ef5350", // Wick color for down
        });

        // Set OHLC data
        candlestickSeries.setData(processedData);

        chart.timeScale().fitContent();

        // Cleanup on unmount
        return () => {
          chart.remove();
        };
      }
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    graphAPI();
  }, [symbol, dateTime]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <div style={{ display: "flex", gap: "5px" }}>
        {graphTimeList?.map((item, index) => (
          <button
            key={index}
            className="h-16 w-10 flex justify-center items-center p-1"
            onClick={() => setDateTime(item.time)}
          >
            <span>{item?.label}</span>
          </button>
        ))}
      </div>
      <div ref={chartContainerRef} style={{ width: "100%", height: "96vh" }} />
    </div>
  );
}
