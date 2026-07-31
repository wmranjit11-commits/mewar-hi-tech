"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MachineCategory } from "./types";
import { MachineFooter } from "./MachineFooter";
import { cardTransition, hoverOverlayVariants } from "./animations";

interface MachineCardProps {
  category: MachineCategory;
  index: number;
  isHovered: boolean;
  isAnyHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export const MachineCard: React.FC<MachineCardProps> = ({
  category,
  index,
  isHovered,
  isAnyHovered,
  onHoverStart,
  onHoverEnd,
}) => {
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      router.push(category.to);
    }
  };

  return (
    <motion.div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      onClick={() => router.push(category.to)}
      tabIndex={0}
      role="button"
      aria-label={`Explore our ${category.title} solutions`}
      className="relative h-[480px] rounded-xl overflow-hidden cursor-pointer select-none border-2 border-border shadow-md group outline-none focus-visible:ring-2 focus-visible:ring-primary flex flex-col transition-[flex] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        flex: `${isHovered ? 2.2 : isAnyHovered ? 0.8 : 1} 1 0%`,
      }}
    >
      {/* Background Image Zooming on Hover */}
      <div className="absolute inset-0 w-full h-full z-0">
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={cardTransition}
          className="w-full h-full relative"
        >
          <Image
            src={category.image}
            alt={category.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={index === 0}
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Dark Ambient Overlay */}
      <motion.div
        initial="default"
        animate={isHovered ? "hovered" : "default"}
        variants={hoverOverlayVariants}
        transition={cardTransition}
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10 pointer-events-none"
      />

      {/* Category Icon Badge in Top-Left Corner (Solid, architectural) */}
      <div className="absolute top-5 left-5 z-20 bg-primary text-primary-foreground p-2.5 rounded shadow-sm group-hover:scale-105 transition-transform duration-300">
        {React.createElement(category.icon, { size: 18, strokeWidth: 2.5 })}
      </div>

      {/* Footer Element */}
      <MachineFooter category={category} isHovered={isHovered} />
    </motion.div>
  );
};
