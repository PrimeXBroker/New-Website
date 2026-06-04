"use client";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CustomYellowButton from "@/components/common/CustomYellowButton";
import { MockupSlide1Dark } from "./mockups/MockupSlide1Dark";
import { MockupSlide1Light } from "./mockups/MockupSlide1Light";
import { MockupSlide2Dark } from "./mockups/MockupSlide2Dark";
import { MockupSlide2Light } from "./mockups/MockupSlide2Light";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

const HeroMobile = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const t = useTranslations("home.heroSection");
  const t1 = useTranslations("investmentFunds.hero");
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      id: 1,
      badgeIconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Join+250%2C000%2B+traders+worldwide+icon.png",
      badgeIconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Join+250%2C000%2B+traders+worldwide+icon.png",
      badgeLabel: t("slide1_badgeLabel"),
      titlePrefix: t("slide1_titlePrefix"),
      titleHighlight1: t("slide1_titleHighlight1"),
      titleHighlight2: t("slide1_titleHighlight2"),
      titleSeparator1: t("slide1_titleSeparator1"),
      titleSuffix: t("slide1_titleSuffix"),
      description: t("slide1_description"),
      buttonLink: "/",
      coins: [
        {
          srcDark:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Wheat+icon.png",
          srcLight:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Wheat+icon.png",
          pos: "top-[44%] start-[4%] w-[70px]",
          dirX: -40,
          dirY: 0,
        },
        {
          srcDark:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Brent+Icon.png",
          srcLight:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Brent+Icon.png",
          pos: "top-[7%] end-[7%] w-[75px]",
          dirX: 0,
          dirY: -40,
        },
        {
          srcDark:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Silver+Icon.png",
          srcLight:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Silver+Icon.png",
          pos: "top-[32%] end-[4%] w-[45px]",
          dirX: 0,
          dirY: -40,
        },
        {
          srcDark:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Bitcoin+icon.png",
          srcLight:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Bitcoin+icon.png",
          pos: "bottom-[19%] end-[8%] w-[80px]",
          dirX: 40,
          dirY: 0,
        },
      ],
    },
    {
      id: 2,
      badgeIconDark:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Grow+your+savings+Icon.png",
      badgeIconLight:
        "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Grow+your+savings+Icon.png",
      badgeLabel: t("slide2_badgeLabel"),
      titlePrefix: t("slide2_titlePrefix"),
      titleHighlight1: t("slide2_titleHighlight1"),
      titleSeparator1: t("slide2_titleSeparator1"),
      titleHighlight2: t("slide2_titleHighlight2"),
      titleSeparator2: t("slide2_titleSeparator2"),
      titleSuffix: t("slide2_titleSuffix"),
      description: t1("description"),
      buttonLink: "/",
      coins: [
        {
          srcDark:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Wheat+icon.png",
          srcLight:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Wheat+icon.png",
          pos: "top-[44%] start-[4%] w-[70px]",
          dirX: -40,
          dirY: 0,
        },
        {
          srcDark:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Silver+Icon.png",
          srcLight:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Silver+Icon.png",
          pos: "top-[10%] end-[3%] w-[45px]",
          dirX: 0,
          dirY: -40,
        },
        {
          srcDark:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Bitcoin+icon.png",
          srcLight:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Bitcoin+icon.png",
          pos: "top-[14%] end-[9%] w-[80px]",
          dirX: 40,
          dirY: 0,
        },
        {
          srcDark:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/dark/Brent+Icon.png",
          srcLight:
            "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/hero/light/Brent+Icon.png",
          pos: "bottom-[19%] end-[10%] w-[75px]",
          dirX: 0,
          dirY: -40,
        },
      ],
    },
  ];

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
    <section className="bg-p dark:bg-p-dark pt-28 sm:pt-32 lg:hidden">
      <div className="container">
        <div className="grid grid-cols-1">
          <motion.div
            key={`badge-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 bg-cc dark:bg-cc-dark w-full md:w-fit px-4 py-[10px] rounded-lg mb-[10px] mx-auto"
          >
            <Image
              unoptimized={true}
              src={theme === "dark" ? s.badgeIconDark : s.badgeIconLight}
              width="16"
              height="16"
              alt="badge"
              className="w-[20px] h-auto"
            />
            <p className="text-tm dark:text-tm-dark font-medium text-base">
              {s.badgeLabel}
            </p>
          </motion.div>
          {s.id === 1 && (
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-tm dark:text-tm-dark text-4xl sm:text-5xl md:text-5xl lg:text-[42px] font-bold text-center lg:text-start leading-tight"
            >
              {s.titlePrefix}
              <span className="text-pcp dark:text-pcp-dark">
                {s.titleHighlight1} <br className="hidden md:block" />
                {s.titleHighlight2}
              </span>
              {s.titleSeparator1} <br className="hidden md:block" />{" "}
              {s.titleSuffix}
            </motion.h1>
          )}
          {s.id === 2 && (
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-tm dark:text-tm-dark text-4xl sm:text-5xl md:text-5xl lg:text-[42px] font-bold text-center lg:text-start leading-tight"
            >
              {s.titlePrefix}
              <span className="text-pcp dark:text-pcp-dark">
                {s.titleHighlight1}
              </span>
              {s.titleSeparator1} <br className="hidden md:block" />
              <span className="text-pcp dark:text-pcp-dark">
                {s.titleHighlight2}
              </span>
              {s.titleSeparator2}
              <br className="hidden md:block" /> {s.titleSuffix}
            </motion.h1>
          )}
          <motion.p
            key={`desc-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-ts dark:text-ts-dark font-medium text-lg sm:text-xl md:text-xl lg:text-lg text-center w-full mt-[10px] mb-4"
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
              title={t("btnTxt")}
              className="py-4 px-9 text-lg w-full justify-between"
            />
          </motion.div>
          <div className="flex justify-end gap-3 my-5" dir="ltr">
            <button onClick={prevSlide} className="text-ts dark:text-ts-dark">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/dark/arrow+move+left.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/light/arrow+move+left.png"
                }
                alt="Previous"
                width={44}
                height={44}
                className="w-[44px] h-auto"
              />
            </button>
            <button onClick={nextSlide} className="text-ts dark:text-ts-dark">
              <Image
                unoptimized={true}
                src={
                  theme === "dark"
                    ? "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/dark/arrow+move+right.png"
                    : "https://primexcapital.s3.eu-north-1.amazonaws.com/website/home-v2/client-reviews/light/arrow+move+right.png"
                }
                alt="Next"
                width={44}
                height={44}
                className="w-[44px] h-auto"
              />
            </button>
          </div>
          <div className="relative w-full h-[444px] flex justify-center items-center overflow-visible">
            <div className="relative h-full aspect-[3/4] max-w-full flex justify-center items-center overflow-visible">
              <div className="absolute inset-0 w-full h-full z-10">
                <Canvas camera={{ position: [0, 0, 8], fov: 25 }}>
                  <Suspense fallback={null}>
                    <Environment preset="city" />
                    <OrbitControls
                      enableRotate={false}
                      enableZoom={false}
                      enablePan={false}
                    />
                    {current === 0 &&
                      (theme === "dark" ? (
                        <MockupSlide1Dark
                          visible={current === 0}
                          scale={21}
                          position={[0, 0.1, 0]}
                        />
                      ) : (
                        <MockupSlide1Light
                          visible={current === 0}
                          scale={21}
                          position={[0, 0.1, 0]}
                        />
                      ))}
                    {current === 1 &&
                      (theme === "dark" ? (
                        <MockupSlide2Dark
                          visible={current === 1}
                          scale={21}
                          position={[0, 0.1, 0]}
                        />
                      ) : (
                        <MockupSlide2Light
                          visible={current === 1}
                          scale={21}
                          position={[0, 0.1, 0]}
                        />
                      ))}
                    <ambientLight intensity={0.7} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                  </Suspense>
                </Canvas>
                <div
                  className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-visible"
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
                            src={
                              theme === "dark" ? coin.srcDark : coin.srcLight
                            }
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
