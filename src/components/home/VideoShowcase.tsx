"use client";

import React, { useState, useEffect } from "react";
import { Play, X, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Close player when ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsPlaying(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-8 lg:py-12 bg-background border-b border-border/60">
      <div className="max-w-[1720px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                Industrial Footprints
              </span>
              <h2 className="common-heading text-3xl sm:text-4xl text-foreground font-black leading-tight">
                Heavy Engineering Operations
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-semibold">
              Take a virtual tour of our heavy machinery assembly shop floor and active quarry installations. Witness our crushers, feeders, and conveyors executing high-throughput screening and size reduction under extreme loading cycles.
            </p>
            
            {/* Visual badge info */}
            <div className="p-5 rounded-2xl bg-muted/40 border border-border/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Video size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading text-xs font-black uppercase text-foreground">
                  Shop Floor &amp; Field Footage
                </h4>
                <p className="text-[10px] text-muted-foreground font-bold leading-normal">
                  High-definition mechanism demonstration of primary crushing plants and mobile tracks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Video Cover Block */}
          <div className="lg:col-span-7">
            <div 
              onClick={() => setIsPlaying(true)}
              className="relative rounded-3xl overflow-hidden border border-border bg-black aspect-[16/10] cursor-pointer group shadow-2xl"
            >
              {/* Silent looping preview video with fallback industrial poster */}
              <video
                src="/videos/home-page.mp4"
                poster="/images/hero-crusher.webp"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Darkening overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300" />

              {/* Floating Play Button - Perfectly Centered */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl scale-95 group-hover:scale-110 transition-transform duration-300">
                <Play size={26} className="fill-current ml-1" />
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-wider text-white z-10">
                Click to Watch Tour
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen lightboxed video player */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPlaying(false)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close button */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setIsPlaying(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Lightbox Video tag */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/videos/home-page.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
