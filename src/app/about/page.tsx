"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import StatsCounter from "@/components/shared/StatsCounter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/shared/CTASection";

export default function About() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          label="About Us"
          title="Four Decades of Industrial Engineering Mastery"
          description="Keestrack is a globally trusted manufacturer of crushing, screening, and mining equipment engineered for durability and performance."
          image="/images/hero_crusher.png"
        />

        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <Target size={28} className="text-primary mb-4" />
              <h2 className="font-heading text-2xl font-black text-foreground uppercase mb-3">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To engineer and manufacture reliable, high-performance
                industrial machinery that empowers infrastructure and mining
                operations worldwide, while upholding the highest standards of
                quality and safety.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <Eye size={28} className="text-primary mb-4" />
              <h2 className="font-heading text-2xl font-black text-foreground uppercase mb-3">
                Our Vision
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To be recognized as a global leader in industrial machinery
                manufacturing, driving innovation and sustainability across the
                mining and construction industries.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-muted border-y border-border/30">
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
                poster="/images/hero_crusher.png"
                alt="3D Industrial Machinery Crusher Model"
                auto-rotate
                camera-controls
                ar
                shadow-intensity="1"
                interaction-prompt="none"
                auto-rotate-delay="0"
                onPointerUp={(e: any) => {
                  e.currentTarget.cameraOrbit = "unset";
                  e.currentTarget.cameraTarget = "unset";
                }}
                className="w-full h-[380px] rounded-2xl shadow-xl bg-card border border-border"
                style={{ width: "100%", height: "380px" }}
              ></model-viewer>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                Our Values
              </span>
              <h2 className="font-heading text-3xl font-black text-foreground uppercase leading-tight">
                Precision, Integrity, and Innovation
              </h2>
              <ul className="space-y-4">
                {[
                  "Uncompromising quality control at every production stage",
                  "Sustainable manufacturing practices and material sourcing",
                  "Continuous investment in R&D and workforce training",
                  "Transparent, long-term client partnerships",
                ].map((val) => (
                  <li key={val} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span className="text-foreground text-sm font-semibold">
                      {val}
                    </span>
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
