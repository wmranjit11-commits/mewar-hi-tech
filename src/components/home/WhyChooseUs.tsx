"use client";

import React from "react";
import { Shield, Cog, TrendingUp, Headset } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const features = [
  {
    icon: Shield,
    title: "BUILT TOUGH",
    desc: "Built for durability in the harshest quarrying environments.",
  },
  {
    icon: Cog,
    title: "LOW OPERATING COST",
    desc: "Optimized fuel efficiency and minimal maintenance overhead.",
  },
  {
    icon: TrendingUp,
    title: "MAXIMUM PRODUCTIVITY",
    desc: "High capacity, powerful output, and consistent grading results.",
  },
  {
    icon: Headset,
    title: "GLOBAL SUPPORT",
    desc: "Expert engineering service and genuine spare parts worldwide.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-card text-foreground py-8 lg:py-12 relative overflow-hidden select-none border-y border-border/80">
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block font-sans">
            The Kingson Advantage
          </span>
          <h2 className="common-heading text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-xl">
            Delivering high-performance crushing technology engineered for durability, maximum uptime, and unmatched customer support across all sites.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-border/60">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 lg:px-10 lg:py-6 flex flex-col items-start text-left space-y-4 group hover:bg-muted/20 transition-colors rounded-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300">
                  <IconComponent size={22} className="stroke-[2.2]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider font-sans leading-none group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-[220px] font-semibold">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
