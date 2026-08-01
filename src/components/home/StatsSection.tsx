import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statsData } from '../../data/stats';

export const StatsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [counters, setCounters] = useState<number[]>(statsData.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2s duration
    const steps = 60;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters(
        statsData.map((stat) => Math.floor(stat.value * Math.min(1, progress)))
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-[#111111] text-white border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-[#161616]/60 border border-white/5 space-y-2"
            >
              <div className="font-serif-luxury text-4xl sm:text-6xl font-light text-[#B89568] flex items-center">
                <span>{counters[idx]}</span>
                <span>{stat.suffix}</span>
              </div>

              <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold pt-1">
                {stat.label}
              </h4>

              <p className="text-xs text-[#A7A7A7] font-light leading-relaxed max-w-xs">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
