"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function MockupSlide1Dark({ visible, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/slide1-mockup-dark.glb");

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
      visible={true}
      rotation={[0, -Math.PI / 2, 0]}
      dispose={null}
    >
      <group name="Scene">
        <group name="IPhone_17_Pro_Max">
          <group name="iPhone_17_ProMax">
            <mesh
              name="Plane001"
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials["17ProMax_color.001"]}
            />
            <mesh
              name="Plane001_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials["17ProMax_Black2.001"]}
            />
            <mesh
              name="Plane001_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_2.geometry}
              material={materials["17ProMax_color3.001"]}
            />
            <mesh
              name="Plane001_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_3.geometry}
              material={materials["17ProMax_glass.001"]}
            />
            <mesh
              name="Plane001_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_4.geometry}
              material={materials["17ProMax_color2.001"]}
            />
            <mesh
              name="Plane001_5"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_5.geometry}
              material={materials["17ProMax_Logo.001"]}
            />
            <mesh
              name="Plane001_6"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_6.geometry}
              material={materials["17ProMax_black1.001"]}
            />
            <mesh
              name="Plane001_7"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_7.geometry}
              material={materials["17ProMax_21.001"]}
            />
            <mesh
              name="Plane001_8"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_8.geometry}
              material={materials["17ProMax_22.001"]}
            />
            <mesh
              name="Plane001_9"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_9.geometry}
              material={materials["17ProMax_2222.001"]}
            />
            <mesh
              name="Plane001_10"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_10.geometry}
              material={materials["17ProMax_G.001"]}
            />
            <mesh
              name="Plane001_11"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_11.geometry}
              material={materials["17ProMax_1111.001"]}
            />
            <mesh
              name="Plane001_12"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_12.geometry}
              material={materials["17ProMax_Lens.001"]}
            />
            <mesh
              name="Plane001_13"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_13.geometry}
              material={materials["17ProMax_Screen.001"]}
            />
            <mesh
              name="Plane001_14"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_14.geometry}
              material={materials["17ProMax_Lens2.001"]}
            />
            <mesh
              name="Plane001_15"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_15.geometry}
              material={materials["17ProMax_2112.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/slide1-mockup-dark.glb");
