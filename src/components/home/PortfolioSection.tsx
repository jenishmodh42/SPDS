import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { ProjectCard } from '../projects/ProjectCard';
import { projectsData } from '../../data/projects';
import { useCursor } from '../../context/CursorContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Residential', 'Healthcare', 'Retail', 'Commercial'] as const;

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { setCursor, resetCursor } = useCursor();

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-28 sm:py-36 bg-[#0B0B0B] text-white relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Title & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionTitle
            subtitle="Curated Portfolio"
            title="Monolithic Architecture & Sculpted Interiors"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-[#161616] p-1.5 rounded-full border border-white/10 shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                    isActive ? 'text-black font-bold' : 'text-[#A7A7A7] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-[#B89568] rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/projects"
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-4 bg-[#161616] hover:bg-[#222] border border-white/10 text-white font-medium text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-full transition-all duration-300 hover:border-[#B89568]/40 group"
          >
            <span>Explore All Works</span>
            <ArrowRight className="w-4 h-4 text-[#B89568] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
