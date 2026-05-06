"use client";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { IPhoneModelSlide2 } from "./IPhoneModelSlide2";

const ModelViewSlide2 = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 25 }}>
      <Suspense fallback={null}>
        <Environment preset="city" />
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
        />
        <IPhoneModelSlide2
          scale={20}
          position={[0, 0.2, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewSlide2;
