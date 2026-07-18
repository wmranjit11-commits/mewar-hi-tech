"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";

export const PRODUCTS = [
  {
    name: "Jaw Crusher",
    description: "Heavy-duty primary crushing for high-capacity ore and rock reduction.",
    image: "/images/double-toggle-oil-jaw-crusher.jpg",
  },
  {
    name: "Cone Crusher",
    description: "Precision secondary crushing engineered for consistent particle shape.",
    image: "/images/cone-crusher.jpg",
  },
  {
    name: "Stone Crusher",
    description: "Robust crushing units built for aggregate and mining applications.",
    image: "/images/double-toggle-grease-jaw-crusher.jpg",
  },
  {
    name: "Roll Crusher",
    description: "Efficient compression crushing for medium-hard and soft materials.",
    image: "/images/roll-crusher.jpg",
  },
  {
    name: "Vibrating Screen",
    description: "High-frequency screening for precise material grading and separation.",
    image: "/images/vibrating-screen.jpg",
  },
  {
    name: "Sand Washer",
    description: "Advanced washing systems delivering clean, high-quality manufactured sand.",
    image: "/images/sand-washer.jpg",
  },
  {
    name: "Conveyor System",
    description: "Durable belt conveyors engineered for continuous material transport.",
    image: "/images/belt-conveyor.jpg",
  },
  {
    name: "Vibrating Feeder",
    description: "Controlled, uniform feeding of bulk material into crushing circuits.",
    image: "/images/vibro-feeder.jpg",
  },
];

interface ProductsSectionProps {
  limit?: number;
  title?: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  limit,
  title = "Our Product Range",
}) => {
  const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;
  return (
    <section className="py-16 lg:py-24 bg-background select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Engineered for Performance
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground mt-3 uppercase">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((product, i) => (
            <ProductCard key={product.name} index={i} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;