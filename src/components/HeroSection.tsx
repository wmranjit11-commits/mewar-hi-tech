"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[600px] lg:h-[750px] w-full flex items-center overflow-hidden bg-[#111111] select-none">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/hero_crusher.png"
          alt="Heavy duty crawler crusher in action"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 uppercase"
          >
            Innovative Mobile Crushing & Screening Solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-white/90 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl"
          >
            Performance in every detail - discover how our heavy-duty mobile crushers and screeners optimize your industrial job site.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#F4B400] hover:bg-[#D89B00] text-black font-extrabold px-6 py-4 rounded-full uppercase tracking-wider text-xs md:text-sm transition-transform hover:scale-105 duration-200 shadow-lg"
            >
              <span>See all Mewar machines</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;