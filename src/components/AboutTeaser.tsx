"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutTeaser: React.FC = () => {
  return (
    <section id="about-teaser" className="py-16 lg:py-24 bg-white select-none">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111111] leading-tight mb-6 uppercase">
              Our business is built around{' '}
              <span className="italic font-serif text-[#D89B00] lowercase font-normal">
                performance in every detail
              </span>
            </h2>
            
            <p className="text-[#666666] text-sm leading-relaxed mb-6">
              Mewar Hi-Tech designs, manufactures, and distributes heavy-duty mobile crushing and screening equipment. Our focus is on engineering high-efficiency hybrid drive systems, low transport weights, and robust designs that perform in the most demanding conditions.
            </p>
            
            <p className="text-[#666666] text-sm leading-relaxed mb-8">
              With over 35 years of engineering expertise, we work closely with construction, recycling, and mining professionals to optimize output on their job sites worldwide.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#232D39] hover:bg-[#1A222B] text-white font-extrabold text-xs md:text-sm px-8 py-3.5 rounded-full uppercase tracking-wider transition-colors duration-200"
            >
              <span>Our story</span>
            </Link>
          </motion.div>

          {/* Right Column - 3D Model Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="w-full h-[400px] lg:h-[500px]">
              <model-viewer
                src="/3dmodel/Meshy_AI_Hammer_Mill_0704071611_texture.glb"
                alt="3D Hammer Mill Model"
                auto-rotate
                camera-controls
                shadow-intensity="1"
                disable-zoom
                disable-pan
                auto-rotate-delay="0"
                camera-orbit="auto auto 115%"
                interaction-prompt="none"
                onPointerUp={(e: any) => {
                  e.currentTarget.cameraOrbit = 'auto auto 115%';
                  e.currentTarget.cameraTarget = 'unset';
                }}
                style={{ width: '100%', height: '100%' }}
              ></model-viewer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;