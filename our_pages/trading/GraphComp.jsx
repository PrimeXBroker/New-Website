"use client";
// pages/index.js
import dynamic from "next/dynamic";

const ChartComponent = dynamic(() => import("./ChartComponent"), {
  ssr: false,
});

export default function ChartComp({ symbol, interval, mode }) {
  return <ChartComponent symbol={symbol} interval={interval} mode={mode} />;
}
