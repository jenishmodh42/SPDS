import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactSection } from '../components/home/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Studio | SPDS Architecture</title>
        <meta name="description" content="Inquire with SPDS Principal Architect Sameer Patel for luxury residential, healthcare, and commercial projects." />
      </Helmet>

      <div className="pt-24 bg-[#0B0B0B] text-white">
        <ContactSection />
      </div>
    </>
  );
};
