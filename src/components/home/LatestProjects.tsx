"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";

const PROJECT_IMAGES = Array.from(
  { length: 8 },
  (_, i) => `/images/latest-projects-${i + 1}.jpg`
);

export default function LatestProjects() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? PROJECT_IMAGES.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === PROJECT_IMAGES.length - 1 ? 0 : prev! + 1));
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="py-16 lg:py-24 bg-background border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2 text-left">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block">
              Recent Deployments
            </span>
            <h2 className="common-heading text-3xl sm:text-4xl text-foreground">
              Latest Projects
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground bg-muted/40 border border-border/80 px-4 py-2 rounded-xl shrink-0 self-start md:self-end">
            <LayoutGrid size={14} className="text-primary" />
            <span>8 Active Installations</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROJECT_IMAGES.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setLightboxIndex(idx)}
              className="relative rounded-2xl overflow-hidden border border-border bg-card aspect-[4/3] cursor-pointer group shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Latest project setup ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                  <Eye size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button & Counter */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-10">
              <span className="text-xs font-black uppercase tracking-wider text-gray-400">
                Project Image {lightboxIndex + 1} of {PROJECT_IMAGES.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Image display */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PROJECT_IMAGES[lightboxIndex]}
                alt={`Expanded Project view ${lightboxIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/5"
              />
            </motion.div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
