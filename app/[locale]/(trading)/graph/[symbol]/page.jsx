import GraphComp from "@/our_pages/trading/GraphComp";
import { convertToSeconds } from "@/utils/data";
import axios from "axios";
import React from "react";

const Graph = async ({ params,searchParams }) => {
  const { symbol } = params;
  const {interval,mode} = searchParams
  console.log(mode, "mode");


  return <GraphComp symbol={symbol} interval={parseInt(interval || 1)} mode={mode}/>;
};

export default Graph;
