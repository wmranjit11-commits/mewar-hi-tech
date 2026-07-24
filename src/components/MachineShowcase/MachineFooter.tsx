"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MachineCategory } from "./types";
import { cardTransition, footerContentVariants } from "./animations";
import BlobButton from "../ui/BlobButton";

interface MachineFooterProps {
  category: MachineCategory;
  isHovered: boolean;
}

export const MachineFooter: React.FC<MachineFooterProps> = ({
  category,
  isHovered,
}) => {
  return (
    <motion.div
      layout
      transition={cardTransition}
      className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 backdrop-blur-md bg-black/35 border-t border-white/10 flex flex-col justify-end overflow-hidden"
    >
      {/* Title & Arrow Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-white text-base sm:text-[17px] font-black uppercase tracking-wider select-none font-heading">
          {category.title}
        </h3>
        <motion.div
          animate={{ rotate: isHovered ? 45 : 0 }}
          transition={cardTransition}
          className="text-white shrink-0"
        >
          <ArrowRight size={18} className="stroke-[2.5]" />
        </motion.div>
      </div>

      {/* Expanded Description and CTA Link */}
      <AnimatePresence initial={false}>
        {isHovered && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={footerContentVariants}
            className="mt-3.5 space-y-4"
          >
            <p className="text-white/80 text-[11px] font-semibold leading-relaxed text-left max-w-sm select-none">
              {category.desc}
            </p>
            <Link href={category.to} className="cursor-pointer inline-block">
              <BlobButton variant="primary" className="!py-2.5 !px-6 text-[10px] font-black">
                <span>Read More</span>
                <ArrowRight size={12} className="stroke-[3]" />
              </BlobButton>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
