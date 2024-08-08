import React from "react";
import Link from "next/link";

const MarketNewsDetail = () => {
  return (
    <section className="container py-20">
      <div className="grid grid-cols-12">
        <div className="col-span-8"></div>
        <div className="col-span-4 px-6">
          <div className="border-1 border-accent p-[30px]">
            <div className="flex justify-center">
              <img
                src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/market-news/profile-img.png"
                alt=""
                className="w-[65%]"
              />
            </div>
            <div className="mt-5">
              <h6 className="text-center text-base font-semibold text-black">
                Ready to Invest?
              </h6>
            </div>
            <div className="blog-invest-box-text mt-4">
              <p className="text-center text-sm">
                Open live account & Start investing NOW! Trade 500+ global
                assets hassle-free.
              </p>
            </div>
            <button className="bg-primary w-full h-10 rounded-xl mt-6 text-secondary font-semibold">
              GET STARTED
            </button>
          </div>
          <div
            className="bg-white px-6 py-8 mt-8"
            style={{ boxShadow: "0 0 5px rgba(0, 0, 0, .2)" }}
          >
            <div className="widget-title relative mb-10">
              <h2 className="text-2xl text-black font-semibold">
                Related Blogs
              </h2>
            </div>
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
                    <p className="text-black text-sm group-hover:text-white transition duration-700 ease-in-out">
                      7th August, 2024
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black group-hover:text-primary transition duration-700 ease-in-out">
                      Meta Platforms Surges 4% on a Strong Q2 Results
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketNewsDetail;
