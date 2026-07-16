"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SectorGrid: React.FC = () => {
  return (
    <section className="py-12 bg-white select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[500px]">
          
          {/* Card 1: Left Card (Full Height, spans 3 columns, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-3 lg:row-span-2 relative rounded-[20px] overflow-hidden group shadow-sm border border-gray-100 min-h-[380px] lg:min-h-full"
          >
            {/* Background image */}
            <img
              src="/images/cone-crusher-1.jpg"
              alt="Lowest energy consumption"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 z-0"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-transparent z-10" />

            {/* Top-left aligned text content */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-start items-start text-left">
              <h3 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-tight">
                Lowest energy<br />consumption
              </h3>
              <p className="text-white/80 text-xs lg:text-sm mb-6 leading-relaxed max-w-xs">
                Our promise of performance in every detail means we go the extra mile to set the standard within our sector.
              </p>
              <Link
                href="/about"
                className="text-[#F4B400] hover:text-[#D89B00] text-xs lg:text-sm font-extrabold uppercase tracking-wider transition-colors"
              >
                Read more
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Top Right (Wide Card, spans 9 columns, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 lg:col-span-9 relative rounded-[20px] overflow-hidden group shadow-sm border border-gray-100 min-h-[200px] lg:min-h-full"
          >
            {/* Background image */}
            <img
              src="/images/how-we-work-bg.jpg"
              alt="Sustainable drive systems"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 z-0"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Center aligned text content */}
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center items-center text-center">
              <h3 className="font-heading text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-none">
                Sustainable drive systems
              </h3>
              <Link
                href="/about"
                className="text-[#F4B400] hover:text-[#D89B00] text-xs lg:text-sm font-extrabold uppercase tracking-wider transition-colors mt-3"
              >
                Read more
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Bottom Left-Center (Spans 3 columns, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-12 md:col-span-4 lg:col-span-3 relative rounded-[20px] overflow-hidden group shadow-sm border border-gray-100 min-h-[200px] lg:min-h-full"
          >
            {/* Background image */}
            <img
              src="/images/about-mewar-hi-tech-3.jpg"
              alt="Lower Lifetime Costs"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 z-0"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-black/65 z-10" />

            {/* Center aligned text content */}
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center items-center text-center">
              <h3 className="font-heading text-xl lg:text-2xl font-extrabold text-white mb-2 leading-tight">
                Lower Lifetime<br />Costs
              </h3>
              <Link
                href="/about"
                className="text-[#F4B400] hover:text-[#D89B00] text-xs font-extrabold uppercase tracking-wider transition-colors mt-2"
              >
                Read more
              </Link>
            </div>
          </motion.div>

          {/* Card 4: Bottom Center-Right (Spans 3 columns, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 md:col-span-4 lg:col-span-3 relative rounded-[20px] overflow-hidden group shadow-sm border border-gray-100 min-h-[200px] lg:min-h-full"
          >
            {/* Background image */}
            <img
              src="/images/about-mewar-hi-tech-2.jpg"
              alt="Remote monitoring & Tracking"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 z-0"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-black/65 z-10" />

            {/* Center aligned text content */}
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center items-center text-center">
              <h3 className="font-heading text-xl lg:text-2xl font-extrabold text-white mb-2 leading-tight">
                Remote monitoring<br />& Tracking
              </h3>
              <Link
                href="/about"
                className="text-[#F4B400] hover:text-[#D89B00] text-xs font-extrabold uppercase tracking-wider transition-colors mt-2"
              >
                Read more
              </Link>
            </div>
          </motion.div>

          {/* Card 5: Bottom Right (Spans 3 columns, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="col-span-12 md:col-span-4 lg:col-span-3 relative rounded-[20px] overflow-hidden group shadow-sm border border-gray-100 min-h-[200px] lg:min-h-full"
          >
            {/* Background image */}
            <img
              src="/images/after-sales-2.jpg"
              alt="Join the e-volution"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 z-0"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Center aligned text content */}
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center items-center text-center">
              <h3 className="font-heading text-xl lg:text-2xl font-extrabold text-white mb-2 leading-tight">
                Join the e-<br />volution
              </h3>
              <Link
                href="/about"
                className="text-[#F4B400] hover:text-[#D89B00] text-xs font-extrabold uppercase tracking-wider transition-colors mt-2"
              >
                Read more
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SectorGrid;
