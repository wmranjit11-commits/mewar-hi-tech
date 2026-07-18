"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
  {
    title: "EXCON 2026",
    date: "December 12 - 16, 2026",
    location: "BIEC, Bangalore, India",
    desc: "South Asia’s largest construction equipment and technology trade show. Visit our stall to witness live machinery demonstrations.",
  },
  {
    title: "BAUMA 2026",
    date: "April 07 - 13, 2026",
    location: "Munich, Germany",
    desc: "The world’s leading trade fair for construction machinery, building material machines, mining machines, and construction vehicles.",
  },
];

const pastExpos = [
  {
    title: "IMME 2024",
    date: "November 2024",
    location: "Kolkata, India",
    desc: "Showcased our latest heavy-duty crushing and screening technology for mining sectors.",
  },
  {
    title: "MINEXPO International 2024",
    date: "September 2024",
    location: "Las Vegas, USA",
    desc: "Connected with global partners and introduced the Kingson brand to North American mining operations.",
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-foreground select-none flex flex-col justify-between">
      <Header />

      <main className="pt-28 flex-grow">
        {/* Page Hero */}
        <section className="bg-secondary py-16 lg:py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <img src="/images/hero_crusher.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-bold text-xs tracking-widest uppercase block"
            >
              Events
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl sm:text-5xl font-black uppercase mt-3 mb-6 text-secondary-foreground"
            >
              Exhibitions &amp; Industry Expos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-secondary-foreground/75 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Catch us live at international mining, construction, and heavy machinery exhibitions. Discover our products and speak directly with our engineering specialists.
            </motion.p>
          </div>
        </section>

        {/* Upcoming Exhibitions */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-2xl lg:text-3xl font-black text-foreground uppercase tracking-wide mb-12 text-center">
              Upcoming Exhibitions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((ex, index) => (
                <motion.div
                  key={ex.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-border p-8 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between min-h-[250px]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-primary" />
                        {ex.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-primary" />
                        {ex.location}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-xl text-foreground uppercase">
                      {ex.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs leading-relaxed max-w-xl">
                      {ex.desc}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover uppercase tracking-wider transition-colors mt-6"
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
        <section className="py-16 lg:py-24 bg-muted border-t border-border/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-2xl lg:text-3xl font-black text-foreground uppercase tracking-wide mb-12 text-center">
              Where We&apos;ve Been
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastExpos.map((ex, index) => (
                <motion.div
                  key={ex.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border p-8 rounded-2xl shadow-sm flex flex-col justify-between min-h-[220px]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <Award size={12} className="text-primary" />
                      <span>{ex.date}</span>
                      <span>&bull;</span>
                      <span>{ex.location}</span>
                    </div>

                    <h3 className="font-heading font-black text-lg text-foreground uppercase">
                      {ex.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs leading-relaxed">
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
