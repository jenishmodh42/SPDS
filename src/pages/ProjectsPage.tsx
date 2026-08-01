import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { SectionTitle } from '../components/common/SectionTitle';
import { useCursor } from '../context/CursorContext';
import { Search } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { setCursor, resetCursor } = useCursor();

  const categories = ['All', 'Residential', 'Healthcare', 'Retail', 'Commercial'];

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Portfolio Monographs | SPDS Architecture</title>
        <meta name="description" content="Explore SPDS luxury architecture monographs: residential villas, dental clinics, retail flagships, and commercial spaces." />
      </Helmet>

      <div className="pt-32 pb-28 bg-[#0B0B0B] text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Page Banner Header */}
          <SectionTitle
            subtitle="Complete Works"
            title="Architectural Portfolio Monographs"
            description="Filtered collection of bespoke residential, healthcare, retail, and commercial interior architecture."
            className="mb-12"
          />

          {/* Search & Category Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-16 bg-[#161616] p-4 rounded-xl border border-white/10">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#B89568] text-black'
                      : 'bg-black/40 text-[#A7A7A7] hover:text-white hover:bg-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar Input */}
            <div className="relative flex items-center min-w-[260px]">
              <Search className="w-4 h-4 text-[#B89568] absolute left-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#B89568] text-xs text-white placeholder-white/40 pl-10 pr-4 py-2.5 rounded-full focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 space-y-4">
              <p className="font-serif-luxury text-3xl text-white/60">No projects match your search criteria.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="text-xs uppercase tracking-widest text-[#B89568] underline"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
};
