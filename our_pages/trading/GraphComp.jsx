"use client";
// pages/index.js
import dynamic from "next/dynamic";

const ChartComponent = dynamic(() => import("./ChartComponent"), {
  ssr: false,
});

export default function ChartComp({symbol}) {
  return <ChartComponent symbol={symbol}/>;
}
