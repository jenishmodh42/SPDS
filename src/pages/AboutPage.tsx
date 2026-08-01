import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionTitle } from '../components/common/SectionTitle';
import { AboutSection } from '../components/home/AboutSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { StatsSection } from '../components/home/StatsSection';

export const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About SPDS | Studio Philosophy & Leadership</title>
        <meta name="description" content="Discover SPDS Architecture & Interior Design Studio, led by Principal Architect Sameer Patel." />
      </Helmet>

      <div className="pt-28 bg-[#0B0B0B] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
          <SectionTitle
            subtitle="Studio Heritage"
            title="The SPDS Architectural Philosophy"
            description="Sculpting spaces at the intersection of biophilic light, structural minimalism, and bespoke luxury materials."
          />
        </div>

        <AboutSection />
        <ProcessSection />
        <StatsSection />
      </div>
    </>
  );
};
