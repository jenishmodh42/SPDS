import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { servicesData } from '../../data/services';
import { useCursor } from '../../context/CursorContext';
import { Compass, Layout, Activity, ShoppingBag, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-8 h-8 text-[#B89568]" />,
  Layout: <Layout className="w-8 h-8 text-[#B89568]" />,
  Activity: <Activity className="w-8 h-8 text-[#B89568]" />,
  ShoppingBag: <ShoppingBag className="w-8 h-8 text-[#B89568]" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#B89568]" />,
};

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(servicesData[0].id);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="py-28 sm:py-36 bg-[#0B0B0B] text-white relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <SectionTitle
          subtitle="Specialized Capabilities"
          title="Architectural Disciplines & Interior Architecture"
          description="From private ultra-luxury residences to sterile biophilic dental clinics and flagship retail stores, our studio provides end-to-end design & engineering."
          className="mb-16"
        />

        {/* Services Interactive Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {servicesData.map((service) => {
              const isActive = activeService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className={`w-full text-left p-6 rounded-lg border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#161616] border-[#B89568] shadow-xl'
                      : 'bg-[#111] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-black/40 rounded-lg border border-white/5 shrink-0">
                      {iconMap[service.iconName] || <Compass className="w-8 h-8 text-[#B89568]" />}
                    </div>
                    <div>
                      <h3 className={`font-serif-luxury text-xl sm:text-2xl transition-colors ${
                        isActive ? 'text-[#B89568]' : 'text-white group-hover:text-white/80'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#A7A7A7] font-light line-clamp-1 mt-0.5">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'text-[#B89568] translate-x-1' : 'text-white/30 group-hover:text-white group-hover:translate-x-1'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Service Showcase Panel */}
          <div className="lg:col-span-7">
            {servicesData.map((service) => {
              if (service.id !== activeService) return null;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#161616] border border-white/10 rounded-xl p-8 sm:p-10 space-y-8 relative overflow-hidden"
                >
                  {/* Service Image Header */}
                  <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-xs uppercase tracking-widest text-[#B89568] font-bold block mb-1">
                        Service Scope
                      </span>
                      <h4 className="font-serif-luxury text-2xl text-white">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-[#A7A7A7] text-sm sm:text-base font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Deliverable List */}
                  <div className="space-y-3 border-t border-white/10 pt-6">
                    <h5 className="text-xs uppercase tracking-[0.25em] text-[#B89568] font-semibold">
                      Key Engineering Deliverables
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-white/90 font-light">
                          <Check className="w-4 h-4 text-[#B89568] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inquire CTA */}
                  <div className="pt-4 flex items-center justify-between">
                    <Link
                      to="/contact"
                      onMouseEnter={() => setCursor('hover')}
                      onMouseLeave={resetCursor}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] bg-[#B89568] hover:bg-[#d2aa78] text-black font-semibold px-6 py-3 rounded-full transition-colors"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
