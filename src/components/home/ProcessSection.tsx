import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { processData } from '../../data/process';
import { CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 bg-[#080808] text-white relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <SectionTitle
          subtitle="Methodology"
          title="The 5-Phase Architectural Process"
          description="A rigorous sequence of precision planning, tactile material curation, and white-glove construction oversight."
          align="center"
          className="mx-auto mb-20 text-center"
        />

        {/* Animated Process Timeline */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#B89568] via-white/10 to-[#B89568] -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {processData.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Step Card Content */}
                  <div className={`w-full lg:w-1/2 space-y-4 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-flex items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89568] font-bold">
                        Phase {step.number}
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
                      {step.title}
                    </h3>

                    <p className="text-xs uppercase tracking-widest text-[#B89568]/80 font-medium">
                      {step.subtitle}
                    </p>

                    <p className="text-sm text-[#A7A7A7] font-light leading-relaxed max-w-lg inline-block">
                      {step.description}
                    </p>

                    {/* Deliverables Pills */}
                    <div className={`flex flex-wrap gap-2 pt-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                      {step.deliverables.map((deliv, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider bg-[#161616] border border-white/10 text-white/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-[#B89568]" />
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Number Badge Center Marker */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#161616] border-2 border-[#B89568] text-[#B89568] flex items-center justify-center font-serif-luxury text-2xl font-bold shrink-0 shadow-2xl">
                    {step.number}
                  </div>

                  {/* Spacer for desktop layout balance */}
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
