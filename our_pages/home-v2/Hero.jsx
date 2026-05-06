"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { useRouter } from "next/navigation";
import { getRegisterUrl } from "@/utilities/getRegisterUrl";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { IPhoneModelSlide1 } from "./IPhoneModelSlide1";
import { IPhoneModelSlide2 } from "./IPhoneModelSlide2";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    badgeIcon:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/chip-icon-slide1.svg",
    badgeLabel: "Licensed in UAE by ",
    badgeHighlight: "SCA",
    titlePrefix: "The ",
    titleHighlight: "#1 Choice ",
    titleSeparator: "of ",
    titleSuffix: "World-Class Traders",
    backgroundSvg:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/text-bg-slide1.png",
    description: "Trade with low commissions and raw spreads",
    buttonLabel: "Open Account",
    buttonLink: "/",
    coins: [
      {
        src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/coin1-slide1.svg",
        pos: "top-[23%] left-[31%] w-[150px]",
        dirX: -40,
        dirY: 0,
      },
      {
        src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/coin2-slide1.svg",
        pos: "top-[16%] right-[25%] w-[100px]",
        dirX: 0,
        dirY: -40,
      },
      {
        src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/coin3-slide1.svg",
        pos: "bottom-[43%] right-[30%] w-[130px]",
        dirX: 40,
        dirY: 0,
      },
    ],
  },
  {
    id: 2,
    badgeIcon:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/chip-icon-slide2.svg",
    badgeLabel: "Built for Secure global ",
    badgeHighlight: "Trading",
    titlePrefix: "Take ",
    titleHighlight: "Control ",
    titleSeparator: "of ",
    titleSuffix: "every Single Trade",
    backgroundSvg:
      "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/text-bg-slide2.png",
    description: "Full control with insights that actually matter",
    buttonLabel: "Learn More",
    buttonLink: "/",
    coins: [
      {
        src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/coin1-slide2.svg",
        pos: "top-[23%] left-[31%] w-[150px]",
        dirX: -120,
        dirY: 0,
      },
      {
        src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/coin2-slide2.svg",
        pos: "top-[16%] right-[25%] w-[100px]",
        dirX: 0,
        dirY: -120,
      },
      {
        src: "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/coin3-slide2.svg",
        pos: "bottom-[43%] right-[30%] w-[130px]",
        dirX: 120,
        dirY: 0,
      },
    ],
  },
];

const Hero = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const s = slides[current];

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [current]);

  const handleClick = () => {
    const url = getRegisterUrl(locale);
    router.push(url);
  };

  return (
    <section className="bg-p dark:bg-p-dark py-14 sm:py-16 md:py-20 text-white">
      <div className="relative container mt-20">
        <div className="grid grid-cols-2">
          <div>
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2 bg-cc dark:bg-cc-dark w-fit px-4 py-[10px] rounded-lg mb-[10px]"
            >
              <Image
                unoptimized={true}
                src={s.badgeIcon}
                width="16"
                height="16"
                alt="badge"
                className="w-[20px] h-auto"
              />
              <p className="text-tm dark:text-tm-dark font-medium text-base">
                {s.badgeLabel}
                <span className="text-pcp dark:text-pcp-dark">
                  {s.badgeHighlight}
                </span>
              </p>
            </motion.div>
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-tm dark:text-tm-dark lg:text-[42px] font-bold text-start leading-tight"
            >
              {s.titlePrefix}
              <span className="text-pcp dark:text-pcp-dark">
                {s.titleHighlight}
              </span>
              {s.titleSeparator} <br /> {s.titleSuffix}
            </motion.h1>
          </div>
        </div>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`bg-${current}`}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className=" flex items-center justify-center h-[493px]"
            style={{
              backgroundImage: `url(${s.backgroundSvg})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </AnimatePresence>
        <div
          className="absolute inset-0 z-20"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={current}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full relative"
            >
              {s.coins.map((coin, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: {
                      opacity: 0,
                      x: coin.dirX,
                      y: coin.dirY,
                      scale: 0.6,
                      rotateZ: -20,
                    },
                    animate: {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotateZ: 0,
                      transition: {
                        duration: 0.7,
                        ease: [0.34, 1.56, 0.64, 1],
                        delay: 0.2 + index * 0.12,
                      },
                    },
                  }}
                  className={`absolute z-20 ${coin.pos}`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Image
                    src={coin.src}
                    alt={`coin-${index}`}
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain"
                    unoptimized
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Canvas camera={{ position: [0, 0, 8], fov: 25 }}>
            <Suspense fallback={null}>
              <Environment preset="city" />
              <OrbitControls
                enableRotate={false}
                enableZoom={false}
                enablePan={false}
              />
              {current === 0 && (
                <IPhoneModelSlide1
                  visible={current === 0}
                  scale={20}
                  position={[0, 0.2, 0]}
                />
              )}
              {current === 1 && (
                <IPhoneModelSlide2
                  visible={current === 1}
                  scale={20}
                  position={[0, 0.2, 0]}
                />
              )}
              <ambientLight intensity={0.7} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
            </Suspense>
          </Canvas>
        </div>
        <div className="grid grid-cols-2 items-end relative -mt-32 z-30">
          <div>
            <div className="flex gap-4">
              <button onClick={prevSlide} className="text-ts dark:text-ts-dark">
                <IoArrowBackSharp size={26} />
              </button>
              <button onClick={nextSlide} className="text-ts dark:text-ts-dark">
                <IoArrowForwardSharp size={26} />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center gap-5 ">
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-ts dark:text-ts-dark font-medium text-lg sm:text-xl md:text-base lg:text-xl text-end w-[50%]"
            >
              {s.description}
            </motion.p>
            <motion.div
              key={`btn-${current}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <CustomYellowButton
                onClick={handleClick}
                title="Open Account"
                className="py-5 px-9 text-lg w-full sm:w-auto justify-between sm:justify-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
