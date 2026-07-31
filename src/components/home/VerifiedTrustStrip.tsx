"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckSquare, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";

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
    <section className="py-12 bg-card border-b-4 border-border relative overflow-hidden select-none">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center divide-y md:divide-y-0 md:divide-x-2 divide-border">
          {TRUST_BADGES.map((badge, idx) => {
            const IconComp = badge.icon;
            return (
              <div
                key={badge.title + badge.subtitle}
                className="flex items-center justify-center gap-5 pt-6 md:pt-0 first:pt-0 px-6 group"
              >
                {/* Raw Icon Container */}
                <div className="text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <IconComp size={32} className="stroke-[2.5]" />
                </div>

                {/* Typography Block */}
                <div className="text-left">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground uppercase tracking-normal font-heading leading-tight">
                    {badge.title}
                  </h3>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide font-sans">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
