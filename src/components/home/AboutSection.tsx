import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { companyData } from '../../data/company';
import { useCursor } from '../../context/CursorContext';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="py-28 sm:py-36 bg-[#0B0B0B] text-white relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Founder Image with Architectural Border */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 overflow-hidden rounded-lg group"
              onMouseEnter={() => setCursor('view', 'FOUNDER')}
              onMouseLeave={resetCursor}
            >
              <img
                src={companyData.founder.image}
                alt={companyData.founder.name}
                className="w-full h-[520px] sm:h-[600px] object-cover object-center filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              
              {/* Founder Overlay Caption */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <span className="text-xs uppercase tracking-[0.3em] text-[#B89568] font-semibold block mb-1">
                  Principal Architect
                </span>
                <h3 className="font-serif-luxury text-3xl font-light text-white">
                  {companyData.founder.name}
                </h3>
              </div>
            </motion.div>

            {/* Decorative Architectural Framing Line */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#B89568]/30 rounded-lg pointer-events-none hidden sm:block z-0" />
          </div>

          {/* Right Column: Editorial Company Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <SectionTitle
              subtitle="Design Ethos & Leadership"
              title="Sculpting Quiet Luxury Across Monolithic Volumes"
            />

            <p className="text-[#A7A7A7] text-lg font-light leading-relaxed">
              {companyData.fullDescription}
            </p>

            {/* Quote Block */}
            <blockquote className="p-6 border-l-2 border-[#B89568] bg-[#161616]/60 backdrop-blur-md rounded-r-lg space-y-3">
              <p className="font-serif-luxury text-xl sm:text-2xl italic text-white/90 leading-snug">
                "{companyData.founder.quote}"
              </p>
              <footer className="text-xs uppercase tracking-widest text-[#B89568] font-semibold">
                — {companyData.founder.signature}
              </footer>
            </blockquote>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-[#161616] border border-white/5 rounded-lg space-y-2">
                <h4 className="font-serif-luxury text-2xl text-white">Architectural Mission</h4>
                <p className="text-xs text-[#A7A7A7] font-light leading-relaxed">
                  To eliminate spatial chaos through clean geometry, biophilic light modulation, and high-performance material engineering.
                </p>
              </div>

              <div className="p-6 bg-[#161616] border border-white/5 rounded-lg space-y-2">
                <h4 className="font-serif-luxury text-2xl text-white">Global Vision</h4>
                <p className="text-xs text-[#A7A7A7] font-light leading-relaxed">
                  To define the next century of luxury residential and healthcare architecture with zero compromises on human comfort.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#B89568] hover:text-white transition-colors group"
              >
                <span>Read Full Studio Biography</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
