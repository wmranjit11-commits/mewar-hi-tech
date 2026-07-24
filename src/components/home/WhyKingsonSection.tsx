"use client";

import React from "react";
import { Wrench, Settings, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

const CARDS_DATA = [
  {
    icon: Wrench,
    title: "Heavy Machinery",
    description: "Wide range of high-capacity jaw crushers, cone units, screeners, and feeders built to withstand severe crushing environments.",
  },
  {
    icon: Settings,
    title: "Advanced Infrastructure",
    description: "State-of-the-art casting foundry and assembly halls equipped with modern CNC tools and heavy lathe machines.",
  },
  {
    icon: ClipboardCheck,
    title: "Turnkey Projects",
    description: "Complete plant installations spanning design layout, equipment manufacturing, field erection, and maintenance.",
  },
];

export default function WhyKingsonSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Why Partner With Us
          </span>
          <h2 className="common-heading text-3xl sm:text-4xl text-foreground mt-2">
            Suppliers of Stone Crusher Plants
          </h2>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS_DATA.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border/80 shadow-xs hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-start text-left space-y-5 group"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300">
                  <Icon size={22} className="stroke-[2.2]" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="common-heading text-lg font-black text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed font-semibold">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
