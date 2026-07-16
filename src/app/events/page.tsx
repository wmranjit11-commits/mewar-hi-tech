"use client";
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const upcomingEvents = [
  {
    title: 'EXCON 2026',
    date: 'December 12 - 16, 2026',
    location: 'BIEC, Bangalore, India',
    desc: 'South Asia’s largest construction equipment and technology trade show. Visiti our stall to witness live machinery demonstrations.',
  },
  {
    title: 'BAUMA 2026',
    date: 'April 07 - 13, 2026',
    location: 'Munich, Germany',
    desc: 'The world’s leading trade fair for construction machinery, building material machines, mining machines, and construction vehicles.',
  },
];

const pastExpos = [
  {
    title: 'IMME 2024',
    date: 'November 2024',
    location: 'Kolkata, India',
    desc: 'Showcased our latest heavy-duty crushing and screening technology for mining sectors.',
  },
  {
    title: 'MINEXPO International 2024',
    date: 'September 2024',
    location: 'Las Vegas, USA',
    desc: 'Connected with global partners and introduced the Kingson brand to North American mining operations.',
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-[#111111] select-none flex flex-col justify-between">
      <Header />

      <main className="pt-28 flex-grow">
        {/* Page Hero */}
        <section className="bg-gradient-to-r from-[#0c0e12] to-[#1a1f26] py-16 lg:py-24 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#F4B400] font-bold text-xs md:text-sm tracking-[0.2em] uppercase"
            >
              Events
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl sm:text-5xl font-extrabold uppercase mt-3 mb-6"
            >
              Exhibitions & Industry expos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            >
              Catch us live at international mining, construction, and heavy machinery exhibitions. Discover our products and speak directly with our engineering specialists.
            </motion.p>
          </div>
        </section>

        {/* Upcoming Exhibitions */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#111111] uppercase tracking-wide mb-12 text-center">
              Upcoming exhibitions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((ex, index) => (
                <motion.div
                  key={ex.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-[#E4E4E4] p-8 rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between min-h-[250px]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F4B400]" />
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-[#F4B400]" />
                        {ex.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-[#F4B400]" />
                        {ex.location}
                      </span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-[#111111] uppercase">
                      {ex.title}
                    </h3>
                    
                    <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
                      {ex.desc}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F4B400] hover:text-[#D89B00] uppercase tracking-wider transition-colors mt-6"
                  >
                    <span>Schedule a meeting</span>
                    <ArrowRight size={12} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Expos */}
        <section className="py-16 lg:py-24 bg-[#F7F7F7] border-t border-[#E4E4E4]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#111111] uppercase tracking-wide mb-12 text-center">
              Where we've been
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastExpos.map((ex, index) => (
                <motion.div
                  key={ex.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-[#E4E4E4] p-8 rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.01)] flex flex-col justify-between min-h-[220px]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                      <Award size={12} className="text-gray-400" />
                      <span>{ex.date}</span>
                      <span>&bull;</span>
                      <span>{ex.location}</span>
                    </div>

                    <h3 className="font-heading font-extrabold text-lg text-[#111111] uppercase">
                      {ex.title}
                    </h3>
                    
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {ex.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
