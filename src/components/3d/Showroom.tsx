"use client";

import React from "react";
import { MeshReflectorMaterial, useCursor, Html } from "@react-three/drei";
import { PRODUCTS_3D_DATA } from "@/data/3d-products-data";
import MachineModel from "./MachineModel";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";

const Showroom = () => {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);
  
  useCursor(hovered !== null, 'pointer', 'auto');

  return (
    <group>
      {/* Massive floating background text */}
      <Html position={[0, 40, -50]} center zIndexRange={[0, 0]} className="pointer-events-none select-none">
        <div className="flex flex-col items-center justify-center whitespace-nowrap">
          <h1 className="text-[120px] font-bold text-white drop-shadow-2xl font-oswald tracking-tighter leading-none">
            3D <span className="text-primary">PRODUCT</span> TOUR
          </h1>
          <div className="bg-white text-black px-6 py-2 mt-2 text-4xl font-bold tracking-[0.2em] uppercase">
            EXPERIENCE
          </div>
        </div>
      </Html>

      {/* Floor with Reflection */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
        <planeGeometry args={[400, 400]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#151515"
          metalness={0.5}
          mirror={0.5}
        />
      </mesh>

      {/* Grid Helper for industrial look */}
      <gridHelper args={[400, 400, "#222222", "#111111"]} position={[0, -0.09, 0]} />

      {/* Render all machines */}
      {PRODUCTS_3D_DATA.map((product) => (
        <group 
          key={product.id} 
          position={product.showroomPosition}
        >
          <AnimatedMachine
            product={product}
            isHovered={hovered === product.id}
            onPointerOver={(e: any) => {
              e.stopPropagation();
              setHovered(product.id);
            }}
            onPointerOut={() => setHovered(null)}
            onClick={(e: any) => {
              e.stopPropagation();
              router.push(`/3d-experience/${product.id}`);
            }}
          />
        </group>
      ))}
    </group>
  );
};

// Extracted into a separate component to manage individual animations
const AnimatedMachine = ({ product, isHovered, onPointerOver, onPointerOut, onClick }: any) => {
  const groupRef = React.useRef<Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Smooth hover animation: lift up slightly and rotate slowly
    const targetY = isHovered ? 2 : 0;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.1;
    
    if (isHovered) {
      groupRef.current.rotation.y += 0.005;
    } else {
      // Slowly return to original rotation
      const targetRotation = product.rotation[1];
      const currentRotation = groupRef.current.rotation.y;
      groupRef.current.rotation.y += (targetRotation - currentRotation) * 0.05;
    }
  });

  return (
    <group 
      ref={groupRef}
      rotation={product.rotation} 
      scale={isHovered ? product.scale * 1.02 : product.scale}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      onClick={onClick}
    >
      <MachineModel url={product.modelPath} />
      
      {/* Spotlight that turns on when hovered */}
      {isHovered && (
        <spotLight
          position={[0, 50, 0]}
          angle={0.6}
          penumbra={1}
          intensity={2}
          color="#facc15" // Theme yellow
          distance={100}
          target={groupRef.current!}
        />
      )}

      {/* Interactive UI Button (Propel style) */}
      <Html position={[0, 20, 10]} center zIndexRange={[100, 0]} className="pointer-events-auto">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative flex items-center justify-center cursor-pointer group"
          onClick={onClick}
        >
          {/* Outer pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-[#005e5e]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: "80px", height: "80px", top: "-10px", left: "-10px" }}
          />

          {/* Inner button */}
          <div
            className={`w-[60px] h-[60px] rounded-full flex items-center justify-center transition-colors shadow-2xl shadow-black/50 bg-[#005e5e] hover:bg-primary text-white border-2 border-white/20`}
          >
            <MousePointerClick size={32} strokeWidth={2.5} />
          </div>
        </motion.div>
      </Html>
    </group>
  );
}

export default Showroom;
