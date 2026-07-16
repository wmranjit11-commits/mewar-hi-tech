"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ServiceNetworkBanner: React.FC = () => {
  return (
    <section className="relative h-[400px] lg:h-[500px] w-full flex items-center overflow-hidden bg-[#111111] select-none">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/after-sales-1.jpg"
          alt="Field service network van support"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/50 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          {/* Subtitle */}
          <span className="text-mewar-yellow font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 inline-block">
            Global Support
          </span>

          {/* Title */}
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4 uppercase">
            Built for Low Maintenance and Reliable Performance
          </h2>

          {/* Paragraph */}
          <p className="text-white/80 text-sm mb-6 leading-relaxed">
            Our dedicated technical support network and rapid spare parts delivery ensure your mobile crushers and screeners maintain maximum uptime on site.
          </p>

          {/* Read More Link */}
          <Link
            href="/services"
            className="text-mewar-yellow hover:text-mewar-yellowDark text-sm font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
          >
            Read more &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceNetworkBanner;
