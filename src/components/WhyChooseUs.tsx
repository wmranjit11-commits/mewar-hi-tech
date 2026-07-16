"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const items = [
  {
    num: '01',
    title: 'Remote monitoring',
    desc: 'Live telemetry tracking location, productivity metrics, and fuel usage for your entire fleet.',
  },
  {
    num: '02',
    title: 'Drive systems',
    desc: 'Innovative diesel-electric, plug-in hybrid, and optimized direct-drive configurations.',
  },
  {
    num: '03',
    title: 'Fuel efficiency',
    desc: 'Save up to 70% in fuel expenses by switching to our electric e-drive mobile systems.',
  },
  {
    num: '04',
    title: 'Cost savings',
    desc: 'Simplified drivetrains with fewer components reducing maintenance and wear costs.',
  },
  {
    num: '05',
    title: 'Mobile technology',
    desc: 'Lighter shipping weights and rapid hydraulic setup times for optimal job mobility.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0c0e12] select-none border-t-2 border-[#F4B400]/20 relative">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#F4B400]/40 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-white leading-tight uppercase max-w-4xl tracking-wide"
          >
            Our promise of performance in every detail means we go the extra mile to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4B400] via-[#F8C025] to-[#FFF0B3] font-serif italic lowercase font-normal">
              set the standard
            </span>{' '}
            within our sector.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="shrink-0"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#F4B400] hover:bg-transparent text-black hover:text-[#F4B400] border border-[#F4B400] font-extrabold text-xs md:text-sm px-8 py-3.5 rounded-full uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <span>About us</span>
            </Link>
          </motion.div>
        </div>

        {/* 5 Columns Technical Grid - Editorial Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pt-12">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border-t border-white/10 pt-6 group hover:border-[#F4B400]/40 transition-colors duration-300"
            >
              {/* Index Number */}
              <span className="font-mono text-xs text-[#F4B400]/70 tracking-widest block mb-3 font-bold">
                {item.num}
              </span>
              
              {/* Title */}
              <h3 className="font-heading text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#F4B400] transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/50 text-[11px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;