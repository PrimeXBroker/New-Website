import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Rewards = () => {
  return (
    <section className="py-12">
      <h1
        className="sectionHeading mt-8"
        data-aos-easing="ease-out"
        data-aos-duration={1100}
        data-aos="slide-up"
      >
        Exciting Promotions & Rewards
      </h1>
      <div className="container mx-auto flex flex-col lg:flex-row my-12">
        <div
          className="flex flex-col-reverse sm:flex-row bg-accent p-8 w-full lg:w-[50%] justify-evenly"
          data-aos-easing="ease-out"
          data-aos-duration={1100}
          data-aos="slide-right"
        >
          <div className="flex flex-col">
            <h1 className="sectionHeading">
              $30
              <br className="hidden sm:block" /> Welcome
              <br className="hidden sm:block" /> Gift
            </h1>
            <p className="sectionPara mb-5 sm:text-left text-center">
              Start with a $30 gift when
              <br className="hidden sm:block" /> you verify your account.
            </p>
            <Button
              radius="full"
              variant="solid"
              color="primary"
              className="w-[250px] mx-auto sm:mx-0 sm:w-full"
            >
              <p className="text-secondary font-semibold">Claim your Gift</p>
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/campaign01.webp"
              alt="campaign1"
              width="230"
              height="300"
            />{" "}
          </div>
        </div>
        <div
          className="flex flex-col-reverse sm:flex-row bg-secondary p-8 w-full lg:w-[50%] justify-evenly"
          data-aos-easing="ease-out"
          data-aos-duration={1100}
          data-aos="slide-left"
        >
          <div>
            <h1 className="sectionHeading text-white sm:text-left text-center pt-4 sm:pt-0">
              Trade to
              <br className="hidden sm:block" /> Win
            </h1>
            <p className="sectionPara text-white mb-5 text-center sm:text-left">
              Enter our competition and <br className="hidden sm:block" />{" "}
              compete for amazing prizes <br /> based on your trading per-{" "}
              <br className="hidden sm:block" />
              formance.
            </p>
            <Button
              radius="full"
              variant="solid"
              className="bg-accent sm:w-[13rem] block sm:mx-0 mx-auto w-[250px]"
            >
              <p className="text-secondary font-semibold">Join Now</p>
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/campaign02.webp"
              alt="campaign2"
              width="230"
              height="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
