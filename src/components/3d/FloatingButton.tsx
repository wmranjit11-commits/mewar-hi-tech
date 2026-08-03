"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cuboid, ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const FloatingButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isProductPage = pathname?.includes("product") || pathname?.includes("investors") || pathname === "/";

  if (!isProductPage) return null; // Don't show if not on product page

  return (
    <motion.button
      onClick={() => { window.location.href = "/3d-experience"; }}
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 pl-4 pr-5 py-3 rounded-full overflow-hidden
                 bg-secondary/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                 hover:shadow-[0_12px_48px_rgba(252,185,0,0.3)] transition-shadow duration-500"
      initial={{ y: 50, opacity: 0 }}
      animate={{ 
        y: [0, -8, 0], 
        opacity: 1 
      }}
      transition={{ 
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: { duration: 0.5 }
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated Glow Background on Hover */}
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon Container with Rotation */}
      <motion.div 
        className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Cuboid size={20} />
      </motion.div>

      {/* Text */}
      <div className="relative z-10 flex items-center overflow-hidden">
        <span className="font-semibold text-white tracking-wide text-sm whitespace-nowrap">
          3D Product Experience
        </span>
        
        {/* Arrow Slide */}
        <motion.div 
          className="ml-2 text-primary"
          initial={{ x: -10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight size={16} />
        </motion.div>
      </div>

      {/* Pulse Glow Effect (Idle) */}
      <motion.div 
        className="absolute inset-0 border-2 border-primary rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

export default FloatingButton;
