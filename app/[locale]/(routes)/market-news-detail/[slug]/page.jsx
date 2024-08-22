import MarketNewsDetailWrapper from "@/our_pages/market-news-detail/MarketNewsDetailWrapper";
import React from "react";
import Head from "next/head";
import axios from "axios";

const page = async ({ params }) => {
  const { slug } = params;

  const res = await axios.get(
    `https://primexbroker.com/api/fetch/one/blog/${slug}`
  );

  console.log(JSON.stringify(res.data, 0, 2), "res");
  const blo = res?.data?.data;
  return (
    <>
      <Head>
        {/* <title>{getTitle()}</title> */}
        <meta property="og:title" content={blo?.title} />
        <meta property="og:description" content={blo?.description} />
        <meta property="og:image" content={blo?.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        {/* <meta
          property="og:url"
          content={`https://primexbroker.co.za${asPath}`}
        /> */}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blo?.title} />
        <meta name="twitter:description" content={blo?.description} />
        <meta name="twitter:image" content={blo?.image} />
      </Head>
      <MarketNewsDetailWrapper />
    </>
  );
};

export default page;
