"use client";
import React, { useEffect, useRef, useState } from "react";

const LazyLottie = ({ animationData, loop = true, style, className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [LottieComponent, setLottieComponent] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !LottieComponent) {
      import("lottie-react").then((mod) => {
        setLottieComponent(() => mod.default);
      });
    }
  }, [isVisible, LottieComponent]);

  return (
    <div ref={ref} className={className} style={style}>
      {isVisible && LottieComponent ? (
        <LottieComponent animationData={animationData} loop={loop} {...props} />
      ) : null}
    </div>
  );
};

export default LazyLottie;
