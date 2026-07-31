"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BlobButton from "@/components/ui/BlobButton";

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-secondary overflow-hidden select-none">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/hero_crusher.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        <div className="text-left space-y-4 max-w-2xl">
          <h2 className="common-heading text-3xl sm:text-4xl lg:text-5xl text-secondary-foreground uppercase tracking-tight font-bold">
            Need Industrial Solutions?
          </h2>
          <div className="w-16 h-1.5 bg-primary rounded-none" />
          <p className="text-secondary-foreground/75 text-base sm:text-lg font-medium leading-relaxed">
            Partner with Mewar Hi-Tech for reliable, high-performance machinery engineered to
            maximize your operational output.
          </p>
        </div>
        <div className="shrink-0 w-full lg:w-auto">
          <Link href="/contact" className="block w-full">
            <BlobButton variant="primary" className="w-full lg:w-auto !py-4 !px-10 text-sm font-bold shadow-xl">
              Request Quote <ArrowRight size={16} className="inline ml-2" />
            </BlobButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;