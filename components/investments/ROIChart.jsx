"use client";

import { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function DailyRoiChart() {
  const { theme: mode } = useNextTheme();
  const [labels, setLabels] = useState([]);
  const [dailyROI, setDailyROI] = useState([]);
  const [accumulativeROI, setAccumulativeROI] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(mode, "mode");

  const isDark = mode === "dark";

  const textColor = isDark ? "#E5E7EB" : "#374151";
  const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

  // 🔗 Fetch API data
  const fetchChartData = async () => {
    try {
      const res = await fetch("https://primexbroker.com/api/chart/get");
      const json = await res.json();

      if (!json.success) return;

      const apiData = json.data;

      setLabels(
        apiData.map((item) =>
          new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
          })
        )
      );

      setDailyROI(apiData.map((item) => item.dailyROI));
      setAccumulativeROI(apiData.map((item) => item.accumulativeROI));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  if (loading) {
    return <div className="p-10">Loading chart...</div>;
  }

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Total ROI",
        data: accumulativeROI,
        borderColor: "#FED100",
        backgroundColor: "#FED100",
        tension: 0.4,
        pointRadius: 4,
        yAxisID: "y1",
      },
      {
        type: "bar",
        label: "Daily ROI",
        data: dailyROI,
        backgroundColor: "#e5a801",
        borderRadius: 5,
        yAxisID: "y",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: textColor,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        titleColor: textColor,
        bodyColor: textColor,
        backgroundColor: isDark ? "#111827" : "#FFFFFF",
        borderColor: gridColor,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColor,
        },
        grid: {
          color: gridColor,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColor,
        },
        grid: {
          color: gridColor,
        },
        title: {
          display: true,
          text: "Daily ROI (%)",
          color: textColor,
        },
      },
      y1: {
        beginAtZero: true,
        position: "right",
        ticks: {
          color: textColor,
        },
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Total ROI (%)",
          color: textColor,
        },
      },
    },
  };

  return (
    <div className="p-10 mt-20 h-[500px]">
      <Chart data={data} options={options} />
    </div>
  );
}
