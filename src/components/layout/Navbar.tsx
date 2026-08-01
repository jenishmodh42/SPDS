import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { Logo } from '../common/Logo';
import { navigationData } from '../../data/navigation';
import { companyData } from '../../data/company';
import { Magnetic } from '../common/Magnetic';
import { useCursor } from '../../context/CursorContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header background transition
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate scroll progress percentage
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledPct);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-white/5 pointer-events-none">
        <div
          className="h-full bg-[#B89568] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
          scrolled ? 'glass-nav py-4 shadow-2xl' : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo left */}
          <Link
            to="/"
            className="z-50"
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
          >
            <Logo />
          </Link>

          {/* Desktop Navigation Links Center */}
          <nav className="hidden md:flex items-center gap-10">
            {navigationData.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className={({ isActive }) =>
                    `relative text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                      isActive ? 'text-[#B89568]' : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-[#B89568]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* CTA Right */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A7A7A7] hover:text-[#B89568] transition-colors"
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
            >
              <Phone className="w-3.5 h-3.5 text-[#B89568]" />
              <span>{companyData.contact.phone}</span>
            </a>

            <Magnetic strength={0.25}>
              <Link
                to="/contact"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="relative group overflow-hidden rounded-full border border-[#B89568]/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:text-black transition-colors duration-500 flex items-center gap-2"
              >
                <span className="absolute inset-0 bg-[#B89568] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">Inquire Studio</span>
                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 p-2 text-white hover:text-[#B89568] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[80] bg-[#0B0B0B]/98 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-12 pt-28 border-b border-white/10"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.4em] text-[#B89568]">Navigation</span>
              {navigationData.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx + 0.2 }}
                >
                  <Link
                    to={item.path}
                    className="font-serif-luxury text-4xl sm:text-5xl text-white hover:text-[#B89568] transition-colors font-light flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 text-[#B89568] transition-all -translate-x-4 group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A7A7A7]">Direct Contact</span>
              <p className="text-sm font-light text-white">{companyData.contact.phone}</p>
              <p className="text-sm font-light text-white/70">{companyData.contact.email}</p>
              <div className="flex items-center gap-6 mt-2">
                <a href={companyData.social.instagram} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-[#B89568] hover:underline">
                  Instagram
                </a>
                <a href={companyData.social.linkedin} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-[#B89568] hover:underline">
                  LinkedIn
                </a>
                <a href={`https://wa.me/${companyData.contact.whatsapp}`} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest text-[#B89568] hover:underline">
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
