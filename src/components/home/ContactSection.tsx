import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SectionTitle } from '../common/SectionTitle';
import { companyData } from '../../data/company';
import { useCursor } from '../../context/CursorContext';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { Magnetic } from '../common/Magnetic';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  projectType: z.string().min(1, 'Please select a project category'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast.success(`Thank you, ${data.fullName}! Your inquiry has been dispatched to SPDS Principal Architect Sameer Patel.`);
    reset();
  };

  return (
    <section className="py-28 sm:py-36 bg-[#080808] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Direct Communication Channels & Details */}
          <div className="lg:col-span-5 space-y-8">
            <SectionTitle
              subtitle="Studio Engagement"
              title="Initiate Your Architectural Monograph"
              description="Whether commissioning a private residence, a specialized dental clinic, or a flagship retail space, our principal architects are ready to collaborate."
            />

            <div className="space-y-6 pt-4">
              {/* Phone Channel */}
              <a
                href={`tel:${companyData.contact.phone}`}
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="p-6 bg-[#161616] border border-white/5 hover:border-[#B89568]/40 rounded-xl flex items-center gap-5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[#B89568] border border-white/10 group-hover:bg-[#B89568] group-hover:text-black transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A7A7A7] block">Direct Telephone</span>
                  <span className="font-serif-luxury text-xl text-white group-hover:text-[#B89568] transition-colors">{companyData.contact.phone}</span>
                </div>
              </a>

              {/* WhatsApp Channel */}
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="p-6 bg-[#161616] border border-white/5 hover:border-[#B89568]/40 rounded-xl flex items-center gap-5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[#B89568] border border-white/10 group-hover:bg-[#B89568] group-hover:text-black transition-colors shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A7A7A7] block">Instant WhatsApp Concierge</span>
                  <span className="font-serif-luxury text-xl text-white group-hover:text-[#B89568] transition-colors">Connect on WhatsApp</span>
                </div>
              </a>

              {/* Email Channel */}
              <a
                href={`mailto:${companyData.contact.email}`}
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="p-6 bg-[#161616] border border-white/5 hover:border-[#B89568]/40 rounded-xl flex items-center gap-5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[#B89568] border border-white/10 group-hover:bg-[#B89568] group-hover:text-black transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A7A7A7] block">Email Portfolio Inquiry</span>
                  <span className="font-serif-luxury text-xl text-white group-hover:text-[#B89568] transition-colors">{companyData.contact.email}</span>
                </div>
              </a>

              {/* Address */}
              <div className="p-6 bg-[#161616] border border-white/5 rounded-xl flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[#B89568] border border-white/10 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A7A7A7] block">Studio Address</span>
                  <span className="text-sm font-light text-white">{companyData.contact.address.street}, {companyData.contact.address.city}, {companyData.contact.address.state}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={companyData.social.instagram}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="flex items-center gap-2 text-xs uppercase tracking-widest bg-[#161616] border border-white/10 px-4 py-2.5 rounded-full text-[#A7A7A7] hover:text-white hover:border-[#B89568] transition-colors"
              >
                <FaInstagram className="w-4 h-4 text-[#B89568]" />
                <span>Instagram</span>
              </a>
              <a
                href={companyData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="flex items-center gap-2 text-xs uppercase tracking-widest bg-[#161616] border border-white/10 px-4 py-2.5 rounded-full text-[#A7A7A7] hover:text-white hover:border-[#B89568] transition-colors"
              >
                <FaLinkedin className="w-4 h-4 text-[#B89568]" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-End Contact Form */}
          <div className="lg:col-span-7 bg-[#161616] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl relative">
            <h3 className="font-serif-luxury text-3xl font-light text-white mb-2">Project Inquiry Form</h3>
            <p className="text-xs text-[#A7A7A7] font-light mb-8">Please fill in your project parameters. All inquiries are treated with complete confidentiality.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-[#B89568] block mb-2 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('fullName')}
                  placeholder="e.g. Architect Sameer Patel"
                  className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#B89568] text-white text-sm rounded-lg p-4 focus:outline-none transition-colors"
                />
                {errors.fullName && (
                  <span className="text-xs text-red-400 mt-1 block">{errors.fullName.message}</span>
                )}
              </div>

              {/* Email & Phone Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#B89568] block mb-2 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="client@domain.com"
                    className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#B89568] text-white text-sm rounded-lg p-4 focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#B89568] block mb-2 font-semibold">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#B89568] text-white text-sm rounded-lg p-4 focus:outline-none transition-colors"
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.phone.message}</span>
                  )}
                </div>
              </div>

              {/* Project Type Dropdown */}
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-[#B89568] block mb-2 font-semibold">
                  Project Typology *
                </label>
                <select
                  {...register('projectType')}
                  className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#B89568] text-white text-sm rounded-lg p-4 focus:outline-none transition-colors"
                >
                  <option value="">Select Project Typology</option>
                  <option value="Residential">Residential Villa / Penthouse</option>
                  <option value="Luxury Bedroom">Luxury Bedroom Suite</option>
                  <option value="Healthcare">Healthcare / Dental Clinic</option>
                  <option value="Retail">Retail Store / Flagship</option>
                  <option value="Commercial">Commercial / Pharmacy</option>
                  <option value="Turnkey Architecture">Turnkey Architectural Planning</option>
                </select>
                {errors.projectType && (
                  <span className="text-xs text-red-400 mt-1 block">{errors.projectType.message}</span>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-[#B89568] block mb-2 font-semibold">
                  Project Brief & Scope *
                </label>
                <textarea
                  rows={4}
                  {...register('message')}
                  placeholder="Describe your site location, square footage, design aspirations, or timeline..."
                  className="w-full bg-[#0B0B0B] border border-white/10 focus:border-[#B89568] text-white text-sm rounded-lg p-4 focus:outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <span className="text-xs text-red-400 mt-1 block">{errors.message.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Magnetic strength={0.3}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => setCursor('hover')}
                    onMouseLeave={resetCursor}
                    className="w-full bg-[#B89568] hover:bg-[#d2aa78] text-black font-semibold text-xs uppercase tracking-[0.25em] py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Inquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </Magnetic>
              </div>

            </form>
          </div>

        </div>

        {/* Embedded Interactive Map Container */}
        <div className="mt-20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-96 relative">
          <iframe
            src={companyData.contact.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
            allowFullScreen={false}
            loading="lazy"
            title="SPDS Studio Location"
          />
        </div>

      </div>
    </section>
  );
};
