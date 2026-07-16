"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: 'Screens',
    image: '/images/screeners_category.png',
    to: '/products?category=screens',
  },
  {
    title: 'Crushers',
    image: '/images/crushers_category.png',
    to: '/products?category=crushers',
  },
  {
    title: 'Shredders',
    image: '/images/belt-conveyor.jpg',
    to: '/products?category=shredders',
  },
  {
    title: 'Ancillary equipment',
    image: '/images/feeders_category.png',
    to: '/products?category=ancillary',
  },
];

const ExploreMachinesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="explore-machines" className="py-16 lg:py-24 bg-[#F7F7F7] select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] uppercase tracking-wide">
            Find the right machine for your job
          </h2>
        </motion.div>

        {/* Accordion Flex Grid (Expanding on hover on desktop) */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 h-auto lg:h-[450px]">
          {categories.map((cat, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;
            const isOtherHovered = isAnyHovered && !isHovered;

            // Flex classes for horizontal desktop expanding effect
            const flexClass = isHovered
              ? 'lg:flex-[2.2]'
              : isOtherHovered
              ? 'lg:flex-[0.6]'
              : 'lg:flex-1';

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative h-[300px] sm:h-[380px] lg:h-full rounded-2xl overflow-hidden group shadow-sm border border-gray-200 cursor-pointer transition-all duration-500 ease-in-out ${flexClass}`}
              >
                {/* Background image */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0"
                />
                
                {/* Permanent subtle bottom gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10" />
                
                {/* Responsive Solid Hover Dimmer Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 z-10 ${
                  isHovered ? 'bg-black/0' : isOtherHovered ? 'bg-black/50' : 'bg-black/25'
                }`} />

                {/* Card Content Overlay */}
                <Link
                  href={cat.to}
                  className="absolute inset-0 z-20 p-6 flex items-end justify-between text-white"
                >
                  {/* Category Title */}
                  <span className={`font-heading text-lg lg:text-xl font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    isOtherHovered ? 'opacity-40 scale-95' : 'opacity-100 scale-100'
                  }`}>
                    {cat.title}
                  </span>
                  
                  {/* Yellow Arrow Circle */}
                  <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-[#F4B400] group-hover:text-black transition-colors duration-300 shrink-0">
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* See All Button */}
        <div className="flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#232D39] hover:bg-[#1A222B] text-white font-extrabold text-xs md:text-sm px-8 py-3.5 rounded-full uppercase tracking-wider transition-colors duration-200"
          >
            <span>See all</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreMachinesSection;
