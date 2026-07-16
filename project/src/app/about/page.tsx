"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2 } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/PageHero';
import StatsCounter from '../../components/StatsCounter';
import WhyChooseUs from '../../components/WhyChooseUs';
import CTASection from '../../components/CTASection';

export default function About() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="About Us"
          title="Four Decades of Industrial Engineering Mastery"
          description="Mewar Hi-Tech is a globally trusted manufacturer of crushing, screening, and mining equipment engineered for durability and performance."
          image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1920&auto=format&fit=crop"
        />

        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-mewar-section border border-mewar-border"
            >
              <Target size={28} className="text-mewar-yellowDark mb-4" />
              <h2 className="font-heading text-2xl font-bold text-mewar-heading mb-3">Our Mission</h2>
              <p className="text-mewar-body leading-relaxed">
                To engineer and manufacture reliable, high-performance industrial machinery that
                empowers infrastructure and mining operations worldwide, while upholding the
                highest standards of quality and safety.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-mewar-section border border-mewar-border"
            >
              <Eye size={28} className="text-mewar-yellowDark mb-4" />
              <h2 className="font-heading text-2xl font-bold text-mewar-heading mb-3">Our Vision</h2>
              <p className="text-mewar-body leading-relaxed">
                To be recognized as a global leader in industrial machinery manufacturing,
                driving innovation and sustainability across the mining and construction
                industries.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-mewar-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <model-viewer
                src="/models/crusher.glb"
                poster="https://placehold.co/1200x400"
                alt="3D Industrial Machinery Crusher Model"
                auto-rotate
                camera-controls
                ar
                shadow-intensity="1"
                interaction-prompt="none"
                auto-rotate-delay="0"
                onPointerUp={(e: any) => {
                  e.currentTarget.cameraOrbit = 'unset';
                  e.currentTarget.cameraTarget = 'unset';
                }}
                className="w-full h-[380px] rounded-2xl shadow-xl bg-white"
                style={{ width: '100%', height: '380px' }}
              ></model-viewer>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-mewar-yellowDark font-bold text-sm tracking-[0.2em] uppercase">
                Our Values
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-mewar-heading mt-3 mb-6">
                Precision, Integrity, and Innovation
              </h2>
              <ul className="space-y-4">
                {[
                  'Uncompromising quality control at every production stage',
                  'Sustainable manufacturing practices and material sourcing',
                  'Continuous investment in R&D and workforce training',
                  'Transparent, long-term client partnerships',
                ].map((val) => (
                  <li key={val} className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-mewar-yellow shrink-0 mt-0.5" />
                    <span className="text-mewar-heading font-medium">{val}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <StatsCounter />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
