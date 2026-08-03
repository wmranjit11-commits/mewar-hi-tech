"use client";

import React, { useState } from "react";
import { useExperience } from "../ExperienceManager";
import { useThree } from "@react-three/fiber";

const Toolbar = () => {
  const { activeProduct } = useExperience();
  const [rotation, setRotation] = useState(50);

  if (!activeProduct) return null;

  return (
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 z-20 pointer-events-auto">
      
      {/* Slider track */}
      <div className="relative w-full h-1 bg-white/20 rounded-full flex items-center">
        {/* Filled portion */}
        <div 
          className="absolute left-0 h-1 bg-white/60 rounded-l-full" 
          style={{ width: `${rotation}%` }} 
        />
        
        {/* Custom thumb */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={rotation}
          onChange={(e) => setRotation(Number(e.target.value))}
          className="absolute inset-0 w-full h-1 opacity-0 cursor-ew-resize z-10"
        />
        
        {/* Visible thumb */}
        <div 
          className="absolute w-6 h-6 bg-[#005e5e] border-2 border-white rounded-full shadow-lg pointer-events-none transition-transform"
          style={{ left: `calc(${rotation}% - 12px)` }}
        />
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-white/60 text-sm font-medium tracking-[0.2em] uppercase">
          Click & hold to rotate
        </p>
      </div>
    </div>
  );
};

export default Toolbar;
