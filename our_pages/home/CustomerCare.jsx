"use client";
import Aos from "aos";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useEffect } from "react";

const CustomerCare = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section className="container mb-8 flex flex-wrap justify-between border-b-2 border-b-accent">
      <div
        className="flex flex-col justify-center"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        <h1 className="sectionHeading text-left mb-8">
          Always Here <br /> for You
        </h1>
        <Button
          variant="solid"
          radius="full"
          color="primary"
          className="w-[13rem]"
        >
          <p className="text-secondary font-semibold">Contact Us</p>
        </Button>
      </div>
      <div>
        <Image
          data-aos-easing="ease-out"
          data-aos-duration={1000}
          data-aos="slide-up"
          src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/customer_care.webp"
          alt="customer care"
          width="300"
          height="300"
        />{" "}
      </div>
      <div
        className="flex flex-col justify-center gap-8"
        data-aos-easing="ease-out"
        data-aos-duration={1000}
        data-aos="slide-up"
      >
        <div className="flex gap-2">
          <Image
            src="/images/cc_icon1.svg"
            alt="cc icon"
            width="50"
            height="50"
          />
          <div>
            <h1 className="secttionHeading text-lg font-semibold">
              24/7 Customer Care
            </h1>
            <p>Always ready to assist</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Image
            src="/images/cc_icon2.svg"
            alt="cc icon"
            width="50"
            height="50"
          />
          <div>
            <h1 className="secttionHeading text-lg font-semibold">
              Multilingual Support
            </h1>
            <p>Help available in multiple languages</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCare;
