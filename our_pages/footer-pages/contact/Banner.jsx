import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <section className={`bg-secondary`}>
      <div className="container flex flex-col md:flex-row justify-evenly gap-10 items-center py-12">
        <div className="md:w-[45%]">
          <h1
            className={`text-primary text-xl md:text-3xl font-semibold mb-5 md:text-left text-center`}
            style={{ letterSpacing: "1px" }}
          >
            Contact Us
          </h1>
          <p
            className={`text-white text-lg font-[500] md:text-left text-center`}
            style={{ letterSpacing: "1.4px" }}
          >
            A global network of customer service experts from diverse regions
            ensures round-the-clock, multilingual, premium support
          </p>
          <div className="mt-10">
            <button className="bg-primary w-[200px] px-2 py-3 rounded-full text-secondary">
              Visit Help Center
            </button>
          </div>
        </div>
        <div>
          <Image
            src="https://primexcapital.s3.eu-north-1.amazonaws.com/website/contact-us/Banner.webp"
            width="300"
            height="300"
            alt="banner Image"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
