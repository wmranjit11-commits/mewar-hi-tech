"use client";

import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { HotspotData } from "@/data/3d-products-data";
import { useExperience } from "./ExperienceManager";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFrame } from "@react-three/fiber";

interface HotspotsProps {
  hotspots: HotspotData[];
}

const Hotspots = ({ hotspots }: HotspotsProps) => {
  const { activeHotspot, setActiveHotspot } = useExperience();

  return (
    <>
      {hotspots.map((hotspot) => {
        const isActive = activeHotspot?.id === hotspot.id;

        return (
          <group key={hotspot.id} position={hotspot.position}>
            <Html center zIndexRange={[100, 0]} className="pointer-events-auto">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                className="relative flex items-center justify-center cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(isActive ? null : hotspot);
                }}
              >
                {/* Outer pulsing ring */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-2 ${
                    isActive ? "border-primary" : "border-white/50"
                  }`}
                  animate={isActive ? { scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: "48px", height: "48px", top: "-12px", left: "-12px" }}
                />

                {/* Inner button */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors shadow-lg shadow-black/50 ${
                    isActive
                      ? "bg-primary text-primary-foreground scale-110"
                      : "bg-[#005e5e] hover:bg-primary text-white border border-white/20"
                  }`}
                >
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus size={16} strokeWidth={3} />
                  </motion.div>
                </div>
              </motion.div>
            </Html>
          </group>
        );
      })}
    </>
  );
};

export default Hotspots;
