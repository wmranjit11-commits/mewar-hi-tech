"use client";
import React from 'react';
    import { motion } from 'framer-motion';
    import { Star } from 'lucide-react';

    const testimonials = [
      {
        name: 'Rajesh Mehta',
        company: 'Apex Mining Ltd.',
        review:
          'Mewar Hi-Tech crushers have significantly boosted our throughput while reducing downtime. Exceptional build quality.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Sarah Williams',
        company: 'Global Infra Corp',
        review:
          'Outstanding after-sales support and durable machinery. Our go-to partner for heavy equipment across projects.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
      },
      {
        name: 'Arun Kapoor',
        company: 'Steel Dynamics',
        review:
          'The precision engineering and reliability of their conveyor systems have exceeded our expectations consistently.',
        image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=200&auto=format&fit=crop',
      },
    ];

    const TestimonialsSection: React.FC = () => {
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
                Testimonials
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-mewar-heading mt-3">
                Trusted by Industry Leaders
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-mewar-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={16} className="fill-mewar-yellow text-mewar-yellow" />
                    ))}
                  </div>
                  <p className="text-mewar-body text-sm leading-relaxed mb-6">&ldquo;{t.review}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={`Portrait of ${t.name}`}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-heading font-bold text-mewar-heading text-sm">{t.name}</p>
                      <p className="text-mewar-body text-xs">{t.company}</p>
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