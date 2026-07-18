"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  "LAFARGE",
  "CEMEX",
  "HOLCIM",
  "VULCAN Materials Company",
  "Heidelberg Materials",
  "Buzzi Unicem",
  "LAFARGE",
  "CEMEX",
  "HOLCIM",
  "VULCAN Materials Company",
  "Heidelberg Materials",
  "Buzzi Unicem",
];

const logoImages = [
  "/images/new-logo/customer-1.png",
  "/images/new-logo/customer-2.png",
  "/images/new-logo/customer-3.png",
  "/images/new-logo/customer-4.png",
  "/images/new-logo/customer-5.png",
  "/images/new-logo/customer-6.png",
  "/images/new-logo/customer-7.png",
  "/images/new-logo/customer-8.png",
  "/images/new-logo/customer-9.png",
  "/images/new-logo/customer-10.png",
  "/images/new-logo/customer-11.png",
  "/images/new-logo/customer-12.png",
];

const ClientLogosMarquee: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-background select-none border-y border-border/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with arrows */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">
            Trusted by Industry Leaders
          </span>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="animate-marquee">
        {[...logoImages, ...logoImages].map((logoSrc, i) => (
          <div
            key={`${logoSrc}-${i}`}
            className="flex items-center justify-center px-8 lg:px-12 shrink-0"
          >
            <img
              src={logoSrc}
              alt={brands[i % brands.length]}
              className="h-12 lg:h-16 w-auto object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
