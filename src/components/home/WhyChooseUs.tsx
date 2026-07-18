"use client";

import React from "react";
import { Shield, Cog, TrendingUp, Headset } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "BUILT TOUGH",
    desc: "Built for durability in the harshest environments.",
  },
  {
    icon: Cog,
    title: "LOW OPERATING COST",
    desc: "Optimized fuel efficiency and minimal maintenance.",
  },
  {
    icon: TrendingUp,
    title: "MAXIMUM PRODUCTIVITY",
    desc: "High capacity, powerful output, consistent results.",
  },
  {
    icon: Headset,
    title: "GLOBAL SUPPORT",
    desc: "Expert service and parts support worldwide.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-muted text-foreground py-16 relative overflow-hidden select-none border-y border-border">
      
      {/* Background Dotted World Map Graphic */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[45%] opacity-15 pointer-events-none bg-no-repeat bg-right bg-contain hidden dark:lg:block transition-all duration-300"
        style={{ backgroundImage: "url('/images/dotted_map.png')" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-border lg:gap-0">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.title} className="p-8 lg:px-10 lg:py-6 flex flex-col items-start text-left space-y-4">
                <IconComponent className="w-10 h-10 text-primary shrink-0" strokeWidth={2.2} />
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider font-sans leading-none">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-[220px] font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
