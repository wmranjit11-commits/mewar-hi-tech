"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck, MapPin, Building2, ThumbsUp } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  review: string;
  image: string;
  projectTag: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Rajesh Mehta",
    role: "Managing Director",
    company: "Apex Mining & Aggregates Ltd.",
    location: "Rajasthan, India",
    rating: 5,
    review:
      "Mewar Hi-Tech's jaw & cone crusher setup has transformed our quarry operations. We achieved a 35% throughput increase with virtually zero unexpected downtime over 2 years of continuous operation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    projectTag: "300 TPH Plant",
  },
  {
    name: "Vikramaditya Singh",
    role: "Chief Operating Officer",
    company: "Deccan Infrastructure Projects",
    location: "Hyderabad, India",
    rating: 5,
    review:
      "Their track-mounted mobile screens and crushing units offer exceptional structural durability. The local technical support and spare parts availability in India are second to none.",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=200&auto=format&fit=crop",
    projectTag: "Track Mobile Plant",
  },
  {
    name: "Emmanuel Nkurunziza",
    role: "General Manager",
    company: "East African Quarry Solutions",
    location: "Dar es Salaam, Tanzania",
    rating: 5,
    review:
      "Importing the 250 TPH turnkey plant for our Tanzania quarry site was smooth and on-schedule. Mewar Hi-Tech delivered heavy-duty engineering that effortlessly handles hard basalt.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    projectTag: "Tanzania Export Site",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-8 lg:py-12 bg-gradient-to-b from-background via-muted/30 to-background border-b border-border/60 relative overflow-hidden select-none">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-extrabold uppercase tracking-widest">
              <ShieldCheck size={13} />
              <span>Verified Client Reviews</span>
            </div>
            <h2 className="common-heading text-3xl sm:text-4xl lg:text-5xl text-foreground font-black tracking-tight">
              Trusted By Industry Leaders
            </h2>
            <p className="text-sm text-muted-foreground font-medium max-w-xl leading-relaxed">
              Hear directly from quarry owners, mining executives, and infrastructure contractors who rely on our machinery daily.
            </p>
          </div>

          {/* Rating Summary Pill */}
          <div className="flex items-center gap-3 bg-card border border-border/80 p-3 px-5 rounded-2xl shadow-sm shrink-0 self-start md:self-end">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary" />
              ))}
            </div>
            <div className="text-left border-l border-border/60 pl-3">
              <span className="block text-sm font-extrabold text-foreground leading-none">
                4.9 / 5.0 Rating
              </span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                Based on 320+ Client Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-card rounded-3xl p-8 border border-border/80 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group text-left"
            >
              {/* Top Quote Icon Accent */}
              <div className="absolute top-6 right-6 text-muted/40 group-hover:text-primary/20 transition-colors">
                <Quote size={40} className="rotate-180" />
              </div>

              <div>
                {/* Project Tag Badge & Star Rating */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-black uppercase tracking-wider">
                    {t.projectTag}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-foreground/90 text-sm leading-relaxed mb-8 font-medium italic relative z-10">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-5 border-t border-border/60">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 shadow-xs shrink-0"
                />
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-foreground text-sm uppercase font-heading leading-tight truncate">
                      {t.name}
                    </h3>
                    <ShieldCheck size={14} className="text-primary shrink-0" />
                  </div>
                  <p className="text-muted-foreground text-[11px] font-bold truncate">
                    {t.role} • {t.company}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground/80 font-semibold mt-0.5">
                    <MapPin size={11} className="text-primary/80" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}