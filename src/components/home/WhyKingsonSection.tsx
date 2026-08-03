"use client";

import React from "react";
import { Wrench, Settings, ClipboardCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../ui/Container";

const CARDS_DATA = [
  {
    icon: Wrench,
    title: "Heavy Machinery",
    subtitle: "High Capacity Equipment",
    description: "Wide range of high-capacity jaw crushers, cone units, screeners, and feeders built to withstand severe crushing environments.",
    link: "/products",
  },
  {
    icon: Settings,
    title: "Advanced Infrastructure",
    subtitle: "In-House Casting Foundry",
    description: "State-of-the-art casting foundry and assembly halls equipped with modern CNC tools and heavy lathe machines.",
    link: "/infrastructure/manufacturing",
  },
  {
    icon: ClipboardCheck,
    title: "Turnkey Projects",
    subtitle: "End-to-End Plant Engineering",
    description: "Complete plant installations spanning design layout, equipment manufacturing, field erection, and maintenance.",
    link: "/projects",
  },
];

export default function WhyKingsonSection() {
  return (
    <section 
      className="py-10 lg:py-16 text-white select-none relative"
      style={{
        backgroundImage: "url('/images/construction_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none" />
      
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-10 text-left space-y-2">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block font-sans">
            Why Partner With Us
          </span>
          <h2 className="common-heading text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
            Suppliers of Heavy Duty Crushing Plants
          </h2>
          <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed max-w-2xl pt-2">
            Engineering superiority with robust casting foundries, heavy manufacturing facilities, and turnkey project capabilities across India &amp; global markets.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS_DATA.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-card text-foreground p-6 lg:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                {/* Circular Icon */}
                <div className="w-16 h-16 rounded-full bg-muted/40 flex items-center justify-center text-foreground mb-5 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon size={28} className="stroke-[1.5]" />
                </div>

                {/* Text Content */}
                <h3 className="common-heading text-lg lg:text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-3">
                  {card.subtitle}
                </span>
                <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed font-medium mb-5">
                  {card.description}
                </p>

                {/* Explore Link */}
                <Link
                  href={card.link}
                  className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-wider"
                >
                  <span>Explore Specs</span>
                  <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
