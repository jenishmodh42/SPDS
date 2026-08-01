import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { heroSlidesData } from '../../data/heroSlides';
import { Magnetic } from '../common/Magnetic';
import { useCursor } from '../../context/CursorContext';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { gsap } from '../../utils/gsapConfig';

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setCursor, resetCursor } = useCursor();
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  // Preload Images
  useEffect(() => {
    heroSlidesData.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Automatic slide advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Mouse Parallax effect
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.015;
      const moveY = (clientY - window.innerHeight / 2) * 0.015;

      gsap.to('.hero-parallax-bg', {
        x: moveX,
        y: moveY,
        duration: 1.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const currentSlide = heroSlidesData[currentIndex];

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black flex items-center select-none"
      onMouseEnter={() => setCursor('drag', 'SLIDE')}
      onMouseLeave={resetCursor}
    >
      {/* Background Image Slider with Ken Burns & Fade */}
      <div className="absolute inset-0 hero-parallax-bg scale-105 transition-transform duration-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-0"
          >
            <img
              ref={(el) => { imageRefs.current[currentIndex] = el; }}
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover animate-kenburns"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl space-y-6"
          >
            {/* Category & Location Badge */}
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#B89568]" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#B89568] font-bold">
                {currentSlide.category} — {currentSlide.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] tracking-tight">
              {currentSlide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-light text-[#A7A7A7] max-w-xl">
              {currentSlide.subtitle}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Magnetic strength={0.3}>
                <Link
                  to={`/projects/${currentSlide.projectId}`}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="group relative inline-flex items-center gap-3 bg-[#B89568] hover:bg-[#d2aa78] text-black font-semibold text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-full transition-all duration-300 shadow-xl"
                >
                  <span>{currentSlide.linkText || 'Explore Project'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>

              <Magnetic strength={0.2}>
                <Link
                  to="/projects"
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white hover:text-[#B89568] transition-colors py-4"
                >
                  <span>View All Works</span>
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators Bottom Right */}
      <div className="absolute bottom-12 right-8 sm:right-12 z-20 flex items-center gap-3">
        {heroSlidesData.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              idx === currentIndex ? 'w-10 bg-[#B89568]' : 'w-3 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Floating Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#A7A7A7]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-[#B89568]" />
        </motion.div>
      </div>
    </section>
  );
};
