import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Rewards = () => {
  return (
    <section className="py-12">
      <h1 className="sectionHeading mt-8">Exciting Promotions & Rewards</h1>
      <div className="container mx-auto flex my-12">
        <div className="flex bg-accent p-8 w-[50%] justify-evenly">
          <div className="flex flex-col">
            <h1 className="sectionHeading">
              $30
              <br /> Welcome
              <br /> Gift
            </h1>
            <p className="sectionPara mb-5">
              Start with a $30 gift when
              <br /> you verify your account.
            </p>
            <Button radius="full" variant="solid" color="primary">
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
        <div className="flex bg-secondary p-8 w-[50%] justify-evenly">
          <div>
            <h1 className="sectionHeading text-white text-left">
              Trade to
              <br /> Win
            </h1>
            <p className="sectionPara text-white mb-5">
              Enter our competition and <br /> compete for amazing prizes <br />{" "}
              based on your trading per- <br />
              formance.
            </p>
            <Button
              radius="full"
              variant="solid"
              className="bg-accent w-[13rem]"
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
