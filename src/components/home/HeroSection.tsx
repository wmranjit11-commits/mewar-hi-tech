"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Users } from "lucide-react";
import Link from "next/link";
import BlobButton from "@/components/ui/BlobButton";

// Custom Star Trophy Outline
const TrophyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a6 6 0 0 1 6 6v3.5c0 2.5-2 4.5-4.5 4.5h-3C7.99 16 6 14 6 11.5V8a6 6 0 0 1 6-6z" />
    <polygon points="12 6.5 13.2 8.9 15.8 9.3 13.9 11.2 14.3 13.8 12 12.6 9.7 13.8 10.1 11.2 8.2 9.3 10.8 8.9" fill="currentColor" />
  </svg>
);

// Custom Crawler Crusher Tracks Outline
const CrawlerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {/* Tracks at the bottom */}
    <rect x="3" y="15" width="18" height="4" rx="1.5" />
    <line x1="6" y1="15" x2="6" y2="19" />
    <line x1="10" y1="15" x2="10" y2="19" />
    <line x1="14" y1="15" x2="14" y2="19" />
    <line x1="18" y1="15" x2="18" y2="19" />
    {/* Machine chassis structure */}
    <path d="M5 15V9h8l2 3h4v3" />
    {/* Loader/Conveyor element */}
    <path d="M15 9l-5-5H5" />
    <circle cx="5" cy="4" r="0.75" fill="currentColor" />
  </svg>
);

const stats = [
  { value: "35+", label: "Years of Excellence", iconComponent: ({ className }: { className?: string }) => <TrophyIcon className={className} /> },
  { value: "5000+", label: "Machines Delivered", iconComponent: ({ className }: { className?: string }) => <CrawlerIcon className={className} /> },
  { value: "80+", label: "Countries", iconComponent: ({ className }: { className?: string }) => <Globe className={className} strokeWidth={1.8} /> },
  { value: "120+", label: "Global Dealers", iconComponent: ({ className }: { className?: string }) => <Users className={className} strokeWidth={1.8} /> },
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative z-30 bg-background select-none pt-28 pb-16 lg:pt-36 lg:pb-24">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          src="/images/hero-crusher.webp"
          alt="Keestrack Crawler Crusher background"
          className="w-full h-full object-cover object-center"
        />
        {/* Slanted gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1D20]/95 via-[#1A1D20]/75 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Hero Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full flex flex-col lg:flex-row justify-between items-center">
        
        {/* Left Content Column */}
        <div className="max-w-xl text-white text-left self-start lg:self-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-bold tracking-widest text-xs mb-3 uppercase"
          >
            Engineered to Perform
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="common-heading text-4xl sm:text-5xl lg:text-6xl leading-[0.90] mb-4 tracking-wide"
          >
            BUILT TO <span className="text-primary">CRUSH.</span>
            <br />
            MADE TO LAST.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-gray-300 mb-6 max-w-md font-normal leading-relaxed"
          >
            Innovative crushing and screening solutions designed for the toughest challenges.
          </motion.p>

          {/* Action buttons with BlobButton */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/products" className="w-full sm:w-auto">
              <BlobButton variant="primary" className="!w-full sm:!w-[210px] !h-[48px] !text-xs !font-black !uppercase !tracking-wider flex items-center justify-center gap-2 whitespace-nowrap">
                Explore Machines
              </BlobButton>
            </Link>
            
            <BlobButton variant="secondary" className="!w-full sm:!w-[210px] !h-[48px] !text-xs !font-black !uppercase !tracking-wider flex items-center justify-center gap-2 whitespace-nowrap">
              Watch Video
            </BlobButton>
          </motion.div>
        </div>

        {/* Right Vertical Pagination Dot Slider */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
          <span className="text-[10px] font-bold text-white/30 tracking-wider mb-2.5">01</span>
          <div className="flex flex-col items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/25 cursor-pointer" />
            <div className="w-[1px] h-6 bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/35 hover:bg-white/85 cursor-pointer transition-colors" />
            <div className="w-[1px] h-6 bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/35 hover:bg-white/85 cursor-pointer transition-colors" />
            <div className="w-[1px] h-6 bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/35 hover:bg-white/85 cursor-pointer transition-colors" />
            <div className="w-[1px] h-6 bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/35 hover:bg-white/85 cursor-pointer transition-colors" />
          </div>
          <span className="text-[10px] font-bold text-white/30 tracking-wider mt-2.5">05</span>
        </div>

      </div>

      {/* Floating Horizontal White Stats Card */}
      <div className="relative w-full max-w-7xl px-6 lg:px-8 z-40 mx-auto mt-4 lg:mt-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2">
        <div className="bg-card text-foreground shadow-xl rounded-xl border border-border/50 p-5 lg:p-8 grid grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.iconComponent;
            return (
              <React.Fragment key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-center gap-2.5 text-left flex-1 justify-start lg:justify-center"
                >
                  <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-[#FFB800] shrink-0" />
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-xl lg:text-2xl common-heading leading-none tracking-wide text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-[10px] lg:text-xs text-muted-foreground font-semibold truncate">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
                {idx < stats.length - 1 && (
                  <div className="hidden lg:block w-[1px] h-8 bg-border shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
