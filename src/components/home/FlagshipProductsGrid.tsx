"use client";

import React, { useState, useEffect } from "react";
import { Download, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BlobButton from "@/components/ui/BlobButton";

const YOUTUBE_VIDEO_ID = "5M9sopYgqR4";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`;

const FlagshipProductsGrid: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="brochures" className="bg-muted py-8 lg:py-10 text-left select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Download block */}
          <div className="bg-card p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-border rounded-lg shadow-sm">
            <div className="flex-grow">
              <p className="text-primary font-bold text-xs uppercase tracking-wider mb-2">
                Download Resources
              </p>
              <h3 className="font-sans text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-3 leading-tight uppercase tracking-tight">
                BROCHURES &amp; TECHNICAL DOCUMENTS
              </h3>
              <p className="text-xs text-muted-foreground mb-6 font-medium max-w-sm leading-relaxed">
                Get detailed specs, product brochures, and technical documents in one click.
              </p>
              <BlobButton
                variant="secondary"
                onClick={() => window.dispatchEvent(new Event("open-brochure-modal"))}
                className="!py-2.5 !px-5 text-xs font-bold transition-colors flex items-center justify-center rounded whitespace-nowrap"
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span>Download Center</span>
                  <Download size={14} className="stroke-[2.5]" />
                </div>
              </BlobButton>
            </div>
            
            <div className="hidden sm:block lg:shrink-0 lg:pl-4 mx-auto lg:mx-0">
              <img
                src="/images/brochures.png"
                alt="Brochure booklet cover"
                className="h-28 lg:h-32 w-auto object-contain transform rotate-6 hover:rotate-0 transition-transform duration-300 drop-shadow-md rounded dark:opacity-90"
              />
            </div>
          </div>

          {/* Video block */}
          <div className="bg-card p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-border rounded-lg shadow-sm">
            <div className="flex-grow">
              <p className="text-primary font-bold text-xs uppercase tracking-wider mb-2">
                See It In Action
              </p>
              <h3 className="font-sans text-lg sm:text-xl lg:text-2xl font-black text-foreground mb-3 leading-tight uppercase tracking-tight">
                MACHINES THAT WORK FOR YOU
              </h3>
              <p className="text-xs text-muted-foreground mb-6 font-medium max-w-sm leading-relaxed">
                Watch our machines in action and see how they perform in real-world applications.
              </p>
              <BlobButton
                variant="secondary"
                onClick={() => setIsVideoOpen(true)}
                className="!py-2.5 !px-5 text-xs font-bold transition-colors flex items-center justify-center rounded whitespace-nowrap cursor-pointer"
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span>Watch Videos</span>
                  <div className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center shrink-0">
                    <Play size={8} className="fill-current ml-0.5" />
                  </div>
                </div>
              </BlobButton>
            </div>

            <div className="hidden sm:block lg:shrink-0 lg:pl-4 mx-auto lg:mx-0">
              <div 
                onClick={() => setIsVideoOpen(true)}
                className="relative w-40 lg:w-44 aspect-[16/10] rounded overflow-hidden shadow-sm border border-border group cursor-pointer"
              >
                <img
                  src="/images/video_thumbnail.png"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 dark:opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black/40 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5 text-white fill-white ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Video Popup Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6 z-20">
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* YouTube Embed Player */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={YOUTUBE_EMBED_URL}
                title="Mewar Hi-Tech Machines That Work For You Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FlagshipProductsGrid;
