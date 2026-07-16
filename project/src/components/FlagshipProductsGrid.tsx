"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';



const products = [
  {
    name: 'Jaw Crusher B3',
    desc: 'Compact tracked primary jaw crusher for concrete recycling and construction aggregate.',
    image: '/images/double-toggle-oil-jaw-crusher.jpg',
    weight: '30t',
    drive: 'Hybrid',
    category: 'Crushers',
  },
  {
    name: 'Impact Crusher R3',
    desc: 'Highly mobile tracked impact crusher with secondary screen deck for aggregate grading.',
    image: '/images/horizontal-shaft-impactor.jpg',
    weight: '32t',
    drive: 'Hybrid',
    category: 'Crushers',
  },
  {
    name: 'Cone Crusher H4',
    desc: 'High-performance mobile cone crusher engineered for hard rock secondary reduction.',
    image: '/images/cone-crusher.jpg',
    weight: '42t',
    drive: 'Electric',
    category: 'Crushers',
  },
  {
    name: 'Jaw Crusher B5',
    desc: 'Heavy-duty primary tracked jaw crusher built to perform in the toughest mining quarries.',
    image: '/images/double-toggle-grease-jaw-crusher.jpg',
    weight: '50t',
    drive: 'Hybrid',
    category: 'Crushers',
  },
  {
    name: 'Classifying Screen C6',
    desc: 'High-frequency triple deck classifying screen for precise material grading and sizing.',
    image: '/images/vibrating-screen.jpg',
    weight: '31t',
    drive: 'Electric',
    category: 'Screens',
  },
  {
    name: 'Vibrating Feeder V8',
    desc: 'Controlled, uniform feeding of bulk material with integrated grizzly screen pre-selection.',
    image: '/images/vibro-feeder.jpg',
    weight: '24t',
    drive: 'Electric',
    category: 'Feeders',
  },
  {
    name: 'Conveyor Stacker S5',
    desc: 'Track-mounted mobile stockpiler conveyor for heavy-duty bulk materials handling.',
    image: '/images/belt-conveyor.jpg',
    weight: '18t',
    drive: 'Electric',
    category: 'Stackers',
  },
  {
    name: 'Sand Washer W2',
    desc: 'High-capacity sand washing system delivering clean, graded aggregate and manufactured sand.',
    image: '/images/sand-washer.jpg',
    weight: '22t',
    drive: 'Electric',
    category: 'Ancillary',
  },
];

const FlagshipProductsGrid: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F7F7F7] select-none border-t border-[#E4E4E4]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[#D89B00] font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
              Proven Models
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] mt-3 uppercase leading-none">
              Our top-performing machines
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-2 bg-[#232D39] hover:bg-[#1A222B] text-white font-extrabold text-xs px-6 py-2.5 rounded-full uppercase tracking-wider transition-colors duration-200"
          >
            <span>See all</span>
          </Link>
        </div>

        {/* 3 Products Grid - Perfect Template Notch Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="relative bg-white rounded-[28px] p-4 shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-gray-100/80 flex flex-col justify-between group hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Notched Category Tab (Simulates browser folder curves) */}
              <div className="absolute top-0 left-0 bg-white pt-2.5 pb-2 px-5 rounded-tl-[28px] rounded-br-[16px] text-gray-500 font-extrabold text-[9px] uppercase tracking-wider z-20
                before:content-[''] before:absolute before:top-0 before:left-full before:w-4 before:h-4 before:bg-transparent before:rounded-tl-[16px] before:shadow-[-8px_-8px_0_0_#ffffff]
                after:content-[''] after:absolute after:top-full after:left-0 after:w-4 after:h-4 after:bg-transparent after:rounded-tl-[16px] after:shadow-[-8px_-8px_0_0_#ffffff]">
                {item.category}
              </div>

              <div>
                {/* Image Container */}
                <div className="relative aspect-square w-full rounded-[20px] overflow-hidden mb-4 z-0 bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* Title & Drive Type Row */}
                <div className="flex items-center justify-between gap-2 mb-2 px-1">
                  <h3 className="font-heading font-extrabold text-sm text-[#111111] uppercase tracking-wide truncate">
                    {item.name}
                  </h3>
                  <span className="bg-[#232D39] text-white font-extrabold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0">
                    {item.drive}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-[11px] leading-relaxed mb-4 px-1 min-h-[50px]">
                  {item.desc}
                </p>

                {/* Tags Row */}
                <div className="flex flex-wrap gap-1.5 mb-6 px-1">
                  <span className="bg-[#FFF6D6] text-[#D89B00] font-extrabold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Weight: {item.weight}
                  </span>
                  <span className="bg-gray-100 text-gray-400 font-extrabold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Tracked
                  </span>
                </div>
              </div>

              {/* Bottom specifications button */}
              <Link
                href={`/products?model=${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="w-full bg-[#232D39] hover:bg-[#F4B400] text-white hover:text-black font-extrabold text-[10px] py-2.5 rounded-full uppercase tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-1.5"
              >
                <span>View Specifications</span>
                <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile See All Button */}
        <div className="flex sm:hidden justify-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#232D39] hover:bg-[#1A222B] text-white font-extrabold text-xs px-8 py-3 rounded-full uppercase tracking-wider transition-colors duration-200"
          >
            <span>See all</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProductsGrid;
