"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const YellowDealerBanner: React.FC = () => {
  return (
    <section 
      className="relative py-12 select-none overflow-hidden bg-gradient-to-r from-[#F4B400] via-[#F8C025] to-[#F4B400] border-y border-[#D89B00]/30 shadow-sm"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-20 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-20c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm20 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' fill='%23d89b00' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E"),
          linear-gradient(to right, #F4B400, #F8C025, #F4B400)
        `
      }}
    >
      {/* Decorative left/right soft glows */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Text */}
        <motion.h3
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-lg md:text-xl lg:text-2xl font-black text-[#111111] uppercase tracking-[0.08em] text-center md:text-left"
        >
          Find an authorized Mewar Hi-Tech Dealer
        </motion.h3>

        {/* Right Button */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#232D39] hover:bg-[#111111] text-white font-extrabold text-xs md:text-sm px-8 py-4 rounded-full uppercase tracking-wider transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.15)] border border-[#232D39] hover:border-[#111111] hover:scale-103"
          >
            <span>Dealer locator</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default YellowDealerBanner;
