"use client";
import React from 'react';
    import { ArrowUpRight } from 'lucide-react';
    import { motion } from 'framer-motion';

    interface ProductCardProps {
      name: string;
      description: string;
      image: string;
      index: number;
    }

    const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, index }) => {
      return (
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="group bg-white rounded-2xl border border-mewar-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="overflow-hidden h-56">
            <img
              src={image}
              alt={`${name} industrial machine`}
              width={600}
              height={450}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-8">
            <h3 className="font-heading text-xl font-bold text-mewar-heading mb-2">{name}</h3>
            <p className="text-mewar-body text-sm leading-relaxed mb-6">{description}</p>
            <button className="inline-flex items-center gap-2 text-sm font-bold text-mewar-ink group-hover:text-mewar-yellowDark transition-colors duration-200">
              View Details
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </motion.article>
      );
    };

    export default ProductCard;