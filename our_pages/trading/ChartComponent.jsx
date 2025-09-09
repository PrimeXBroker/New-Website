"use client";  // Ensure client-side rendering

import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import axios from "axios";
import { convertToSeconds, graphTimeList } from "@/utils/data";

export default function ChartComponent({ symbol }) {
  const chartContainerRef = useRef();
  const [dateTime, setDateTime] = useState("Today");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Function to create candlesticks from ticks data
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

    return Array.from(candlesMap.values()).sort((a, b) => a.time - b.time);
  }

  // Fetch the graph data
  const graphAPI = async () => {
    setLoading(true);
    const { from, to } = convertToSeconds(dateTime);
    const url = `https://primexbroker.com/api/trade/graph?symbol=${symbol}&from=${from}&to=${to}`;

    try {
      const response = await axios.get(url);
      if (response?.data?.success) {
        const rawData = response?.data?.result?.answer;
        const processedData = createCandlesFromTicks(rawData);
        setData(processedData);
      } else {
        console.error("Error: No data returned");
      }
    } catch (error) {
      console.error("API error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Ensure the chart is created only when the container is available
  useEffect(() => {
    const checkContainerAvailability = () => {
      if (chartContainerRef.current) {
        console.log("Chart container is available");

        // Create the chart once the container is available
        const chartContainer = chartContainerRef.current;
        const chart = createChart(chartContainer, {
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

        candlestickSeries.setData(data);
        chart.timeScale().fitContent();

        // Resize the chart when the container size changes
        new ResizeObserver((entries) => {
          if (entries.length === 0 || entries[0].target !== chartContainer) {
            return;
          }
          const newRect = entries[0].contentRect;
          chart.applyOptions({ height: newRect.height, width: newRect.width });
        }).observe(chartContainer);

        // Cleanup when the component unmounts
        return () => {
          chart.remove();
        };
      } else {
        console.log("Chart container is not available yet");
        setTimeout(checkContainerAvailability, 100); // Retry after 100ms
      }
    };

    checkContainerAvailability(); // Start checking

  }, [data]); // Run once data is set

  useEffect(() => {
    graphAPI(); // Fetch data when component mounts or `symbol`/`dateTime` changes
  }, [symbol, dateTime]);

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
      <div
        ref={chartContainerRef}
        style={{
          width: "100%",
          height: "96vh",
          position: "relative",
        }}
      />
    </div>
  );
}
