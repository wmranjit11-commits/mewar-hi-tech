"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import { Star, ShieldCheck, MapPin, User } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  experience: string;
  rating: number;
  review: string;
  projectTag: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Rajesh Mehta",
    role: "Managing Director",
    company: "Apex Mining & Aggregates Ltd.",
    location: "Rajasthan, India",
    experience: "5+ Years with Mewar Machinery",
    rating: 5,
    review:
      "Working with Mewar Hi-Tech has transformed our quarry operations. We achieved a 35% throughput increase with virtually zero unexpected downtime over 2 years of continuous heavy operation.",
    projectTag: "300 TPH Plant",
  },
  {
    name: "Vikramaditya Singh",
    role: "Chief Operating Officer",
    company: "Deccan Infrastructure Projects",
    location: "Hyderabad, India",
    experience: "4+ Years with Mewar Machinery",
    rating: 5,
    review:
      "Their track-mounted mobile screens and crushing units offer exceptional structural durability. The local technical support and spare parts availability in India are second to none.",
    projectTag: "Track Mobile Plant",
  },
  {
    name: "Emmanuel Nkurunziza",
    role: "General Manager",
    company: "East African Quarry Solutions",
    location: "Dar es Salaam, Tanzania",
    experience: "3+ Years with Mewar Machinery",
    rating: 5,
    review:
      "Importing the 250 TPH turnkey plant for our Tanzania quarry site was smooth and on-schedule. Mewar Hi-Tech delivered heavy-duty engineering that effortlessly handles hard basalt.",
    projectTag: "Tanzania Export Site",
  },
  {
    name: "Sneha Jadhav",
    role: "Design & Plant Lead",
    company: "Marwar Infra & Cement",
    location: "Gujarat, India",
    experience: "6+ Years with Mewar Machinery",
    rating: 5,
    review:
      "Mewar Hi-Tech gives us the platform to learn, innovate and scale our plant outputs. The supportive technical team and continuous engineering improvements strengthen our site productivity.",
    projectTag: "VSI Sand Plant",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 lg:py-16 bg-muted/30 border-b border-border relative overflow-hidden select-none">
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-widest">
              <ShieldCheck size={14} />
              <span>VERIFIED CLIENT REVIEWS</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-[#0A1A3B] dark:text-white font-bold tracking-tight uppercase">
              TRUSTED BY INDUSTRY LEADERS
            </h2>
            <p className="text-sm text-muted-foreground font-medium max-w-xl leading-relaxed">
              Hear directly from quarry owners, mining executives, and infrastructure contractors who rely on our machinery daily.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 bg-card border border-border/80 p-4 px-6 rounded-2xl shadow-sm shrink-0 self-start md:self-end">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <div className="text-left border-l border-border/60 pl-4">
              <span className="block text-base font-bold text-foreground leading-none">
                4.9 / 5.0 Rating
              </span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                BASED ON 320+ CLIENT REVIEWS
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-card rounded-2xl p-6 sm:p-7 border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group text-left"
            >
              {/* Top Quote Icon Accent */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                  {t.projectTag}
                </span>
                <span className="text-primary font-serif text-3xl leading-none font-bold select-none">
                  “
                </span>
              </div>

              {/* Review Quote Content */}
              <div className="flex-1 mb-6">
                <p className="text-foreground/90 text-xs sm:text-sm leading-relaxed font-medium">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Bottom Author Section */}
              <div className="pt-4 border-t border-border/60 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Default Clean Icon Avatar */}
                  <div className="w-11 h-11 rounded-xl bg-slate-200 dark:bg-slate-800 border border-border/80 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0 shadow-inner">
                    <User size={22} className="stroke-[2]" />
                  </div>

                  {/* Author Details */}
                  <div className="overflow-hidden">
                    <h3 className="font-bold text-foreground text-sm leading-snug truncate">
                      {t.name}
                    </h3>
                    <p className="text-muted-foreground text-[11px] font-semibold truncate">
                      {t.role}
                    </p>
                    <p className="text-[10px] text-muted-foreground/80 font-medium truncate">
                      {t.experience}
                    </p>
                  </div>
                </div>

                {/* 5-Star Rating below info */}
                <div className="flex items-center gap-1 text-primary pt-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}