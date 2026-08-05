"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "../ui/Container";

const AboutTeaser: React.FC = () => {
  return (
    <section className="bg-card text-foreground py-6 lg:py-8 select-none text-left border-y border-border overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* 1. Trophy Graphic & Divider */}
          <div className="flex items-center gap-8 shrink-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center relative">
              <img
                src="/images/gold_trophy.png"
                alt="3D Gold Trophy"
                className="h-40 sm:h-56 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,184,0,0.15)] dark:drop-shadow-[0_0_15px_rgba(255,184,0,0.25)]"
              />
            </div>
            <div className="hidden lg:block w-[1px] h-20 bg-border shrink-0" />
          </div>

          {/* 2. Text Copy Panel & Divider */}
          <div className="flex-grow lg:px-8 space-y-3 max-w-lg text-center lg:text-left">
            <p className="text-primary font-bold text-xs uppercase tracking-widest block font-sans">
              AWARD WINNING
            </p>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#0A1A3B] dark:text-white uppercase leading-tight">
              RECOGNIZED EXCELLENCE. TRUSTED WORLDWIDE.
            </h2>
            <p className="text-xs text-muted-foreground font-medium leading-relaxed">
              Our commitment to innovation, quality and performance has earned global recognition and trust.
            </p>
            <div className="pt-1.5 flex justify-center lg:justify-start">
              <Link
                href="/about"
                className="text-primary font-bold hover:text-foreground transition-colors flex items-center gap-2 text-xs uppercase tracking-wider"
              >
                <span>View Awards &amp; Achievements</span>
                <ArrowRight size={14} className="stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* 3. Divider before Badges */}
          <div className="hidden lg:block w-[1px] h-20 bg-border shrink-0" />

          {/* 4. Awards Badges Panel */}
          <div className="flex items-center gap-6 lg:gap-8 flex-wrap justify-center lg:pl-8 shrink-0">
            
            {/* Reddot Winner */}
            <div className="text-center flex flex-col items-center">
              <img
                src="/images/reddot_badge.png"
                alt="Red Dot Winner 2023"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain dark:opacity-90"
              />
              <p className="text-[10px] text-muted-foreground/80 uppercase tracking-widest font-bold mt-1">
                Product Design
              </p>
            </div>

            {/* Divider between badges */}
            <div className="hidden md:block w-[1px] h-12 bg-border shrink-0" />

            {/* iF Gold Award */}
            <div className="text-center flex flex-col items-center">
              <img
                src="/images/if_gold_badge.png"
                alt="iF Gold Award 2023"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain dark:opacity-90"
              />
              <p className="text-[10px] text-muted-foreground/80 uppercase tracking-widest font-bold mt-1">
                Industrial Design
              </p>
            </div>

            {/* Divider between badges */}
            <div className="hidden md:block w-[1px] h-12 bg-border shrink-0" />

            {/* EquipmentWatch */}
            <div className="text-center flex flex-col items-center">
              <img
                src="/images/equipment_watch_badge.png"
                alt="EquipmentWatch Highest Retained Value 2023"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain dark:opacity-90"
              />
              <p className="text-[9px] text-muted-foreground/80 uppercase tracking-widest font-bold mt-1">
                Highest Value
              </p>
              <p className="text-[8px] text-primary uppercase font-bold">
                2023
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutTeaser;
