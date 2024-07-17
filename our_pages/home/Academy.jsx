"use client";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";

const Academy = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section className="py-12 container">
      <div
        data-aos-easing="ease-out"
        data-aos-duration={800}
        data-aos="slide-up"
      >
        <h1 className="sectionHeading">PrimeX Academy: Learn & Grow</h1>
        <p className="sectionPara text-center">
          Boost your trading skills with our extensive educational resources.
        </p>
      </div>
      <div className="flex flex-row mt-12 gap-12 justify-center flex-wrap">
        <div
          className="bg-accent rounded-lg shadow-2xl border-b-5 border-black hover:border-primary p-8 w-[300px]"
          data-aos-easing="ease-out"
          data-aos-duration={2500}
          data-aos="slide-up"
        >
          <div className="flex justify-end">
            <Image
              src="/images/academy_icon1.svg"
              alt="academy icon"
              width="80"
              height="80"
              className="block mx-0"
            />
          </div>
          <h1 className="sectionHeading text-2xl text-left mb-6">
            Free <br /> Webinars
          </h1>
          <p className="sectionPara text-left">
            Join live sessions with <br /> industry experts
          </p>
        </div>
        <div
          className="bg-accent rounded-lg shadow-2xl border-b-5 border-black hover:border-primary p-8 w-[300px]"
          data-aos-easing="ease-out"
          data-aos-duration={1500}
          data-aos="slide-up"
        >
          <div className="flex justify-end">
            <Image
              src="/images/academy_icon2.svg"
              alt="academy icon"
              width="80"
              height="80"
              className="block mx-0"
            />
          </div>
          <h1 className="sectionHeading text-2xl text-left mb-6">
            One-on-One <br /> Coaching
          </h1>
          <p className="sectionPara text-left">
            Personalized guidance for <br /> your trading journey industry
            experts
          </p>
        </div>
        <div
          className="bg-accent rounded-lg shadow-2xl border-b-5 border-black hover:border-primary  p-8 w-[300px]"
          data-aos-easing="ease-out"
          data-aos-duration={500}
          data-aos="slide-up"
        >
          <div className="flex justify-end">
            <Image
              src="/images/academy_icon1.svg"
              alt="academy icon"
              width="80"
              height="80"
              className="block mx-0"
            />
          </div>
          <h1 className="sectionHeading text-2xl text-left mb-6">
            Expert Market <br /> Analysis
          </h1>
          <p className="sectionPara text-left">
            Stay informed with the <br /> latest insights and trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Academy;
