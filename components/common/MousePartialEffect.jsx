"use client";
import React from "react";
import MouseParticles from "react-mouse-particles";

const MousePartialEffect = () => {
  return (
    <MouseParticles
      g={1}
      color={["#FED100", "#ffffff"]}
      cull="MuiSvgIcon-root,MuiButton-root"
      level={6}
    />
  );
};

export default MousePartialEffect;
