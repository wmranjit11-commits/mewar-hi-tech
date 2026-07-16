"use client";
import React from 'react';
import { motion } from 'framer-motion';

const RevolutionBanner: React.FC = () => {
  return (
    <section 
      className="relative py-24 overflow-hidden select-none bg-[#090b0e] border-b border-white/5"
      style={{
        backgroundImage: `
          linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center center'
      }}
    >
      {/* Radial soft emerald-green glowing lights in the background */}
      <div className="absolute left-[30%] top-[-20%] w-[500px] h-[500px] bg-emerald-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[30%] bottom-[-20%] w-[500px] h-[500px] bg-teal-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Text */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-[0.25em] text-center leading-none"
        >
          Join the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 drop-shadow-[0_0_20px_rgba(52,211,153,0.35)]">
            revolution
          </span>
          .
        </motion.h2>
      </div>
    </section>
  );
};

export default RevolutionBanner;
