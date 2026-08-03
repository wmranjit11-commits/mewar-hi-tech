"use client";

import React from "react";
import { Shield, Cog, TrendingUp, Headset, Award, Truck, Wrench, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const features = [
  {
    icon: Shield,
    title: "Built Tough",
    desc: "Built for durability in the harshest quarrying environments.",
  },
  {
    icon: Cog,
    title: "Low Operating Cost",
    desc: "Optimized fuel efficiency and minimal maintenance overhead.",
  },
  {
    icon: TrendingUp,
    title: "Maximum Productivity",
    desc: "High capacity, powerful output, and consistent grading results.",
  },
  {
    icon: Headset,
    title: "Global Support",
    desc: "Expert engineering service and genuine spare parts worldwide.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    desc: "ISO certified manufacturing and rigorous quality checks.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Efficient supply chain ensuring timely equipment delivery.",
  },
  {
    icon: Wrench,
    title: "Easy Maintenance",
    desc: "Designed for quick part replacement and minimal downtime.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "Advanced technology reducing emissions and environmental impact.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-card text-foreground py-6 lg:py-10 relative overflow-hidden select-none border-y border-border/80">
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 text-center space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block font-sans">
            The Kingson Advantage
          </span>
          <h2 className="common-heading text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed max-w-xl mx-auto">
            Delivering high-performance crushing technology engineered for durability, maximum uptime, and unmatched customer support across all sites.
          </p>
        </div>

        {/* 8 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div 
                  className="w-20 h-20 md:w-24 md:h-24 bg-primary text-primary-foreground flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <IconComponent size={36} strokeWidth={1.5} className="md:w-10 md:h-10" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
