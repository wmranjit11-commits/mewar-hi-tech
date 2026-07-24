"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckSquare, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

const TRUST_BADGES = [
  {
    title: "LEADING PROVIDER",
    subtitle: "OF INDUSTRIAL SOLUTIONS",
    icon: CheckSquare,
    badgeText: "Verified Quality",
  },
  {
    title: "NUMBER #1",
    subtitle: "SUPPLIER IN INDIA",
    icon: CheckSquare,
    badgeText: "Market Leader",
  },
  {
    title: "CERTIFIED",
    subtitle: "ISO 9001:2008",
    icon: CheckSquare,
    badgeText: "Global Standard",
  },
];

export default function VerifiedTrustStrip() {
  return (
    <section className="py-10 bg-card border-y border-border/80 relative overflow-hidden select-none">
      {/* Background Subtle Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-border/60">
          {TRUST_BADGES.map((badge, idx) => {
            const IconComp = badge.icon;
            return (
              <motion.div
                key={badge.title + badge.subtitle}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center justify-center gap-4 pt-6 md:pt-0 first:pt-0 px-4 group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Checkbox Icon Container matching attached reference */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 shadow-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <IconComp size={24} className="stroke-[2.5]" />
                </div>

                {/* Typography Block */}
                <div className="text-left">
                  <h3 className="text-lg lg:text-xl font-black text-foreground uppercase tracking-tight font-heading leading-none">
                    {badge.title}
                  </h3>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-1 font-sans">
                    {badge.subtitle}
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
