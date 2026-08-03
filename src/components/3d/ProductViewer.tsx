"use client";

import React, { useRef, useState } from "react";
import { MeshReflectorMaterial, OrbitControls, ContactShadows } from "@react-three/drei";
import { useExperience } from "./ExperienceManager";
import MachineModel from "./MachineModel";
import Hotspots from "./Hotspots";
import CameraControls from "./CameraControls";
import * as THREE from "three";

const ProductViewer = () => {
  const { activeProduct, activeHotspot } = useExperience();

  if (!activeProduct) return null;

  return (
    <group>
      {/* Dynamic Camera Animation based on selected hotspot */}
      <CameraControls />

      {/* Main product positioned with yOffset to sit on the floor */}
      <group position={[0, activeProduct.yOffset, 0]} scale={activeProduct.scale} rotation={[0, 0, 0]}>
        <MachineModel url={activeProduct.modelPath} />
        
        {/* Render interactive hotspots over the machine */}
        <Hotspots hotspots={activeProduct.hotspots} />
      </group>

      {/* Premium studio floor with subtle reflection and contact shadows */}
      <ContactShadows 
        position={[0, -0.01, 0]} 
        opacity={0.7} 
        scale={150} 
        blur={2} 
        far={20} 
        resolution={1024} 
        color="#000000" 
      />
      
      {/* Circular studio platform */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]} receiveShadow>
        <circleGeometry args={[60, 64]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#151515"
          metalness={0.6}
          mirror={0.4}
        />
      </mesh>
      
      {/* Outer subtle ring line */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.04, 0]}>
        <ringGeometry args={[59.5, 60, 64]} />
        <meshBasicMaterial color="#333333" opacity={0.5} transparent />
      </mesh>
    </group>
  );
};

export default ProductViewer;
