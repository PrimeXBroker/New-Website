"use client";

import { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import { useLocale } from "next-intl";

ChartJS.register(...registerables);

export default function DailyRoiChart({ chartOptions }) {
  const locale = useLocale();
  const isRTL = ["ar", "fa", "ku", "ps"].includes(locale);
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

      const apiData = json?.data;

      if (!json?.success || !Array.isArray(apiData)) {
        console.log("Unexpected API response", json);
        return;
      }

      const monthlyMap = {};

      apiData.forEach((item) => {
        if (!item?.date) return;

        const d = new Date(item.date);
        if (isNaN(d.getTime())) return;

        const monthKey = `${d.getFullYear()}-${d.getMonth()}`;

        if (!monthlyMap[monthKey]) {
          monthlyMap[monthKey] = {
            monthLabel: d.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            }),
            monthlyROI: 0,
            accumulativeROI: 0,
          };
        }

        monthlyMap[monthKey].monthlyROI += parseFloat(item.dailyROI) || 0;

        // Keep last accumulative ROI of month
        monthlyMap[monthKey].accumulativeROI =
          parseFloat(item.accumulativeROI) || 0;
      });

      const monthlyData = Object.values(monthlyMap);

      setLabels(monthlyData.map((m) => m.monthLabel));
      setDailyROI(monthlyData.map((m) => m.monthlyROI));
      setAccumulativeROI(monthlyData.map((m) => m.accumulativeROI));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[20vh] bg-p dark:bg-p-dark">
        <div className="ellipsis">
          <span className="dot text-pcp dark:text-pcp-dark">.</span>
          <span className="dot text-pcp dark:text-pcp-dark">.</span>
          <span className="dot text-pcp dark:text-pcp-dark">.</span>
        </div>
      </div>
    );
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
        label: "Monthly ROI",
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
    layout: {
      rtl: isRTL, // ✅ IMPORTANT
    },
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
        reverse: isRTL,
        ticks: {
          color: textColor,
          align: isRTL ? "end" : "center",
        },
        grid: {
          color: gridColor,
        },
      },
      y: {
        beginAtZero: true,
        position: isRTL ? "right" : "left",
        ticks: {
          color: textColor,
        },
        grid: {
          color: gridColor,
        },
        title: {
          display: true,
          text: "Monthly ROI (%)",
          color: textColor,
        },
      },
      y1: {
        beginAtZero: true,
        position: isRTL ? "left" : "right",
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
    <section className="md:py-10 mt-20">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-2xl md:text-4xl font-semibold text-tm dark:text-tm-dark">
            {
              chartOptions?.[
                `title${locale?.charAt(0)?.toUpperCase() + locale?.slice(1)}`
              ]
            }
          </h2>
          <p className="text-ts dark:text-ts-dark font-medium text-base">
            {
              chartOptions?.[
                `description${
                  locale?.charAt(0)?.toUpperCase() + locale?.slice(1)
                }`
              ]
            }
          </p>
        </div>
        <div className="h-[400px] md:h-[500px]">
          <Chart data={data} options={options} />
        </div>
      </div>
    </section>
  );
}
