import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyData } from '../data/company';
import { HeroSlider } from '../components/hero/HeroSlider';
import { AboutSection } from '../components/home/AboutSection';
import { PortfolioSection } from '../components/home/PortfolioSection';
import { FeaturedProject } from '../components/home/FeaturedProject';
import { ServicesSection } from '../components/home/ServicesSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { StatsSection } from '../components/home/StatsSection';
import { TestimonialsSection } from '../components/home/Testimonials';
import { ContactSection } from '../components/home/ContactSection';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{companyData.meta.title}</title>
        <meta name="description" content={companyData.meta.description} />
        <meta name="keywords" content={companyData.meta.keywords.join(', ')} />
        <meta property="og:title" content={companyData.meta.title} />
        <meta property="og:description" content={companyData.meta.description} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ArchitectureFirm",
            "name": companyData.name,
            "description": companyData.fullDescription,
            "telephone": companyData.contact.phone,
            "email": companyData.contact.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": companyData.contact.address.street,
              "addressLocality": companyData.contact.address.city,
              "addressRegion": companyData.contact.address.state,
              "addressCountry": companyData.contact.address.country,
              "postalCode": companyData.contact.address.zip,
            },
            "founder": {
              "@type": "Person",
              "name": companyData.founder.name,
              "jobTitle": companyData.founder.title,
            },
          })}
        </script>
      </Helmet>

      <main className="w-full bg-[#0B0B0B]">
        <HeroSlider />
        <AboutSection />
        <PortfolioSection />
        <FeaturedProject />
        <ServicesSection />
        <ProcessSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
};
