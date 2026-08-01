import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { GalleryLightbox } from '../components/projects/GalleryLightbox';
import { useCursor } from '../context/CursorContext';
import { ArrowLeft, ArrowRight, Maximize2, CheckCircle2 } from 'lucide-react';
import { Magnetic } from '../components/common/Magnetic';

export const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { setCursor, resetCursor } = useCursor();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const projectIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[projectIndex] || projectsData[0];

  const prevProject = projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  const lightboxSlides = project.gallery.map((g) => ({
    src: g.url,
    title: project.title,
    description: g.caption,
  }));

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>{`${project.title} | SPDS Architecture`}</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <div className="pt-28 pb-28 bg-[#0B0B0B] text-white min-h-screen">
        
        {/* Back Button Header */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
          <Link
            to="/projects"
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A7A7A7] hover:text-[#B89568] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>

        {/* Hero Cover Image & Header Title */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8 mb-16">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B89568] font-bold">
                {project.category} / {project.subcategory}
              </span>
              <span className="text-[#A7A7A7] text-xs">•</span>
              <span className="text-xs text-[#A7A7A7] uppercase tracking-widest">{project.location}</span>
            </div>

            <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl font-light text-white leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Featured Large Cover Image */}
          <div
            onClick={() => openLightbox(0)}
            onMouseEnter={() => setCursor('view', 'EXPAND')}
            onMouseLeave={resetCursor}
            className="relative h-[480px] sm:h-[620px] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
          >
            <img
              src={project.featuredImage}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full flex items-center gap-2 text-xs font-medium">
              <Maximize2 className="w-4 h-4 text-[#B89568]" />
              <span>Expand Gallery ({project.gallery.length} Photos)</span>
            </div>
          </div>
        </div>

        {/* Project Overview & Specifications Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-serif-luxury text-3xl text-white font-light">Architectural Concept & Narrative</h2>
            <p className="text-[#A7A7A7] text-lg font-light leading-relaxed">
              {project.description}
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#B89568] font-bold">Key Spatial Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/90 font-light p-3 bg-[#161616] rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#B89568] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specifications Sidebar Table */}
          <div className="lg:col-span-4 bg-[#161616] border border-white/10 rounded-2xl p-8 space-y-6 h-fit">
            <h3 className="font-serif-luxury text-2xl text-white font-light border-b border-white/10 pb-4">
              Monograph Specifications
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-[#A7A7A7] font-light">Client</span>
                <span className="text-white font-medium">{project.client}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-[#A7A7A7] font-light">Year</span>
                <span className="text-white font-medium">{project.year}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-[#A7A7A7] font-light">Area</span>
                <span className="text-white font-medium">{project.area}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                <span className="text-[#A7A7A7] font-light">Status</span>
                <span className="text-[#B89568] font-semibold">{project.status}</span>
              </div>

              {project.specifications.map((spec, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-3">
                  <span className="text-[#A7A7A7] font-light">{spec.label}</span>
                  <span className="text-white font-medium text-right max-w-[200px]">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Magnetic strength={0.25}>
                <Link
                  to="/contact"
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="w-full bg-[#B89568] hover:bg-[#d2aa78] text-black font-semibold text-xs uppercase tracking-[0.2em] py-3.5 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <span>Inquire Similar Project</span>
                </Link>
              </Magnetic>
            </div>
          </div>

        </div>

        {/* Interactive Gallery Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8 mb-24">
          <h2 className="font-serif-luxury text-4xl text-white font-light">Project Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((item, idx) => (
              <motion.div
                key={idx}
                onClick={() => openLightbox(idx)}
                onMouseEnter={() => setCursor('view', 'ZOOM')}
                onMouseLeave={resetCursor}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#161616] border border-white/10 cursor-pointer"
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-6 right-6">
                  <p className="text-xs text-white/90 font-light italic">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Pagination Next / Prev */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-white/10 pt-12 flex items-center justify-between">
          <Link
            to={`/projects/${prevProject.id}`}
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-4 text-left group"
          >
            <ArrowLeft className="w-6 h-6 text-[#B89568] group-hover:-translate-x-2 transition-transform" />
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#A7A7A7] block">Previous Project</span>
              <span className="font-serif-luxury text-2xl text-white group-hover:text-[#B89568] transition-colors">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            to={`/projects/${nextProject.id}`}
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-4 text-right group"
          >
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#A7A7A7] block">Next Project</span>
              <span className="font-serif-luxury text-2xl text-white group-hover:text-[#B89568] transition-colors">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-6 h-6 text-[#B89568] group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Lightbox Modal */}
        <GalleryLightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides}
          index={lightboxIndex}
        />

      </div>
    </>
  );
};
