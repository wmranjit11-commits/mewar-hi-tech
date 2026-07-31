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
    <section className="py-8 lg:py-12 bg-gradient-to-b from-background via-muted/30 to-background border-b border-border/60 select-none">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block font-sans">
            Why Partner With Us
          </span>
          <h2 className="common-heading text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold tracking-tight">
            Suppliers of Heavy Duty Crushing Plants
          </h2>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-xl">
            Engineering superiority with robust casting foundries, heavy manufacturing facilities, and turnkey project capabilities across India &amp; global markets.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS_DATA.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-8 lg:p-9 rounded-xl bg-card border border-border/80 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between items-start text-left space-y-6 group relative"
              >
                <div className="space-y-5">
                  {/* Icon wrapper */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300 shadow-xs">
                    <Icon size={26} className="stroke-[2.2]" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">
                      {card.subtitle}
                    </span>
                    <h3 className="common-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed font-semibold">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Explore Link */}
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-foreground group-hover:text-primary transition-colors pt-2 uppercase tracking-wider"
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
