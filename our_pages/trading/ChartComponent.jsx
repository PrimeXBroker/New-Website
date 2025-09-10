"use client"; // Ensure client-side rendering

import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import axios from "axios";
import { convertToSeconds, graphTimeList } from "@/utils/data";

export default function ChartComponent({ symbol }) {
  const chartContainerRef = useRef();
  const [dateTime, setDateTime] = useState("Current Month");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [interval, setInterval] = useState(1);
  const [timeInterval, setTimeInterval] = useState(1);
  // Function to create candlesticks from ticks data
  function createCandlesFromTicks(ticks, intervalInMinutes = 5) {
    // Since your timestamps are already in seconds, we need to convert to ms for interval calculation
    const MS_PER_MINUTE = 60 * 1000;
    const durationMs = intervalInMinutes * MS_PER_MINUTE;

    // Group ticks by time interval
    const candlesMap = new Map();

    for (const [timeSec, open, high, low, close] of ticks) {
      // Convert timestamp to milliseconds for interval calculation
      const timeMs = timeSec * 1000;

      // Round timestamp down to nearest interval
      const intervalTime = Math.floor(timeMs / durationMs) * durationMs;
      const intervalTimeSec = intervalTime / 1000; // Convert back to seconds

      if (!candlesMap.has(intervalTimeSec)) {
        // Create new candle
        candlesMap.set(intervalTimeSec, {
          time: intervalTimeSec,
          open,
          high,
          low,
          close,
        });
      } else {
        // Update existing candle
        const candle = candlesMap.get(intervalTimeSec);
        candle.high = Math.max(candle.high, high);
        candle.low = Math.min(candle.low, low);
        candle.close = close;
        // Note: We keep the original open price
      }
    }

    return Array.from(candlesMap.values()).sort((a, b) => a.time - b.time);
  }

  // Fetch the graph data
  const graphAPI = async () => {
    setLoading(true);
    const { from, to } = convertToSeconds(dateTime);
    const url = `https://primexbroker.com/api/trade/graph?symbol=${symbol}&from=${from}&to=${to}&type=minutes`;

    try {
      const response = await axios.get(url);
      if (response?.data?.success) {
        const rawData = response?.data?.result?.answer;
        console.log(rawData, "rawData");

        const processedData = createCandlesFromTicks(rawData, timeInterval);
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

    checkContainerAvailability();
  }, [data]);

  useEffect(() => {
    graphAPI();
  }, [symbol, dateTime, timeInterval]);

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: "#f5f5f5",
        }}
      >
        {/* Time interval buttons */}
        <div style={{ display: "flex", gap: "5px" }}>
          {graphTimeList.map((item) => (
            <button
              key={item.interval}
              style={{
                padding: "8px 16px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                backgroundColor:
                  timeInterval === item.interval ? "#e0e0e0" : "white",
                cursor: "pointer",
                fontWeight: timeInterval === item.interval ? "bold" : "normal",
              }}
              onClick={() => setTimeInterval(item.interval)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Date range buttons */}
        {/* <div style={{ display: "flex", gap: "5px" }}>
          {graphTimeList?.map((item, index) => (
            <button
              key={index}
              style={{
                padding: "8px 16px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                backgroundColor: dateTime === item.time ? "#e0e0e0" : "white",
                cursor: "pointer",
                fontWeight: dateTime === item.time ? "bold" : "normal",
              }}
              onClick={() => setDateTime(item.time)}
            >
              {item?.label}
            </button>
          ))}
        </div> */}
      </div>

      <div
        ref={chartContainerRef}
        style={{
          width: "100%",
          height: "90vh",
          position: "relative",
        }}
      />
    </div>
  );
}
