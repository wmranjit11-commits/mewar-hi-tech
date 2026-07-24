"use client";

import React, { useState, useRef, useEffect } from "react";
import { Hammer, Layers, ArrowLeftRight, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MachineCard } from "./MachineCard";
import { MachineCategory } from "./types";

const CATEGORIES: MachineCategory[] = [
  {
    title: "Crushers",
    desc: "High performance crushing solutions for every need.",
    image: "/images/cone-crusher.png",
    icon: Hammer,
    to: "/products?category=crushers",
    exploreLabel: "Explore Crushers",
  },
  {
    title: "Screeners",
    desc: "Efficient screening for precise separation and high productivity.",
    image: "/images/vibrating-screen.png",
    icon: Layers,
    to: "/products?category=screens",
    exploreLabel: "Explore Screeners",
  },
  {
    title: "Sand Making",
    desc: "Advanced aggregate processing solutions for easy washing and sizing.",
    image: "/images/sand-making-machine.png",
    icon: ArrowLeftRight,
    to: "/products",
    exploreLabel: "Explore Sand Making",
  },
  {
    title: "Feeders",
    desc: "Reliable feeding equipment for continuous performance.",
    image: "/images/vibro-feeder.png",
    icon: Settings,
    to: "/products?category=feeders",
    exploreLabel: "Explore Feeders",
  },
];

export const MachineShowcase: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScroll = scrollWidth - clientWidth;
      if (totalScroll > 0) {
        setScrollProgress((scrollLeft / totalScroll) * 100);
      }
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* 1. Desktop Layout (lg and up) - Interactive Expanding Cards */}
      <div className="hidden lg:flex flex-row gap-4 w-full items-stretch">
        {CATEGORIES.map((cat, idx) => (
          <MachineCard
            key={cat.title}
            category={cat}
            index={idx}
            isHovered={hoveredIdx === idx}
            isAnyHovered={hoveredIdx !== null}
            onHoverStart={() => setHoveredIdx(idx)}
            onHoverEnd={() => setHoveredIdx(null)}
          />
        ))}
      </div>

      {/* 2. Tablet Layout (md to lg) - 2 columns grid, static states */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 w-full">
        {CATEGORIES.map((cat, idx) => (
          <div key={cat.title} className="h-[420px] w-full">
            <MachineCard
              category={cat}
              index={idx}
              isHovered={false}
              isAnyHovered={false}
              onHoverStart={() => {}}
              onHoverEnd={() => {}}
            />
          </div>
        ))}
      </div>

      {/* 3. Mobile Layout (below md) - Horizontal Swipeable Slider */}
      <div className="block md:hidden w-full">
        <div
          ref={scrollRef}
          className="flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 w-full"
        >
          {CATEGORIES.map((cat, idx) => (
            <div key={cat.title} className="w-[82vw] shrink-0 snap-center h-[440px]">
              <MachineCard
                category={cat}
                index={idx}
                isHovered={false}
                isAnyHovered={false}
                onHoverStart={() => {}}
                onHoverEnd={() => {}}
              />
            </div>
          ))}
        </div>

        {/* Swipe indicator track & View all machines row on Mobile */}
        <div className="flex items-center justify-between mt-4 px-2">
          {/* Scroll Progress Indicator Bar */}
          <div className="w-1/2 h-[2.5px] bg-border/30 rounded-full overflow-hidden relative">
            <div
              className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-100 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <Link
            href="/products"
            className="text-foreground font-bold hover:text-primary transition-colors flex items-center gap-1 text-xs"
          >
            <span>See all</span>
            <ArrowRight size={13} className="text-primary stroke-[2.5]" />
          </Link>
        </div>
      </div>

    </div>
  );
};
