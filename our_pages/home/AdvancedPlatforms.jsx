"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Aos from "aos";
import { useTranslations } from "next-intl";
import Link from "next/link";

const AdvancedPlatforms = () => {
  const t = useTranslations("home.advancedPlatforms");
  const list = [
    {
      id:1,
      text:"Harness The power of MetaTrader 5 for an unparaleled trading experience.",
      icon:'https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/x-Icon.svg'
    },
    {
      id:2,
      text:"Some other Text here...lorem ipsum machako",
      icon:'https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/x-Icon.svg'
    },
    {
      id:3,
      text:"Some other Text here...lorem ipsum machako",
      icon:'https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/x-Icon.svg'
    }
  ]
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <section
      className="py-12 bg-secondary container justify-around items-center flex flex-col md:flex-row"
      data-aos-easing="ease-out"
      data-aos-duration={2000}
      data-aos="slide-up"
    >
      <div>
        <Image src='https://primexcapital.s3.eu-north-1.amazonaws.com/website/homepage/advanced_platforms.webp' width='400' height='300' alt="platform Image"/>
      </div>
      <div className="max-w-2xl">
      <h1 className="text-white text-lg md:text-3xl font-semibold pb-4">
        Advanced Platform <br/>
        for Modern Traders 
      </h1>
      <ul className="mb-5">
      {list.map((el)=>(
        <li key={el.id} className="flex items-center gap-2 py-1"><Image width='20' height='20' alt="icon" src={el.icon}/><p className="text-white text-lg font-[500]">{el.text}</p></li>
      ))}
      </ul>
      <Link 
      href='https://client.primexbroker.com/en/register' 
      className="bg-primary text-secondary text-center w-[200px] px-4 py-3 rounded-full shadow-lg">
      Open Live Account
      </Link>
      </div>

    </section>
  )
};

export default AdvancedPlatforms;
