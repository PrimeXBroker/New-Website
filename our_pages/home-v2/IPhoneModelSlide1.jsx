"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function IPhoneModelSlide1({ visible, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/mockup-slide1.glb");

  useFrame(() => {
    if (group.current) {
      const targetRotation = visible ? -Math.PI / 2 : Math.PI / 2;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotation,
        0.15,
      );
    }
  });

  useEffect(() => {
    if (visible && group.current) {
      group.current.rotation.y = -Math.PI * 1.5;
    }
  }, [visible]);

  return (
    <group
      ref={group}
      {...props}
      visible={visible}
      rotation={[0, -Math.PI / 2, 0]}
      dispose={null}
    >
      <group name="Scene">
        <group name="IPhone_17_Pro_Max">
          <group name="iPhone_17_ProMax">
            <mesh
              name="Plane004"
              castShadow
              receiveShadow
              geometry={nodes.Plane004.geometry}
              material={materials["17ProMax_color"]}
            />
            <mesh
              name="Plane004_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_1.geometry}
              material={materials["17ProMax_Black2"]}
            />
            <mesh
              name="Plane004_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_2.geometry}
              material={materials["17ProMax_color3"]}
            />
            <mesh
              name="Plane004_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_3.geometry}
              material={materials["17ProMax_glass"]}
            />
            <mesh
              name="Plane004_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_4.geometry}
              material={materials["17ProMax_color2"]}
            />
            <mesh
              name="Plane004_5"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_5.geometry}
              material={materials["17ProMax_Logo"]}
            />
            <mesh
              name="Plane004_6"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_6.geometry}
              material={materials["17ProMax_black1"]}
            />
            <mesh
              name="Plane004_7"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_7.geometry}
              material={materials["17ProMax_21"]}
            />
            <mesh
              name="Plane004_8"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_8.geometry}
              material={materials["17ProMax_22"]}
            />
            <mesh
              name="Plane004_9"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_9.geometry}
              material={materials["17ProMax_2222"]}
            />
            <mesh
              name="Plane004_10"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_10.geometry}
              material={materials["17ProMax_G"]}
            />
            <mesh
              name="Plane004_11"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_11.geometry}
              material={materials["17ProMax_1111"]}
            />
            <mesh
              name="Plane004_12"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_12.geometry}
              material={materials["17ProMax_Lens"]}
            />
            <mesh
              name="Plane004_13"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_13.geometry}
              material={materials["17ProMax_Screen"]}
            />
            <mesh
              name="Plane004_14"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_14.geometry}
              material={materials["17ProMax_Lens2"]}
            />
            <mesh
              name="Plane004_15"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_15.geometry}
              material={materials["17ProMax_2112"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mockup-slide1.glb");
