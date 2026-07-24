"use client";
import React, { useEffect, useState } from "react";

const MousePartialEffect = () => {
  const [MouseParticles, setMouseParticles] = useState(null);

  useEffect(() => {
    import("react-mouse-particles").then((mod) => {
      setMouseParticles(() => mod.default);
    });
  }, []);

  if (!MouseParticles) return null;

  return (
    <MouseParticles
      g={1}
      color={["#FED100", "#F9F9F9"]}
      cull="MuiSvgIcon-root,MuiButton-root"
      level={6}
    />
  );
};

export default MousePartialEffect;
