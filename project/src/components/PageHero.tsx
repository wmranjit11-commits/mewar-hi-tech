"use client";
import React from 'react';
    import { motion } from 'framer-motion';

    interface PageHeroProps {
      label: string;
      title: string;
      description: string;
      image: string;
    }

    const PageHero: React.FC<PageHeroProps> = ({ label, title, description, image }) => {
      return (
        <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 bg-mewar-ink overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={image}
              alt=""
              width={1920}
              height={700}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mewar-ink via-mewar-ink/70 to-mewar-ink/40" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto px-6 text-center"
          >
            <span className="text-mewar-yellow font-bold text-sm tracking-[0.2em] uppercase">{label}</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-5">{title}</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">{description}</p>
          </motion.div>
        </section>
      );
    };

    export default PageHero;