"use client";
import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  image?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  label,
  title,
  description,
  image = "/images/hero_crusher.png",
}) => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-secondary overflow-hidden select-none">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/40" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-6 text-center space-y-4"
      >
        <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] block">
          {label}
        </span>
        <h1 className="common-heading text-4xl sm:text-5xl lg:text-6xl text-secondary-foreground leading-tight">
          {title}
        </h1>
        <p className="text-secondary-foreground/60 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default PageHero;