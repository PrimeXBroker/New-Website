import GraphComp from "@/our_pages/trading/GraphComp";
import { convertToSeconds } from "@/utils/data";
import axios from "axios";
import React from "react";

const Graph = async ({ params }) => {
  const { symbol } = params;
  console.log(symbol, "params");

  const { from, to } = convertToSeconds("Hour");
  let data;
  const url = `https://primexbroker.com/api/trade/graph?symbol=${symbol}&from=${from}&to=${to}`;
  console.log(url, "urlgraph");
  const response = await axios.get(url);
  // console.log(JSON.stringify(response.data, null, 2), "response");
  if (response?.data?.success) {
    data = response?.data?.result?.answer;
  }
  console.log(data, "data");

  const graphData = [
    [1704067200000, 100, 105, 98, 102], // Jan 1, 2024
    [1704153600000, 102, 108, 101, 107], // Jan 2, 2024
    [1704240000000, 107, 110, 104, 105], // Jan 3, 2024
    [1704326400000, 105, 109, 103, 108], // Jan 4, 2024
    [1704412800000, 108, 112, 106, 110], // Jan 5, 2024
    [1704499200000, 110, 115, 108, 113], // Jan 6, 2024
    [1704585600000, 113, 118, 111, 116], // Jan 7, 2024
    [1704672000000, 116, 120, 114, 118], // Jan 8, 2024
    [1704758400000, 118, 122, 115, 117], // Jan 9, 2024
    [1704844800000, 117, 119, 112, 114], // Jan 10, 2024
  ];
  return <GraphComp graphData={graphData} />;
};

export default Graph;
