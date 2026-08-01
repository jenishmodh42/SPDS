import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import { useCursor } from '../../context/CursorContext';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Magnetic } from '../common/Magnetic';

export const FeaturedProject: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  // Select top featured project
  const featured = projectsData.find((p) => p.isFeatured) || projectsData[0];

  return (
    <section className="py-28 sm:py-36 bg-[#111111] text-white relative overflow-hidden border-b border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#B89568]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Header Badge */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-12 h-[1px] bg-[#B89568]" />
          <span className="text-xs uppercase tracking-[0.4em] text-[#B89568] font-bold">
            Featured Monograph Spotlight
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Massive Image Card with Reveal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative group"
            onMouseEnter={() => setCursor('view', 'SPOTLIGHT')}
            onMouseLeave={resetCursor}
          >
            <Link to={`/projects/${featured.id}`} className="block overflow-hidden rounded-lg border border-white/10 relative">
              <img
                src={featured.featuredImage}
                alt={featured.title}
                className="w-full h-[450px] sm:h-[580px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Bottom Specs Bar */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B89568] block">Typology</span>
                  <span className="text-xs font-semibold text-white">{featured.subcategory}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B89568] block">Area</span>
                  <span className="text-xs font-semibold text-white">{featured.area}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B89568] block">Year</span>
                  <span className="text-xs font-semibold text-white">{featured.year}</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right Column: Editorial Specs & Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs uppercase tracking-widest bg-[#B89568]/20 border border-[#B89568]/40 text-[#B89568] px-3.5 py-1 rounded-full inline-block font-semibold">
              {featured.category} Monograph
            </span>

            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              {featured.title}
            </h2>

            <p className="text-[#A7A7A7] text-base font-light leading-relaxed">
              {featured.description}
            </p>

            {/* Feature Highlights List */}
            <ul className="space-y-3 pt-2">
              {featured.features.slice(0, 3).map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/90 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#B89568] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-6">
              <Magnetic strength={0.3}>
                <Link
                  to={`/projects/${featured.id}`}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="inline-flex items-center gap-3 bg-[#B89568] hover:bg-[#d2aa78] text-black font-semibold text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-full transition-all duration-300 shadow-xl"
                >
                  <span>Read Full Monograph</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
