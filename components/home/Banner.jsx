"use client";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[url('https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/World+map+hero+bg.webp')] h-[700px] bg-center bg-no-repeat bg-cover">
      <div className="text-center text-[#ffffff] space-y-5 pt-28">
        <div className="rounded-[8px] border-2 border-[#222222] inline-flex items-center text-sm">
          <div className="bg-[#1d1d1d] px-4 py-2">
            <Image
              src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/home/trustpilot-logo+.svg"
              alt="Trustpilot"
              width={100}
              height={100}
            />
          </div>
          <div className="px-4">
            <span className="font-semibold">4.8 </span>
            <span> • Excellent • 2,000+ reviews</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff]">
          The #1 Choice of World-class Traders
        </h1>
        <p className="text-lg md:text-xl text-gray">
          Trade with low commissions and raw spreads
        </p>
        <div>
          <button className="bg-[#ffffff] text-[#111111] py-[18px] px-[48px] rounded-xl font-semibold hover:bg-gray-200 mt-5">
            Open Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
