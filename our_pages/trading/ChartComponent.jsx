// components/ChartComponent.js
import { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import axios from "axios";
import { convertToSeconds, graphTimeList } from "@/utils/data";

export default function ChartComponent({ symbol }) {
  const chartContainerRef = useRef();
  const [dateTime, setDateTime] = useState("Current Month");
  const [loading, setLoading] = useState(true);

  const timestampToDateString = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  const processGraphData = (data) => {
    // Group data by day
    const dataByDay = {};

    data?.forEach(([timestamp, value1, value2]) => {
      const dateStr = timestampToDateString(timestamp);
      const midPrice = (value1 + value2) / 2; // Calculate mid price

      if (!dataByDay[dateStr]) {
        // Initialize day data with first values
        dataByDay[dateStr] = {
          time: dateStr,
          open: midPrice,
          high: midPrice,
          low: midPrice,
          close: midPrice,
        };
      } else {
        // Update day data with new values
        dataByDay[dateStr].high = Math.max(dataByDay[dateStr].high, midPrice);
        dataByDay[dateStr].low = Math.min(dataByDay[dateStr].low, midPrice);
        dataByDay[dateStr].close = midPrice;
      }
    });

    // Convert to array and return
    return Object.values(dataByDay);
  };

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
        const processedData = processGraphData(data);

        const chartContainer = chartContainerRef.current;
        const chart = createChart(chartContainerRef.current, {
          width: chartContainer.clientWidth || 600,
          height: chartContainer.clientHeight || 400,
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
