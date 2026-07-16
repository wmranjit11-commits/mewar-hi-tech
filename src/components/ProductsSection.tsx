"use client";
import React from 'react';
    import { motion } from 'framer-motion';
    import ProductCard from './ProductCard';

    export const PRODUCTS = [
      {
        name: 'Jaw Crusher',
        description: 'Heavy-duty primary crushing for high-capacity ore and rock reduction.',
        image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800&auto=format&fit=crop',
      },
      {
        name: 'Cone Crusher',
        description: 'Precision secondary crushing engineered for consistent particle shape.',
        image: 'https://placehold.co/800x400',
      },
      {
        name: 'Stone Crusher',
        description: 'Robust crushing units built for aggregate and mining applications.',
        image: 'https://placehold.co/800x400',
      },
      {
        name: 'Roll Crusher',
        description: 'Efficient compression crushing for medium-hard and soft materials.',
        image: 'https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?q=80&w=800&auto=format&fit=crop',
      },
      {
        name: 'Vibrating Screen',
        description: 'High-frequency screening for precise material grading and separation.',
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800&auto=format&fit=crop',
      },
      {
        name: 'Sand Washer',
        description: 'Advanced washing systems delivering clean, high-quality manufactured sand.',
        image: 'https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?q=80&w=800&auto=format&fit=crop',
      },
      {
        name: 'Conveyor System',
        description: 'Durable belt conveyors engineered for continuous material transport.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
      },
      {
        name: 'Vibrating Feeder',
        description: 'Controlled, uniform feeding of bulk material into crushing circuits.',
        image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=800&auto=format&fit=crop',
      },
    ];

    interface ProductsSectionProps {
      limit?: number;
      title?: string;
    }

    const ProductsSection: React.FC<ProductsSectionProps> = ({ limit, title = 'Our Product Range' }) => {
      const items = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;
      return (
        <section className="py-16 lg:py-24 bg-mewar-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-12"
            >
              <span className="text-mewar-yellowDark font-bold text-sm tracking-[0.2em] uppercase">
                Engineered for Performance
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-mewar-heading mt-3">
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