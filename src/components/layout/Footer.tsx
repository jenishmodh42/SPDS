import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { companyData } from '../../data/company';
import { navigationData } from '../../data/navigation';
import { servicesData } from '../../data/services';
import { ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa6';
import { useCursor } from '../../context/CursorContext';
import { toast } from 'sonner';

export const Footer: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for subscribing to SPDS Architectural Journal.');
  };

  return (
    <footer className="bg-[#080808] border-t border-white/10 text-white pt-20 pb-12 relative overflow-hidden">
      {/* Background Subtle Architectural Mesh */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-6">
            <div>
              <Logo size="lg" className="mb-6" />
              <p className="text-[#A7A7A7] font-light text-sm sm:text-base leading-relaxed max-w-sm">
                {companyData.shortDescription}
              </p>
            </div>

            {/* Newsletter */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-3 max-w-sm">
              <label className="text-xs uppercase tracking-[0.25em] text-[#B89568] font-semibold">
                Subscribe to Architectural Monograph
              </label>
              <div className="flex items-center border-b border-white/20 focus-within:border-[#B89568] transition-colors py-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="bg-transparent text-sm text-white placeholder-white/40 focus:outline-none w-full py-1"
                />
                <button
                  type="submit"
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="text-[#B89568] hover:text-white transition-colors p-1"
                  aria-label="Subscribe"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#B89568] font-bold">Navigation</h4>
            <ul className="space-y-3">
              {navigationData.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="text-sm text-[#A7A7A7] hover:text-white transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#B89568] font-bold">Services</h4>
            <ul className="space-y-3">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="text-sm text-[#A7A7A7] hover:text-white transition-colors inline-block py-0.5 line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Direct Studio Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#B89568] font-bold">Studio Headquarters</h4>
            <div className="space-y-3 text-sm text-[#A7A7A7] font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B89568] shrink-0 mt-1" />
                <span>{companyData.contact.address.street}, {companyData.contact.address.city}, {companyData.contact.address.state}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B89568] shrink-0" />
                <a href={`tel:${companyData.contact.phone}`} className="hover:text-white transition-colors">{companyData.contact.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B89568] shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">{companyData.contact.email}</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href={companyData.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#A7A7A7] hover:text-black hover:bg-[#B89568] hover:border-[#B89568] transition-all duration-300"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#A7A7A7] hover:text-black hover:bg-[#B89568] hover:border-[#B89568] transition-all duration-300"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={companyData.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#A7A7A7] hover:text-black hover:bg-[#B89568] hover:border-[#B89568] transition-all duration-300"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A7A7]">
          <p>© {new Date().getFullYear()} {companyData.name} Architectural Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
