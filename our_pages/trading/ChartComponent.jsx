import React, { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import axios from "axios";
import {
  convertToSeconds,
  graphDurationList,
  graphTimeList,
} from "@/utils/data";

// Helper function to create candles from tick data
const createCandlesFromTicks = (ticks, intervalInMinutes) => {
  const MS_PER_MINUTE = 60 * 1000;
  const durationMs = intervalInMinutes * MS_PER_MINUTE;

  const candlesMap = new Map();
  for (const [timeSec, open, high, low, close] of ticks) {
    const timeMs = timeSec * 1000;

    // Round timestamp down to nearest interval
    const intervalTime = Math.floor(timeMs / durationMs) * durationMs;
    const intervalTimeSec = intervalTime / 1000;
    if (!candlesMap.has(intervalTimeSec)) {
      candlesMap.set(intervalTimeSec, {
        time: intervalTimeSec,
        open,
        high,
        low,
        close,
      });
    } else {
      const candle = candlesMap.get(intervalTimeSec);
      candle.high = Math.max(candle.high, high);
      candle.low = Math.min(candle.low, low);
      candle.close = close;
    }
  }
  return Array.from(candlesMap.values()).sort((a, b) => a.time - b.time);
};

// Custom hook for safe data fetching
const useFetchCandles = (symbol, interval) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      const { from, to } = convertToSeconds(interval);
      const url = `https://primexbroker.com/api/trade/graph?symbol=${symbol}&from=${from}&to=${to}&type=${"minutes"}`;

      try {
        const response = await axios.get(url, {
          signal,
          validateStatus: (status) => status >= 200 && status < 300,
        });

        if (response?.data?.success) {
          const rawData = response?.data?.result?.answer;
          const processedData =
            rawData?.length > 0
              ? createCandlesFromTicks(rawData, interval)
              : [];
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
  }, [symbol, interval]);

  return { data, loading };
};

export default function ChartComponent({ symbol, interval, mode }) {
  console.log(symbol, "symbol");
  const chartContainerRef = useRef();
  const [dateTime, setDateTime] = useState("Today");
  const { data: initialData, loading } = useFetchCandles(
    symbol,
    interval
  );

  const chartInstanceRef = useRef(null);
  const candlestickSeriesRef = useRef(null);

  // Effect to create and initialize the chart ONLY when initialData is available
  useEffect(() => {
    if (initialData && chartContainerRef.current) {
      const chartContainer = chartContainerRef.current;

      const chart = createChart(chartContainer, {
        layout: {
          backgroundColor: "#ffffff",
          textColor: "#333",
          attributionLogo: false,
        },
        grid: {
          vertLines: { color: "rgba(197, 203, 206, 0.5)" },
          horzLines: { color: "rgba(197, 203, 206, 0.5)" },
        },
        timeScale: { borderColor: "#D1D4DC", barSpacing: 10, rightOffset: 0 },
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
  }, [initialData, interval]);

  // Effect for handling real-time data updates (once initial data is loaded)
  useEffect(() => {
    if (!initialData || !candlestickSeriesRef.current) {
      return;
    }

    const updateChartData = async () => {
      const { from, to } = convertToSeconds(interval);
      const url = `https://primexbroker.com/api/trade/graph?symbol=${symbol}&from=${from}&to=${to}&type=${"minutes"}`;

      try {
        const response = await axios.get(url, {
          validateStatus: (status) => status >= 200 && status < 300,
        });

        if (response?.data?.success) {
          const rawData = response?.data?.result?.answer;
          if (rawData?.length > 0) {
            const processedData = createCandlesFromTicks(rawData, interval);
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
  }, [symbol,  initialData, interval]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!initialData || initialData.length === 0) {
    return <div>No data to display.</div>;
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
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
