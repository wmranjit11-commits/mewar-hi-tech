"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Hammer, Mountain, Grid, Waves } from 'lucide-react';

const industries = [
  {
    icon: Recycle,
    name: 'Recycling',
    desc: 'Mobile processing solutions for demolition waste, concrete, and recycled asphalt.',
  },
  {
    icon: Hammer,
    name: 'Road Construction',
    desc: 'High-performance grading equipment for highways, paving base, and infrastructure.',
  },
  {
    icon: Grid,
    name: 'Aggregates',
    desc: 'Precision crushing and sizing for concrete aggregate and building materials.',
  },
  {
    icon: Waves,
    name: 'Sand & Gravel',
    desc: 'Reliable mobile machinery for sand washing, screening, and wet gravel sizing.',
  },
  {
    icon: Mountain,
    name: 'Quarrying',
    desc: 'Heavy-duty primary jaw and cone crushers built for blasting and mining applications.',
  },
];

const IndustriesGrid: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white select-none border-t border-[#E4E4E4]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-[#D89B00] font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
            Industries We Serve
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3 uppercase leading-tight">
            Powering Heavy Sectors
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white border border-[#E4E4E4] p-8 rounded-none hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Yellow top accent indicator line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F4B400] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-[#E4E4E4] text-[#D89B00] group-hover:border-[#F4B400] transition-colors mb-6 shrink-0">
                <ind.icon size={22} strokeWidth={1.5} />
              </div>

              {/* Name */}
              <h3 className="font-heading font-extrabold text-[#111111] text-base mb-3 uppercase tracking-wide">
                {ind.name}
              </h3>

              {/* Description */}
              <p className="text-[#666666] text-xs leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;