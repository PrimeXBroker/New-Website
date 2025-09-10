import React, { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import axios from "axios";
import { convertToSeconds, graphTimeList } from "@/utils/data";
 
// Helper function to create candles from tick data
const createCandlesFromTicks = (ticks) => {
  const candlesMap = new Map();
  for (const [timeMs, open, high, low, close] of ticks) {
    if (!candlesMap.has(timeMs)) {
      candlesMap.set(timeMs, {
        time: timeMs,
        open,
        high,
        low,
        close,
      });
    } else {
      const candle = candlesMap.get(timeMs);
      candle.high = high;
      candle.low = low;
      candle.close = close;
    }
  }
  return Array.from(candlesMap.values()).sort((a, b) => a.time - b.time);
};
 
// Custom hook for safe data fetching
const useFetchCandles = (symbol, dateTime) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
 
    const fetchData = async () => {
      setLoading(true);
      const { from, to } = convertToSeconds(dateTime);
      const url = `https://primexbroker.com/api/trade/graph?symbol=${symbol}&from=${from}&to=${to}&type=${"minutes"}`;
 
      try {
        const response = await axios.get(url, {
          signal,
          validateStatus: (status) => status >= 200 && status < 300,
        });
 
        if (response?.data?.success) {
          const rawData = response?.data?.result?.answer;
          const processedData = rawData?.length > 0 ? createCandlesFromTicks(rawData) : [];
          setData(processedData);
        } else {
          console.error("API response was unsuccessful.", response);
          setData([]);
        }
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.error("API error during fetch:", error);
          setData([]);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
 
    return () => {
      controller.abort();
    };
  }, [symbol, dateTime]);
 
  return { data, loading };
};
 
export default function ChartComponent({ symbol }) {
  console.log(symbol, "symbol")
  const chartContainerRef = useRef();
  const [dateTime, setDateTime] = useState("Today");
  const { data: initialData, loading } = useFetchCandles(symbol, dateTime);
 
  const chartInstanceRef = useRef(null);
  const candlestickSeriesRef = useRef(null);
  const componentIsMounted = useRef(true);
 
  // Effect to create and initialize the chart ONLY when initialData is available
  useEffect(() => {
    if (initialData && chartContainerRef.current) {
      const chartContainer = chartContainerRef.current;
 
      const chart = createChart(chartContainer, {
        layout: { backgroundColor: "#ffffff", textColor: "#333",   attributionLogo: false },
        grid: { vertLines: { color: "rgba(197, 203, 206, 0.5)" }, horzLines: { color: "rgba(197, 203, 206, 0.5)" } },
        timeScale: { borderColor: "#D1D4DC",  barSpacing: 10, rightOffset: 0 },
        priceScale: { borderColor: "#D1D4DC" },
      });
 
      const series = chart.addSeries(CandlestickSeries, {
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });
 
      series.applyOptions({
        priceFormat: {
          type: "price",
          precision: 5,
          minMove: 0.00001,
        },
      });
 
      series.setData(initialData);
      chart.timeScale().fitContent();
 
      chartInstanceRef.current = chart;
      candlestickSeriesRef.current = series;
 
      const resizeObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) {
          const { inlineSize, blockSize } = entry.contentBoxSize;
          chart.applyOptions({ width: inlineSize, height: blockSize });
        }
      });
      resizeObserver.observe(chartContainer);
 
      return () => {
        chart.remove();
        resizeObserver.disconnect();
      };
    }
  }, [initialData]);
 
  // Effect for handling real-time data updates (once initial data is loaded)
  useEffect(() => {
    if (!initialData || !candlestickSeriesRef.current) {
      return;
    }
 
    const updateChartData = async () => {
      const { from, to } = convertToSeconds(dateTime);
      const url = `https://primexbroker.com/api/trade/graph?symbol=${symbol}&from=${from}&to=${to}&type=${"minutes"}`;
 
      try {
        const response = await axios.get(url, {
          validateStatus: (status) => status >= 200 && status < 300,
        });
 
        if (response?.data?.success) {
          const rawData = response?.data?.result?.answer;
          if (rawData?.length > 0) {
            const processedData = createCandlesFromTicks(rawData);
            const lastDataPoint = processedData[processedData.length - 1];
 
            if (lastDataPoint?.time) {
              candlestickSeriesRef.current.update(lastDataPoint);
            }
          }
        }
      } catch (error) {
        console.error("API update error:", error);
      }
    };
 
    const intervalId = setInterval(updateChartData, 1000);
 
    return () => clearInterval(intervalId);
  }, [symbol, dateTime, initialData]);
 
  if (loading) {
    return <div>Loading...</div>;
  }
 
  if (!initialData || initialData.length === 0) {
    return <div>No data to display.</div>;
  }
 
  return (
    <div style={{ width: "100%", height: "96vh" }}>
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
          height: "100%",
          position: "relative",
        }}
      />
    </div>
  );
}