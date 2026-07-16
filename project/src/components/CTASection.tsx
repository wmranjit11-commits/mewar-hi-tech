"use client";
import React from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRight } from 'lucide-react';
    import Link from 'next/link';

    const CTASection: React.FC = () => {
      return (
        <section className="relative py-20 lg:py-28 bg-mewar-ink overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1600&auto=format&fit=crop"
              alt=""
              width={1600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto px-6 text-center"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Need Industrial Solutions?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Partner with Mewar Hi-Tech for reliable, high-performance machinery engineered to
              maximize your operational output.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-mewar-yellow text-mewar-ink font-bold px-8 py-4 rounded-full hover:bg-mewar-yellowDark hover:scale-105 transition-all duration-200"
            >
              Request Quote
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </section>
      );
    };

    export default CTASection;