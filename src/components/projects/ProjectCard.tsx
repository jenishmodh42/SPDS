import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../../types';
import { useCursor } from '../../context/CursorContext';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative flex flex-col space-y-4"
    >
      {/* Image Container with Zoom */}
      <Link
        to={`/projects/${project.id}`}
        onMouseEnter={() => setCursor('view', 'VIEW')}
        onMouseLeave={resetCursor}
        className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-lg bg-[#161616] border border-white/5 block"
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-[0.92] group-hover:brightness-100"
          loading="lazy"
        />
        
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="text-[10px] uppercase tracking-[0.25em] bg-black/60 backdrop-blur-md border border-white/10 text-[#B89568] px-3 py-1 rounded-full font-semibold">
            {project.category}
          </span>
          <span className="text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-md border border-white/10 text-white/80 px-3 py-1 rounded-full">
            {project.year}
          </span>
        </div>

        {/* Floating View Arrow */}
        <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-[#B89568] text-black flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </Link>

      {/* Info Container */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A7A7A7]">
          <MapPin className="w-3.5 h-3.5 text-[#B89568]" />
          <span>{project.location}</span>
        </div>

        <Link
          to={`/projects/${project.id}`}
          onMouseEnter={() => setCursor('hover')}
          onMouseLeave={resetCursor}
          className="block"
        >
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white group-hover:text-[#B89568] transition-colors font-light">
            {project.title}
          </h3>
        </Link>

        <p className="text-xs sm:text-sm text-[#A7A7A7] font-light line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>
      </div>
    </motion.div>
  );
};
