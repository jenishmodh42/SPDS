import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionTitle } from '../components/common/SectionTitle';
import { ServicesSection } from '../components/home/ServicesSection';
import { ProcessSection } from '../components/home/ProcessSection';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services & Capabilities | SPDS Architecture</title>
        <meta name="description" content="Explore SPDS architectural planning, luxury interior design, healthcare & dental clinic engineering, and turnkey project execution." />
      </Helmet>

      <div className="pt-28 bg-[#0B0B0B] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
          <SectionTitle
            subtitle="Studio Services"
            title="Architectural & Interior Design Capabilities"
            description="End-to-end design, structural engineering, HEPA cleanroom healthcare compliance, and turnkey execution."
          />
        </div>

        <ServicesSection />
        <ProcessSection />
      </div>
    </>
  );
};
