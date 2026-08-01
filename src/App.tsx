import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { SmoothScrollProvider } from './context/SmoothScrollContext';
import { CursorProvider } from './context/CursorContext';
import { Loader } from './components/common/Loader';
import { Cursor } from './components/common/Cursor';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <SmoothScrollProvider>
        <CursorProvider>
          {/* Preloader & Custom Magnetic Cursor */}
          <Loader />
          <Cursor />
          <ScrollToTop />
          <Toaster position="bottom-right" theme="dark" />

          <div className="flex flex-col min-h-screen bg-[#0B0B0B] text-white">
            <Navbar />

            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetailsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </CursorProvider>
      </SmoothScrollProvider>
    </HelmetProvider>
  );
};

export default App;
