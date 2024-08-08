import React from "react";
import Link from "next/link";

const MarketNews = () => {
  return (
    <section className="container py-20">
      <div className="grid grid-cols-12">
        <div className="col-span-4 px-4">
          <Link href={``} className="group">
            <div className="single-blog-thumb overflow-hidden transition duration-700 ease-in-out">
              <div>
                <img
                  src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/blog.jpg"
                  alt=""
                  className="w-full overflow-hidden transition duration-700 ease-in-out transform group-hover:scale-110"
                />
              </div>
              <div className="px-3 py-5 group-hover:bg-secondary transition duration-700 ease-in-out">
                <div className="mb-3">
                  <p className="text-black text-base group-hover:text-white transition duration-700 ease-in-out">
                    7th August, 2024
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-black group-hover:text-primary transition duration-700 ease-in-out">
                    Meta Platforms Surges 4% on a Strong Q2 Results
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketNews;
