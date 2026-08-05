"use client";

import React, { useState } from "react";
import {
  Building2,
  Handshake,
  Wrench,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowUpRight,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const LEADERSHIP_MEMBERS = [
  {
    id: "chatar-singh",
    department: "EXECUTIVE BOARD",
    icon: Building2,
    name: "Mr. Chatar Singh Rathore",
    role: "Chairman & Managing Director (CMD)",
    image: "/images/teams/default-avatar.svg",
    initials: "CR",
    avatarBg: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
    gradientRing: "from-amber-500 to-yellow-600",
    focusTag: "Strategic Vision & Governance",
  },
  {
    id: "vaibhav-singh",
    department: "MANAGING DIRECTOR",
    icon: Handshake,
    name: "Mr. Vaibhav Singh Rathore",
    role: "Managing Director (MD)",
    image: "/images/teams/default-avatar.svg",
    initials: "VR",
    avatarBg: "from-blue-500/20 via-indigo-500/10 to-cyan-500/20",
    gradientRing: "from-blue-600 to-indigo-700",
    focusTag: "Corporate Expansion & Growth",
  },
  {
    id: "sonu-singh",
    department: "PRODUCTION & TECHNICAL",
    icon: Wrench,
    name: "Mr. Sonu Singh Chundawat",
    role: "Production Head",
    image: "/images/teams/default-avatar.svg",
    initials: "SC",
    avatarBg: "from-emerald-500/20 via-teal-500/10 to-green-500/20",
    gradientRing: "from-emerald-500 to-teal-700",
    focusTag: "Plant Quality & Engineering",
  },
];

export default function TeamSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-6 lg:py-10 bg-[#FBFAF7] dark:bg-[#0B1020] relative overflow-hidden border-b border-border/60 transition-colors duration-500">
      {/* ── Reusable Section Background (Grid + Blobs + Corners) ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Masked 64px Grid Pattern */}
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 10%, transparent 75%)",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 10%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0 block dark:hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16,27,61,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,27,61,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 10%, transparent 75%)",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 10%, transparent 75%)",
          }}
        />

        {/* Top-Right Gold Blob */}
        <div className="absolute w-[420px] h-[420px] -top-[160px] -right-[120px] rounded-full blur-[110px] bg-[#E7B564] opacity-25 dark:opacity-18 transition-all duration-500" />

        {/* Bottom-Left Blue Blob */}
        <div className="absolute w-[380px] h-[380px] -bottom-[180px] -left-[140px] rounded-full blur-[110px] bg-[#4B5FD9] dark:bg-[#5B72FF] opacity-15 dark:opacity-22 transition-all duration-500" />

        {/* Top-Left Gold Corner Accent */}
        <span className="absolute top-8 left-6 w-14 h-14 border-t-[1.5px] border-l-[1.5px] border-[rgba(217,154,61,0.55)] dark:border-[rgba(231,181,100,0.55)] opacity-50" />

        {/* Bottom-Right Blue Corner Accent */}
        <span className="absolute bottom-8 right-6 w-14 h-14 border-b-[1.5px] border-r-[1.5px] border-[rgba(75,95,217,0.35)] dark:border-[rgba(91,114,255,0.45)] opacity-50" />
      </div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 mb-8 lg:mb-10 px-4 mt-4">
          <div className="inline-flex items-center gap-2">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              OUR TEAM. YOUR SUPPORT.
            </span>
            <div className="w-8 h-[2px] bg-primary rounded-none" />
          </div>

          <h2 className="common-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tight">
            EXECUTIVE LEADERSHIP DIRECTORY
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Connect with the right leadership for your specific needs. Our executive leaders are ready to guide your crushing and screening solutions.
          </p>
        </div>

        {/* 3 Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {LEADERSHIP_MEMBERS.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative bg-card rounded-[18px] p-6 border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-sm hover:shadow-xl ${
                  isHovered ? "border-primary shadow-lg ring-1 ring-primary/30" : "border-border/80"
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Department Name + Accent Line + Arrow */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/40">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-300">
                        <Icon size={20} className="stroke-[2.2]" />
                      </div>
                      <div>
                        <h3 className="font-sans text-xs font-bold text-[#0A1A3B] dark:text-white tracking-wider uppercase">
                          {item.department}
                        </h3>
                        <div className="w-7 h-[2px] bg-primary rounded-full mt-1 group-hover:w-12 transition-all duration-300" />
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Main Card Content: Avatar + Leadership Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar Container */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-border/80 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0 overflow-hidden shadow-inner">
                      <svg className="w-10 h-10 text-slate-400 dark:text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>

                    {/* Name and Designation */}
                    <div className="space-y-1 text-left min-w-0 flex-1">
                      <h4 className="font-sans font-bold text-[#0A1A3B] dark:text-white text-sm sm:text-base group-hover:text-primary transition-colors duration-300 uppercase tracking-tight leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-xs font-semibold text-muted-foreground leading-snug">
                        {item.role}
                      </p>

                      {/* Focus Tag Pill */}
                      <div className="pt-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted/60 text-muted-foreground border border-border/60 whitespace-nowrap">
                          <Award size={11} className="shrink-0 text-primary" />
                          <span className="truncate">{item.focusTag}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Response Assurance Bar */}
        <div className="mt-8 pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-primary shrink-0" />
            <span>We ensure your query reaches the right leadership team for a quick and effective response.</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} className="text-primary shrink-0" />
            <span>Average Response Time: <strong className="text-foreground">Within 24 Hours</strong></span>
          </div>
        </div>
      </Container>
    </section>
  );
}




