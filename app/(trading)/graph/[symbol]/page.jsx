import GraphComp from "@/our_pages/trading/GraphComp";
import { convertToSeconds } from "@/utils/data";
import axios from "axios";
import React from "react";

const Graph = async ({ params }) => {
  const { symbol } = params;
  console.log(symbol, "params");


  return <GraphComp symbol={symbol}/>;
};

export default Graph;
