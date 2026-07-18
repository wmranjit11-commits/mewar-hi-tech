"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    company: "Apex Mining Ltd.",
    review:
      "Keestrack crushers have significantly boosted our throughput while reducing downtime. Exceptional build quality.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Sarah Williams",
    company: "Global Infra Corp",
    review:
      "Outstanding after-sales support and durable machinery. Our go-to partner for heavy equipment across projects.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Arun Kapoor",
    company: "Steel Dynamics",
    review:
      "The precision engineering and reliability of their conveyor systems have exceeded our expectations consistently.",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=200&auto=format&fit=crop",
  },
];

const TestimonialsSection: React.FC = () => {
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
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-foreground mt-3 uppercase">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <img
                  src={t.image}
                  alt={`Portrait of ${t.name}`}
                  className="w-12 h-12 rounded-full object-cover bg-muted"
                />
                <div>
                  <p className="font-heading font-black text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs font-semibold">
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;