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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-6 text-center space-y-6"
      >
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-secondary-foreground uppercase">
          Need Industrial Solutions?
        </h2>
        <p className="text-secondary-foreground/75 text-base sm:text-lg max-w-2xl mx-auto">
          Partner with Keestrack for reliable, high-performance machinery engineered to
          maximize your operational output.
        </p>
        <div className="pt-4">
          <Link href="/contact">
            <BlobButton variant="primary" className="!py-3.5 !px-8 text-xs font-black">
              Request Quote <ArrowRight size={14} className="inline ml-1" />
            </BlobButton>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;