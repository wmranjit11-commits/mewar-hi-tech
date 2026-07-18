"use client";

import React from "react";
import { ArrowRight, Hammer, Layers, ArrowLeftRight, Settings } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Crushers",
    desc: "High performance crushing solutions for every need.",
    image: "/images/crushers_category.png",
    icon: Hammer,
    to: "/products?category=crushers",
    exploreLabel: "Explore Crushers",
  },
  {
    title: "Screeners",
    desc: "Efficient screening for precise separation and high productivity.",
    image: "/images/screeners_category.png",
    icon: Layers,
    to: "/products?category=screens",
    exploreLabel: "Explore Screeners",
  },
  {
    title: "Stackers",
    desc: "Advanced stockpiling solutions for easy handling and storage.",
    image: "/images/stackers_category.png",
    icon: ArrowLeftRight,
    to: "/products",
    exploreLabel: "Explore Stackers",
  },
  {
    title: "Feeders",
    desc: "Reliable feeding equipment for continuous performance.",
    image: "/images/feeders_category.png",
    icon: Settings,
    to: "/products?category=feeders",
    exploreLabel: "Explore Feeders",
  },
];

const ExploreMachinesSection: React.FC = () => {
  return (
    <section className="bg-muted py-20 select-none text-left border-b border-border/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-start">
          
          {/* Left Intro Panel (1/5 column space) */}
          <div className="xl:col-span-1 p-2 text-left">
            <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2.5 block">
              Explore Our Machines
            </span>
            <h2 className="font-sans text-3xl font-black text-foreground leading-tight mb-4">
              Powerful Machines.
              <br />
              Proven Performance.
            </h2>
            
            {/* Gold Underline Segment */}
            <div className="w-12 h-[3px] bg-primary mb-6" />

            <p className="text-xs text-muted-foreground mb-8 font-medium leading-relaxed max-w-xs">
              Engineered to deliver maximum productivity, low operating costs, and unmatched reliability in the toughest conditions.
            </p>
            <Link
              href="/products"
              className="text-foreground font-bold hover:text-primary transition-colors flex items-center gap-1.5 text-sm"
            >
              <span>View all machines</span>
              <ArrowRight size={14} className="text-primary" />
            </Link>
          </div>

          {/* Right Cards Panel (4/5 column space, 4 columns inside) */}
          <div className="xl:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="bg-card p-6 shadow-sm border border-border/20 rounded-lg flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                >
                  <Link href={cat.to} className="block relative h-full flex flex-col justify-between">
                    <div>
                      {/* Machine Photo container */}
                      <div className="h-32 mb-6 overflow-hidden flex items-center justify-center bg-muted rounded-md p-2">
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="h-full object-contain"
                        />
                      </div>

                      {/* Icon + Title Block */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary w-9 h-9 rounded-full flex items-center justify-center text-primary-foreground shrink-0 shadow-sm">
                          <IconComponent size={18} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[17px] font-bold text-foreground font-sans leading-none">
                          {cat.title}
                        </h3>
                      </div>

                      {/* Short Description */}
                      <p className="text-[11px] text-muted-foreground leading-relaxed font-semibold mb-6">
                        {cat.desc}
                      </p>
                    </div>

                    {/* Explore Link */}
                    <div className="text-primary font-bold text-xs flex items-center gap-1.5 hover:text-primary/80 transition-colors">
                      <span>{cat.exploreLabel}</span>
                      <ArrowRight size={14} className="stroke-[2.5]" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExploreMachinesSection;
