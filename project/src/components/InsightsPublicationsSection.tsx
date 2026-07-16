"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';

const insights = [
  {
    title: 'Company Expansion: New Machinery Testing Yard Launched',
    date: 'January 14, 2026',
    image: '/images/events-1.jpg',
  },
  {
    title: 'Event Highlight: Mewar Hi-Tech Showcases Hybrid Crushers',
    date: 'February 03, 2026',
    image: '/images/events-2.jpg',
  },
  {
    title: 'Technical Guide: Maximizing Mobile Jaw Crusher Tooth Plate Life',
    date: 'March 20, 2026',
    image: '/images/events-3.jpg',
  },
];

const publications = [
  {
    title: 'Mewar General Catalog',
    size: 'PDF | 8.4 MB',
  },
  {
    title: 'Mobile Screens & Crushers Overview',
    size: 'PDF | 4.2 MB',
  },
  {
    title: 'After-Sales & Maintenance Catalog',
    size: 'PDF | 5.7 MB',
  },
];

const exhibitions = [
  {
    title: 'EXCON 2026',
    date: 'December 12 - 16, 2026',
    location: 'BIEC, Bangalore, India',
  },
  {
    title: 'BAUMA 2026',
    date: 'April 07 - 13, 2026',
    location: 'Munich, Germany',
  },
];

const InsightsPublicationsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white select-none border-t border-[#E4E4E4] space-y-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Sub-section 1: Insights */}
        <div className="space-y-10">
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111111] uppercase leading-none">
              Insights worth of{' '}
              <span className="italic font-serif text-[#D89B00] lowercase font-normal">
                exploring
              </span>
            </h2>
            <Link
              href="/blogs"
              className="bg-[#232D39] hover:bg-[#1A222B] text-white font-extrabold text-xs px-6 py-2.5 rounded-full uppercase tracking-wider transition-colors duration-200"
            >
              <span>See all</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-[#E4E4E4] overflow-hidden bg-white flex flex-col group hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-gray-400 text-xs font-semibold mb-2 block">{item.date}</span>
                    <h3 className="font-heading font-extrabold text-sm text-[#111111] mb-6 leading-snug group-hover:text-[#D89B00] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <Link
                    href="/blogs"
                    className="text-[#D89B00] hover:text-[#black] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E4E4E4] my-16" />

        {/* Grid for Publications & Exhibitions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sub-section 2: Publications (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-end justify-between">
              <h2 className="font-heading text-2xl font-extrabold text-[#111111] uppercase tracking-wide">
                Our publications
              </h2>
              <Link
                href="/about"
                className="bg-[#232D39] hover:bg-[#1A222B] text-white font-extrabold text-[10px] px-4 py-1.5 rounded-full uppercase tracking-wider transition-colors duration-200"
              >
                <span>See all</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="border border-[#E4E4E4] p-5 flex flex-col justify-between min-h-[160px] hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div>
                    <div className="w-8 h-8 flex items-center justify-center border border-red-200 text-red-500 bg-red-50 rounded-sm mb-4">
                      <Download size={16} />
                    </div>
                    <h4 className="font-heading font-extrabold text-xs text-[#111111] leading-snug group-hover:text-[#D89B00] transition-colors mb-2">
                      {pub.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                    {pub.size}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sub-section 3: Upcoming Exhibitions (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-heading text-2xl font-extrabold text-[#111111] uppercase tracking-wide">
              Upcoming exhibitions
            </h2>

            <div className="space-y-4">
              {exhibitions.map((ex, index) => (
                <motion.div
                  key={ex.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-[#E4E4E4] p-5 flex items-center justify-between hover:shadow-md transition-all group"
                >
                  <div className="space-y-2">
                    <h4 className="font-heading font-extrabold text-sm text-[#111111] uppercase tracking-wider group-hover:text-[#D89B00] transition-colors">
                      {ex.title}
                    </h4>
                    <div className="flex flex-col gap-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-gray-400" />
                        {ex.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-gray-400" />
                        {ex.location}
                      </span>
                    </div>
                  </div>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-[#F4B400] text-[#111111] group-hover:text-black transition-colors shrink-0 cursor-pointer">
                    <ArrowRight size={16} />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsightsPublicationsSection;
