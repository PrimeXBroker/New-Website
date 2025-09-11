import React, { useEffect, useRef, useState } from "react";
import { createChart, CandlestickSeries } from "lightweight-charts";
import axios from "axios";
import {
  convertToSeconds,
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
  const { data: initialData, loading } = useFetchCandles(
    symbol,
    interval
  );

  const chartInstanceRef = useRef(null);
  const candlestickSeriesRef = useRef(null);


  const colors = {
    background: mode === "light" ? "#fcfcfc" : "#030303",
    text: mode === "light" ? "#333" : "#ddd",
    grid: mode === "light" ? "rgba(197, 203, 206, 0.5)" : "rgba(100, 100, 100, 0.5)",
    border: mode === "light" ? "#D1D4DC" : "#444",
    upCandle: mode === "light" ? "#00773D" : "#12BA68", 
    downCandle: mode === "light" ? "#CD1414" : "#F83232", 
    upWick: mode === "light" ? "#00773D" : "#12BA68",
    downWick: mode === "light" ? "#CD1414" : "#F83232", 
  };
  // Effect to create and initialize the chart ONLY when initialData is available
  useEffect(() => {
    if (initialData && chartContainerRef.current) {
      const chartContainer = chartContainerRef.current;

      const chart = createChart(chartContainer, {
        layout: {
           background: { type: "solid", color: colors.background },
          textColor: colors.text,
          attributionLogo: false,
        },
        grid: {
          vertLines: { color: colors.grid },
          horzLines: { color: colors.grid },
        },
        timeScale: {
          borderColor: colors.border,
          barSpacing: 10,
          rightOffset: 0,
          timeVisible: true
        },
        priceScale: { borderColor: colors.border },
      });

      const series = chart.addSeries(CandlestickSeries, {
       upColor: colors.upCandle,
        downColor: colors.downCandle,
        borderVisible: false,
        wickUpColor: colors.upWick,
        wickDownColor: colors.downWick,
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
    return <div style={{width: "100%", height: "100vh",
      background:colors.background

    }}>No data to display.</div>;
  }

  return (
    <div style={{ width: "100%", height: "100vh",
     }}>
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
