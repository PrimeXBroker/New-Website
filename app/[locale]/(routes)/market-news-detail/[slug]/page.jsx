import MarketNewsDetailWrapper from "@/our_pages/market-news-detail/MarketNewsDetailWrapper";
import React from "react";
import Head from "next/head";
import axios from "axios";

// export async function generateMetadata({ params: { locale } }) {
//   const messages = (await import(`../../../../../messages/${locale}.json`)).default;
//   const res = await axios.get(
//     `https://primexbroker.com/api/fetch/one/blog/${slug}`
//   );

//   console.log(res);
  

//   console.log(JSON.stringify(res.data, 0, 2), "res");
//   const blo = res?.data?.data;  
//   const t = createTranslator({ locale, messages });
//   const url =
//   locale != "en"
//     ? `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/contact`
//     : `${process.env.NEXT_PUBLIC_BASE_URL}/contact`;


//   return {
//     title: blo.title,
//     description: blo.description,
//     alternates: {
//       canonical: url,
//     },
//     openGraph: {
//       type: 'website',
//       locale: locale,
//       url: url,
//       title: blo.title,
//       description: blo.description,
//       images: [
//         {
//           url: blo.image,
//           width: 1200, // Update width
//           height: 630, // Update height
//           alt: blo.title,
//         },
//       ],
//     },
//   };
// }

const page = async ({ params }) => {

  return (
    <>
      {/* <Head>
        <title>{getTitle()}</title>
        <meta property="og:title" content={blo?.title} />
        <meta property="og:description" content={blo?.description} />
        <meta property="og:image" content={blo?.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:url"
          content={`https://primexbroker.co.za${asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blo?.title} />
        <meta name="twitter:description" content={blo?.description} />
        <meta name="twitter:image" content={blo?.image} />
      </Head> */}
      <MarketNewsDetailWrapper />
    </>
  );
};



export default page;
