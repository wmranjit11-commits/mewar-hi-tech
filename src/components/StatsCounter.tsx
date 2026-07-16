"use client";
import React, { useEffect, useRef, useState } from 'react';
    import { motion, useInView, animate } from 'framer-motion';

    interface Stat {
      value: number;
      suffix: string;
      label: string;
    }

    const STATS: Stat[] = [
      { value: 500, suffix: '+', label: 'Projects Completed' },
      { value: 40, suffix: '+', label: 'Countries Served' },
      { value: 150, suffix: '+', label: 'Global Clients' },
      { value: 20, suffix: '+', label: 'Years of Experience' },
    ];

    const Counter: React.FC<{ stat: Stat }> = ({ stat }) => {
      const ref = useRef<HTMLParagraphElement>(null);
      const inView = useInView(ref, { once: true, margin: '-50px' });
      const [display, setDisplay] = useState(0);

      useEffect(() => {
        if (!inView) return;
        const controls = animate(0, stat.value, {
          duration: 1.8,
          ease: 'easeOut',
          onUpdate: (v) => setDisplay(Math.floor(v)),
        });
        return () => controls.stop();
      }, [inView, stat.value]);

      return (
        <div className="text-center">
          <p ref={ref} className="font-heading text-4xl sm:text-5xl font-extrabold text-mewar-yellow">
            {display}
            {stat.suffix}
          </p>
          <p className="text-white/70 text-sm mt-2">{stat.label}</p>
        </div>
      );
    };

    const StatsCounter: React.FC = () => {
      return (
        <section className="py-16 lg:py-20 bg-mewar-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Counter stat={stat} />
              </motion.div>
            ))}
          </div>
        </section>
      );
    };

    export default StatsCounter;