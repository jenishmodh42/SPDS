import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { testimonialsData } from '../../data/testimonials';
import { useCursor } from '../../context/CursorContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setCursor, resetCursor } = useCursor();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-28 sm:py-36 bg-[#0B0B0B] text-white relative border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        <SectionTitle
          subtitle="Client Testimonials"
          title="Words From Discerning Patrons"
          align="center"
          className="mx-auto mb-12"
        />

        <div className="relative bg-[#161616] border border-white/10 rounded-2xl p-8 sm:p-14 md:p-20 shadow-2xl">
          <Quote className="w-16 h-16 text-[#B89568]/20 mx-auto mb-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <p className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-white font-light leading-relaxed italic">
                "{current.quote}"
              </p>

              <div>
                <h4 className="font-serif-luxury text-2xl text-[#B89568]">{current.author}</h4>
                <p className="text-xs uppercase tracking-widest text-[#A7A7A7]">{current.role} — {current.project}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-black hover:bg-[#B89568] hover:border-[#B89568] transition-all duration-300"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="text-xs uppercase tracking-widest text-[#A7A7A7] font-mono">
              0{currentIndex + 1} / 0{testimonialsData.length}
            </div>

            <button
              onClick={handleNext}
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-black hover:bg-[#B89568] hover:border-[#B89568] transition-all duration-300"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
